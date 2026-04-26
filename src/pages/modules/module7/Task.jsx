import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 10;
const OBJECTIVES = [
  "Deploy a multi-tier Azure architecture (VNet, App Service, Storage, Key Vault)",
  "Apply security controls from every module to the deployment",
  "Perform STRIDE threat modeling and CIS benchmark review",
  "Deliver a professional security assessment report",
];

const Task7 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_7_task", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-7-capstone</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./capstone_securemed_assessment.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 7 Capstone: SecureMed Security Assessment</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Deploy the SecureMed patient portal architecture, secure every layer, threat model it, and deliver a professional security assessment report.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">~60 min read &nbsp;·&nbsp; Lab: ~120 min &nbsp;·&nbsp; Est. cost: ~$1–3 (VMs, delete when done)</p>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-500">{checked.size}/{TOTAL} complete</span>
            <span className="text-gray-700"># check off steps as you go</span>
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7,8,9]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-10">
          <PhaseStepItem number={1} type="PREP" title="Capstone Architecture Overview"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p className="text-xs text-gray-500 mb-2">You'll build a healthcare patient portal with these components:</p>
            <div className="p-3 border border-gray-700 bg-gray-800">
              <pre className="text-sm text-gray-400 whitespace-pre leading-relaxed">{`┌─────────────────────────────────────────┐
│            SecureMed Architecture        │
├─────────────────────────────────────────┤
│                                         │
│  [Entra ID] ─── Conditional Access      │
│       │         + MFA + RBAC            │
│       ▼                                 │
│  [App Service] ─── EasyAuth             │
│       │             + HTTPS Only        │
│       │             + TLS 1.2           │
│       ▼                                 │
│  [Managed Identity]                     │
│       │                                 │
│       ├──► [Key Vault]                  │
│       │     Secrets, CMK                │
│       │     Soft-delete + Purge Protect │
│       │                                 │
│       └──► [Storage Account]            │
│             SSE, Private Container      │
│             Secure Transfer Required    │
│                                         │
│  [VNet] ── NSGs ── No Public IPs        │
│                                         │
│  [Defender for Cloud] + [Sentinel]      │
│   Secure Score        Analytics Rules   │
└─────────────────────────────────────────┘`}</pre>
            </div>
            <p className="mt-2 text-gray-500 text-xs">Create a resource group: <code className="text-gray-300">rg-securemed-capstone</code></p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="AI" title="AI Prompt — Capstone Architecture Guide"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy this into your AI assistant for a personalized capstone walkthrough:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "I'm completing a cloud security capstone project. I need to deploy a healthcare patient portal (SecureMed) on Azure with these components: (1) App Service with EasyAuth and Managed Identity, (2) Key Vault with RBAC access model storing a database connection string, (3) Storage account with secure transfer, TLS 1.2, and a private container, (4) VNet with NSGs — no public IP addresses, (5) Defender for Cloud with Secure Score review, (6) Sentinel with at least one analytics rule. After deployment, I need to: perform STRIDE threat modeling on each component, review the deployment against CIS Azure Foundations Benchmark sections 1, 3, 6, 9, and 10, and write a security assessment report with executive summary, architecture diagram, threat model table, and findings. Guide me through each step with Azure Portal instructions."
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="PRACTICE" title="Phase 1: Deploy the Infrastructure"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Deploy all SecureMed resources. Apply security controls from Modules 1-4 as you build.</p>
            <div className="space-y-3">
              <div className="p-2 border-l-2 border-blue-500/50">
                <p className="text-gray-300 text-sm font-semibold">Identity (Module 1)</p>
                <ul className="space-y-1 text-sm text-gray-400 mt-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create an admin user in Entra ID</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Assign <code className="text-gray-300">Contributor</code> role scoped to <code className="text-gray-300">rg-securemed-capstone</code> only</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a Conditional Access policy requiring MFA for Azure Management</span></li>
                </ul>
              </div>
              <div className="p-2 border-l-2 border-green-500/50">
                <p className="text-gray-300 text-sm font-semibold">Network (Module 2)</p>
                <ul className="space-y-1 text-sm text-gray-400 mt-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create VNet <code className="text-gray-300">vnet-securemed</code> (10.0.0.0/16) with subnets: <code className="text-gray-300">web</code> (10.0.1.0/24), <code className="text-gray-300">data</code> (10.0.2.0/24)</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create NSGs: <code className="text-gray-300">nsg-web</code> (allow 443 inbound), <code className="text-gray-300">nsg-data</code> (deny all inbound from internet)</span></li>
                </ul>
              </div>
              <div className="p-2 border-l-2 border-yellow-500/50">
                <p className="text-gray-300 text-sm font-semibold">App + Secrets (Modules 3-4)</p>
                <ul className="space-y-1 text-sm text-gray-400 mt-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create Key Vault (<code className="text-gray-300">RBAC</code> access model, soft-delete, purge protection)</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Store secret: <code className="text-gray-300">PatientDbConnectionString</code> with any test value</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create Storage Account (secure transfer, TLS 1.2, disable anonymous access)</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create App Service (F1/B1, System Managed Identity enabled)</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Grant App Service MI → <code className="text-gray-300">Key Vault Secrets User</code> role</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Add app setting: <code className="text-gray-300">PatientDbConnectionString</code> = <code className="text-gray-300">@Microsoft.KeyVault(SecretUri=...)</code></span></li>
                </ul>
              </div>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="PRACTICE" title="Phase 2: Harden & Enable Monitoring"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Apply App Service hardening (Module 4) and enable monitoring (Modules 5-6).</p>
            <div className="space-y-3">
              <div className="p-2 border-l-2 border-red-500/50">
                <p className="text-gray-300 text-sm font-semibold">App Service Hardening</p>
                <ul className="space-y-1 text-sm text-gray-400 mt-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>HTTPS Only → <code className="text-gray-300">On</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Minimum TLS → <code className="text-gray-300">1.2</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>FTP state → <code className="text-gray-300">Disabled</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Remote debugging → <code className="text-gray-300">Off</code></span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable EasyAuth with Entra ID</span></li>
                </ul>
              </div>
              <div className="p-2 border-l-2 border-purple-500/50">
                <p className="text-gray-300 text-sm font-semibold">Monitoring & Detection</p>
                <ul className="space-y-1 text-sm text-gray-400 mt-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Open Defender for Cloud → Check your Secure Score</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Review all recommendations — remediate what you can</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to Sentinel (if workspace available) → Enable at least one built-in analytics rule</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Record your starting vs. ending Secure Score</span></li>
                </ul>
              </div>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="PRACTICE" title="Phase 3: STRIDE Threat Model"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">For each component, identify applicable STRIDE threats and document your mitigations.</p>
            <div className="p-3 border border-gray-700 bg-gray-800 overflow-x-auto">
              <p className="text-gray-300 text-sm font-semibold mb-2">Fill in this threat model table for your report:</p>
              <table className="text-xs text-gray-400 w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-1 pr-2 text-gray-300">Component</th>
                    <th className="text-left py-1 pr-2 text-gray-300">STRIDE Threat</th>
                    <th className="text-left py-1 pr-2 text-gray-300">Risk</th>
                    <th className="text-left py-1 text-gray-300">Mitigation Applied</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800"><td className="py-1 pr-2">App Service</td><td className="py-1 pr-2">Spoofing</td><td className="py-1 pr-2 text-yellow-400">High</td><td className="py-1">EasyAuth + Entra ID</td></tr>
                  <tr className="border-b border-gray-800"><td className="py-1 pr-2">Key Vault</td><td className="py-1 pr-2">Info Disclosure</td><td className="py-1 pr-2 text-red-400">Critical</td><td className="py-1">RBAC + Managed Identity only</td></tr>
                  <tr className="border-b border-gray-800"><td className="py-1 pr-2">Storage</td><td className="py-1 pr-2">Tampering</td><td className="py-1 pr-2 text-yellow-400">High</td><td className="py-1">SSE + TLS 1.2 + private</td></tr>
                  <tr className="border-b border-gray-800"><td className="py-1 pr-2">Entra ID</td><td className="py-1 pr-2">Elev. of Privilege</td><td className="py-1 pr-2 text-red-400">Critical</td><td className="py-1">Cond. Access + MFA + RBAC</td></tr>
                  <tr><td className="py-1 pr-2">Network</td><td className="py-1 pr-2">Denial of Service</td><td className="py-1 pr-2 text-yellow-400">Medium</td><td className="py-1">NSGs + no public IPs</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-gray-500 text-xs">Expand this table to cover all 6 STRIDE categories for each component. This is the core of your threat model.</p>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="PRACTICE" title="Phase 4: CIS Benchmark Review"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">Review your deployment against CIS Azure Foundations Benchmark controls. Document pass/fail for each.</p>
            <div className="p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">CIS Review Checklist</p>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 1.1.1</span> — MFA enabled for all privileged accounts?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 1.23</span> — Custom RBAC roles with least-privilege?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 3.1</span> — Secure transfer required on storage?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 3.2</span> — Storage account access keys not used (prefer MI/SAS)?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 3.7</span> — Public anonymous access disabled on storage?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 3.10</span> — Soft delete enabled for blob storage?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 6.1</span> — No Network Security Group allows 0.0.0.0/0 inbound?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 6.6</span> — No resource with a public IP unless required?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 9.1</span> — App Service uses HTTPS Only?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 9.2</span> — App Service uses TLS 1.2+?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 9.5</span> — App Service uses Managed Identity?</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">□</span><span><span className="text-gray-300">CIS 10.1</span> — Defender for Cloud enabled?</span></li>
              </ul>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/governance/policy/samples/cis-azure-2-0-0?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: CIS Azure Benchmark v2.0.0</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="EVALUATE" title="Phase 5: Write Your Security Assessment Report"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Write a professional security assessment report. This is your capstone deliverable.</p>
            <div className="p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Report Template</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>
                  <p className="text-yellow-400 font-semibold">1. Executive Summary (1 page max)</p>
                  <p className="text-gray-500 text-xs">Scope, overall risk posture, Secure Score (before/after), critical findings count, top recommendation</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold">2. Architecture Overview</p>
                  <p className="text-gray-500 text-xs">Diagram of deployed resources with security controls labeled (screenshot or hand-drawn)</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold">3. STRIDE Threat Model</p>
                  <p className="text-gray-500 text-xs">Table from Step 5 — expanded with all components and all 6 threat categories</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold">4. CIS Benchmark Assessment</p>
                  <p className="text-gray-500 text-xs">Pass/fail for each control reviewed, with evidence (screenshots of configuration)</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold">5. Findings & Recommendations</p>
                  <p className="text-gray-500 text-xs">Any gaps found, rated by severity (Critical/High/Medium/Low), with remediation steps</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold">6. Defender for Cloud Summary</p>
                  <p className="text-gray-500 text-xs">Starting Secure Score → remediation actions taken → ending Secure Score</p>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Congratulations — you've completed the SecureCloudX Challenge! This report is portfolio-ready. Share it on LinkedIn, add it to your resume, or use it in interviews to demonstrate hands-on cloud security skills.</p>
            </div>
            <div className="mt-3 p-2 border border-red-800/50 bg-red-900/10">
              <p className="text-red-400 text-xs">Don't forget to delete <code>rg-securemed-capstone</code> and any other resources to avoid charges: Portal → Resource Groups → rg-securemed-capstone → Delete resource group</p>
            </div>
          </PhaseStepItem>
        </div>

        <div className="space-y-2 mb-6">
          <PhaseStepItem number={8} type="ATTACKER" title="What the attacker sees if this lab is misconfigured"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <p>A security assessment report that identifies critical findings but assigns no owner and no deadline is operationally useless. Attackers know that most findings in audit reports take <span className="text-yellow-400">6-18 months</span> to remediate in enterprise environments. They read public breach post-mortems and target known-weak patterns in organizations that match the finding profile.</p>
            <div className="mt-3 p-3 border border-red-800/40 bg-red-900/10">
              <p className="text-red-400 text-xs font-bold mb-2">STRIDE: the gaps attackers target in SecureMed</p>
              <p className="text-gray-400 text-xs">The SecureMed scenario has several common architecture weaknesses: no WAF in front of the patient API (OWASP A01, A03), no encryption of data at rest for the imaging store (Information Disclosure), shared DB credentials across services (Privilege Escalation), and no audit logging on the admin console (Repudiation). Each unmitigated STRIDE finding is a potential breach path.</p>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={9} type="WARN" title="Common mistakes in this lab"
            isOpen={open.has(8)} onToggleOpen={() => toggleOpen(8)}
            isChecked={checked.has(8)} onToggleChecked={() => toggleChecked(8)}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">STRIDE applied at too high a level:</span> "The entire application could be spoofed" is too vague to be actionable. Apply STRIDE to specific data flows and trust boundaries: "an attacker on the same LAN can intercept unencrypted HTTP traffic between the API gateway and the auth service (Information Disclosure)."</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Recommendations without controls:</span> "Fix SQL injection" is a finding, not a recommendation. A recommendation specifies the control: "Parameterise all SQL queries using prepared statements in the DAL layer and add WAF rule group SQLi-v2 on the Application Gateway."</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Risk score without business context:</span> A CVSS score alone doesn't communicate business impact. A finding rated CVSS 7.5 on a test system is different from the same finding on a HIPAA-regulated patient database. Always add business context to risk ratings.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Skipping the executive summary:</span> Technical findings must be translated into business language for stakeholders who approve remediation budget. A missing executive summary means the report is read only by the security team — who can't approve the budget to fix it.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={10} type="CLEANUP" title="Cleanup — delete lab resources"
            isOpen={open.has(9)} onToggleOpen={() => toggleOpen(9)}
            isChecked={checked.has(9)} onToggleChecked={() => toggleChecked(9)}>
            <p className="text-sm text-gray-400 mb-3">The capstone lab primarily involves documentation and analysis — clean up any Azure resources created during the assessment exercise.</p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 1. Delete the capstone resource group</p>
                <p className="text-gray-400">az group delete --name rg-securemed-capstone --yes --no-wait</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 2. Verify no running VMs or databases remain</p>
                <p className="text-gray-400">az vm list --output table && az sql server list --output table</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 3. Store your completed assessment report securely</p>
                <p className="text-gray-400"># Upload to a private repo or OneDrive — it's a portfolio artefact</p>
              </div>
            </div>
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={7} checkedCount={checked.size} total={TOTAL} />
        <div className="flex justify-start items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module7" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 7 Overview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task7;
