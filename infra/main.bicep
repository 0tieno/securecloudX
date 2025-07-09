// Main template for SecureCloudX view tracking infrastructure
targetScope = 'resourceGroup'

@description('The name of the environment (dev, staging, prod)')
param environmentName string = 'dev'

@description('The location for all resources')
param location string = resourceGroup().location

@description('Cosmos DB account name')
param cosmosAccountName string = 'scx-cosmos-${environmentName}-${uniqueString(subscription().id, resourceGroup().id, environmentName)}'

@description('Function app name')
param functionAppName string = 'scx-func-${environmentName}-${uniqueString(subscription().id, resourceGroup().id, environmentName)}'

@description('Storage account name for Function App')
param storageAccountName string = 'scxfunc${uniqueString(subscription().id, resourceGroup().id, environmentName)}'

@description('Application Insights name')
param appInsightsName string = 'scx-ai-${environmentName}-${uniqueString(subscription().id, resourceGroup().id, environmentName)}'

// Create Cosmos DB account with SQL API
resource cosmosAccount 'Microsoft.DocumentDB/databaseAccounts@2024-11-15' = {
  name: cosmosAccountName
  location: location
  tags: {
    'azd-env-name': environmentName
    project: 'securecloudx'
    component: 'blog-view-tracking'
  }
  kind: 'GlobalDocumentDB'
  properties: {
    databaseAccountOfferType: 'Standard'
    locations: [
      {
        locationName: location
        failoverPriority: 0
        isZoneRedundant: false
      }
    ]
    consistencyPolicy: {
      defaultConsistencyLevel: 'Session'
    }
    capabilities: [
      {
        name: 'EnableServerless'
      }
    ]
    enableFreeTier: true
    disableKeyBasedMetadataWriteAccess: true
    disableLocalAuth: false
    publicNetworkAccess: 'Enabled'
    backupPolicy: {
      type: 'Periodic'
      periodicModeProperties: {
        backupIntervalInMinutes: 1440
        backupRetentionIntervalInHours: 720
        backupStorageRedundancy: 'Local'
      }
    }
  }
}

// Create Cosmos DB database
resource cosmosDatabase 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2024-11-15' = {
  parent: cosmosAccount
  name: 'securecloudx'
  properties: {
    resource: {
      id: 'securecloudx'
    }
  }
}

// Create Cosmos DB container for blog views
resource cosmosContainer 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2024-11-15' = {
  parent: cosmosDatabase
  name: 'blog-views'
  properties: {
    resource: {
      id: 'blog-views'
      partitionKey: {
        paths: ['/blogId']
        kind: 'Hash'
      }
      indexingPolicy: {
        indexingMode: 'consistent'
        includedPaths: [
          {
            path: '/*'
          }
        ]
        excludedPaths: [
          {
            path: '/"_etag"/?'
          }
        ]
      }
    }
  }
}

// Create storage account for Function App
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: location
  tags: {
    'azd-env-name': environmentName
    project: 'securecloudx'
    component: 'function-storage'
  }
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    supportsHttpsTrafficOnly: true
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    networkAcls: {
      bypass: 'AzureServices'
      defaultAction: 'Allow'
    }
  }
}

// Create Application Insights
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightsName
  location: location
  tags: {
    'azd-env-name': environmentName
    project: 'securecloudx'
    component: 'monitoring'
  }
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Request_Source: 'rest'
  }
}

// Create App Service Plan for Function App (Consumption)
resource appServicePlan 'Microsoft.Web/serverfarms@2024-04-01' = {
  name: '${functionAppName}-plan'
  location: location
  tags: {
    'azd-env-name': environmentName
    project: 'securecloudx'
    component: 'compute'
  }
  sku: {
    name: 'Y1'
    tier: 'Dynamic'
  }
  properties: {
    reserved: false
  }
}

// Create user-assigned managed identity
resource userManagedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: '${functionAppName}-identity'
  location: location
  tags: {
    'azd-env-name': environmentName
    project: 'securecloudx'
    component: 'identity'
  }
}

// Assign Cosmos DB Data Contributor role to managed identity
resource cosmosRoleAssignment 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2024-11-15' = {
  parent: cosmosAccount
  name: guid(cosmosAccount.id, userManagedIdentity.id, 'CosmosDBDataContributor')
  properties: {
    roleDefinitionId: '${cosmosAccount.id}/sqlRoleDefinitions/00000000-0000-0000-0000-000000000002'
    principalId: userManagedIdentity.properties.principalId
    scope: cosmosAccount.id
  }
}

// Assign Storage Blob Data Owner role to managed identity
resource storageBlobDataOwnerRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storageAccount.id, userManagedIdentity.id, 'StorageBlobDataOwner')
  scope: storageAccount
  properties: {
    roleDefinitionId: subscriptionResourceId(
      'Microsoft.Authorization/roleDefinitions',
      'b7e6dc6d-f1e8-4753-8033-0f276bb0955b'
    )
    principalId: userManagedIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

// Assign Storage Blob Data Contributor role to managed identity
resource storageBlobDataContributorRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storageAccount.id, userManagedIdentity.id, 'StorageBlobDataContributor')
  scope: storageAccount
  properties: {
    roleDefinitionId: subscriptionResourceId(
      'Microsoft.Authorization/roleDefinitions',
      'ba92f5b4-2d11-453d-a403-e96b0029c9fe'
    )
    principalId: userManagedIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

// Assign Storage Queue Data Contributor role to managed identity
resource storageQueueDataContributorRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storageAccount.id, userManagedIdentity.id, 'StorageQueueDataContributor')
  scope: storageAccount
  properties: {
    roleDefinitionId: subscriptionResourceId(
      'Microsoft.Authorization/roleDefinitions',
      '974c5e8b-45b9-4653-ba55-5f855dd0fb88'
    )
    principalId: userManagedIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

// Assign Storage Table Data Contributor role to managed identity
resource storageTableDataContributorRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storageAccount.id, userManagedIdentity.id, 'StorageTableDataContributor')
  scope: storageAccount
  properties: {
    roleDefinitionId: subscriptionResourceId(
      'Microsoft.Authorization/roleDefinitions',
      '0a9a7e1f-b9d0-4cc4-a60d-0319b160aaa3'
    )
    principalId: userManagedIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

// Assign Monitoring Metrics Publisher role for Application Insights
resource monitoringRoleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(appInsights.id, userManagedIdentity.id, 'MonitoringMetricsPublisher')
  scope: appInsights
  properties: {
    roleDefinitionId: subscriptionResourceId(
      'Microsoft.Authorization/roleDefinitions',
      '3913510d-42f4-4e42-8a64-420c390055eb'
    )
    principalId: userManagedIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

// Create Function App
resource functionApp 'Microsoft.Web/sites@2024-04-01' = {
  name: functionAppName
  location: location
  tags: {
    'azd-env-name': environmentName
    'azd-service-name': 'api'
    project: 'securecloudx'
    component: 'api'
  }
  kind: 'functionapp'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${userManagedIdentity.id}': {}
    }
  }
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      appSettings: [
        {
          name: 'AzureWebJobsStorage'
          value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccount.name};EndpointSuffix=${environment().suffixes.storage};AccountKey=${storageAccount.listKeys().keys[0].value}'
        }
        {
          name: 'WEBSITE_CONTENTAZUREFILECONNECTIONSTRING'
          value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccount.name};EndpointSuffix=${environment().suffixes.storage};AccountKey=${storageAccount.listKeys().keys[0].value}'
        }
        {
          name: 'WEBSITE_CONTENTSHARE'
          value: toLower(functionAppName)
        }
        {
          name: 'FUNCTIONS_EXTENSION_VERSION'
          value: '~4'
        }
        {
          name: 'FUNCTIONS_WORKER_RUNTIME'
          value: 'node'
        }
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~18'
        }
        {
          name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
          value: appInsights.properties.InstrumentationKey
        }
        {
          name: 'APPLICATIONINSIGHTS_CONNECTION_STRING'
          value: appInsights.properties.ConnectionString
        }
        {
          name: 'COSMOS_DB_ENDPOINT'
          value: cosmosAccount.properties.documentEndpoint
        }
        {
          name: 'COSMOS_DB_DATABASE_NAME'
          value: cosmosDatabase.name
        }
        {
          name: 'COSMOS_DB_CONTAINER_NAME'
          value: cosmosContainer.name
        }
        {
          name: 'AZURE_CLIENT_ID'
          value: userManagedIdentity.properties.clientId
        }
      ]
      cors: {
        allowedOrigins: [
          'https://localhost:5173'
          'https://*.azurestaticapps.net'
          'https://*.azurewebsites.net'
        ]
        supportCredentials: false
      }
      use32BitWorkerProcess: false
      ftpsState: 'Disabled'
      minTlsVersion: '1.2'
    }
    clientAffinityEnabled: false
  }
  dependsOn: [
    cosmosRoleAssignment
    storageBlobDataOwnerRole
    storageBlobDataContributorRole
    storageQueueDataContributorRole
    storageTableDataContributorRole
    monitoringRoleAssignment
  ]
}

// Output values for use in deployment and frontend configuration
output functionAppUrl string = 'https://${functionApp.properties.defaultHostName}'
output cosmosAccountName string = cosmosAccount.name
output functionAppName string = functionApp.name
output resourceGroupName string = resourceGroup().name
output RESOURCE_GROUP_ID string = resourceGroup().id
