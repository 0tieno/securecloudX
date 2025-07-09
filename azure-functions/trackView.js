const { app } = require('@azure/functions');
const { getContainer } = require('./cosmosConfig');

// Track blog post view
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
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({ error: 'blogId is required' })
                };
            }

            const container = getContainer();
            const timestamp = new Date().toISOString();
            const viewId = `${blogId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

            // Create view record
            const viewRecord = {
                id: viewId,
                blogId: blogId,
                sessionId: sessionId || 'anonymous',
                timestamp: timestamp,
                userAgent: request.headers.get('user-agent') || 'unknown',
                ipAddress: request.headers.get('x-forwarded-for') || 
                          request.headers.get('x-client-ip') || 
                          'unknown',
                type: 'view'
            };

            // Insert into Cosmos DB
            await container.items.create(viewRecord);

            context.log(`View tracked for blog ${blogId}`);

            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify({ 
                    success: true, 
                    viewId: viewId,
                    timestamp: timestamp
                })
            };

        } catch (error) {
            context.log.error('Error tracking view:', error);
            
            return {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify({ 
                    error: 'Failed to track view',
                    details: error.message
                })
            };
        }
    }
});
