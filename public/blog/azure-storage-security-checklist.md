---
layout: post
title: "Azure Storage Account Security Checklist"
date: 2025-07-08
author: s!rr0nn3y
categories:
  - azure
  - storage
  - security
associated_lab_title: Data Security
associated_lab_day: 3
---
Securing your data in Azure is critical for protecting sensitive information and maintaining compliance. This checklist provides practical steps and best practices to help you safeguard your Azure Storage Accounts against common threats and misconfigurations.

![Defense-in-depth](/images/security-in-depth.png)

## 1. Identity & Access Management (IAM)

- Use Azure RBAC (Role-Based Access Control) to manage access — avoid using account keys
- Assign least privilege roles (e.g., Storage Blob Data Reader, Contributor) only as needed
- Avoid giving Reader/Contributor roles at subscription level unnecessarily
- Use Azure AD authentication for users and applications
- Ensure shared access signatures (SAS) are time-bound and scoped (prefer user delegation SAS when possible)
- Rotate access keys periodically if used
- Disable public access to blobs unless absolutely necessary

## 2. Network Security

- Enable firewall rules: Allow traffic only from trusted IP addresses or VNets.
- Disable public network access if private access is available (under "Networking").
- Use Private Endpoints to access the storage over a private IP within your VNet.
- Enable Microsoft Defender for Storage for threat protection.

## 3. Data Encryption

- Ensure encryption at rest is enabled (Azure does this by default).
- Use Customer-Managed Keys (CMK) if you require full control over encryption keys.
- Enable encryption in transit by using HTTPS only (force secure transfer).
- Verify `Secure transfer required` is enabled in storage account settings.

## 4. Access Management & Data Protection

- Use Immutable Blob Storage (WORM) for regulatory compliance (e.g., legal hold, time-based retention).
- Enable Soft Delete for blobs, file shares, containers, and tables.
- Enable Blob versioning to protect against accidental overwrites or deletions.
- Enable Change feed for auditing and recovery.
- Use Access tiers (Hot, Cool, Archive) to manage data access and cost securely.

## 5. Monitoring & Logging

- Enable Azure Monitor metrics and diagnostic logs for the storage account.
- Stream logs to Log Analytics, Event Hub, or Storage for auditing.
- Set up Alerts for anomalous behavior (e.g., large number of read/write operations).
- Regularly review logs for unauthorized access or failed login attempts.

## 6. Governance & Compliance

- Tag storage accounts with owner, purpose, and environment metadata.
- Use Azure Policy to enforce security configurations (e.g., deny public blob access).
- Regularly review access (users, service principals, managed identities).
- Validate compliance with your organization's data residency and retention policies.

## 7. Testing & Review

- Run penetration testing (within Azure's guidelines) or security assessments.
- Use Microsoft Defender for Cloud recommendations to identify misconfigurations.
- Periodically review and update policies, keys, and configurations.

And with all that, you can maintain the highest form of security for your azure storage accounts.
