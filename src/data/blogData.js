export const blogPosts = [
  {
    id: "why-git-never-forgets",
    title: "Why Git Never Forgets",
    date: "2025-07-13",
    excerpt: "Learn how secrets live on in your code history — even after you hit delete.",
    content: `
Learn how secrets live on in your code history — even after you hit delete.

## Hook
You added a secret API key to a .env file, committed it, and later deleted it.

Problem solved? Not even close. Because Git never forgets.

## What's Really Happening?

Git is a version control system, not a file system. That means when you commit something, Git saves a snapshot — permanently — in its history. Even if you delete the file in the next commit, the earlier snapshot still contains it.

So when someone runs:

\`\`\`bash
git log -p
\`\`\`

or:

\`\`\`bash
git show HEAD~1:.env
\`\`\`

—they can see what was there before.

## Real Attack Scenario

1. You commit a \`.env\` file with a secret:

\`\`\`ini
API_KEY=SECRET-TOKEN-KEY
\`\`\`

2. You realize your mistake and delete the file.

But Git has already stored it in:
- The blob  (raw file content)
- The tree  (directory structure)  
- The commit  (full snapshot)

Anyone who clones the repo and runs:

\`\`\`bash
git grep "SECRET" $(git rev-list --all)
\`\`\`

can find your exposed credentials.

## Why This Matters

Secrets leaked in Git can lead to:
- Compromised APIs
- Unauthorized access to cloud resources
- Massive security incidents Even private repos are not safe  if someone has access to your history.

## What You Can Do Instead

1. Add sensitive files  (like \`.env\`) to \`.gitignore\` before  committing
2. Use \`git-secrets\`, \`gitleaks\`, or \`truffleHog\`  to scan commits
3. If you leak a secret 
   - Revoke the key
   - Rotate it
   - Rewrite Git history with \`git filter-repo\` or BFG

## Try It Yourself

Clone the [forgotten-secret-lab](https://github.com/0tieno/forgotten-secret-lab), and try these commands to uncover a real secret from history:

\`\`\`bash
git show HEAD~1:.env
\`\`\`

## 🔚 Final Thought

Git was built to remember everything — but that makes it a goldmine for attackers.

Use that knowledge to defend smarter.

`,
    isExternal: false,
    tags: ["git", "security", "secrets", "forensics"],
    associatedLab: { title: "Forgotten Secret Lab", path: "/forgotten-secret-lab" }
  },
  {
    id: "oops-committed-secrets-git",
    title: "Oops! I Committed Secrets to Git — Now What?",
    date: "2025-07-13",
    excerpt: "We all make mistakes. Here's how to respond like a security pro when secrets get committed.",
    content: `

We all make mistakes. Here's how to respond like a security pro when secrets get committed.

## You Made the Commit. Now What?

You've committed a file like this:

\`\`\`env
API_KEY=SECRET-TOKEN-KEY
\`\`\`

You panic. You delete the file.

But Git still remembers it. Forever. 

## Step-by-Step: Fix It Fast

### 1. Revoke the Key Immediately

Go to the service (e.g. Azure, Stripe, Firebase...) and:

- Disable or delete the key
- Create a new one  
- Update it securely in your app (via env vars, secret manager, etc.)

### 2. Clean Your Git History

Removing it in a new commit is not enough.

You need to rewrite history using one of these tools:

### Option 1: git filter-repo (Recommended)

\`\`\`bash
git filter-repo --path .env --invert-paths
\`\`\`

### Option 2: BFG Repo Cleaner

\`\`\`bash
bfg --delete-files .env
\`\`\`

⚠️ Warning: This rewrites history. All collaborators must re-clone after!

### 3. Force Push (If Necessary)

\`\`\`bash
git push --force
\`\`\`

Be careful! This can cause issues if others are working on the repo.

### 4. Scan Your Repo

Use a secret scanner to double-check your fix:

\`\`\`bash
gitleaks detect --source .
\`\`\`

Or:

\`\`\`bash
trufflehog git file://.
\`\`\`

### Bonus: Add .env to .gitignore

\`\`\`bash
echo ".env" >> .gitignore
git add .gitignore
git commit -m "ignore env files"
\`\`\`

## Proactive Measures for the Future

- Add pre-commit hooks with \`git-secrets\`
- Scan your repos with Gitleaks in CI/CD
- Use secret managers (Azure Key Vault, AWS Secrets Manager, etc.)

## Try it yourself

I created a real repo where a \`.env\` file was committed and then deleted:

Try the [Forgotten Secret Lab](/forgotten-secret-lab)

## Final Thought

Everyone leaks something eventually.

What matters is how fast you detect, how smart you respond, and how well you prevent it next time. I understand some commands here are not explained explicitly what they do. 
`,
    isExternal: false,
    tags: ["git", "security", "secrets", "incident-response"],
    associatedLab: { title: "Forgotten Secret Lab", path: "/forgotten-secret-lab" }
  },

  {
  id: "ctf-linux-security-12challenges",
  title: "CTF: 12 Linux Security Challenges for Real-World Skills",
  date: "2025-07-16",
  excerpt: "Sharpen your Linux, networking, and security skills with these 12 hands-on CTF-style challenges.",
  content: `

Today, I tackled 12 hands-on Capture the Flag (CTF) challenges designed to sharpen my Linux, networking, and cybersecurity skills. Each challenge introduced a new concept or technique, from file forensics to covert network channels.

## Challenge 1: The Hidden File

Goal: Find and read a hidden file in your home directory  
Skill: Linux hidden file handling

> Learned to use \`ls -a\` to show hidden files (those starting with a dot), and \`cat\`, \`less\`, or \`nano\` to view their content.

\`\`\`bash
ls -a
ls -la
cat .flag.txt
\`\`\`

## Challenge 2: The Secret File

Goal: Locate a file with "secret" in its name under \`~\`  
Skill: File searching

> Mastered \`find\` and explored content-based search with \`grep\`.

\`\`\`bash
find ~ -iname "*secret*"
grep -r "FLAG" ~
\`\`\`


## Challenge 3: The Largest Log

Goal: Identify the largest log file in \`/var/log\`  
Skill: Disk usage inspection

\`\`\`bash
du -ah /var/log | sort -hr | head -n 5
less /var/log/syslog
\`\`\`

## Challenge 4: The User Detective

Goal: Find the user with UID 1002 and check their login files  
Skill: User enumeration

\`\`\`bash
awk -F: '$3 == 1002 {print $1}' /etc/passwd
cat /home/username/.bashrc
\`\`\`

## Challenge 5: The Permissive File

Goal: Find a file in \`/opt\` with 777 permissions  
Skill: Permission auditing

\`\`\`bash
find /opt -type f -perm 0777
ls -l
chmod 644 file.txt
\`\`\`

## Challenge 6: The Hidden Service

Goal: Connect to a service on port 8080  
Skill: Port inspection

\`\`\`bash
lsof -i :8080
netstat -tulnp
curl http://localhost:8080
\`\`\`

## Challenge 7: The Encoded Secret

Goal: Decode a flag base64-encoded twice  
Skill: Base64 decoding

\`\`\`bash
cat flag.txt | base64 --decode | base64 --decode
\`\`\`

## Challenge 8: SSH Key Authentication

Goal: Set up SSH key-based login and find hidden flag in \`.ssh\`  
Skill: SSH and dotfile inspection

\`\`\`bash
ssh-keygen
cat id_rsa.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
ls -la ~/.ssh
\`\`\`

## Challenge 9: DNS Troubleshooting

Goal: Fix a broken DNS config to reveal a flag  
Skill: Network troubleshooting

\`\`\`bash
cat /etc/resolv.conf
ping google.com
dig github.com
\`\`\`

## Challenge 10: Remote Upload

Goal: Upload a file to \`~/ctf_challenges\`  
Skill: File transfer

\`\`\`bash
scp flag.txt user@host:~/ctf_challenges/
rsync -av flag.txt user@host:~/ctf_challenges/
\`\`\`

## Challenge 11: Web Configuration

Goal: Fix a non-standard Nginx port  
Skill: Web server configuration

\`\`\`bash
nano /etc/nginx/sites-available/default
sudo systemctl restart nginx
nginx -t
\`\`\`

## Challenge 12: Network Traffic Analysis

Goal: Detect a flag hidden in ping traffic  
Skill: Packet analysis

\`\`\`bash
tcpdump -i any -w dump.pcap
tshark -r dump.pcap
strings dump.pcap | grep FLAG
\`\`\`

## Final Reflection

This journey helped me strengthen:

- Linux fundamentals  
- Security analysis & troubleshooting  
- Comfort with core tools and services

Each flag was more than a challenge — it was a real lesson in practical command-line security.

Try this CTF series yourself: [Learn-to-cloud](https://github.com/learntocloud/linux-ctfs)

`,
  isExternal: false,
  tags: ["ctf", "linux", "security", "training"]
},

  
  {
    id: "git-tools-security-learners",
    title: "Git Tools Every Security Learner Should Know",
    date: "2025-07-13",
    excerpt: "Want to think like a hacker? Start by mastering Git history.",
    content: `

Want to think like a hacker? Start by mastering Git history.

## Why This Matters

Git isn't just for saving code — it's a forensic tool.

Secrets. Mistakes. Deleted files.  
They're all still there — if you know how to look.

## Core Git Commands for Secret Discovery

Here are essential Git commands that every security-minded developer or learner should know:

### 🔹 \`git log -p\`

Shows commit history + the actual diffs (changes made):

\`\`\`bash
git log -p
\`\`\`

Use it to spot files that were added/removed — like secrets.

### 🔹 \`git show <commit>\`

Shows exactly what changed in a specific commit:

\`\`\`bash
git show HEAD~1
git show 14c1d625f66b5f41a8fbb51cfa9b8561db1b8c89
\`\`\`

Also works for deleted files:

\`\`\`bash
git show HEAD~1:.env
\`\`\`

### 🔹 \`git grep\`

Searches for patterns across your working directory.

\`\`\`bash
git grep "SECRET"
\`\`\`

To search entire Git history, use:

\`\`\`bash
git grep "SECRET" $(git rev-list --all)
\`\`\`

### 🔹 \`git rev-list --all\`

Lists every commit in your repo.

Useful with other commands like:

\`\`\`bash
git show $(git rev-list --all)
\`\`\`

Or with grep as shown above.

### 🔹 \`git cat-file -p <blob-sha>\`

Used to inspect raw Git objects (like old .env files):

\`\`\`bash
git cat-file -p 3323962
\`\`\`

Get the blob SHA from a command like:

\`\`\`bash
git log --all --pretty=format: --name-only | sort -u
\`\`\`

### 🔹 \`git log --diff-filter=D --summary\`

Finds deleted files:

\`\`\`bash
git log --diff-filter=D --summary
\`\`\`

Great for catching someone who deleted \`.env\` too late 😅

## Bonus Tools to Automate It

| Tool | Use Case |
|------|----------|
| gitleaks | Scans commits for secrets |
| truffleHog | Finds secrets by entropy analysis |
| git-secrets | Prevents committing common secret patterns |
| BFG | Deletes secrets from history |
| filter-repo | Rewrites Git history precisely |

## Practice in SecureCloudX

Use these tools in the [Forgotten Secret Lab](/forgotten-secret-lab) to find a real leaked API key:

1. Search Git history
2. Extract .env from an old commit  
3. Access a real deployed API to complete the challenge

## Final Thought

You don't need to hack the cloud to learn security.

Start by hacking Git history — because Git never forgets. 
`,
    isExternal: false,
    tags: ["git", "security", "tools", "forensics"],
    associatedLab: { title: "Forgotten Secret Lab", path: "/forgotten-secret-lab" }
  },
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
\`addgroup -S appgroup\` this Creates a system group named appgroup
\`adduser -S appuser -G appgroup\` this Creates a system user named appuser and adds them to the appgroup 
\`USER appuser\` this Switches the active user to appuser for all remaining Dockerfile commands and at container runtime

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
