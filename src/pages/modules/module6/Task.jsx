import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 7;
const OBJECTIVES = [
  "Deploy Microsoft Sentinel with a Log Analytics workspace and connect data sources",
  "Enable and understand built-in analytics rules — scheduled, fusion, and NRT types",
  "Write a custom KQL analytics rule to detect brute-force sign-in attacks",
  "Simulate a security incident and investigate it using Sentinel's incident view",
  "Build an automated playbook using Logic Apps for containment actions",
  "Map your detections to MITRE ATT&CK tactics and assess coverage",
  "Document the full incident lifecycle using a NIST IR report template",
];

const Task6 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_6_task", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-6-detection-incident-response</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_6_detection_incident_response.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 6 Lab: Detection Engineering & Incident Response</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Think like a SOC analyst. Deploy Sentinel, build detections, investigate a simulated incident, automate response, and document the full lifecycle.
          </p>
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-10">
          {/* Step 1: Prep */}
          <PhaseStepItem number={1} type="PREP" title="What You'll Do — NIST IR in Action"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p className="text-sm mb-2">This lab follows the NIST Incident Response lifecycle. Each step maps to a real-world IR phase:</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-yellow-400 flex-shrink-0">1</span><span><strong className="text-gray-300">Preparation</strong> — Deploy Sentinel, connect data sources, enable analytics rules (Steps 3-4)</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 flex-shrink-0">2</span><span><strong className="text-gray-300">Detection & Analysis</strong> — Write custom detections, simulate an incident, investigate (Steps 4-5)</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 flex-shrink-0">3</span><span><strong className="text-gray-300">Containment & Response</strong> — Build a playbook to automate containment actions (Step 6)</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 flex-shrink-0">4</span><span><strong className="text-gray-300">Post-Incident Activity</strong> — Map ATT&CK coverage and write an IR report (Step 7)</span></li>
            </ul>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-yellow-400">Note:</span> Sentinel has a free trial (31 days, 10 GB/day). You won't be charged if you stay within the trial limits and clean up after.</p>
            </div>
          </PhaseStepItem>

          {/* Step 2: AI Prompt */}
          <PhaseStepItem number={2} type="AI" title="AI Prompt — Your SOC Analyst Guide"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Guide me step-by-step through a complete SOC analyst workflow in Azure. The lab covers: (1) Create a Log Analytics workspace and deploy Microsoft Sentinel. (2) Connect data connectors — Entra ID sign-in logs, Azure Activity logs, and Defender for Cloud alerts. (3) Enable built-in analytics rules and explain the difference between Scheduled, Fusion, and NRT rule types. (4) Help me write a custom Scheduled analytics rule using KQL to detect brute-force attacks (more than 10 failed sign-ins from a single IP in 5 minutes) — map it to MITRE ATT&CK Initial Access + Credential Access. (5) Walk me through simulating failed sign-ins and investigating the resulting incident in Sentinel's investigation graph. (6) Create a Logic App playbook that automatically disables a compromised user account when triggered by a Sentinel incident, and attach it to an automation rule. (7) Help me review the MITRE ATT&CK coverage map in Sentinel and write an incident report following the NIST 800-61 template with timeline, scope, root cause, containment actions, and lessons learned."
            </div>
          </PhaseStepItem>

          {/* Step 3: Deploy Sentinel + Connectors */}
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Deploy Sentinel & Connect Data Sources"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">NIST IR Phase: Preparation — Set up your detection infrastructure.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to <strong className="text-gray-300">Log Analytics workspaces</strong> → Create a new workspace (e.g., <code className="text-yellow-400">sentinel-lab-ws</code>)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Search for <strong className="text-gray-300">Microsoft Sentinel</strong> → Add it to your Log Analytics workspace</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Data connectors</strong> and connect these sources:</span></li>
            </ul>
            <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-400">Required connectors (minimum for this lab):</p>
              <p className="text-gray-300 mt-1">• <span className="text-yellow-400">Microsoft Entra ID</span> — Sign-in logs + Audit logs</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Azure Activity</span> — Resource-level operations (creates, deletes, role changes)</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Microsoft Defender for Cloud</span> — Security alerts from Module 5</p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">Verify:</span> After connecting, go to <strong className="text-gray-300">Logs</strong> and run <code className="text-yellow-400">SigninLogs | take 5</code> — if you get results, your data is flowing.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/sentinel/quickstart-onboard?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Quickstart: Onboard Microsoft Sentinel</a>
            </div>
          </PhaseStepItem>

          {/* Step 4: Enable Analytics Rules */}
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Enable Built-in Analytics Rules"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">NIST IR Phase: Preparation — Configure your detection logic.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Sentinel → Analytics → Rule templates</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Filter by <strong className="text-gray-300">Data sources: Azure Active Directory</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable these rules (click "Create rule" on each):</span></li>
            </ul>
            <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-300">• <span className="text-yellow-400">Brute force attack against Azure Portal</span> — Scheduled rule</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Successful sign-in from IP that attempted to sign-in to disabled account</span> — Scheduled</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Sign-ins from IPs that attempt sign-ins to disabled accounts</span> — NRT rule</p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500">As you enable each rule, click through the wizard and examine:</p>
              <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                <li>• The KQL query (what is it looking for?)</li>
                <li>• Query scheduling (how often does it run?)</li>
                <li>• Alert threshold (how many results trigger an alert?)</li>
                <li>• Entity mapping (which fields map to IP, Account, Host?)</li>
                <li>• MITRE ATT&CK tactics (which attack phase does this detect?)</li>
              </ul>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/sentinel/detect-threats-built-in?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Detect threats with built-in analytics rules</a>
            </div>
          </PhaseStepItem>

          {/* Step 5: Custom Detection + Simulate Incident */}
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Write a Custom Detection & Simulate an Incident"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">NIST IR Phase: Detection & Analysis — Build custom detection logic, then trigger and investigate an incident.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Part A: Write a custom analytics rule</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Sentinel → Analytics → Create → Scheduled query rule</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name: <code className="text-yellow-400">SCX Lab — Brute Force Detection</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>MITRE ATT&CK: Select <code className="text-yellow-400">Initial Access</code> and <code className="text-yellow-400">Credential Access</code></span></li>
            </ul>
            <div className="mt-2 p-3 bg-gray-900 border border-gray-700 text-sm font-mono">
              <p className="text-cyan-400 text-xs mb-1">// KQL — Paste this as the rule query:</p>
              <p className="text-gray-300">SigninLogs</p>
              <p className="text-gray-300">| where TimeGenerated {'>'} ago(5m)</p>
              <p className="text-gray-300">| where ResultType != "0"  <span className="text-gray-500">// non-zero = failed</span></p>
              <p className="text-gray-300">| summarize</p>
              <p className="text-gray-300 pl-4">FailedCount = count(),</p>
              <p className="text-gray-300 pl-4">TargetAccounts = make_set(UserPrincipalName),</p>
              <p className="text-gray-300 pl-4">FirstAttempt = min(TimeGenerated),</p>
              <p className="text-gray-300 pl-4">LastAttempt = max(TimeGenerated)</p>
              <p className="text-gray-300 pl-4">by IPAddress</p>
              <p className="text-gray-300">| where FailedCount {'>'} 10</p>
              <p className="text-gray-300">| project IPAddress, FailedCount, TargetAccounts, FirstAttempt, LastAttempt</p>
            </div>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set Entity mapping: <code className="text-yellow-400">IP → IPAddress</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Query scheduling: Run every <code className="text-yellow-400">5 minutes</code>, look back <code className="text-yellow-400">5 minutes</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Alert threshold: Generate alert when results {'>'} <code className="text-yellow-400">0</code></span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Part B: Simulate & investigate</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Open a private/incognito browser and attempt 12+ failed sign-ins to <a href="https://portal.azure.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">portal.azure.com</a> with a wrong password</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Wait 5-10 minutes for the rule to run, then check <strong className="text-gray-300">Sentinel → Incidents</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Click the incident → <strong className="text-gray-300">Investigate</strong> → Examine the investigation graph (entities, timeline, related alerts)</span></li>
            </ul>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">Verify:</span> You should see your IP in the incident entity list and the brute-force KQL rule as the triggering analytics rule.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/sentinel/detect-threats-custom?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Create custom analytics rules</a>
              <a href="https://learn.microsoft.com/azure/sentinel/investigate-cases?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Investigate incidents</a>
            </div>
          </PhaseStepItem>

          {/* Step 6: Build Playbook */}
          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Build an Automated Playbook"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">NIST IR Phase: Containment — Automate response actions to reduce time-to-contain.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Part A: Create the Logic App playbook</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Sentinel → Automation → Playbooks → Add playbook → Playbook with incident trigger</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name: <code className="text-yellow-400">SCX-Block-Compromised-User</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In the Logic App designer, build this flow:</span></li>
            </ul>
            <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-400">Trigger: <span className="text-yellow-400">Microsoft Sentinel incident</span></p>
              <p className="text-gray-400 mt-1">Action 1: <span className="text-yellow-400">Entities — Get Accounts</span></p>
              <p className="text-gray-500 text-xs pl-8">Extract the user account from the incident</p>
              <p className="text-gray-400 mt-1">Action 2: <span className="text-yellow-400">Azure AD — Disable user</span> (for each account)</p>
              <p className="text-gray-500 text-xs pl-8">Disable the compromised account in Entra ID</p>
              <p className="text-gray-400 mt-1">Action 3: <span className="text-yellow-400">Microsoft Sentinel — Add comment to incident</span></p>
              <p className="text-gray-500 text-xs pl-8">"Playbook auto-disabled user [account] at [timestamp]"</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Part B: Create an automation rule to trigger it</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Sentinel → Automation → Create → Automation rule</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Trigger: <code className="text-yellow-400">When incident is created</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Condition: Analytic rule name contains <code className="text-yellow-400">Brute Force</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Action: <code className="text-yellow-400">Run playbook → SCX-Block-Compromised-User</code></span></li>
            </ul>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Real-world note: Production playbooks often send a Teams/Slack notification and create a ticket before disabling accounts. Fully automatic disabling is powerful but risky — use with careful tuning.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/sentinel/automate-responses-with-playbooks?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Automate responses with playbooks</a>
              <a href="https://learn.microsoft.com/azure/sentinel/create-manage-use-automation-rules?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Create automation rules</a>
            </div>
          </PhaseStepItem>

          {/* Step 7: ATT&CK Coverage + IR Report */}
          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: MITRE ATT&CK Coverage & Incident Report"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">NIST IR Phase: Post-Incident Activity — Assess coverage and document the incident.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Part A: Review your MITRE ATT&CK coverage</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Sentinel → MITRE ATT&CK (Preview)</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Review which tactics/techniques your active rules cover (highlighted cells)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Identify 2-3 gaps where you have no detection coverage — note which rule templates could fill them</span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Part B: Write an incident report (NIST 800-61 format)</strong></p>
            <p className="text-xs text-gray-500 mb-2">Using the simulated brute-force incident from Step 3, write a report covering:</p>
            <div className="mt-2 p-3 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-300 font-semibold mb-2">Incident Report Template</p>
              <ul className="space-y-1 text-gray-400">
                <li>• <span className="text-gray-300">Incident ID:</span> [from Sentinel]</li>
                <li>• <span className="text-gray-300">Severity:</span> [Low/Medium/High/Critical]</li>
                <li>• <span className="text-gray-300">MITRE ATT&CK:</span> [Tactics & Techniques detected]</li>
                <li>• <span className="text-gray-300">Timeline:</span> [First failed sign-in → Alert triggered → Incident created → Playbook executed]</li>
                <li>• <span className="text-gray-300">Scope:</span> [Which accounts/IPs/resources were involved?]</li>
                <li>• <span className="text-gray-300">Root Cause:</span> [What triggered the brute-force? Exposed credentials? Weak password?]</li>
                <li>• <span className="text-gray-300">Containment Actions:</span> [User disabled by playbook, IP noted for watchlist]</li>
                <li>• <span className="text-gray-300">Recovery Actions:</span> [Password reset, MFA enforced, session tokens revoked]</li>
                <li>• <span className="text-gray-300">Lessons Learned:</span> [What detection gaps exist? What would you improve?]</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: Sentinel deployed with active detections, custom brute-force rule triggered an incident, playbook executed containment, ATT&CK coverage reviewed, and NIST IR report completed.</p>
            </div>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Cleanup: Delete the Sentinel workspace and Logic App when done to avoid charges. Go to Log Analytics workspaces → delete the workspace (this removes Sentinel and all data).</p>
            </div>
          </PhaseStepItem>
        </div>
        <MarkPhaseComplete phaseId={6} checkedCount={checked.size} total={TOTAL} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module6" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 6 Overview
          </Link>
          <Link to="/module7" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 7 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task6;
