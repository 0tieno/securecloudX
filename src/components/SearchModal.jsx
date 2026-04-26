import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const INDEX = [
  // Modules
  { title: "Module 1: Identity & Access Management", path: "/module1", tags: ["IAM", "RBAC", "MFA", "Zero Trust", "PIM", "Conditional Access", "Entra ID", "service principal", "managed identity"], type: "MODULE" },
  { title: "Module 1 Lab: Implement Zero Trust IAM Controls", path: "/module1/task", tags: ["IAM", "users", "groups", "RBAC", "Conditional Access", "PIM", "sign-in logs"], type: "LAB" },
  { title: "Module 2: Network Security & Perimeter Defense", path: "/module2", tags: ["VNet", "NSG", "firewall", "Bastion", "Private Endpoint", "JIT", "Hub-Spoke", "network"], type: "MODULE" },
  { title: "Module 2 Lab: Network Security Controls", path: "/module2/task", tags: ["VNet", "NSG", "Bastion", "Private Endpoint", "network segmentation"], type: "LAB" },
  { title: "Module 3: Data Security & Encryption", path: "/module3", tags: ["encryption", "AES-256", "TLS", "SAS token", "Key Vault", "WORM", "soft delete", "CMK", "storage"], type: "MODULE" },
  { title: "Module 3 Lab: Azure Storage Security", path: "/module3/task", tags: ["storage account", "encryption", "SAS", "lifecycle", "immutability"], type: "LAB" },
  { title: "Module 4: Application Security in Azure", path: "/module4", tags: ["OWASP", "SQL injection", "SSRF", "Key Vault", "managed identity", "App Service", "SAST", "WAF"], type: "MODULE" },
  { title: "Module 4 Lab: App Security Controls", path: "/module4/task", tags: ["Key Vault", "managed identity", "OWASP", "App Service", "secrets"], type: "LAB" },
  { title: "Module 5: Cloud Security Posture Management", path: "/module5", tags: ["CSPM", "Defender for Cloud", "Secure Score", "Azure Policy", "CIS", "NIST", "KQL"], type: "MODULE" },
  { title: "Module 5 Lab: Security Posture", path: "/module5/task", tags: ["Defender for Cloud", "Secure Score", "Azure Policy", "compliance"], type: "LAB" },
  { title: "Module 6: Detection Engineering & Incident Response", path: "/module6", tags: ["Sentinel", "SIEM", "SOAR", "KQL", "MITRE ATT&CK", "incident response", "NIST IR", "UEBA"], type: "MODULE" },
  { title: "Module 6 Lab: Build Detection Rules in Sentinel", path: "/module6/task", tags: ["Sentinel", "analytics rules", "KQL", "playbooks", "SOAR", "incident"], type: "LAB" },
  { title: "Module 7: Capstone — Security Architecture Review", path: "/module7", tags: ["threat model", "STRIDE", "CIS benchmark", "architecture", "SecureMed", "assessment"], type: "MODULE" },
  { title: "Module 7 Lab: SecureMed Security Assessment", path: "/module7/task", tags: ["threat model", "STRIDE", "report", "CIS benchmark", "assessment"], type: "LAB" },
  { title: "Module 8: DevSecOps Fundamentals", path: "/module8", tags: ["DevSecOps", "CI/CD", "SAST", "SCA", "secret scanning", "container", "IaC", "pipeline"], type: "MODULE" },
  { title: "Module 8 Lab: Secure CI/CD Pipeline", path: "/module8/task", tags: ["GitHub Actions", "Gitleaks", "Trivy", "Checkov", "pipeline security"], type: "LAB" },
  { title: "Module 9: Kubernetes & AKS Security", path: "/module9", tags: ["Kubernetes", "AKS", "K8s RBAC", "network policy", "OPA", "Gatekeeper", "Falco", "container"], type: "MODULE" },
  { title: "Module 9 Lab: Harden an AKS Cluster", path: "/module9/task", tags: ["AKS", "Kubernetes", "RBAC", "network policy", "Defender for Containers"], type: "LAB" },
  // Reference pages
  { title: "Glossary — Cloud Security Terms", path: "/glossary", tags: ["glossary", "terms", "definitions", "RBAC", "STRIDE", "MFA", "SBOM", "SAS", "CSPM"], type: "REFERENCE" },
  { title: "Cert Map — AZ-500 / CCSP / CIS Objectives", path: "/cert-map", tags: ["AZ-500", "CCSP", "CIS", "exam", "certification", "objectives"], type: "REFERENCE" },
  { title: "Broken By Design — Find the Misconfigurations", path: "/lab/broken-by-design", tags: ["misconfiguration", "lab", "storage", "public access", "SAS", "audit"], type: "LAB" },
  { title: "Platform Roadmap", path: "/plan", tags: ["roadmap", "plan", "features", "upcoming"], type: "REFERENCE" },
  // Blogs
  { title: "Blog: Azure Storage Security Basics", path: "/posts/azure-storage-security-basics", tags: ["storage", "encryption", "access control", "blob"], type: "BLOG" },
  { title: "Blog: Azure Storage Security Checklist", path: "/posts/azure-storage-security-checklist", tags: ["storage", "checklist", "security", "best practices"], type: "BLOG" },
  { title: "Blog: Cloud Security Fundamentals", path: "/posts/cloud-security-fundamentals", tags: ["fundamentals", "cloud security", "basics"], type: "BLOG" },
  { title: "Blog: Oops, I Committed Secrets to Git", path: "/posts/oops-committed-secrets-git", tags: ["secrets", "git", "credentials", "leak", "rotation"], type: "BLOG" },
  { title: "Blog: Docker Security Best Practices", path: "/posts/docker-best-practices", tags: ["Docker", "container", "image", "security"], type: "BLOG" },
  { title: "Blog: Secure Coding Practices", path: "/posts/secure-coding-practices", tags: ["secure coding", "OWASP", "input validation", "injection"], type: "BLOG" },
  { title: "Blog: Monitor Compliance with Azure Policy", path: "/posts/monitor-compliance", tags: ["Azure Policy", "compliance", "monitoring", "CIS"], type: "BLOG" },
  { title: "Blog: Pentester's Essential Ports", path: "/posts/pentester-ports", tags: ["pentesting", "ports", "reconnaissance", "network"], type: "BLOG" },
  { title: "Blog: Why Git Never Forgets", path: "/posts/why-git-never-forgets", tags: ["git", "history", "secrets", "credentials"], type: "BLOG" },
  // Glossary terms
  { title: "Glossary: RBAC", path: "/glossary?q=RBAC", tags: ["role", "access control", "permissions", "scope", "IAM"], type: "GLOSSARY" },
  { title: "Glossary: Zero Trust", path: "/glossary?q=Zero+Trust", tags: ["zero trust", "never trust", "always verify", "identity"], type: "GLOSSARY" },
  { title: "Glossary: MFA", path: "/glossary?q=MFA", tags: ["multi-factor", "authentication", "FIDO2", "passkeys", "phishing"], type: "GLOSSARY" },
  { title: "Glossary: Conditional Access", path: "/glossary?q=Conditional+Access", tags: ["conditional access", "policy", "zero trust", "entra", "MFA"], type: "GLOSSARY" },
  { title: "Glossary: PIM", path: "/glossary?q=PIM", tags: ["privileged identity", "just-in-time", "JIT", "standing privilege"], type: "GLOSSARY" },
  { title: "Glossary: Managed Identity", path: "/glossary?q=Managed+Identity", tags: ["managed identity", "credential rotation", "system-assigned", "user-assigned"], type: "GLOSSARY" },
  { title: "Glossary: Service Principal", path: "/glossary?q=Service+Principal", tags: ["service principal", "app registration", "non-human identity"], type: "GLOSSARY" },
  { title: "Glossary: Entra ID", path: "/glossary?q=Entra+ID", tags: ["entra", "azure ad", "active directory", "identity provider"], type: "GLOSSARY" },
  { title: "Glossary: STRIDE", path: "/glossary?q=STRIDE", tags: ["stride", "threat model", "spoofing", "tampering", "repudiation"], type: "GLOSSARY" },
  { title: "Glossary: NSG", path: "/glossary?q=NSG", tags: ["network security group", "firewall rules", "inbound", "outbound"], type: "GLOSSARY" },
  { title: "Glossary: VNet", path: "/glossary?q=VNet", tags: ["virtual network", "subnet", "peering", "isolation"], type: "GLOSSARY" },
  { title: "Glossary: Private Endpoint", path: "/glossary?q=Private+Endpoint", tags: ["private endpoint", "private ip", "VNet", "PaaS"], type: "GLOSSARY" },
  { title: "Glossary: Azure Bastion", path: "/glossary?q=Azure+Bastion", tags: ["bastion", "RDP", "SSH", "browser", "no public ip"], type: "GLOSSARY" },
  { title: "Glossary: JIT VM Access", path: "/glossary?q=JIT+VM+Access", tags: ["just in time", "JIT", "VM", "management ports"], type: "GLOSSARY" },
  { title: "Glossary: Hub-Spoke", path: "/glossary?q=Hub-Spoke", tags: ["hub spoke", "topology", "firewall", "VNet peering"], type: "GLOSSARY" },
  { title: "Glossary: WAF", path: "/glossary?q=WAF", tags: ["web application firewall", "WAF", "SQLi", "XSS", "SSRF", "layer 7"], type: "GLOSSARY" },
  { title: "Glossary: Azure Firewall", path: "/glossary?q=Azure+Firewall", tags: ["azure firewall", "FQDN", "IDPS", "hub", "network rules"], type: "GLOSSARY" },
  { title: "Glossary: IMDS", path: "/glossary?q=IMDS", tags: ["imds", "instance metadata", "169.254.169.254", "SSRF", "token"], type: "GLOSSARY" },
  { title: "Glossary: AES-256", path: "/glossary?q=AES-256", tags: ["AES", "encryption", "symmetric", "at rest"], type: "GLOSSARY" },
  { title: "Glossary: TLS", path: "/glossary?q=TLS", tags: ["TLS", "transport layer security", "in transit", "HTTPS"], type: "GLOSSARY" },
  { title: "Glossary: SAS Token", path: "/glossary?q=SAS+Token", tags: ["SAS", "shared access signature", "storage", "time-limited"], type: "GLOSSARY" },
  { title: "Glossary: CMK", path: "/glossary?q=CMK", tags: ["customer managed key", "CMK", "key vault", "rotation", "compliance"], type: "GLOSSARY" },
  { title: "Glossary: WORM", path: "/glossary?q=WORM", tags: ["WORM", "immutability", "write once", "ransomware", "compliance"], type: "GLOSSARY" },
  { title: "Glossary: Soft Delete", path: "/glossary?q=Soft+Delete", tags: ["soft delete", "retention", "accidental deletion", "ransomware"], type: "GLOSSARY" },
  { title: "Glossary: Key Vault", path: "/glossary?q=Key+Vault", tags: ["key vault", "secrets", "keys", "certificates", "audit"], type: "GLOSSARY" },
  { title: "Glossary: HSM", path: "/glossary?q=HSM", tags: ["HSM", "hardware security module", "FIPS", "key protection"], type: "GLOSSARY" },
  { title: "Glossary: OWASP Top 10", path: "/glossary?q=OWASP+Top+10", tags: ["OWASP", "application security", "top 10", "web"], type: "GLOSSARY" },
  { title: "Glossary: SQL Injection", path: "/glossary?q=SQL+Injection", tags: ["SQL injection", "SQLi", "parameterised queries", "injection"], type: "GLOSSARY" },
  { title: "Glossary: SSRF", path: "/glossary?q=SSRF", tags: ["SSRF", "server side request forgery", "IMDS", "credentials"], type: "GLOSSARY" },
  { title: "Glossary: XSS", path: "/glossary?q=XSS", tags: ["XSS", "cross site scripting", "output encoding", "CSP"], type: "GLOSSARY" },
  { title: "Glossary: SAST", path: "/glossary?q=SAST", tags: ["SAST", "static analysis", "source code", "Semgrep", "build time"], type: "GLOSSARY" },
  { title: "Glossary: DAST", path: "/glossary?q=DAST", tags: ["DAST", "dynamic analysis", "runtime", "ZAP", "Burp Suite"], type: "GLOSSARY" },
  { title: "Glossary: CVE", path: "/glossary?q=CVE", tags: ["CVE", "vulnerability", "CVSS", "severity", "critical"], type: "GLOSSARY" },
  { title: "Glossary: CVSS", path: "/glossary?q=CVSS", tags: ["CVSS", "severity score", "vulnerability", "base metrics"], type: "GLOSSARY" },
  { title: "Glossary: CSPM", path: "/glossary?q=CSPM", tags: ["CSPM", "posture management", "misconfiguration", "CIS", "NIST"], type: "GLOSSARY" },
  { title: "Glossary: Secure Score", path: "/glossary?q=Secure+Score", tags: ["secure score", "posture", "recommendations", "Defender for Cloud"], type: "GLOSSARY" },
  { title: "Glossary: Azure Policy", path: "/glossary?q=Azure+Policy", tags: ["azure policy", "deny", "audit", "DeployIfNotExists", "compliance"], type: "GLOSSARY" },
  { title: "Glossary: CIS Benchmark", path: "/glossary?q=CIS+Benchmark", tags: ["CIS", "benchmark", "hardening", "configuration"], type: "GLOSSARY" },
  { title: "Glossary: NIST CSF", path: "/glossary?q=NIST+CSF", tags: ["NIST", "CSF", "identify protect detect respond recover", "framework"], type: "GLOSSARY" },
  { title: "Glossary: KQL", path: "/glossary?q=KQL", tags: ["KQL", "kusto", "query", "Sentinel", "Log Analytics", "detection"], type: "GLOSSARY" },
  { title: "Glossary: Log Analytics Workspace", path: "/glossary?q=Log+Analytics+Workspace", tags: ["log analytics", "workspace", "logs", "azure monitor"], type: "GLOSSARY" },
  { title: "Glossary: Defender for Cloud", path: "/glossary?q=Defender+for+Cloud", tags: ["defender for cloud", "CSPM", "secure score", "workload protection"], type: "GLOSSARY" },
  { title: "Glossary: Defender for Containers", path: "/glossary?q=Defender+for+Containers", tags: ["defender for containers", "AKS", "CVE", "kubernetes", "runtime"], type: "GLOSSARY" },
  { title: "Glossary: SIEM", path: "/glossary?q=SIEM", tags: ["SIEM", "Sentinel", "security information", "event management"], type: "GLOSSARY" },
  { title: "Glossary: SOAR", path: "/glossary?q=SOAR", tags: ["SOAR", "automation", "playbook", "Logic App", "MTTR"], type: "GLOSSARY" },
  { title: "Glossary: MITRE ATT&CK", path: "/glossary?q=MITRE+ATT%26CK", tags: ["MITRE", "ATT&CK", "tactics", "techniques", "TTP"], type: "GLOSSARY" },
  { title: "Glossary: MTTR", path: "/glossary?q=MTTR", tags: ["MTTR", "mean time to respond", "incident", "SOAR"], type: "GLOSSARY" },
  { title: "Glossary: UEBA", path: "/glossary?q=UEBA", tags: ["UEBA", "behaviour analytics", "anomaly", "ML", "Sentinel"], type: "GLOSSARY" },
  { title: "Glossary: SOC", path: "/glossary?q=SOC", tags: ["SOC", "security operations", "triage", "incident response"], type: "GLOSSARY" },
  { title: "Glossary: NIST IR", path: "/glossary?q=NIST+IR", tags: ["NIST IR", "800-61", "incident response", "lifecycle"], type: "GLOSSARY" },
  { title: "Glossary: Threat Modeling", path: "/glossary?q=Threat+Modeling", tags: ["threat model", "STRIDE", "architecture", "design"], type: "GLOSSARY" },
  { title: "Glossary: DevSecOps", path: "/glossary?q=DevSecOps", tags: ["DevSecOps", "shift left", "CI/CD", "security gates"], type: "GLOSSARY" },
  { title: "Glossary: SCA", path: "/glossary?q=SCA", tags: ["SCA", "software composition", "dependencies", "CVE", "Dependabot"], type: "GLOSSARY" },
  { title: "Glossary: SBOM", path: "/glossary?q=SBOM", tags: ["SBOM", "bill of materials", "supply chain", "Log4Shell"], type: "GLOSSARY" },
  { title: "Glossary: IaC", path: "/glossary?q=IaC", tags: ["IaC", "infrastructure as code", "Terraform", "Bicep", "Checkov"], type: "GLOSSARY" },
  { title: "Glossary: SLSA", path: "/glossary?q=SLSA", tags: ["SLSA", "supply chain", "provenance", "artifact", "build"], type: "GLOSSARY" },
  { title: "Glossary: AKS", path: "/glossary?q=AKS", tags: ["AKS", "kubernetes", "managed", "container", "node pool"], type: "GLOSSARY" },
  { title: "Glossary: Kubernetes", path: "/glossary?q=Kubernetes", tags: ["kubernetes", "pod", "namespace", "deployment", "container"], type: "GLOSSARY" },
  { title: "Glossary: Workload Identity", path: "/glossary?q=Workload+Identity", tags: ["workload identity", "OIDC", "federated", "AKS", "managed identity"], type: "GLOSSARY" },
  { title: "Glossary: OIDC", path: "/glossary?q=OIDC", tags: ["OIDC", "openid connect", "JWT", "federation", "identity"], type: "GLOSSARY" },
  { title: "Glossary: Network Policy (K8s)", path: "/glossary?q=Network+Policy", tags: ["network policy", "kubernetes", "pod-to-pod", "zero trust", "deny-all"], type: "GLOSSARY" },
  { title: "Glossary: OPA / Rego", path: "/glossary?q=OPA", tags: ["OPA", "Rego", "policy", "Gatekeeper", "admission"], type: "GLOSSARY" },
  { title: "Glossary: Falco", path: "/glossary?q=Falco", tags: ["Falco", "runtime security", "syscall", "kubernetes", "CNCF"], type: "GLOSSARY" },
  { title: "Glossary: Admission Controller", path: "/glossary?q=Admission+Controller", tags: ["admission controller", "kubernetes", "Gatekeeper", "OPA", "policy"], type: "GLOSSARY" },
  { title: "Glossary: OAuth 2.0", path: "/glossary?q=OAuth+2.0", tags: ["OAuth", "authorization", "access token", "scopes"], type: "GLOSSARY" },
  { title: "Glossary: SAML", path: "/glossary?q=SAML", tags: ["SAML", "federation", "SSO", "golden SAML", "AD FS"], type: "GLOSSARY" },
  { title: "Glossary: Least Privilege", path: "/glossary?q=Least+Privilege", tags: ["least privilege", "minimum permissions", "RBAC", "PIM"], type: "GLOSSARY" },
  { title: "Glossary: Defense in Depth", path: "/glossary?q=Defense+in+Depth", tags: ["defense in depth", "layered security", "NSG", "Bastion", "JIT"], type: "GLOSSARY" },
  { title: "Glossary: Break-Glass Account", path: "/glossary?q=Break-Glass", tags: ["break glass", "emergency access", "conditional access exclusion"], type: "GLOSSARY" },
  { title: "Glossary: CSA CCM", path: "/glossary?q=CSA+CCM", tags: ["CSA", "CCM", "cloud controls matrix", "compliance", "audit"], type: "GLOSSARY" },
  { title: "Glossary: GDPR", path: "/glossary?q=GDPR", tags: ["GDPR", "privacy", "personal data", "EU", "data residency"], type: "GLOSSARY" },
  { title: "Glossary: PCI-DSS", path: "/glossary?q=PCI-DSS", tags: ["PCI", "payment card", "cardholder data", "encryption"], type: "GLOSSARY" },
  { title: "Glossary: PMK", path: "/glossary?q=PMK", tags: ["PMK", "platform managed key", "microsoft managed", "encryption"], type: "GLOSSARY" },
  { title: "Glossary: Sigstore / Cosign", path: "/glossary?q=Sigstore", tags: ["sigstore", "cosign", "signing", "container image", "supply chain"], type: "GLOSSARY" },
  { title: "Glossary: CAF", path: "/glossary?q=CAF", tags: ["CAF", "cloud adoption framework", "landing zone", "governance"], type: "GLOSSARY" },
  { title: "Blog: Azure Storage Security Checklist", path: "/posts/azure-storage-security-checklist", tags: ["storage", "checklist", "security", "best practices"], type: "BLOG" },
  { title: "Blog: Cloud Security Fundamentals", path: "/posts/cloud-security-fundamentals", tags: ["fundamentals", "cloud security", "basics"], type: "BLOG" },
  { title: "Blog: Oops, I Committed Secrets to Git", path: "/posts/oops-committed-secrets-git", tags: ["secrets", "git", "credentials", "leak", "rotation"], type: "BLOG" },
  { title: "Blog: Docker Security Best Practices", path: "/posts/docker-best-practices", tags: ["Docker", "container", "image", "security"], type: "BLOG" },
  { title: "Blog: Secure Coding Practices", path: "/posts/secure-coding-practices", tags: ["secure coding", "OWASP", "input validation", "injection"], type: "BLOG" },
  { title: "Blog: Monitor Compliance with Azure Policy", path: "/posts/monitor-compliance", tags: ["Azure Policy", "compliance", "monitoring", "CIS"], type: "BLOG" },
  { title: "Blog: Pentester's Essential Ports", path: "/posts/pentester-ports", tags: ["pentesting", "ports", "reconnaissance", "network"], type: "BLOG" },
  { title: "Blog: Why Git Never Forgets", path: "/posts/why-git-never-forgets", tags: ["git", "history", "secrets", "credentials"], type: "BLOG" },
];

const TYPE_CONFIG = {
  MODULE:    { color: "text-blue-400",   border: "border-blue-800/50",   bg: "bg-blue-900/20"   },
  LAB:       { color: "text-red-400",    border: "border-red-800/50",    bg: "bg-red-900/20"    },
  REFERENCE: { color: "text-indigo-400", border: "border-indigo-800/50", bg: "bg-indigo-900/20" },
  BLOG:      { color: "text-gray-400",   border: "border-gray-700",      bg: "bg-gray-800/40"   },
  GLOSSARY:  { color: "text-teal-400",   border: "border-teal-800/50",   bg: "bg-teal-900/20"   },
};

const POPULAR = ["RBAC", "STRIDE", "MFA", "encryption", "Sentinel", "pipeline", "OWASP", "Zero Trust", "AKS", "SAS token"];

export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return INDEX.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }, [query]);

  // Auto-focus input and handle Escape key
  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center pt-[10vh] px-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Panel */}
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-700 shadow-2xl font-mono flex flex-col max-h-[75vh]">
        {/* Header row */}
        <div className="flex items-center gap-3 border-b border-gray-700 px-4 py-3">
          <span className="text-green-400 text-xs flex-shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder='grep -i "your topic" -- modules labs blogs references'
            className="flex-1 bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
          />
          {query && (
            <span className="text-gray-600 text-xs flex-shrink-0">
              {results.length} result{results.length !== 1 ? "s" : ""}
            </span>
          )}
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-300 transition-colors flex-shrink-0 ml-1"
            aria-label="Close search"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results / empty state */}
        <div className="overflow-y-auto flex-1 px-4 py-3">
          {results.length > 0 && (
            <div className="space-y-1.5">
              {results.map((item, i) => {
                const cfg = TYPE_CONFIG[item.type];
                return (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 border border-gray-700 bg-gray-800/40 hover:bg-gray-800 hover:border-gray-600 transition-colors"
                  >
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 border flex-shrink-0 ${cfg.color} ${cfg.border} ${cfg.bg}`}>
                      {item.type}
                    </span>
                    <span className="text-gray-300 text-sm">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          )}

          {query && results.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-gray-600 text-sm">// no matches for &quot;{query}&quot;</p>
              <p className="text-gray-700 text-xs mt-1">Try: RBAC, STRIDE, MFA, Sentinel, encryption...</p>
            </div>
          )}

          {!query && (
            <div>
              <p className="text-gray-600 text-xs mb-3"># popular searches</p>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs text-gray-400 border border-gray-700 px-2 py-1 hover:border-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-gray-800 px-4 py-2 flex gap-4 text-xs text-gray-700">
          <span><kbd className="font-mono">esc</kbd> to close</span>
          <span><kbd className="font-mono">enter</kbd> to navigate</span>
        </div>
      </div>
    </div>
  );
}
