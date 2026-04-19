import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 7;
const OBJECTIVES = [
  "Understand the NIST Incident Response lifecycle and how security teams handle real incidents",
  "Deploy Microsoft Sentinel as a cloud-native SIEM and connect data sources",
  "Write custom KQL analytics rules to detect specific attack patterns",
  "Map detections to the MITRE ATT&CK framework — the industry standard for threat classification",
  "Build automated playbooks using Logic Apps for containment and response",
  "Investigate, document, and close security incidents using a structured process",
];

const Day6 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5,6]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={6} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-6-detection-incident-response</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_6_detection_incident_response_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 6: Detection Engineering & Incident Response</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Monitoring tells you something happened. Detection engineering and incident response tell you what it means and what to do about it. This module teaches you how to build detections, investigate threats, and respond to incidents using the same tools and frameworks used by SOC teams worldwide.
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
            <p><span className="text-gray-500">Domain:</span> Security Operations — Detection Engineering & Incident Response</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Build custom threat detections in Microsoft Sentinel, investigate security incidents, and automate response actions using the NIST IR lifecycle.</p>
            <p className="mt-2 text-gray-500 text-xs">Industry alignment: AZ-500 (Manage security operations), SC-200 (Security Operations Analyst), SANS SEC549 (SOC enablement), NIST SP 800-61 (Incident Response)</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="The NIST Incident Response Lifecycle"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>The NIST SP 800-61 framework defines how organizations handle security incidents. This is the industry standard — every SOC, every IR team, every security job description references this lifecycle:</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-5 flex-shrink-0">1</span>
                  <div><span className="text-gray-300 font-semibold">Preparation</span> — Build your detection tools, playbooks, and response procedures <span className="text-gray-500">before</span> an incident occurs. Deploy SIEM, connect data sources, define escalation paths.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-5 flex-shrink-0">2</span>
                  <div><span className="text-gray-300 font-semibold">Detection & Analysis</span> — Identify that an incident is occurring. Triage alerts, correlate events, determine scope and severity. This is where KQL and analytics rules live.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-5 flex-shrink-0">3</span>
                  <div><span className="text-gray-300 font-semibold">Containment, Eradication & Recovery</span> — Stop the bleeding. Isolate compromised resources, remove the threat, restore services. Playbooks automate this.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-5 flex-shrink-0">4</span>
                  <div><span className="text-gray-300 font-semibold">Post-Incident Activity</span> — Document what happened, what worked, what didn't. Update detections. Write the lessons-learned report. This is how organizations get better.</div>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ NIST SP 800-61r2: Computer Security Incident Handling Guide (PDF)</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="READ" title="Microsoft Sentinel — Your Cloud-Native SIEM"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>Microsoft Sentinel is Azure's cloud-native Security Information and Event Management (SIEM) solution. Unlike Module 5 which focused on posture and monitoring, here you use Sentinel for what it's built for: <span className="text-yellow-400">detecting threats and responding to incidents</span>.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Sentinel Architecture</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Data Connectors</span> — Ingest logs from Entra ID, Azure Activity, Defender for Cloud, Microsoft 365, third-party tools (firewalls, endpoint agents)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Analytics Rules</span> — The detection logic. Scheduled queries, fusion rules (ML-based correlation), NRT (near-real-time) rules</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Incidents</span> — When a rule triggers, Sentinel creates an incident. You investigate, assign severity, track resolution</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Workbooks</span> — Visual dashboards for monitoring trends, attack patterns, coverage gaps</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Playbooks</span> — Automated response actions built on Logic Apps (block IP, disable user, send Teams notification, create ServiceNow ticket)</span></li>
              </ul>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/sentinel/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What is Microsoft Sentinel?</a>
              <a href="https://learn.microsoft.com/azure/sentinel/connect-data-sources?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Connect data sources</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="READ" title="Detection Engineering — Writing Custom Detections"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p>Detection engineering is the craft of writing rules that identify malicious activity. In the real world, security analysts don't just use pre-built rules — they <span className="text-yellow-400">write custom detections</span> tailored to their environment.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Sentinel Analytics Rule Types</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Scheduled</span> — Runs a KQL query on a schedule (every 5 min, hourly, daily). Most common type. You write the query.</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Fusion</span> — ML-based correlation. Connects multiple low-fidelity signals into high-confidence incidents (e.g., impossible travel + suspicious mailbox rule).</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">NRT (Near-Real-Time)</span> — Runs every minute. Use for critical detections where speed matters (e.g., admin role assignment).</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><span className="text-gray-300">Microsoft Security</span> — Auto-creates incidents from Defender alerts. No custom query needed.</span></li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Example: Detect Brute-Force Attacks</p>
              <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono">
                <p className="text-cyan-400">// Alert when {'>'} 10 failed sign-ins from same IP in 5 minutes</p>
                <p className="text-gray-300">SigninLogs</p>
                <p className="text-gray-300">| where TimeGenerated {'>'} ago(5m)</p>
                <p className="text-gray-300">| where ResultType != "0"</p>
                <p className="text-gray-300">| summarize FailedAttempts = count() by IPAddress, bin(TimeGenerated, 5m)</p>
                <p className="text-gray-300">| where FailedAttempts {'>'} 10</p>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/sentinel/detect-threats-custom?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Create custom analytics rules</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="READ" title="MITRE ATT&CK — The Industry Threat Framework"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>MITRE ATT&CK is a knowledge base of adversary tactics and techniques based on real-world observations. Every major SIEM, every threat report, and every SOC uses ATT&CK to classify threats. Sentinel maps its analytics rules directly to ATT&CK tactics.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Key Tactics (the "why" behind an attack)</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Initial Access</span> — How the attacker gets in (phishing, exposed RDP, compromised credentials)</li>
                <li>• <span className="text-gray-300">Persistence</span> — How they stay in (new user accounts, scheduled tasks, backdoors)</li>
                <li>• <span className="text-gray-300">Privilege Escalation</span> — How they get more access (role assignment, exploiting misconfigs)</li>
                <li>• <span className="text-gray-300">Credential Access</span> — How they steal credentials (brute-force, token theft, Key Vault access)</li>
                <li>• <span className="text-gray-300">Lateral Movement</span> — How they move through the environment (VNet pivoting, service principal abuse)</li>
                <li>• <span className="text-gray-300">Exfiltration</span> — How they steal data (blob downloads, database exports, DNS tunneling)</li>
                <li>• <span className="text-gray-300">Impact</span> — The damage they cause (ransomware, data destruction, resource hijacking for cryptomining)</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">When you create Sentinel analytics rules, you map them to ATT&CK tactics. This builds your detection coverage map — showing which attack phases you can detect and where gaps remain.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://attack.mitre.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ MITRE ATT&CK Framework</a>
              <a href="https://learn.microsoft.com/azure/sentinel/mitre-coverage?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: MITRE ATT&CK coverage in Sentinel</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="SCENARIO" title="Real-World Scenario: Compromised Service Principal"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p>A developer accidentally commits an Azure service principal's client secret to a public GitHub repository. Within 30 minutes, an attacker uses the credentials to enumerate your Azure subscriptions, create a new admin user, and begin downloading data from a storage account.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">How Sentinel Detects This</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-yellow-400">Analytics rule:</span> "Service principal sign-in from unusual location" triggers an alert (Initial Access)</li>
                <li>• <span className="text-yellow-400">Analytics rule:</span> "New user created by non-admin" triggers (Persistence)</li>
                <li>• <span className="text-yellow-400">Fusion rule:</span> Correlates both signals into a single high-severity incident</li>
                <li>• <span className="text-yellow-400">Playbook:</span> Automatically disables the compromised service principal and sends a Teams notification</li>
              </ul>
            </div>
            <p className="mt-3 text-sm text-gray-500">This exact scenario (Midnight Blizzard, 2024) has happened to major organizations, including Microsoft itself. Detection and response speed is what determines the damage.</p>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="LAB" title="Your Task: Build Detections, Investigate & Respond"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>In this lab, you'll operate as a SOC analyst:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Deploy Microsoft Sentinel and connect Entra ID + Activity Log data connectors</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Enable built-in analytics rules and understand each rule type</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Write a custom KQL analytics rule to detect brute-force attacks</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Simulate a security incident and investigate it in the Sentinel incident view</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Build an automated playbook for containment</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Document the incident following the NIST IR template</span></li>
            </ul>
            <div className="mt-3"><Link to="/module6/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link></div>
          </PhaseStepItem>
        </div>
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module5" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 5
          </Link>
          <Link to="/module6/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 6 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day6;
