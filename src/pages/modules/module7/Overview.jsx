import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";
import ArchitectNote from "../../../components/ArchitectNote";

const TOTAL = 7;
const OBJECTIVES = [
  "Design and deploy a complete secure Azure architecture applying skills from all modules",
  "Perform threat modeling using the STRIDE framework to identify risks before deployment",
  "Conduct a security architecture review against CIS Azure Benchmark controls",
  "Validate your Secure Score in Defender for Cloud and remediate findings",
  "Write a professional security assessment report with executive summary",
];

const Day7 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5,6,7]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={7} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-7-capstone</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_7_capstone_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 7: Capstone — Security Architecture Review</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            This is the final module. You'll deploy a multi-tier Azure environment, threat model it using STRIDE, review it against CIS benchmarks, remediate findings, and deliver a professional security assessment report. This mirrors what cloud security engineers do in real engagements.
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
            <p><span className="text-gray-500">Domain:</span> Security Architecture Review & Assessment</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Deploy a secure Azure environment, threat model it, review it against industry benchmarks, and produce a professional security assessment deliverable.</p>
            <p className="mt-2 text-gray-500 text-xs">Industry alignment: SANS SEC549 (Cloud Security Architecture), AZ-500 (all domains), CIS Azure Benchmark v2.0, Microsoft Cloud Security Benchmark (MCSB), STRIDE Threat Modeling (Microsoft SDL)</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="STRIDE Threat Modeling"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p><span className="text-yellow-400">STRIDE</span> is Microsoft's threat modeling framework. Before deploying anything, you identify what could go wrong by analyzing each component against six threat categories.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-6 flex-shrink-0">S</span>
                  <div><span className="text-gray-300">Spoofing</span> — Can someone pretend to be a legitimate user or service? <span className="text-gray-500">→ Mitigate: MFA, Managed Identity, certificate auth</span></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-6 flex-shrink-0">T</span>
                  <div><span className="text-gray-300">Tampering</span> — Can someone modify data in transit or at rest? <span className="text-gray-500">→ Mitigate: TLS, encryption, immutability policies</span></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-6 flex-shrink-0">R</span>
                  <div><span className="text-gray-300">Repudiation</span> — Can someone deny their actions? <span className="text-gray-500">→ Mitigate: Audit logs, sign-in logs, activity logs</span></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-6 flex-shrink-0">I</span>
                  <div><span className="text-gray-300">Information Disclosure</span> — Can data leak to unauthorized parties? <span className="text-gray-500">→ Mitigate: Private Endpoints, encryption, RBAC</span></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-6 flex-shrink-0">D</span>
                  <div><span className="text-gray-300">Denial of Service</span> — Can someone make the service unavailable? <span className="text-gray-500">→ Mitigate: DDoS Protection, rate limiting, redundancy</span></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold w-6 flex-shrink-0">E</span>
                  <div><span className="text-gray-300">Elevation of Privilege</span> — Can someone gain higher access than intended? <span className="text-gray-500">→ Mitigate: Least-privilege RBAC, PIM, Conditional Access</span></div>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/security/develop/threat-modeling-tool?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Threat Modeling Tool</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="READ" title="CIS Azure Benchmark — The Security Baseline"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>The <span className="text-yellow-400">CIS Microsoft Azure Foundations Benchmark</span> is the industry-standard checklist for securing Azure environments. In your capstone, you'll validate your deployment against key CIS sections.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">CIS Benchmark Sections You've Covered</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Section 1: IAM</span> — MFA, Conditional Access, PIM, least-privilege RBAC <span className="text-gray-600">(Module 1)</span></li>
                <li>• <span className="text-gray-300">Section 3: Storage</span> — Encryption, HTTPS, key management, private access <span className="text-gray-600">(Module 3)</span></li>
                <li>• <span className="text-gray-300">Section 6: Networking</span> — NSGs, no public IPs, Bastion, segmentation <span className="text-gray-600">(Module 2)</span></li>
                <li>• <span className="text-gray-300">Section 7: VMs</span> — No public access, managed disks, endpoint protection <span className="text-gray-600">(Module 2)</span></li>
                <li>• <span className="text-gray-300">Section 9: AppService</span> — HTTPS, TLS 1.2, authentication, managed identity <span className="text-gray-600">(Module 4)</span></li>
                <li>• <span className="text-gray-300">Section 10: Monitoring</span> — Activity logs, Defender for Cloud, Sentinel <span className="text-gray-600">(Modules 5-6)</span></li>
              </ul>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/governance/policy/samples/cis-azure-2-0-0?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: CIS Azure Benchmark v2.0 policy initiative</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="READ" title="The Security Assessment Report"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p>The final deliverable is a professional security assessment report — the same type of document that cloud security consultants deliver to clients. This is portfolio-worthy.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Report Structure</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-yellow-400">Executive Summary</span> — 1-page overview for non-technical stakeholders (overall risk posture, critical findings, Secure Score)</li>
                <li>• <span className="text-yellow-400">Architecture Diagram</span> — Visual of deployed resources with security controls labeled</li>
                <li>• <span className="text-yellow-400">STRIDE Threat Model</span> — Table mapping each component to threats and mitigations</li>
                <li>• <span className="text-yellow-400">CIS Benchmark Assessment</span> — Pass/fail for each control you reviewed</li>
                <li>• <span className="text-yellow-400">Findings & Recommendations</span> — Severity-rated findings with remediation steps</li>
                <li>• <span className="text-yellow-400">Defender for Cloud Summary</span> — Secure Score, resolved vs. remaining recommendations</li>
              </ul>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="SCENARIO" title="Capstone Scenario: SecureMed Health Platform"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>You are the cloud security engineer for <span className="text-yellow-400">SecureMed</span>, a healthcare startup launching a patient portal on Azure. The platform must comply with HIPAA and handle Protected Health Information (PHI).</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Architecture Requirements</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Web App</span> — Patient-facing portal (App Service)</li>
                <li>• <span className="text-gray-300">Database</span> — Patient records (Azure Storage or SQL)</li>
                <li>• <span className="text-gray-300">Secrets</span> — Connection strings, API keys (Key Vault)</li>
                <li>• <span className="text-gray-300">Identity</span> — Admin users, app service identity (Entra ID)</li>
                <li>• <span className="text-gray-300">Network</span> — Multi-tier VNet with segmented subnets</li>
                <li>• <span className="text-gray-300">Monitoring</span> — Threat detection and compliance reporting</li>
              </ul>
            </div>
            <p className="mt-2 text-gray-500 text-xs">Your task: deploy this architecture, secure every layer, threat model it, and deliver a security assessment report.</p>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="NOTE" title="Skills You'll Demonstrate"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <div className="p-3 border border-gray-700 bg-gray-800">
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Module 1</span> — Zero Trust IAM: RBAC, Conditional Access, Managed Identity</li>
                <li>• <span className="text-gray-300">Module 2</span> — Network segmentation: VNet, NSGs, Bastion, no public IPs</li>
                <li>• <span className="text-gray-300">Module 3</span> — Data encryption: SSE, HTTPS, TLS 1.2, soft delete</li>
                <li>• <span className="text-gray-300">Module 4</span> — App security: Key Vault, Managed Identity, EasyAuth, HTTPS Only</li>
                <li>• <span className="text-gray-300">Module 5</span> — CSPM: Defender for Cloud, Azure Policy, Secure Score</li>
                <li>• <span className="text-gray-300">Module 6</span> — Detection: Sentinel analytics rules, incident response</li>
                <li>• <span className="text-gray-300">Module 7</span> — STRIDE threat modeling, CIS benchmark review, security report</li>
              </ul>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="LAB" title="Your Task: Build, Secure, Assess, Report"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>Deploy the SecureMed architecture and deliver a complete security assessment:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Deploy the multi-tier architecture (VNet, App Service, Storage, Key Vault)</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Apply all security controls from Modules 1-6</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Perform STRIDE threat modeling on every component</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Review against CIS Azure Benchmark controls</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Write and deliver your security assessment report</span></li>
            </ul>
            <div className="mt-3"><Link to="/module7/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_capstone.sh</Link></div>
          </PhaseStepItem>

          <PhaseStepItem number={8} type="ARCHITECT" title="Cloud Architect's Perspective — Security Architecture & Threat Modelling"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>

            <ArchitectNote title="Core Design Principles">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Security architecture review is not a compliance checkbox.</span> A checkbox review asks “did we implement control X?” A real architecture review asks “is our entire threat surface covered, and does our defence-in-depth hold if any one layer fails?” These are fundamentally different questions.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">STRIDE threat modelling before deployment = 10× cheaper to fix.</span> The cost of fixing a security flaw in design is ~1x. In development: ~6x. In production: ~100x. Performing STRIDE on your architecture diagram before writing a single line of code is the highest-ROI security activity in the development lifecycle.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Every architectural component must encode Zero Trust.</span> No implicit trust between services. Every service call is authenticated (managed identity), authorised (RBAC), encrypted (TLS 1.2+), and logged (diagnostic settings). Zero Trust is an architecture property, not a product feature.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Risk = Likelihood × Impact. Architects prioritise by this formula.</span> A critical vulnerability with low exploitation likelihood may rank below a medium vulnerability with high likelihood. Remediation priority must be driven by risk calculus, not severity labels alone.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Document your architecture trust boundaries explicitly.</span> Every data flow that crosses a trust boundary (internet → DMZ, DMZ → internal, internal → data tier) must have an explicit security control. Un-documented trust boundaries become blind spots in every future security review.</span></li>
              </ul>
            </ArchitectNote>

            <ArchitectNote title="Full STRIDE Architecture Assessment Framework">
              <p className="text-gray-400 text-xs mb-3">For each component in your architecture diagram, apply the full STRIDE assessment. This table shows the synthesis of all prior modules into a unified capstone threat model:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-indigo-800/50">
                      <th className="text-left text-indigo-300 py-1 pr-3 font-semibold">Layer</th>
                      <th className="text-left text-indigo-300 py-1 pr-3 font-semibold">Component</th>
                      <th className="text-left text-indigo-300 py-1 pr-3 font-semibold">Top STRIDE Threat</th>
                      <th className="text-left text-indigo-300 py-1 font-semibold">Arch. Control</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-3 text-cyan-400">Identity</td>
                      <td className="py-1.5 pr-3">Entra ID / RBAC</td>
                      <td className="py-1.5 pr-3">Spoofing, EoP</td>
                      <td className="py-1.5">PIM, Conditional Access, MFA</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-3 text-cyan-400">Network</td>
                      <td className="py-1.5 pr-3">VNet / NSG / Firewall</td>
                      <td className="py-1.5 pr-3">Tampering, Info Disclosure</td>
                      <td className="py-1.5">Hub-Spoke, Private Endpoints, TLS</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-3 text-cyan-400">Data</td>
                      <td className="py-1.5 pr-3">Storage / Key Vault</td>
                      <td className="py-1.5 pr-3">Info Disclosure, Tampering</td>
                      <td className="py-1.5">CMK, WORM, no public access, RBAC</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-3 text-cyan-400">Application</td>
                      <td className="py-1.5 pr-3">App Service / API Mgmt</td>
                      <td className="py-1.5 pr-3">Tampering, EoP</td>
                      <td className="py-1.5">Managed Identity, input validation, API gateway auth</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-3 text-cyan-400">Posture</td>
                      <td className="py-1.5 pr-3">Defender for Cloud</td>
                      <td className="py-1.5 pr-3">Repudiation</td>
                      <td className="py-1.5">Policy-as-code, immutable logs, Secure Score</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-3 text-cyan-400">Detection</td>
                      <td className="py-1.5 pr-3">Sentinel / KQL</td>
                      <td className="py-1.5 pr-3">All categories</td>
                      <td className="py-1.5">UEBA, MITRE-mapped rules, SOAR playbooks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Compliance Mapping">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">NIST SP 800-160 Vol. 1</p>
                  <p className="text-gray-400">Engineering Trustworthy Secure Systems. The primary reference for security systems engineering methodology — how to embed security throughout the entire system lifecycle from concept to decommission.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">SABSA Framework</p>
                  <p className="text-gray-400">Sherwood Applied Business Security Architecture. A risk-driven enterprise security architecture framework. Maps business attributes → risks → controls → mechanisms across six architectural layers (contextual to component).</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CSA CCM v4 — Full Coverage</p>
                  <p className="text-gray-400">The capstone architecture should demonstrate coverage across all 17 CCM domains. The Cloud Controls Matrix is the most comprehensive cloud-specific control framework and maps to ISO 27001, NIST 800-53, PCI-DSS, and HIPAA.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">Microsoft STRIDE + SDL</p>
                  <p className="text-gray-400">Microsoft's Security Development Lifecycle (SDL) is the process framework that operationalises STRIDE. Threat modelling is a mandatory SDL activity. Azure Threat Modeling Tool automates STRIDE assessment for Azure architectures.</p>
                </div>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Real-World Incidents — What Happens When This Fails">
              <div className="space-y-3">
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Colonial Pipeline — $4.4M Ransom, National Fuel Shortage (2021)</p>
                  <p className="text-gray-400 text-xs">DarkSide ransomware group compromised Colonial Pipeline's IT network via a single VPN account with no MFA enabled. The account credentials were found in a dark web leak. Colonial shut down 5,500 miles of pipeline proactively, causing fuel shortages across the US East Coast for 6 days. $4.4M ransom paid. <span className="text-gray-300">Lesson: a $5/month MFA licence per user would have prevented a $4.4M ransom and a national infrastructure crisis. Architecture must mandate MFA on every remote access path — VPN, RDP, SSH, all of it. No exceptions.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Twitter Bitcoin Scam — Insider Threat + Social Engineering (2020)</p>
                  <p className="text-gray-400 text-xs">Attackers used phone-based social engineering to convince Twitter employees to hand over credentials to internal admin tools. 130 high-profile accounts (Obama, Biden, Musk, Apple, etc.) were hijacked to run a Bitcoin scam. The attack succeeded entirely through human manipulation — no technical exploit. <span className="text-gray-300">Lesson: architecture must assume insider threat and social engineering will succeed eventually. Privilege separation (no single admin tool has full platform control), access logging on internal tools, and break-glass monitoring are architectural requirements, not suggestions.</span></p>
                </div>
              </div>
            </ArchitectNote>

          </PhaseStepItem>
        </div>
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module6" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 6
          </Link>
          <Link to="/module7/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 7 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day7;
