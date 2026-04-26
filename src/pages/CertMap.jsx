import { useState } from "react";
import { Link } from "react-router-dom";

const CERT_MAP = [
  {
    module: 1,
    title: "Identity & Access Management",
    az500: ["AZ-500 1.1 — Manage Microsoft Entra identities", "AZ-500 1.2 — Manage Microsoft Entra authentication", "AZ-500 1.3 — Manage Microsoft Entra authorization", "AZ-500 1.4 — Manage Microsoft Entra application access"],
    ccsp: ["CCSP Domain 1.5 — Identity and Access Management", "CCSP Domain 2.1 — Cloud IAM Design"],
    cis: ["CIS Control 5 — Account Management", "CIS Control 6 — Access Control Management"],
  },
  {
    module: 2,
    title: "Network Security",
    az500: ["AZ-500 2.1 — Plan and implement security for virtual networks", "AZ-500 2.2 — Plan and implement security for private access to Azure resources", "AZ-500 2.3 — Plan and implement security for public access to Azure resources"],
    ccsp: ["CCSP Domain 1.2 — Cloud Computing Concepts and Architectures", "CCSP Domain 3.5 — Network Security"],
    cis: ["CIS Control 12 — Network Infrastructure Management", "CIS Control 13 — Network Monitoring and Defense"],
  },
  {
    module: 3,
    title: "Data Security & Encryption",
    az500: ["AZ-500 3.1 — Plan and implement security for storage", "AZ-500 3.2 — Plan and implement security for Azure SQL Database and Azure SQL Managed Instance", "AZ-500 3.3 — Plan and implement security for Azure Cosmos DB"],
    ccsp: ["CCSP Domain 2.1 — Cloud Data Lifecycle", "CCSP Domain 2.2 — Cloud Data Security", "CCSP Domain 2.3 — Design and Implement Cloud Data Storage Architectures"],
    cis: ["CIS Control 3 — Data Protection"],
  },
  {
    module: 4,
    title: "Application Security",
    az500: ["AZ-500 4.1 — Plan, implement, and manage security for App Service", "AZ-500 4.2 — Plan, implement, and manage security for containers", "AZ-500 4.3 — Plan, implement, and manage security for Key Vault"],
    ccsp: ["CCSP Domain 3.2 — Cloud Application Architecture", "CCSP Domain 3.3 — Securing Cloud Applications"],
    cis: ["CIS Control 16 — Application Software Security"],
  },
  {
    module: 5,
    title: "Cloud Security Posture Management",
    az500: ["AZ-500 5.1 — Plan, implement, and manage security posture management", "AZ-500 5.2 — Implement security monitoring", "AZ-500 5.3 — Plan and implement security for DevOps"],
    ccsp: ["CCSP Domain 4.1 — Cloud Infrastructure Components", "CCSP Domain 4.2 — Design Cloud Infrastructure Security"],
    cis: ["CIS Control 1 — Inventory and Control of Enterprise Assets", "CIS Control 2 — Inventory and Control of Software Assets"],
  },
  {
    module: 6,
    title: "Detection Engineering & Incident Response",
    az500: ["AZ-500 6.1 — Implement security monitoring with Microsoft Sentinel", "AZ-500 6.2 — Configure settings in Microsoft Defender for Cloud"],
    ccsp: ["CCSP Domain 6.1 — Cloud Security Operations", "CCSP Domain 6.2 — Incident Management"],
    cis: ["CIS Control 8 — Audit Log Management", "CIS Control 17 — Incident Response Management"],
  },
  {
    module: 7,
    title: "Security Architecture Review",
    az500: ["AZ-500 (integrative — all domains)", "AZ-500 — Security Architecture Design"],
    ccsp: ["CCSP Domain 1 — Cloud Concepts, Architecture and Design", "CCSP Domain 5 — Cloud Security Governance, Risk, and Compliance"],
    cis: ["CIS IG1/IG2/IG3 — Implementation Groups cross-cutting"],
  },
  {
    module: 8,
    title: "DevSecOps",
    az500: ["AZ-500 5.3 — Plan and implement security for DevOps", "AZ-400 — Implement security in the pipeline"],
    ccsp: ["CCSP Domain 3.3 — Securing Cloud Applications (SDLC)", "CCSP Domain 3.1 — Cloud Application Architecture"],
    cis: ["CIS Control 16 — Application Software Security", "CIS Software Supply Chain Security Guide"],
  },
  {
    module: 9,
    title: "Kubernetes & AKS Security",
    az500: ["AZ-500 4.2 — Plan, implement, and manage security for containers", "AZ-500 2.1 — Virtual network security"],
    ccsp: ["CCSP Domain 3.2 — Cloud Application Architecture (containers)", "CCSP Domain 4.2 — Cloud Infrastructure Security"],
    cis: ["CIS Kubernetes Benchmark v1.8", "CIS Docker Benchmark"],
  },
];

export default function CertMap() {
  const [activeTab, setActiveTab] = useState("az500");

  const tabs = [
    { id: "az500", label: "AZ-500", color: "text-blue-400", border: "border-blue-500", bg: "bg-blue-900/20" },
    { id: "ccsp", label: "CCSP", color: "text-purple-400", border: "border-purple-500", bg: "bg-purple-900/20" },
    { id: "cis", label: "CIS Controls", color: "text-green-400", border: "border-green-500", bg: "bg-green-900/20" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span>
          <span className="text-gray-400">cert-map</span>
        </div>

        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat exam_objectives_map.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Certification Exam Objective Map</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            Each module in this curriculum maps directly to real exam objectives. Use this to identify exactly which certification domains you've covered — and what gaps remain.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a href="https://learn.microsoft.com/en-us/certifications/azure-security-engineer/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 border border-blue-800/50 px-3 py-1 hover:border-blue-600 transition-colors">AZ-500 Exam Page ↗</a>
            <a href="https://www.isc2.org/certifications/ccsp/ccsp-certification-exam-outline" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 border border-purple-800/50 px-3 py-1 hover:border-purple-600 transition-colors">CCSP Exam Outline ↗</a>
            <a href="https://www.cisecurity.org/controls/" target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 border border-green-800/50 px-3 py-1 hover:border-green-600 transition-colors">CIS Controls ↗</a>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-6 border-b border-gray-700 pb-3">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs font-mono font-bold px-3 py-1.5 border transition-colors ${
                activeTab === tab.id
                  ? `${tab.color} ${tab.border} ${tab.bg}`
                  : "text-gray-500 border-gray-700 hover:border-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mapping table */}
        <div className="space-y-3">
          {CERT_MAP.map(row => (
            <div key={row.module} className="border border-gray-700 bg-gray-800/40">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700/50">
                <span className="text-xs font-mono text-gray-600 flex-shrink-0">M{row.module}</span>
                <Link to={`/module${row.module}`} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                  {row.title} →
                </Link>
              </div>
              <div className="px-4 py-3">
                <ul className="space-y-1">
                  {row[activeTab]?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className={`flex-shrink-0 mt-0.5 ${tabs.find(t=>t.id===activeTab)?.color}`}>▸</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-gray-500 text-xs mb-2"># study tip</div>
          <p className="text-gray-400 text-sm">
            Completing all 9 modules gives you substantial coverage of <span className="text-blue-400">AZ-500</span> and <span className="text-purple-400">CCSP</span>. These are practical skills labs, not exam dumps — the goal is to understand the 'why' behind each objective, not memorise answers.
          </p>
        </div>
      </div>
    </div>
  );
}
