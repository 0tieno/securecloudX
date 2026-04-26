import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

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
];

const TYPE_CONFIG = {
  MODULE:    { color: "text-blue-400",   border: "border-blue-800/50",   bg: "bg-blue-900/20"   },
  LAB:       { color: "text-red-400",    border: "border-red-800/50",    bg: "bg-red-900/20"    },
  REFERENCE: { color: "text-indigo-400", border: "border-indigo-800/50", bg: "bg-indigo-900/20" },
  BLOG:      { color: "text-gray-400",   border: "border-gray-700",      bg: "bg-gray-800/40"   },
};

export default function Search() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return INDEX.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span>
          <span className="text-gray-400">search</span>
        </div>

        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ grep -r &quot;query&quot; /securecloudX/</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Search</h1>
        </div>

        <input
          autoFocus
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='$ grep -i "your topic" -- modules labs blogs references'
          className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-500 font-mono mb-6"
        />

        {query && (
          <div className="text-gray-600 text-xs mb-4">
            {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-2">
            {results.map((item, i) => {
              const cfg = TYPE_CONFIG[item.type];
              return (
                <Link
                  key={i}
                  to={item.path}
                  className="flex items-center gap-3 p-3 border border-gray-700 bg-gray-800/40 hover:bg-gray-800 hover:border-gray-600 transition-colors block"
                >
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 border flex-shrink-0 ${cfg.color} ${cfg.border} ${cfg.bg}`}>
                    {item.type}
                  </span>
                  <span className="text-gray-300 text-sm hover:text-white transition-colors">{item.title}</span>
                </Link>
              );
            })}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-sm">// no matches found for &quot;{query}&quot;</p>
            <p className="text-gray-700 text-xs mt-2">Try: RBAC, STRIDE, MFA, Sentinel, encryption, pipeline...</p>
          </div>
        )}

        {!query && (
          <div className="p-4 border border-gray-700 bg-gray-800/50">
            <div className="text-gray-500 text-xs mb-3"># popular searches</div>
            <div className="flex flex-wrap gap-2">
              {["RBAC", "STRIDE", "MFA", "encryption", "Sentinel", "pipeline", "OWASP", "Zero Trust", "AKS", "SAS token", "CVE", "SBOM"].map(tag => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="text-xs font-mono text-gray-400 border border-gray-700 px-2 py-1 hover:border-gray-500 hover:text-gray-300 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
