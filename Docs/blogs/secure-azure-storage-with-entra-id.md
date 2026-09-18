---
layout: post
title: "A Small Azure Storage Lab With Real Security Lessons"
date: 2026-09-18
author: s!rr0nn3y
categories:
  - azure
  - storage
  - identity
  - cloudsecurity
associated_lab_title: Data Security
associated_lab_day: 3
---

A team needs a small Azure Storage account for IT training. They want to prototype storage scenarios, upload a few files, and let new engineers practise without paying for a production-grade disaster recovery design.

That sounds simple. It is also a useful security exercise, because the cheapest configuration is not automatically the safest configuration. The right design keeps the cost low while removing the credentials and defaults that create avoidable risk.

This is the thinking behind [SecureCloudX Module 3, Lab 01: Basic Azure Storage Implementation](/module3/task/phase1).

## The scenario

The training content is disposable. It does not need regional recovery, long-term retention, or a complex data platform. The requirements are deliberately modest:

- Use Azure Storage for experimentation and training
- Keep the account inexpensive and easy to delete
- Require encrypted connections
- Avoid putting storage keys into code, notebooks, or environment files
- Let an authorized learner upload a file
- Keep the container private and prove that anonymous access does not work

The important design decision is to separate **availability requirements** from **access requirements**. Disposable data can use low-cost redundancy. That does not mean it should use weak authentication.

## Start with the smallest useful platform boundary

The lab begins with a resource group and a Standard general-purpose storage account. The resource group gives the exercise a clean lifecycle: everything can be inspected together and deleted together when training ends.

For this scenario, **locally redundant storage (LRS)** is appropriate. LRS maintains multiple copies within one primary datacenter and is the lowest-cost redundancy option. It is not a disaster recovery strategy. If the data matters beyond the training session, the design should move to ZRS or geo-redundancy.

That distinction is worth making explicit in every architecture review:

> Choose redundancy based on the value and recovery requirement of the data, not because a higher tier sounds more secure.

LRS is a reasonable choice for disposable lab content. It would be a poor choice for customer records, financial data, or anything the business must recover after a regional failure.

## The security baseline

The storage account is then configured with a few controls that cost little but close common attack paths.

### Encrypted transport only

**Secure transfer required** is enabled so clients must use HTTPS. The minimum TLS version is set to **TLS 1.2**, preventing older protocol versions from being used for storage connections.

These settings protect data while it moves between a client and Azure Storage. They do not decide whether the client is authorized. Encryption and authorization solve different problems, and both are necessary.

### Storage account keys are disabled

Storage account keys are powerful shared secrets. Anyone holding one can often read, write, delete, and manage data across the account. A key also has poor attribution: when many people share it, audit records cannot tell you which person performed an operation.

The lab disables **Allow storage account key access** before testing the data path. This makes the next step meaningful: access must now come from Microsoft Entra ID and Azure RBAC, not from a hidden key the portal happens to have available.

This is the shift from:

```text
application -> shared secret -> storage
```

to:

```text
user or workload -> Entra ID token -> RBAC decision -> storage
```

The second model is easier to audit, easier to revoke, and much safer to automate.

## Entra ID and RBAC: the authorization step that makes the design real

Disabling keys without assigning a data-plane role creates a locked account. The lab therefore grants the learner the **Storage Blob Data Contributor** role at the storage account scope.

The role assignment uses:

- **Access control (IAM)
- **Add role assignment**
- **Storage Blob Data Contributor**
- **User, group, or service principal**
- The learner's Microsoft Entra account

The role is deliberately a data-plane role. Being able to see a storage account in the Azure portal is not the same as being allowed to upload or download blobs. Azure distinguishes management-plane permissions from data-plane permissions, and production designs should do the same.

For a real application, the principal would normally be a managed identity or service principal rather than a human user. The role should be assigned at the narrowest scope that satisfies the use case: container scope where practical, storage-account scope only when the workload genuinely needs it.

RBAC changes can take a short time to propagate. If an upload fails immediately after the assignment, wait, refresh the portal, and retry before changing the design.

## Prove the private data path

The lab creates a private container named `training-files` and uploads a test file through the authorized portal session.

The test has two parts:

1. The authenticated learner can upload the file.
2. Copying the blob URL into a browser without authorization does not expose the file.

That is a small but valuable end-to-end test. It demonstrates that:

- The container does not permit anonymous reads
- The learner's Entra identity is being evaluated
- The RBAC role grants the required blob operation
- The account is not relying on a storage key behind the scenes

A URL is not an authorization decision. A private blob URL can be shared without making the blob public; the request still needs a valid authorization mechanism.

## What the attacker wants

An attacker rarely needs to break Azure Storage itself. They look for credentials and permissive configuration around it:

- A storage key committed to Git
- A key copied into a `.env` file or CI variable
- A SAS token pasted into a ticket or log
- A public container created for a quick demo
- An over-privileged identity that can enumerate every container

With a leaked storage key, an attacker can often operate without an expiry and without useful user attribution. Rotating the key eventually removes access, but it can also break every application using that key. That operational pain is why teams delay rotation and why eliminating keys is stronger than promising to rotate them later.

The lab makes the safer path concrete: use Entra ID and RBAC, keep the container private, and test the actual authorization boundary.

## What this looks like in software

The portal is useful for learning the control plane. Production teams express the same design in Infrastructure as Code and application code.

A simplified Azure CLI account configuration looks like this:

```bash
az storage account create \
  --name <storage-account> \
  --resource-group <resource-group> \
  --location <region> \
  --sku Standard_LRS \
  --kind StorageV2 \
  --https-only true \
  --min-tls-version TLS1_2 \
  --allow-blob-public-access false \
  --allow-shared-key-access false
```

Create the private container without a public access level:

```bash
az storage container create \
  --account-name <storage-account> \
  --name training-files \
  --auth-mode login \
  --public-access off
```

Assign the data-plane role to a user, group, or workload identity:

```bash
STORAGE_ID=$(az storage account show \
  --name <storage-account> \
  --resource-group <resource-group> \
  --query id --output tsv)

az role assignment create \
  --assignee <principal-object-id-or-upn> \
  --role "Storage Blob Data Contributor" \
  --scope "$STORAGE_ID"
```

The `--auth-mode login` flag matters. It makes the CLI use the signed-in Entra identity instead of silently falling back to a storage key.

Application code should use the Azure SDK with `DefaultAzureCredential`, which supports local developer login and managed identity in Azure without requiring a static account key:

```python
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient

account_url = "https://<storage-account>.blob.core.windows.net"
credential = DefaultAzureCredential()
blob_service = BlobServiceClient(account_url, credential=credential)

container = blob_service.get_container_client("training-files")
with open("training.txt", "rb") as file_data:
    container.upload_blob("training.txt", file_data, overwrite=False)
```

In production, replace the broad Contributor role with the least-privilege role the workload needs. A read-only service should receive `Storage Blob Data Reader`, not Contributor.

## What enterprises keep and what they change

The lab intentionally uses a small, disposable configuration. An organization building a real internal platform would normally add:

- Managed identities for applications and automation
- Container-scoped RBAC where possible
- Private Endpoints and private DNS for sensitive storage
- Storage firewall rules or a secured virtual network path
- Diagnostic settings sent to Log Analytics or a SIEM
- Azure Policy to deny public blob access and enforce TLS
- Defender for Storage where malware and anomalous access detection justify the cost
- A recovery design such as ZRS, GRS, soft delete, versioning, and tested restore procedures
- Separate storage accounts for public, internal, and confidential data

The principle is not to turn every training account into an expensive enterprise platform. The principle is to make the security boundary intentional, then add stronger controls when the data classification and business impact require them.

## The final configuration

At the end of Lab 01, the result is deliberately ordinary:

- Standard LRS storage for low-value training data
- HTTPS-only connections with TLS 1.2
- Storage account key access disabled
- Entra ID and RBAC for blob authorization
- A private `training-files` container
- A successful authorized upload
- An anonymous URL test that fails as expected

That is a good baseline because it is small enough to understand and strong enough to avoid the most common credential and exposure mistakes.

The lesson is bigger than this one storage account: **low cost does not require low security**. Start with the right identity boundary, scope access to the data operation, and verify the full path with a real test instead of trusting a portal setting.

Try the complete exercise in [Module 3, Lab 01: Basic Azure Storage Implementation](/module3/task/phase1).
