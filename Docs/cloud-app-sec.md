Application security aims to protect software application code and data against cyber threats. You can and should apply application security during all phases of development, including design, development, and deployment.
     
     
     CODE     →    CONTAINER   →   REGISTRY   →   AZURE   →   SECURE   →   MONITOR   →   ATTACK
  (Vulnerable)    (Dockerfile)     (ACR)         (AppSvc)     (Hardened)   (Insights)   (Test)

The challenge begins when a learner forks a containerized, intentionally vulnerable Weather API repository. They then use tools like npm audit, semgrep, gitleaks, and container scanners (e.g., Trivy) to identify security flaws such as hardcoded secrets, missing input validation, outdated dependencies, and insecure container configurations. After documenting these vulnerabilities, the learner corrects the issues in the code and Dockerfile, rebuilding a secure image. This updated image is then pushed to their Azure Container Registry and deployed to Azure App Service, where further Azure-level security controls (like HTTPS enforcement, Key Vault integration, and Defender for Cloud) are implemented. Finally, the learner sets up monitoring with Application Insights and Azure Monitor and simulates attacks to ensure that all the security measures effectively protect the application.

 By the end of this 6-phase lab, you'll have built and secured a full cloud-native app from code to cloud — and walked away with the skills to do it in real life.

Phase 1: Fork & Explore Vulnerable Weather API
Phase 2: Secure the Code (App Layer)
Phase 3: Containerize & Secure
Phase 4: Push to Azure Container Registry (ACR)
Phase 5: Deploy Securely to Azure (Container App or App Service)
Phase 6: Secure with Azure Tools
Phase 7: Monitor & Alert
Phase 8: Simulate Attacks & Validate

SecureCloudX Challenge Flow – Confirmed
🧪 Fork & Explore

Learner forks a vulnerable weather API (Node.js + Dockerized).

Runs the app locally.

Explores the code and Dockerfile for intentional security flaws.

🔎 Identify Vulnerabilities

Uses tools like:

npm audit, semgrep, gitleaks (code)

trivy, hadolint, dockle (container)

Notes security issues in a checklist or report:

Hardcoded secrets, lack of validation, outdated packages, root user in Docker, etc.

🔧 Fix & Secure

Applies fixes:

Sanitize input, move secrets to .env, implement rate limiting, improve error handling.

Harden Dockerfile (non-root, minimal image).

Rebuilds secure image locally.

📦 Push to Azure Container Registry (ACR)

Tags and pushes the fixed container image to their personal ACR.

🚀 Deploy to Azure App Service

Deploys the container from ACR to Azure App Service (Linux Container).

Implements Azure-side security controls:

HTTPS only, Key Vault for secrets, Defender for App Service, access restrictions, disable unneeded features.

📈 Monitor

Enables Application Insights and Azure Monitor.

Sets up logging and alert rules for anomalies (e.g., 5xx spikes, failed requests).

💥 Simulate Attacks

Sends test attacks (XSS payloads, brute force, SSRF-style input).

Checks logs, alerts, and app behavior to confirm defenses are working.
