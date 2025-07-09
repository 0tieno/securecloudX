const { CosmosClient } = require('@azure/cosmos');
const { DefaultAzureCredential } = require('@azure/identity');

// Initialize Cosmos DB client with Managed Identity or connection string
function getCosmosClient() {
    const endpoint = process.env.COSMOS_DB_ENDPOINT;
    const connectionString = process.env.COSMOS_DB_CONNECTION_STRING;
    
    if (endpoint) {
        // Use Managed Identity authentication (recommended for production)
        const credential = new DefaultAzureCredential();
        return new CosmosClient({ 
            endpoint, 
            aadCredentials: credential 
        });
    } else if (connectionString) {
        // Fallback to connection string for local development
        return new CosmosClient(connectionString);
    } else {
        throw new Error('Either COSMOS_DB_ENDPOINT or COSMOS_DB_CONNECTION_STRING environment variable is required');
    }
}

function getDatabase() {
    const databaseName = process.env.COSMOS_DB_DATABASE_NAME || 'securecloudx';
    const client = getCosmosClient();
    return client.database(databaseName);
}

function getContainer() {
    const containerName = process.env.COSMOS_DB_CONTAINER_NAME || 'blog-views';
    const database = getDatabase();
    return database.container(containerName);
}

module.exports = {
    getCosmosClient,
    getDatabase,
    getContainer
};
