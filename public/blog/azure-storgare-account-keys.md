# Azure storage account access keys

When you create a storage account, Azure generates two 512-bit storage account access keys for that account. These keys can be used to authorize access to data in your storage account via Shared Key authorization, or via SAS tokens that are signed with the shared key.

> Storage account access keys provide full access to the configuration of a storage account, as well as the data.

Microsoft recommends that you use Azure Key Vault to manage your access keys, and that you regularly rotate and regenerate your keys. Using Azure Key Vault makes it easy to rotate your keys without interruption to your applications. You can also manually rotate your keys.

## **Protect your access keys**

> Storage account access keys provide full access to the configuration of a storage account, as well as the data.

- Always be careful to protect your access keys. Use Azure Key Vault to manage and rotate your keys securely.
- **Access to the shared key grants a user full access to a storage account’s configuration and its data.**
- Access to shared keys should be carefully limited and monitored.
- Use shared access signature (SAS) tokens with limited scope of access in scenarios where Microsoft Entra ID based authorization can't be used.
- Avoid hard-coding access keys or saving them anywhere in plain text that is accessible to others. Rotate your keys if you believe they might have been compromised.

Microsoft recommends using Microsoft Entra ID to authorize requests against blob, queue, and table data if possible, rather than using the account keys (Shared Key authorization).

You can use either of the two keys to access Azure Storage, but in general it's a good practice to use the first key, and reserve the use of the second key for when you are rotating keys.

![azure-storage-account-keys](/public/images/azure-storage-account-keys.png)
