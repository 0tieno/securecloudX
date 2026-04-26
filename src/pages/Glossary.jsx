import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const TERMS = [
  { term: "RBAC", def: "Role-Based Access Control — grants permissions to users via roles (e.g., Reader, Contributor) rather than directly, scoped to management group, subscription, resource group, or resource.", modules: [1, 7] },
  { term: "Zero Trust", def: "Security model that assumes no implicit trust. Every request is verified explicitly: 'never trust, always verify.' Requires identity, device health, and context checks before granting access.", modules: [1] },
  { term: "MFA", def: "Multi-Factor Authentication — requires at least two verification factors (something you know + something you have/are). Phishing-resistant MFA (FIDO2/passkeys) is the strongest form.", modules: [1, 7] },
  { term: "Conditional Access", def: "Azure Entra ID policy engine that evaluates conditions (user, location, device, app, risk) and enforces controls (MFA, block, compliant device). The Zero Trust enforcement layer.", modules: [1] },
  { term: "PIM", def: "Privileged Identity Management — provides just-in-time (JIT) activation of privileged roles. Admins have 'eligible' roles that expire after a configured window. Eliminates standing privilege.", modules: [1] },
  { term: "Service Principal", def: "Non-human identity in Azure AD representing an application or service. Created automatically when you register an app. Used for automation and CI/CD pipelines.", modules: [1, 4] },
  { term: "Managed Identity", def: "Azure-managed service principal with automatic credential rotation. No secrets to store or rotate. System-assigned (tied to one resource) or user-assigned (shared across resources).", modules: [1, 4] },
  { term: "STRIDE", def: "Threat modeling framework: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. Maps threats to trust boundaries in architecture.", modules: [7] },
  { term: "NSG", def: "Network Security Group — stateful firewall rules attached to subnets or NICs in Azure. Controls inbound/outbound traffic by port, protocol, source, and destination.", modules: [2] },
  { term: "VNet", def: "Virtual Network — isolated network in Azure where you deploy resources. Segmented into subnets. Can be peered, connected to on-premises, or isolated entirely.", modules: [2] },
  { term: "Private Endpoint", def: "Brings Azure PaaS services (Storage, SQL, Key Vault) onto your VNet with a private IP. Traffic stays on the Microsoft backbone — no public internet routing.", modules: [2, 3] },
  { term: "Azure Bastion", def: "Fully managed, browser-based RDP/SSH service. Eliminates the need to expose port 3389/22 to the internet. Part of the hub VNet in Hub-Spoke topology.", modules: [2] },
  { term: "JIT VM Access", def: "Just-In-Time VM Access via Defender for Cloud. Opens management ports (RDP/SSH) only when requested, for a specific time window, to a specific source IP.", modules: [2] },
  { term: "Hub-Spoke", def: "Network topology where a central hub VNet (shared services: Bastion, Firewall, VPN) connects to multiple spoke VNets via peering. Enforces traffic inspection at hub.", modules: [2] },
  { term: "AES-256", def: "Advanced Encryption Standard with 256-bit key. The NIST-approved symmetric encryption used for Azure storage encryption at rest. All Azure storage is AES-256 encrypted by default.", modules: [3] },
  { term: "TLS", def: "Transport Layer Security — cryptographic protocol for securing data in transit. Azure enforces minimum TLS 1.2 on all services. TLS 1.3 is preferred for new deployments.", modules: [3] },
  { term: "SAS Token", def: "Shared Access Signature — time-limited, permission-scoped URI that grants access to specific Azure Storage resources without requiring account credentials.", modules: [3] },
  { term: "CMK", def: "Customer-Managed Key — brings your own encryption keys to Azure services. Keys stored in Key Vault or HSM. You control rotation, revocation, and access. Higher operational burden than PMK.", modules: [3] },
  { term: "PMK", def: "Platform-Managed Key — Microsoft manages encryption keys. Default for all Azure services. Compliant with most regulatory frameworks. Lower operational burden than CMK.", modules: [3] },
  { term: "WORM", def: "Write Once Read Many — immutability policy on Azure Blob Storage. Once set, data cannot be modified or deleted until the retention period expires. Required for SEC 17a-4, HIPAA.", modules: [3] },
  { term: "Soft Delete", def: "Azure Storage feature that retains deleted blobs/containers for a configurable period (1–365 days). Protects against accidental deletion and ransomware. Should always be enabled.", modules: [3] },
  { term: "Key Vault", def: "Azure service for storing secrets, keys, and certificates. Provides RBAC access control, soft delete, purge protection, and audit logging. The correct place for all application secrets.", modules: [3, 4] },
  { term: "OWASP Top 10", def: "Open Web Application Security Project top 10 most critical application security risks. A standard reference for web and cloud application security. Updated periodically by the security community.", modules: [4] },
  { term: "SQL Injection", def: "OWASP A03 Injection — attacker inserts SQL code into user input fields that is then executed by the database. Prevented by parameterised queries / prepared statements.", modules: [4] },
  { term: "SSRF", def: "Server-Side Request Forgery — attacker tricks a server into making HTTP requests to internal resources (e.g., cloud metadata endpoint IMDS at 169.254.169.254) to steal credentials.", modules: [4] },
  { term: "SAST", def: "Static Application Security Testing — analyses source code without executing it to find vulnerabilities. Runs at build time. Tools: Semgrep, Bandit (Python), ESLint security plugins.", modules: [4, 8] },
  { term: "DAST", def: "Dynamic Application Security Testing — tests a running application by sending attack payloads. Finds runtime vulnerabilities SAST misses. Tools: OWASP ZAP, Burp Suite.", modules: [4] },
  { term: "CSPM", def: "Cloud Security Posture Management — continuous monitoring of cloud resources for misconfigurations against security benchmarks (CIS, NIST, ISO). Microsoft Defender for Cloud is Azure's CSPM.", modules: [5] },
  { term: "Secure Score", def: "Defender for Cloud metric (0–100%) measuring security posture against implemented recommendations. Directional indicator, not a KPI. Improving score reduces attack surface.", modules: [5] },
  { term: "Azure Policy", def: "Service that enforces organizational standards via policy definitions. Effects: Audit (log violations), Deny (block non-compliant deployments), DeployIfNotExists (auto-remediate).", modules: [5] },
  { term: "CIS Benchmark", def: "Center for Internet Security consensus-based security configuration guidelines. CIS Azure Foundations Benchmark is the most widely used hardening guide for Azure environments.", modules: [5, 7] },
  { term: "NIST CSF", def: "NIST Cybersecurity Framework — five functions: Identify, Protect, Detect, Respond, Recover. Version 2.0 (2024) adds Govern. The most widely adopted security framework globally.", modules: [5, 6, 7] },
  { term: "KQL", def: "Kusto Query Language — used in Azure Monitor, Log Analytics, and Microsoft Sentinel for querying security logs. Primary language for writing detection rules, hunting queries, and workbooks.", modules: [5, 6] },
  { term: "SIEM", def: "Security Information and Event Management — collects, correlates, and analyses security logs from across the environment. Microsoft Sentinel is Azure's cloud-native SIEM.", modules: [6] },
  { term: "SOAR", def: "Security Orchestration, Automation and Response — automates incident response playbooks. Sentinel Logic App playbooks are SOAR. Reduces MTTR from hours to minutes.", modules: [6] },
  { term: "MITRE ATT&CK", def: "Knowledge base of adversary tactics, techniques, and procedures (TTPs) based on real-world observations. Used to map detection coverage and identify gaps. 14 tactic categories.", modules: [6, 7] },
  { term: "MTTR", def: "Mean Time to Respond — average time from alert detection to incident containment. SOAR automation directly reduces MTTR. Industry benchmark: <1 hour for critical incidents.", modules: [6] },
  { term: "UEBA", def: "User and Entity Behavior Analytics — detects anomalies in user and system behaviour patterns using ML. Catches attackers who blend with normal traffic (e.g., SolarWinds). Built into Sentinel.", modules: [6] },
  { term: "SOC", def: "Security Operations Center — team responsible for monitoring, detecting, and responding to security threats 24/7. Uses SIEM/SOAR tooling. Tiers: Tier 1 (triage), Tier 2 (investigation), Tier 3 (hunt).", modules: [6] },
  { term: "NIST IR", def: "NIST SP 800-61 Incident Response lifecycle — four phases: Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-Incident Activity.", modules: [6] },
  { term: "Threat Modeling", def: "Structured process of identifying security threats against a system's architecture before building or deploying. STRIDE is the most common methodology. 10× cheaper to fix issues at design time.", modules: [7] },
  { term: "CAF", def: "Microsoft Cloud Adoption Framework — guidance for planning, designing, and managing Azure at enterprise scale. Includes security baseline, governance, and landing zone patterns.", modules: [7] },
  { term: "DevSecOps", def: "Integrating security into every stage of the software development lifecycle — shift-left security. Pre-commit hooks, CI security gates, IaC scanning, artifact signing, runtime monitoring.", modules: [8] },
  { term: "SCA", def: "Software Composition Analysis — scans open-source dependencies for known CVEs. Tools: Dependabot, Snyk, OWASP Dependency-Check. A mature SCA process includes CVE triage SLAs.", modules: [8] },
  { term: "SBOM", def: "Software Bill of Materials — machine-readable inventory of all software components and dependencies. Enables rapid CVE impact assessment (e.g., knowing in hours if Log4Shell affects you).", modules: [8] },
  { term: "SLSA", def: "Supply chain Levels for Software Artifacts — framework for securing the software supply chain. Levels 1–4 progressively harden the build platform, provenance, and artifact integrity.", modules: [8] },
  { term: "IaC", def: "Infrastructure as Code — defining and deploying infrastructure via code (Terraform, Bicep, ARM). IaC scanning (Checkov, tfsec, KICS) catches misconfigurations before deployment.", modules: [8] },
  { term: "CVE", def: "Common Vulnerabilities and Exposures — standard identifier for publicly known vulnerabilities. CVSS score (0–10) rates severity. CVSS 9.0+ = Critical, requires immediate remediation.", modules: [4, 8] },
  { term: "CVSS", def: "Common Vulnerability Scoring System — 0–10 severity score for CVEs. Base metrics: attack vector, complexity, privileges required, user interaction, scope, confidentiality/integrity/availability impact.", modules: [8] },
  { term: "Sigstore / Cosign", def: "Open-source project for signing software artifacts (container images, binaries). Cosign signs OCI images and stores signatures in the registry. Part of SLSA provenance chain.", modules: [8] },
  { term: "HSM", def: "Hardware Security Module — physical device that safeguards cryptographic keys. Azure Dedicated HSM and Azure Key Vault Managed HSM provide FIPS 140-2 Level 3 key protection.", modules: [3] },
  { term: "OAuth 2.0", def: "Authorization framework used by Azure AD for delegated access. Access tokens grant scoped permissions. Used by managed identities, service principals, and user sign-in flows.", modules: [1] },
  { term: "SAML", def: "Security Assertion Markup Language — XML-based federation protocol for SSO. Used in hybrid environments (AD FS → Azure AD). Golden SAML attacks forge SAML assertions to bypass MFA.", modules: [1] },
  { term: "Network Policy (K8s)", def: "Kubernetes resource defining allowed pod-to-pod traffic. Without a network policy, all pods can reach all pods. Zero Trust in Kubernetes requires deny-all + explicit allow policies.", modules: [9] },
  { term: "OPA / Rego", def: "Open Policy Agent — general-purpose policy engine. Rego is its policy language. Used with Kubernetes Gatekeeper for admission control and in CI/CD pipelines for policy-as-code.", modules: [8, 9] },
  { term: "Falco", def: "CNCF runtime security tool for Kubernetes. Detects anomalous syscall behaviour (e.g., shell spawned inside container, unexpected network connection). Complements admission controllers.", modules: [9] },
  { term: "Break-Glass Account", def: "Emergency access account excluded from Conditional Access policies. Used when all normal admin accounts are locked out. Must be monitored: any sign-in is a critical alert.", modules: [1] },
  { term: "Least Privilege", def: "Security principle: grant only the minimum permissions required to perform a task, at the narrowest possible scope, for the shortest time needed. RBAC + PIM operationalise this in Azure.", modules: [1, 5, 7] },
  { term: "Defense in Depth", def: "Layered security approach where multiple controls compensate for each other's failures. No single control is sufficient. Module 2 (Network) operationalises this with NSG + Firewall + Bastion + JIT.", modules: [2, 7] },
  { term: "CSA CCM", def: "Cloud Security Alliance Cloud Controls Matrix — comprehensive framework of cloud security controls organised into 17 domains. Used for auditing and compliance in multi-cloud environments.", modules: [1,2,3,4,5,6,7,8] },
  { term: "GDPR", def: "General Data Protection Regulation — EU regulation governing personal data collection, processing, and storage. Article 25 requires privacy by design. Azure's data residency controls enable compliance.", modules: [3] },
  { term: "PCI-DSS", def: "Payment Card Industry Data Security Standard — requirements for any organisation handling cardholder data. Requirement 3 (protect stored data) directly maps to Azure encryption controls.", modules: [3] },
  // New terms
  { term: "Entra ID", def: "Microsoft Entra ID (formerly Azure Active Directory) — Microsoft's cloud identity platform. Every authentication event, role assignment, and access decision in Azure flows through Entra ID. It is the identity provider for Azure and Microsoft 365.", modules: [1] },
  { term: "WAF", def: "Web Application Firewall — inspects HTTP/S traffic at Layer 7 and blocks common web attacks (SQLi, XSS, SSRF). Azure WAF runs on Application Gateway or Azure Front Door. A WAF does not replace network segmentation.", modules: [2, 4] },
  { term: "Azure Firewall", def: "Microsoft's fully managed, cloud-native network firewall. Deployed in the hub VNet in Hub-Spoke topology. Provides FQDN filtering, TLS inspection (Premium), network and application rules, and IDPS. Scales automatically.", modules: [2] },
  { term: "IMDS", def: "Instance Metadata Service — non-routable endpoint (169.254.169.254) inside Azure VMs that provides instance info and managed identity tokens. A key SSRF attack target: a compromised app that can reach IMDS can steal VM identity credentials.", modules: [2, 4] },
  { term: "XSS", def: "Cross-Site Scripting — OWASP A03 Injection subtype where attackers inject malicious scripts into web pages viewed by other users. Stored XSS persists in the database; reflected XSS is delivered via URL. Mitigated by output encoding and Content Security Policy.", modules: [4] },
  { term: "AKS", def: "Azure Kubernetes Service — Microsoft's managed Kubernetes offering. Azure manages the control plane; you manage node pools. Integrates with Entra ID (RBAC), Azure CNI (NetworkPolicy support), Defender for Containers, and Workload Identity.", modules: [9] },
  { term: "Kubernetes", def: "Open-source container orchestration platform. Groups containers into Pods, managed via Deployments, scoped into Namespaces. Security controls include RBAC, NetworkPolicy, Pod Security Standards, and admission controllers.", modules: [9] },
  { term: "Workload Identity", def: "AKS feature that federates a Kubernetes service account with an Azure Managed Identity via OIDC. Pods receive short-lived Azure AD tokens — no secrets stored anywhere. Replaces the older pod-managed-identity (aad-pod-identity) approach.", modules: [9] },
  { term: "OIDC", def: "OpenID Connect — identity layer on top of OAuth 2.0 that issues ID tokens (JWT) with user/workload identity claims. AKS exposes an OIDC issuer URL used by Workload Identity to federate Kubernetes service accounts with Azure AD.", modules: [1, 9] },
  { term: "Log Analytics Workspace", def: "Azure Monitor data store for security and operational logs. Central destination for NSG flow logs, Entra ID sign-in logs, Defender for Cloud alerts, and Sentinel. KQL queries run against workspace tables.", modules: [5, 6] },
  { term: "Defender for Cloud", def: "Microsoft's unified Cloud Security Posture Management (CSPM) and workload protection platform. Provides Secure Score, regulatory compliance dashboards, and Defender plans (VMs, Storage, Containers, SQL, etc.).", modules: [5, 9] },
  { term: "Defender for Containers", def: "Microsoft Defender plan for Kubernetes workloads. Scans container images for CVEs, audits Kubernetes API activity, detects runtime threats (privileged container, shell in container), and maps findings to CIS Kubernetes Benchmark.", modules: [9] },
  { term: "Admission Controller", def: "Kubernetes API server plugin that intercepts resource creation/modification requests and either validates or mutates them. OPA Gatekeeper is a validating admission controller — it can deny pod deployments that violate policy (e.g., no privileged containers).", modules: [9] },
];

const ALL_MODULES = [...new Set(TERMS.flatMap(t => t.modules))].sort((a, b) => a - b);

const MODULE_LABELS = {
  1: "M1: IAM", 2: "M2: Network", 3: "M3: Data", 4: "M4: App Sec",
  5: "M5: CSPM", 6: "M6: Detection", 7: "M7: Architecture", 8: "M8: DevSecOps", 9: "M9: AKS",
};

export default function Glossary() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("q") ?? "");
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setSearch(q);
  }, [searchParams]);

  const filtered = TERMS.filter(t => {
    const matchSearch = !search || t.term.toLowerCase().includes(search.toLowerCase()) || t.def.toLowerCase().includes(search.toLowerCase());
    const matchModule = filter === null || t.modules.includes(filter);
    return matchSearch && matchModule;
  }).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <a href="/home" className="hover:text-gray-400 transition-colors">// phases</a>
          <span>/</span>
          <span className="text-gray-400">glossary</span>
        </div>

        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ man cloud-security</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Cloud Security Glossary</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            {TERMS.length} key terms — definitions, context, and cross-references to the module where each is covered in depth.
          </p>
        </div>

        {/* Search + filter */}
        <div className="mb-6 space-y-3">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="$ grep -i 'term or keyword'..."
            className="w-full bg-gray-800 border border-gray-700 px-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-500 font-mono"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter(null)}
              className={`text-xs font-mono px-2 py-0.5 border transition-colors ${filter === null ? "border-gray-400 text-gray-300 bg-gray-700" : "border-gray-700 text-gray-500 hover:border-gray-500"}`}
            >
              All
            </button>
            {ALL_MODULES.map(m => (
              <button
                key={m}
                onClick={() => setFilter(filter === m ? null : m)}
                className={`text-xs font-mono px-2 py-0.5 border transition-colors ${filter === m ? "border-blue-500 text-blue-300 bg-blue-900/30" : "border-gray-700 text-gray-500 hover:border-gray-500"}`}
              >
                {MODULE_LABELS[m]}
              </button>
            ))}
          </div>
          <div className="text-gray-600 text-xs">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</div>
        </div>

        {/* Terms list */}
        <div className="space-y-3">
          {filtered.map(t => (
            <div key={t.term} className="border border-gray-700 bg-gray-800/40 p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-gray-100 font-bold text-sm">{t.term}</span>
                <div className="flex flex-wrap gap-1 flex-shrink-0">
                  {t.modules.map(m => (
                    <a key={m} href={`/module${m}`} className="text-xs font-mono text-blue-400 border border-blue-800/50 px-1.5 py-0.5 hover:border-blue-600 transition-colors">
                      {MODULE_LABELS[m]}
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{t.def}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-gray-600 text-sm text-center py-8">// no matches found</p>
          )}
        </div>
      </div>
    </div>
  );
}
