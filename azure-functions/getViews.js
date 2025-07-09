const { app } = require('@azure/functions');
const { getContainer } = require('./cosmosConfig');

// Get blog post views
app.http('getViews', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'views/{blogId?}',
    handler: async (request, context) => {
        context.log('Processing get views request');

        try {
            const blogId = request.params.blogId;
            const container = getContainer();

            let query;
            let parameters = [];

            if (blogId) {
                // Get views for specific blog post
                query = 'SELECT COUNT(1) as viewCount FROM c WHERE c.blogId = @blogId AND c.type = "view"';
                parameters = [{ name: '@blogId', value: blogId }];
            } else {
                // Get views for all blog posts
                query = 'SELECT c.blogId, COUNT(1) as viewCount FROM c WHERE c.type = "view" GROUP BY c.blogId';
            }

            const { resources } = await container.items.query({
                query: query,
                parameters: parameters
            }).fetchAll();

            let result;
            if (blogId) {
                result = { 
                    blogId: blogId, 
                    viewCount: resources.length > 0 ? resources[0].viewCount : 0 
                };
            } else {
                result = resources.reduce((acc, item) => {
                    acc[item.blogId] = item.viewCount;
                    return acc;
                }, {});
            }

            context.log(`Views retrieved: ${JSON.stringify(result)}`);

            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify(result)
            };

        } catch (error) {
            context.log.error('Error getting views:', error);
            
            return {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify({ 
                    error: 'Failed to get views',
                    details: error.message
                })
            };
        }
    }
});
