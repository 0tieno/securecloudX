import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";
import ArchitectNote from "../../../components/ArchitectNote";

const TOTAL = 7;
const OBJECTIVES = [
  "Understand data classification (public, internal, confidential, highly confidential) and why it drives security decisions",
  "Explain encryption at rest and in transit — how Azure protects data automatically and what you must configure",
  "Use Azure Key Vault for customer-managed encryption keys (CMK)",
  "Control access to storage using Shared Access Signatures (SAS) with least-privilege scope",
  "Implement data protection features: soft delete, versioning, immutability policies",
  "Understand Azure Storage security architecture: network rules, Private Endpoints, Microsoft Defender for Storage",
];

const Day3 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5,6,7]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={3} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-3-data-security</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_3_data_security_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 3: Data Security & Encryption</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Data is the ultimate target. Attackers don't breach networks for fun — they breach them to steal, encrypt, or destroy data. This module teaches you how Azure protects data at rest and in transit, how to classify data by sensitivity, and how to implement storage security controls used in real enterprise environments.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-500">{checked.size}/{TOTAL} complete</span>
            <span className="text-gray-700"># click items to check off</span>
          </div>
          <div className="w-full bg-gray-800 border border-gray-700 h-1.5">
            <div className="bg-red-500 h-full transition-all duration-500" style={{ width: `${(checked.size / TOTAL) * 100}%` }} />
          </div>
        </div>
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-blue-400 text-xs mb-3">$ cat learning_objectives.sh</div>
          <ul className="space-y-2">
            {OBJECTIVES.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&gt;</span><span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end gap-4 text-xs text-gray-600 mb-3">
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-12">
          <PhaseStepItem number={1} type="READ" title="Domain & Goal"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p><span className="text-gray-500">Domain:</span> Data Security & Encryption</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Protect data at rest and in transit using Azure encryption, access controls, classification, and storage security features.</p>
            <p className="mt-2 text-gray-500 text-xs">Industry alignment: AZ-500 (Secure data and applications — 20-25%), CIS Azure Benchmark Section 3 (Storage Accounts), NIST 800-53 SC-28 (Protection of Information at Rest), SC-8 (Transmission Confidentiality)</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="Data Classification — The Foundation of Data Security"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Before you can protect data, you need to know <em>what</em> you're protecting. Data classification assigns sensitivity levels that determine which security controls apply.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Standard Classification Levels</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold w-24 flex-shrink-0">Public</span>
                  <div>Marketing materials, public docs. No impact if exposed. <span className="text-gray-500">→ Basic controls</span></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold w-24 flex-shrink-0">Internal</span>
                  <div>Internal memos, policies. Low impact if exposed. <span className="text-gray-500">→ Access control + encryption</span></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-24 flex-shrink-0">Confidential</span>
                  <div>Customer data, financial records, PII. Significant impact if exposed. <span className="text-gray-500">→ Encryption + RBAC + audit + Private Endpoint</span></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-24 flex-shrink-0">Highly Conf.</span>
                  <div>Health records (PHI), payment data (PCI), trade secrets. Severe legal/financial impact. <span className="text-gray-500">→ CMK + Private Endpoint + immutability + full audit</span></div>
                </div>
              </div>
            </div>
            <p className="mt-2 text-gray-500 text-xs">In the labs, you'll work with all levels: public website content (Lab 2) and private company data (Lab 3).</p>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="READ" title="Encryption — At Rest and In Transit"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>Azure encrypts data automatically in most services, but understanding <em>how</em> is critical for security assessments and compliance.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Encryption at Rest</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Azure Storage</span> — AES-256 encryption enabled by default (SSE). You cannot disable it.</li>
                <li>• <span className="text-yellow-400">Microsoft-managed keys (MMK)</span> — Default. Azure manages the key lifecycle. Zero config needed.</li>
                <li>• <span className="text-yellow-400">Customer-managed keys (CMK)</span> — You control the key in Key Vault. Required for some compliance frameworks. You choose when to rotate.</li>
                <li>• <span className="text-gray-300">Double encryption</span> — Infrastructure + service layer encryption (for highly regulated data).</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Encryption in Transit</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">HTTPS enforcement</span> — "Secure transfer required" forces TLS for all storage operations</li>
                <li>• <span className="text-gray-300">Minimum TLS 1.2</span> — Blocks older, vulnerable TLS versions (1.0, 1.1)</li>
                <li>• <span className="text-gray-300">SMB 3.0 encryption</span> — For Azure Files connections</li>
              </ul>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/storage/common/storage-service-encryption?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure Storage encryption for data at rest</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="READ" title="Storage Security Architecture"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p>Azure Storage has multiple layers of security that you control:</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Network rules</span> — Restrict which networks/IPs can access the storage account</li>
                <li>• <span className="text-gray-300">Private Endpoints</span> — Move storage into your VNet, removing public internet access entirely (from Module 2)</li>
                <li>• <span className="text-gray-300">Shared Access Signatures (SAS)</span> — Time-limited, scope-limited tokens for delegated access</li>
                <li>• <span className="text-gray-300">Storage account keys</span> — Full access keys (avoid using these — prefer Managed Identity or SAS)</li>
                <li>• <span className="text-gray-300">Azure RBAC</span> — Role-based access at the account, container, or blob level</li>
                <li>• <span className="text-gray-300">Soft delete & versioning</span> — Protect against accidental or malicious deletion</li>
                <li>• <span className="text-gray-300">Immutability policies</span> — WORM (Write Once, Read Many) for compliance/legal hold</li>
                <li>• <span className="text-gray-300">Defender for Storage</span> — Detects unusual access patterns, malware uploads, data exfiltration attempts</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-red-800/50 bg-red-900/10">
              <p className="text-red-400 text-xs">The #1 data breach pattern in cloud: a storage account with public anonymous access left enabled on a container holding confidential data. You'll see this firsthand in the labs — and learn when anonymous access is appropriate vs. dangerous.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/storage/common/storage-security-guide?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure Storage security guide</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="SCENARIO" title="Real-World Scenario: Exposed Patient Records"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>A healthcare provider stores patient records (PHI) in Azure Blob Storage. A developer creates a container with <span className="text-yellow-400">anonymous access enabled</span> for a quick demo and forgets to change it. Months later, security researchers discover the container is publicly accessible — thousands of patient records exposed.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">What Enterprise Controls Would Have Prevented This</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-yellow-400">Azure Policy</span> → Deny public anonymous access on storage accounts (from Module 5)</li>
                <li>• <span className="text-yellow-400">Private Endpoint</span> → Storage not reachable from the internet</li>
                <li>• <span className="text-yellow-400">Defender for Storage</span> → Alert on anonymous access to sensitive containers</li>
                <li>• <span className="text-yellow-400">Data classification</span> → PHI classified as "Highly Confidential" with mandatory controls</li>
              </ul>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="NOTE" title="Key Concepts Summary"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Azure provides <span className="text-gray-300">AES-256 encryption at rest</span> by default — always on, cannot be disabled.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Use <span className="text-gray-300">Customer-managed keys (CMK)</span> in Key Vault when compliance requires you to control key rotation.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Enable <span className="text-gray-300">secure transfer required</span> and <span className="text-gray-300">TLS 1.2</span> to protect data in transit.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Use <span className="text-gray-300">SAS tokens</span> for time-limited, least-privilege delegated access — never share storage account keys.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Soft delete + versioning</span> protect against accidental deletion and overwrites.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="LAB" title="Your Task: Complete Data Security Labs (3 Phases)"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>This module has 3 hands-on lab phases that build on each other:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span><strong className="text-gray-300">Lab 01</strong> — Basic Storage: Create a storage account, configure security settings, understand redundancy</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span><strong className="text-gray-300">Lab 02</strong> — Public Website Storage: Configure blob access, RA-GRS redundancy, soft delete, versioning</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span><strong className="text-gray-300">Lab 03</strong> — Private Storage: GRS, SAS tokens, lifecycle management, object replication</span></li>
            </ul>
            <div className="mt-3"><Link to="/module3/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link></div>
          </PhaseStepItem>

          <PhaseStepItem number={8} type="ARCHITECT" title="Cloud Architect's Perspective — Data Security"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>

            <ArchitectNote title="Core Design Principles">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Classify before you encrypt.</span> Encryption without classification is theatre. You must know what data is sensitive to apply the right controls — public data doesn't need CMK; HIPAA/PCI data does. Sensitivity labels drive DLP, encryption, and access decisions.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">CMK vs PMK — it's a compliance and ownership decision.</span> Platform-managed keys (PMK) are secure for most workloads. Choose Customer-Managed Keys (CMK) in Azure Key Vault when compliance mandates you own the key lifecycle (PCI-DSS, HIPAA, FedRAMP) or when you need to revoke access by destroying the key.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">SAS tokens must be short-lived and narrow-scoped.</span> A shared access signature with a 1-year expiry and full permissions on a container is effectively a permanent credential. Design SAS generation into your application layer with the minimum permissions and maximum 1-hour expiry for user delegation SAS.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Immutability policies = ransomware protection for backups.</span> WORM (Write Once Read Many) immutability prevents any principal — including administrators — from deleting or modifying blob data during the retention period. This is the last line of defence when ransomware has compromised admin credentials.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Disable public blob access at the storage account level.</span> The default allows it. Every Azure storage account should have <code className="text-yellow-400">allowBlobPublicAccess: false</code> enforced via Azure Policy. This single control would have prevented dozens of major data breaches.</span></li>
              </ul>
            </ArchitectNote>

            <ArchitectNote title="STRIDE Threat Model — Data Layer">
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-indigo-800/50">
                      <th className="text-left text-indigo-300 py-1 pr-4 font-semibold">Threat</th>
                      <th className="text-left text-indigo-300 py-1 pr-4 font-semibold">Attack Vector</th>
                      <th className="text-left text-indigo-300 py-1 font-semibold">Mitigation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-blue-400 font-bold">Info Disclosure</td>
                      <td className="py-1.5 pr-4">Public storage access, leaked SAS tokens in logs or repos</td>
                      <td className="py-1.5">Disable public access, short-lived SAS, Defender for Storage anomaly detection</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-orange-400 font-bold">Tampering</td>
                      <td className="py-1.5 pr-4">No immutability → attacker encrypts/deletes backup data after compromise</td>
                      <td className="py-1.5">WORM immutability policies, soft delete, versioning with locked retention</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-gray-400 font-bold">Repudiation</td>
                      <td className="py-1.5 pr-4">No audit log → breach discovered, no forensics trail exists</td>
                      <td className="py-1.5">Storage diagnostic logs → Log Analytics, Defender for Storage alert stream</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-4 text-red-400 font-bold">Elev. of Privilege</td>
                      <td className="py-1.5 pr-4">Storage account key grants full access; key leaked via env var or config</td>
                      <td className="py-1.5">Disable storage account key access, use Azure AD auth + RBAC (Storage Blob Data Reader/Contributor)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Compliance Mapping">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CIS Azure Benchmark v2.0</p>
                  <p className="text-gray-400">Section 3 — Storage Accounts (Controls 3.1–3.15). Covers secure transfer, public access, key rotation, logging, and infrastructure encryption.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">NIST SP 800-111</p>
                  <p className="text-gray-400">Guide to Storage Encryption Technologies for End User Devices. Key management lifecycle principles — generation, distribution, storage, rotation, destruction — apply directly to CMK design in Azure Key Vault.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CSA CCM v4 — DSP Domain</p>
                  <p className="text-gray-400">Data Security & Privacy Lifecycle Management (DSP-01 through DSP-17). Classification, encryption, retention, and secure disposal requirements for cloud-stored data.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">GDPR Art. 25 &amp; PCI-DSS Req. 3</p>
                  <p className="text-gray-400">Data Protection by Design (GDPR) and Protection of Stored Cardholder Data (PCI-DSS). Both require encryption of sensitive data at rest with documented key management procedures.</p>
                </div>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Real-World Incidents — What Happens When This Fails">
              <div className="space-y-3">
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Microsoft Power Apps — 38 Million Records Exposed (2021)</p>
                  <p className="text-gray-400 text-xs">Multiple organisations (American Airlines, Ford, NY MTA, Indiana state government) used Power Apps portals with table permissions set to public by default. 38 million rows of sensitive data — COVID vaccination status, Social Security Numbers, employee records — were accessible without authentication. <span className="text-gray-300">Lesson: platform defaults are rarely secure defaults. Architect must explicitly define access controls — deny-by-default, not allow-by-default.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Toyota Connected Car Data — 2.15 Million Records for 10 Years (2023)</p>
                  <p className="text-gray-400 text-xs">Toyota's cloud environment exposed vehicle location data for ~2.15 million customers for a decade (2013–2023) due to a misconfigured cloud database with public access. No monitoring was in place to detect the exposure. <span className="text-gray-300">Lesson: Defender for Storage + Azure Policy (deny public blob access) would have flagged this on day one. Security posture monitoring is not optional.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Cognyte — 5 Billion Records (2021)</p>
                  <p className="text-gray-400 text-xs">Cybersecurity intelligence firm Cognyte left an Elasticsearch database containing 5 billion user records (from previous breaches they were analysing) openly accessible with no authentication for at least 4 days before it was discovered by a security researcher. <span className="text-gray-300">Lesson: data you hold about breaches is itself a high-value target. Every data store must be private-network-only with access logging enabled from day one.</span></p>
                </div>
              </div>
            </ArchitectNote>

          </PhaseStepItem>
        </div>
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module2" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 2
          </Link>
          <Link to="/module3/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 3 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day3;
