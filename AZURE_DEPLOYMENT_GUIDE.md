# Azure Deployment Guide for SecureCloudX Blog View Tracking

This guide will walk you through deploying the cloud-based view tracking system for your SecureCloudX blog application.

## Prerequisites

1. **Azure CLI** - Install from https://docs.microsoft.com/en-us/cli/azure/install-azure-cli
2. **Azure Developer CLI (azd)** - Install from https://docs.microsoft.com/en-us/azure/developer/azure-developer-cli/install-azd
3. **Node.js 18+** - For Azure Functions
4. **Azure Subscription** - With permissions to create resources

## Step 1: Install Dependencies

### Azure Functions Dependencies

```bash
cd azure-functions
npm install
```

## Step 2: Azure Portal Setup

### 2.1 Login to Azure CLI

```bash
az login
azd auth login
```

### 2.2 Initialize AZD Project

```bash
# From the root directory of your project
azd init
```

When prompted:

- Environment name: `securecloudx-dev` (or your preferred name)
- Select your Azure subscription
- Choose a region (e.g., "East US 2")

## Step 3: Deploy Infrastructure and Functions

### 3.1 Deploy with AZD

```bash
azd up
```

This command will:

- Provision all Azure resources (Cosmos DB, Function App, Storage, App Insights)
- Deploy the Azure Functions code
- Configure authentication and permissions

### 3.2 Get the Function App URL

After deployment, note the Function App URL from the output. It will look like:

```
https://scx-func-dev-[uniqueid].azurewebsites.net
```

## Step 4: Configure Frontend Environment

### 4.1 Create .env file

Create a `.env` file in your project root:

```bash
cp .env.example .env
```

### 4.2 Update .env file

Edit the `.env` file and add your Function App URL:

```
VITE_AZURE_FUNCTIONS_URL=https://your-function-app-name.azurewebsites.net
```

## Step 5: Test the System

### 5.1 Start your development server

```bash
npm run dev
```

### 5.2 Test view tracking

1. Navigate to any blog post
2. Check the browser's Network tab to see API calls to your Azure Functions
3. View counts should appear in blog posts and the blog list

## Step 6: Verify in Azure Portal

### 6.1 Check Function App

1. Go to Azure Portal (https://portal.azure.com)
2. Find your Function App (name starts with `scx-func-`)
3. Go to Functions → Check that `trackView` and `getViews` functions are deployed
4. Check Logs to see function executions

### 6.2 Check Cosmos DB

1. Find your Cosmos DB account (name starts with `scx-cosmos-`)
2. Go to Data Explorer
3. Expand `securecloudx` database → `blog-views` container
4. You should see view records after testing

### 6.3 Check Application Insights

1. Find your Application Insights resource (name starts with `scx-ai-`)
2. Go to Logs and run queries to see telemetry data

## Step 7: Monitor and Maintain

### 7.1 View Function Logs

```bash
azd logs --service api
```

### 7.2 Redeploy Functions (if needed)

```bash
azd deploy --service api
```

### 7.3 Redeploy Infrastructure (if needed)

```bash
azd provision
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: The Bicep template configures CORS for localhost and Azure domains. Add your domain if deploying to a custom domain.

2. **Authentication Errors**: The system uses Managed Identity. Ensure the Function App has proper permissions to Cosmos DB.

3. **Function Not Found**: Wait 2-3 minutes after deployment for functions to be available.

4. **Environment Variables**: Check that all required environment variables are set in the Function App configuration.

### Check Function App Configuration

In Azure Portal → Function App → Configuration, verify these settings:

- `COSMOS_DB_ENDPOINT`
- `COSMOS_DB_DATABASE_NAME`
- `COSMOS_DB_CONTAINER_NAME`
- `AZURE_CLIENT_ID`

## Cost Optimization

The configuration uses:

- **Cosmos DB Serverless**: Pay per request/storage
- **Function App Consumption Plan**: Pay per execution
- **Storage Account Standard LRS**: Minimal cost
- **Application Insights**: Free tier available

Expected monthly cost for moderate usage: **$5-20/month**

## Security Features

✅ **Managed Identity**: No credentials in code
✅ **HTTPS Only**: All communications encrypted
✅ **CORS Protection**: Limited to specific domains
✅ **Minimal Permissions**: Function only has access to Cosmos DB
✅ **Private Keys**: No hardcoded secrets

## Next Steps

After successful deployment:

1. **Production Domain**: Update CORS settings for your production domain
2. **Monitoring**: Set up alerts in Application Insights
3. **Analytics**: Query Cosmos DB for detailed view analytics
4. **Scaling**: Monitor usage and adjust Cosmos DB and Function App scaling if needed

## Support

If you encounter issues:

1. Check Azure Portal logs
2. Use `azd logs` command
3. Verify all environment variables
4. Check network connectivity and CORS settings
