import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 7;
const OBJECTIVES = [
  "Understand Cloud Security Posture Management (CSPM) and why it's central to every cloud security role",
  "Use Microsoft Defender for Cloud to assess and improve your Secure Score",
  "Enforce security guardrails using Azure Policy and governance-as-code",
  "Configure Azure Monitor and Log Analytics for centralized logging",
  "Write KQL queries to detect suspicious activity across your environment",
  "Map your environment against the CIS Azure Benchmark and Microsoft Cloud Security Benchmark",
];

const Day5 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5,6]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={5} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-5-security-posture</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_5_security_posture_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 5: Security Posture & Compliance Monitoring</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Cloud security posture management (CSPM) is how organizations continuously assess, improve, and enforce security across their cloud environments. This module teaches you the tools and frameworks that every cloud security team uses daily.
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-12">
          <PhaseStepItem number={1} type="READ" title="Domain & Goal"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p><span className="text-gray-500">Domain:</span> Cloud Security Posture Management & Governance</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Continuously assess your security posture, enforce compliance with industry benchmarks, and detect misconfigurations before attackers do.</p>
            <p className="mt-2 text-gray-500 text-xs">Industry alignment: AZ-500 (Manage security operations), SC-900 (Compliance management), SANS SEC549 (SOC enablement), CompTIA Cloud+ (Security 19%)</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="What is CSPM & Why Every Organization Needs It"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Cloud Security Posture Management (CSPM) is the continuous process of identifying misconfigurations, policy violations, and compliance gaps across your cloud environment. In the real world, CSPM is not optional — it's how organizations prevent the #1 cause of cloud breaches: <span className="text-yellow-400">misconfiguration</span>.</p>
            <p className="mt-2">Think of CSPM as your automated security auditor. It scans every resource in your environment and tells you what's wrong, how critical it is, and how to fix it — 24/7.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500 mb-2">// real-world context</p>
              <p className="text-sm">In 2023, Microsoft reported that <span className="text-yellow-400">80% of ransomware attacks</span> exploited common configuration errors that CSPM tools could have flagged. Gartner predicts that through 2025, 99% of cloud security failures will be the customer's fault — not the provider's. CSPM exists to close that gap.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/defender-for-cloud/concept-cloud-security-posture-management?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What is CSPM?</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="READ" title="Microsoft Defender for Cloud — Your CSPM Engine"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>Microsoft Defender for Cloud is the central hub for cloud security in Azure. It provides two key capabilities:</p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span>
                <span><span className="text-gray-300">CSPM (Free tier)</span> — Secure Score, security recommendations, asset inventory, compliance dashboards. This scans your environment and grades it.</span>
              </li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span>
                <span><span className="text-gray-300">CWP — Cloud Workload Protection (Paid)</span> — Defender for Servers, Storage, SQL, Key Vault, App Service, Containers. These are real-time threat detection engines for specific resource types.</span>
              </li>
            </ul>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Secure Score</p>
              <p className="text-sm">Your Secure Score is a percentage (0–100%) that reflects how many security recommendations you've addressed. In real-world organizations, security teams track Secure Score weekly and report it to leadership. A score below 60% is considered a risk.</p>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Defender Plans — What Each Protects</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Defender for Servers</span> — Detects malware, brute-force attacks, suspicious processes on VMs</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Defender for Storage</span> — Detects anomalous access patterns, malware uploads to blob storage</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Defender for SQL</span> — Detects SQL injection, anomalous database queries, data exfiltration</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Defender for Key Vault</span> — Detects unusual secret access, access from suspicious IPs</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Defender for App Service</span> — Detects web shell uploads, command injection, management port scanning</span></li>
              </ul>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What is Defender for Cloud?</a>
              <a href="https://learn.microsoft.com/azure/defender-for-cloud/secure-score-security-controls?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Secure Score explained</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="READ" title="Azure Policy & Governance — Security Guardrails at Scale"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p>In the real world, you can't rely on humans to configure every resource securely. <span className="text-yellow-400">Azure Policy</span> lets you enforce rules automatically — if a resource doesn't meet your requirements, it's either blocked from being created or flagged for remediation.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">What Azure Policy Does</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Deny</span> — Block non-compliant resources from being created (e.g., deny VMs without encryption)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Audit</span> — Flag non-compliant resources for review (e.g., storage accounts without HTTPS)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">DeployIfNotExists</span> — Automatically remediate (e.g., deploy diagnostic settings on new resources)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Modify</span> — Alter resource properties at creation (e.g., add required tags)</span></li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Common Enterprise Policies</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Allowed locations (data residency compliance)</li>
                <li>• Require tags on all resources (cost tracking, ownership)</li>
                <li>• Deny public IP addresses on VMs</li>
                <li>• Require HTTPS on storage accounts</li>
                <li>• Deny creation of resources without encryption</li>
                <li>• Allowed VM SKUs (cost control)</li>
              </ul>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/governance/policy/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure Policy overview</a>
              <a href="https://learn.microsoft.com/azure/governance/policy/samples/built-in-policies?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Built-in policy definitions</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="READ" title="Logging & Monitoring — Know Everything That Happens"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>You can't protect what you can't see. Centralized logging is the foundation of security operations. In Azure, all logs flow through <span className="text-yellow-400">Azure Monitor</span> into <span className="text-yellow-400">Log Analytics workspaces</span>, where you query them with KQL (Kusto Query Language).</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Azure Log Types You Must Know</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Activity Log</span> — Who did what at the management plane (create/delete/modify resources, role assignments)</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Entra ID Sign-in Logs</span> — Who signed in, from where, with what device, success or failure</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Entra ID Audit Logs</span> — Changes to users, groups, roles, Conditional Access policies</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Diagnostic Logs</span> — Resource-specific logs (NSG flow logs, Key Vault access, SQL audit logs)</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Defender Alerts</span> — Threat detections from Defender plans (malware, brute-force, anomalies)</span></li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">KQL — The Language of Azure Security</p>
              <p className="text-sm mb-2">KQL (Kusto Query Language) is how you search, filter, and analyze logs. If you're working in Azure security, you will write KQL daily. Here's a taste:</p>
              <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono">
                <p className="text-cyan-400">// Find failed sign-ins in the last 24 hours</p>
                <p className="text-gray-300">SigninLogs</p>
                <p className="text-gray-300">| where TimeGenerated {'>'} ago(24h)</p>
                <p className="text-gray-300">| where ResultType != "0"</p>
                <p className="text-gray-300">| summarize FailedAttempts = count() by UserPrincipalName, IPAddress</p>
                <p className="text-gray-300">| order by FailedAttempts desc</p>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/azure-monitor/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure Monitor overview</a>
              <a href="https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Log Analytics workspace</a>
              <a href="https://learn.microsoft.com/azure/data-explorer/kusto/query/?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: KQL reference</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="NOTE" title="Compliance Frameworks — CIS & MCSB"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p>In the industry, security isn't subjective — it's measured against <span className="text-yellow-400">compliance frameworks</span>. Defender for Cloud includes built-in compliance dashboards that show how your environment maps to these standards:</p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span>
                <span><span className="text-gray-300">Microsoft Cloud Security Benchmark (MCSB)</span> — Microsoft's own best-practice framework. Enabled by default in Defender for Cloud. Covers identity, network, data, logging, incident response, and more.</span>
              </li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span>
                <span><span className="text-gray-300">CIS Azure Benchmark</span> — Published by the Center for Internet Security. The most widely used benchmark for Azure hardening. Auditors and penetration testers reference this constantly.</span>
              </li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span>
                <span><span className="text-gray-300">NIST SP 800-53</span> — Used by US government and many enterprises. Maps security controls to risk categories.</span>
              </li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span>
                <span><span className="text-gray-300">ISO 27001</span> — International standard for information security management systems (ISMS). Required for many enterprise certifications.</span>
              </li>
            </ul>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/security/benchmark/azure/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Microsoft Cloud Security Benchmark</a>
              <a href="https://learn.microsoft.com/azure/defender-for-cloud/regulatory-compliance-dashboard?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Regulatory compliance dashboard</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="LAB" title="Your Task: Assess, Enforce & Monitor Your Security Posture"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>In this lab, you'll use the same tools that real cloud security teams use daily:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Enable Defender for Cloud and review your Secure Score</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Remediate the top security recommendations</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Create and assign Azure Policies to enforce security guardrails</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Set up Log Analytics and connect your Activity Logs + Entra ID logs</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Write KQL queries to detect failed sign-ins and resource changes</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Configure alert rules for critical security events</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Review the regulatory compliance dashboard</span></li>
            </ul>
            <div className="mt-3"><Link to="/module5/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link></div>
          </PhaseStepItem>
        </div>
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module4" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 4
          </Link>
          <Link to="/module5/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 5 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day5;
