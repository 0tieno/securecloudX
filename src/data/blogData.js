export const blogPosts = [
  {
    id: "understanding-network-security-cloud",
    title: "Understanding Network Security in the Cloud",
    date: "2025-06-23",
    url: "https://securecloudwithronney.hashnode.dev/understanding-network-security-in-the-cloud",
    isExternal: true,
    associatedLab: { day: 2, title: "Network Security & Perimeter Defense" }
  },
  {
    id: "github-secure-containerization",
    title: "GitHub: Secure Containerization + CI/CD",
    date: "2025-03-08",
    url: "https://github.com/CSK-MENTORSHIP-GROUP/secure-containerization.git",
    isExternal: true,
    associatedLab: { day: 4, title: "Application Security" }
  },
  {
    id: "slides-secure-containerization",
    title: "Slides: Secure Containerization + CI/CD",
    date: "2025-03-07",
    url: "https://scintillating-chaja-595787.netlify.app/1",
    isExternal: true,
    associatedLab: { day: 4, title: "Application Security" }
  },
  {
    id: "deploying-azure-container-apps",
    title: "Deploying to Azure Container Apps",
    date: "2025-03-06",
    url: "https://securecloudwithronney.hashnode.dev/deploying-to-azure-container-apps",
    isExternal: true
  },
  {
    id: "container-security-azure",
    title: "Container Security: Detecting & Fixing Vulnerabilities",
    date: "2025-02-17",
    url: "https://securecloudwithronney.hashnode.dev/container-security-in-azure-detecting-and-fixing-vulnerabilities",
    isExternal: true,
    associatedLab: { day: 4, title: "Application Security" }
  },
  {
    id: "azure-monitor-sentinel",
    title: "Getting Started with Azure Monitor and Microsoft Sentinel",
    date: "2025-02-03",
    url: "https://securecloudwithronney.hashnode.dev/getting-started-with-azure-monitor-and-microsoft-sentinel-a-beginners-guide",
    isExternal: true,
    associatedLab: { day: 5, title: "Security Monitoring & Threat Intelligence" }
  },
  {
    id: "rbac-workshop",
    title: "Workshop: Implementing Role-Based Access Control",
    date: "2025-02-03",
    url: "https://securecloudwithronney.hashnode.dev/practical-workshop-implementing-role-based-access-control-in-your-azure-environment",
    isExternal: true,
    associatedLab: { day: 1, title: "Identity & Access Management" }
  },
  {
    id: "azure-monitor-lab",
    title: "Effective Cloud Resource Monitoring",
    date: "2025-02-03",
    url: "https://securecloudwithronney.hashnode.dev/effective-cloud-resource-monitoring-with-azure-monitor-hands-on-lab",
    isExternal: true,
    associatedLab: { day: 5, title: "Security Monitoring & Threat Intelligence" }
  },
  {
    id: "resolve-git-merge-conflicts",
    title: "GitHub: resolve-git-merge-conflicts",
    date: "2024-05-03",
    url: "https://github.com/0tieno/resolve-git-merge-conflicts",
    isExternal: true
  },
  {
    id: "slides-git-merge-conflicts",
    title: "Slides: resolve-git-merge-conflicts",
    date: "2024-05-03",
    url: "https://stdntpartners-my.sharepoint.com/:p:/g/personal/ronney_otieno_studentambassadors_com/Ed_L-wu40C5CixAdciHo55gBAsFqN0Gzcry1V3v2w60ruQ?e=0d2Ufd",
    isExternal: true
  },
  {
    id: "push-to-different-git-branch",
    title: "How to push to a Different git Branch?",
    date: "July 7, 2025",
    isExternal: false,
    content: `

By default, when you push to a remote repository, Git pushes the current branch to the remote repository. However, there might be times when you want to push to a branch that is different from the current branch.

## The Syntax

The syntax for pushing to a different branch is as follows:

\`\`\`bash
git push <remote> <local_branch>:<remote_branch>
\`\`\`

## Example

Let's say you have a branch called \`main\` and you want to push your changes to a branch called \`staging\`. You can do so by running the following command:

\`\`\`bash
git push origin main:staging
\`\`\`

This will either create a new branch called \`staging\` or push your changes to an existing branch called \`staging\`.

## Use Cases

This technique is particularly useful when:

- You want to deploy to a staging environment from your main branch
- You need to create a backup of your current branch with a different name
- You're working with a CI/CD pipeline that expects code on a specific branch
- You want to push your local branch to a different remote branch name

## Additional Tips

- Always make sure you're on the correct local branch before pushing
- Use \`git status\` to verify your current branch and changes
- Consider using \`git push --dry-run\` to preview what will be pushed before actually doing it
`
  },
  {
    id: "azure-storage-security-checklist",
    title: "Azure Storage Account Security Checklist",
    date: "July 8, 2025",
    isExternal: false,
    associatedLab: { day: 3, title: "Data Security" },
    content: `

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
- Verify \`Secure transfer required\` is enabled in storage account settings.

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

`
    },
  {
  id: "docker-best-practices",
  title: "Top 10 Docker Best Practices for Developers",
  date: "July 9, 2025",
  isExternal: false,
  content: `

When working with Docker, following best practices can lead to more efficient, secure, and maintainable containers. Here are some top tips:

## 1. Use Small Base Images

Choose minimal base images like \`alpine\` to reduce image size and potential attack surfaces.

\`\`\`Dockerfile
FROM node:20-alpine
\`\`\`

## 2. Leverage Multi-Stage Builds

Multi-stage builds allow you to separate build-time dependencies from your final image.
This not only reduces image size, but also improves security by ensuring that tools like compilers, package managers (e.g., npm, pip), and source code are not included in the final production image—minimizing the attack surface and reducing the risk of vulnerabilities.

\`\`\`Dockerfile
# Stage 1: Build Stage using Node.js
FROM node:20 AS build              # Use official Node.js v20 image as the base for building
WORKDIR /app                       # Set the working directory inside the container to /app
COPY . .                           # Copy all files from your project folder into the container
RUN npm install && npm run build  # Install dependencies and build the project (e.g., React/Vue build)

# Stage 2: Production Stage using Nginx
FROM nginx:alpine                 # Use a lightweight Nginx image to serve the built app
COPY --from=build /app/dist /usr/share/nginx/html  
# Copy the final built files from the first stage into Nginx's default HTML directory

\`\`\`

## 3. Avoid Running as Root

Add and switch to a non-root user for improved security.

\`\`\`Dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser
\`\`\`
addgroup -S appgroup - Creates a system group named appgroup
adduser -S appuser -G appgroup - Creates a system user named appuser and adds them to the appgroup - Switches the active user to appuser for all remaining Dockerfile commands and at container runtime
USER appuser

## 4. Minimize Layers

Group related commands with \`&&\` to reduce the number of layers.

\`\`\`Dockerfile
RUN apt-get update && apt-get install -y \\
    curl \\
    git \\
    && rm -rf /var/lib/apt/lists/*
\`\`\`

## 5. Use .dockerignore

Exclude unnecessary files from the Docker context to speed up builds.

\`\`\`
node_modules
.git
Dockerfile
README.md
\`\`\`

## 6. Pin Image Versions

Avoid using \`latest\` tags in production. Instead, pin to a specific version for predictability.

\`\`\`Dockerfile
FROM python:3.11.4-slim
\`\`\`

## 7. Clean Up After Yourself

Remove caches and temp files during build to reduce image size.

\`\`\`Dockerfile
RUN pip install -r requirements.txt && \\
    rm -rf /root/.cache/pip
\`\`\`

## 8. Scan Your Images

Use tools like Docker Scout, Trivy, or Snyk to scan for vulnerabilities.

## 9. Use Healthchecks

Define healthchecks to monitor the container’s internal state.

\`\`\`Dockerfile
HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1
\`\`\`

## 10. Keep Containers Immutable

Don't store application state inside containers. Use volumes or external storage instead.

## Summary

These practices help you:

- Reduce image size
- Improve security
- Increase performance
- Simplify CI/CD and production deployment

Always keep learning and refining your Dockerfiles—small tweaks can lead to big improvements.

`
}

];
