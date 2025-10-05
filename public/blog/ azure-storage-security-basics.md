# Azure Storage Security Basics

The Azure Storage platform is Microsoft's cloud storage solution for modern data storage scenarios. Azure Storage offers highly available, massively scalable, durable, and secure storage for a variety of data objects in the cloud.

All data written to an Azure storage account is encrypted by the service. Azure Storage provides you with fine-grained control over who has access to your data.

**Secure access to storage accounts**

Every request to Azure Storage must be authorized. Azure Storage supports the following authorization methods:

- Microsoft Entra integration for blob, file, queue, and table data. Azure Storage supports authentication and authorization with Microsoft Entra ID for the Blob, File, Table, and Queue services via Azure role-based access control (Azure RBAC). Authorizing requests with Microsoft Entra ID is recommended for superior security and ease of use.
- Identity-based authentication over SMB for Azure Files. Azure Files supports identity-based authorization over SMB (Server Message Block) through either on-premises Microsoft Entra Domain Services, or Microsoft Entra Kerberos (hybrid user accounts only).
- Authorization with Shared Key. The Azure Storage Blob, Files, Queue, and Table services support authorization with Shared Key. A client using Shared Key authorization passes a header with every request that is signed using the storage account access key. pended to the URI for a storage resource. The security token encapsulates constraints such as permissions and the interval of access.

The following table describes the options that Azure Storage offers for authorizing access to resources:

![azure-storage-security-basics](/public/images/azure-storage-security-basics.png)
