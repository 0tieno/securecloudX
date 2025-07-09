// Azure Functions v4 entry point
const { app } = require('@azure/functions');
const { getContainer } = require('./cosmosConfig');

// Track blog post view function
app.http('trackView', {
    methods: ['POST'],
    authLevel: 'anonymous',
    route: 'track-view',
    handler: async (request, context) => {
        context.log('Processing track view request');

        try {
            // Parse request body
            const body = await request.json();
            const { blogId, sessionId } = body;

            if (!blogId) {
                return {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({ error: 'blogId is required' })
                };
            }

            const container = getContainer();
            
            // Create view record
            const viewRecord = {
                id: `${blogId}-${Date.now()}-${sessionId || 'anonymous'}`,
                blogId,
                sessionId: sessionId || 'anonymous',
                timestamp: new Date().toISOString(),
                type: 'view'
            };

            // Save to Cosmos DB
            await container.items.create(viewRecord);

            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ 
                    success: true, 
                    viewId: viewRecord.id,
                    timestamp: viewRecord.timestamp 
                })
            };

        } catch (error) {
            context.log('Error tracking view:', error);
            return {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ 
                    error: 'Internal server error',
                    message: error.message 
                })
            };
        }
    }
});

// Get blog post views function
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

            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(result)
            };

        } catch (error) {
            context.log('Error getting views:', error);
            return {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ 
                    error: 'Internal server error',
                    message: error.message 
                })
            };
        }
    }
});
