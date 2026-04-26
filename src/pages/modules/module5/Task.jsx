import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 10;
const OBJECTIVES = [
  "Enable Microsoft Defender for Cloud and review your Secure Score",
  "Remediate top security recommendations to improve your posture",
  "Create and assign Azure Policies to enforce security guardrails",
  "Set up Log Analytics and connect critical log sources",
  "Write KQL queries to detect suspicious activity",
];

const Task5 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_5_task", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-5-security-posture</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_5_security_posture_compliance.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 5 Lab: Security Posture & Compliance Monitoring</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Assess your environment's security posture, enforce compliance with Azure Policy, and build centralized monitoring with Log Analytics and KQL.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">~40 min read &nbsp;·&nbsp; Lab: ~60 min &nbsp;·&nbsp; Est. cost: $0.00 (Defender 30-day free trial)</p>
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
          <PhaseStepItem number={1} type="PREP" title="What You'll Do"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p className="mb-2">This lab mirrors what cloud security teams do every week — assess, remediate, enforce, and monitor:</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Enable Defender for Cloud and review your Secure Score — the industry-standard measure of your security posture.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Remediate the top security recommendations to improve your score.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Create Azure Policies that prevent insecure configurations from being deployed.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Set up a Log Analytics workspace and connect your Activity Logs and Entra ID logs.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Write KQL queries to find suspicious activity.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Configure alert rules so you get notified when critical events occur.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Review the regulatory compliance dashboard and understand where you stand.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="AI" title="AI Prompt — Use this to guide you"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Walk me through a hands-on lab on cloud security posture management in Azure. The lab covers: 1) Enabling Microsoft Defender for Cloud and reviewing the Secure Score, 2) Remediating the top 3 security recommendations, 3) Creating Azure Policies to deny public IP addresses on VMs and require tags on resources, 4) Setting up a Log Analytics workspace and connecting Activity Logs and Entra ID sign-in logs, 5) Writing KQL queries to detect failed sign-ins, resource deletions, and role assignment changes, 6) Configuring an Action Group with email alerts for high-severity Defender alerts, 7) Reviewing the regulatory compliance dashboard against the Microsoft Cloud Security Benchmark. Walk me through each step with Azure portal navigation instructions and explain the security reasoning behind each action."
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Enable Defender for Cloud & Review Secure Score"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Why? Secure Score is the single most-tracked security metric in Azure environments. Every security team monitors it.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Sign in to <a href="https://portal.azure.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Azure Portal</a></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Search for <strong className="text-gray-300">Microsoft Defender for Cloud</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Environment Settings</strong> → Select your subscription → Enable Defender plans (at minimum: Servers, Storage, Key Vault)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Return to Defender for Cloud → <strong className="text-gray-300">Overview</strong> → Note your Secure Score percentage</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Click on the Secure Score to see the breakdown by security control (Identity, Network, Data, Compute)</span></li>
            </ul>
            <div className="mt-3 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Tip: Defender plans have costs. For learning, enable them briefly and disable after the lab. The free CSPM tier (Secure Score + recommendations) has no cost.</p>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Remediate Top Security Recommendations"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Why? Recommendations are prioritized by impact. Fixing the top ones gives you the biggest security improvement.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In Defender for Cloud → <strong className="text-gray-300">Recommendations</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Sort by <strong className="text-gray-300">Impact</strong> (High first)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Pick the top 3 recommendations and remediate each one. Common examples:</span></li>
            </ul>
            <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-400">• "MFA should be enabled on accounts with owner permissions" → Enable MFA via Conditional Access</p>
              <p className="text-gray-400">• "Storage accounts should restrict network access" → Configure firewall rules or Private Endpoints</p>
              <p className="text-gray-400">• "Management ports should be closed on VMs" → Remove public RDP/SSH NSG rules, use Bastion instead</p>
            </div>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>After remediation, check the Secure Score again — it should increase</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Create & Assign Azure Policies"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Why? Policies prevent bad configurations from being deployed in the first place — proactive vs reactive security.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Search for <strong className="text-gray-300">Azure Policy</strong> in the portal</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Definitions</strong> → Filter by category "Network"</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Find and assign: <strong className="text-gray-300">"Network interfaces should not have public IPs"</strong> → Set effect to <span className="text-yellow-400">Deny</span></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Assign the policy to your resource group scope</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Now assign a second policy: <strong className="text-gray-300">"Require a tag and its value on resources"</strong> → Set tag name to "Environment"</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><strong className="text-yellow-400">Test it:</strong> Try creating a VM with a public IP — it should be denied. Try creating a resource without the tag — it should be denied.</span></li>
            </ul>
            <div className="mt-3 p-2 bg-gray-900 border border-gray-700 text-sm font-mono">
              <p className="text-cyan-400">// Verify policy compliance via CLI</p>
              <p className="text-gray-300">az policy state list --resource-group {"<your-rg>"} \</p>
              <p className="text-gray-300">  --query "[?complianceState=='NonCompliant'].{`{Name:resourceId, Policy:policyDefinitionName}`}" \</p>
              <p className="text-gray-300">  --output table</p>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Set Up Log Analytics & Write KQL Queries"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">Why? Centralized logging + querying is the foundation of all security operations. You'll use this in every security role.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Search for <strong className="text-gray-300">Log Analytics workspaces</strong> → Create a new workspace</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to your subscription → <strong className="text-gray-300">Activity Log</strong> → <strong className="text-gray-300">Diagnostic settings</strong> → Send to your Log Analytics workspace</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Entra ID</strong> → <strong className="text-gray-300">Diagnostic settings</strong> → Send Sign-in logs and Audit logs to the same workspace</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Open your workspace → <strong className="text-gray-300">Logs</strong> → Try these KQL queries:</span></li>
            </ul>
            <div className="mt-2 space-y-3">
              <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono">
                <p className="text-cyan-400">// Failed sign-ins in the last 7 days</p>
                <p className="text-gray-300">SigninLogs</p>
                <p className="text-gray-300">| where TimeGenerated {'>'} ago(7d)</p>
                <p className="text-gray-300">| where ResultType != "0"</p>
                <p className="text-gray-300">| summarize Failures = count() by UserPrincipalName, IPAddress, ResultDescription</p>
                <p className="text-gray-300">| order by Failures desc</p>
              </div>
              <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono">
                <p className="text-cyan-400">// Resource deletions in the last 24 hours</p>
                <p className="text-gray-300">AzureActivity</p>
                <p className="text-gray-300">| where TimeGenerated {'>'} ago(24h)</p>
                <p className="text-gray-300">| where OperationNameValue endswith "DELETE"</p>
                <p className="text-gray-300">| project TimeGenerated, Caller, ResourceGroup, OperationNameValue, ActivityStatusValue</p>
              </div>
              <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono">
                <p className="text-cyan-400">// Role assignment changes (who got new permissions?)</p>
                <p className="text-gray-300">AzureActivity</p>
                <p className="text-gray-300">| where OperationNameValue == "MICROSOFT.AUTHORIZATION/ROLEASSIGNMENTS/WRITE"</p>
                <p className="text-gray-300">| project TimeGenerated, Caller, ResourceGroup, ActivityStatusValue</p>
              </div>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Configure Alerts & Review Compliance"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Why? Real-time alerts mean you don't have to watch dashboards 24/7. Compliance dashboards prove your security posture to auditors.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In Azure Monitor → <strong className="text-gray-300">Alerts</strong> → <strong className="text-gray-300">Action Groups</strong> → Create a new action group with your email</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create an alert rule: <strong className="text-gray-300">Signal type: Activity Log</strong> → Operation: "Delete Virtual Machine" → Attach your action group</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span><strong className="text-yellow-400">Test it:</strong> Delete a test resource and verify you receive the email alert</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to Defender for Cloud → <strong className="text-gray-300">Regulatory compliance</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Review the <strong className="text-gray-300">Microsoft Cloud Security Benchmark</strong> dashboard — note which controls pass and which fail</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Add the <strong className="text-gray-300">CIS Microsoft Azure Foundations Benchmark</strong> standard and compare your compliance</span></li>
            </ul>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: Your Secure Score has improved, Azure Policies are blocking insecure deployments, KQL queries are returning results, alerts are firing, and you can see your compliance posture against industry benchmarks.</p>
            </div>
          </PhaseStepItem>
        </div>

        <div className="space-y-2 mb-6">
          <PhaseStepItem number={8} type="ATTACKER" title="What the attacker sees if this lab is misconfigured"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <p>If Defender for Cloud is on the <span className="text-yellow-400">Free tier</span>, you get Secure Score recommendations but no threat detection. An attacker can establish persistence, move laterally, and exfiltrate data — and Defender for Cloud shows nothing in the Alerts blade.</p>
            <div className="mt-3 p-3 border border-red-800/40 bg-red-900/10">
              <p className="text-red-400 text-xs font-bold mb-2">Attack path: policy bypass via resource locks misconfiguration</p>
              <p className="text-gray-400 text-xs">Azure Policies with "Audit" effect only log non-compliance — they don't prevent resource deployment. An attacker (or negligent developer) with Contributor can deploy any resource. If your compliance posture relies on Audit-only policies, it's a detective control, not a preventive one. Switch critical policies to "Deny" for true enforcement.</p>
            </div>
            <div className="mt-2 p-2 border border-red-800/40 bg-red-900/10">
              <p className="text-gray-400 text-xs"><span className="text-red-400">Secure Score manipulation:</span> Secure Score reflects recommendations, not actual security. An attacker with enough privilege can dismiss recommendations as "mitigated by alternative controls" — improving the score without fixing anything. Always back score with technical evidence.</p>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={9} type="WARN" title="Common mistakes in this lab"
            isOpen={open.has(8)} onToggleOpen={() => toggleOpen(8)}
            isChecked={checked.has(8)} onToggleChecked={() => toggleChecked(8)}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Confusing "Audit" with "Deny" policy effect:</span> Audit creates a compliance finding in the dashboard. Deny prevents the resource from being created. For security-critical controls, Audit alone is insufficient — it shows you're non-compliant but doesn't stop it.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Defender for Cloud plans not enabled on all subscriptions:</span> If you have multiple subscriptions, Defender must be enabled on each one. Auto-provisioning of the MMA/AMA agent also must be enabled per subscription.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">KQL query syntax errors silently returning zero results:</span> An invalid KQL filter returns empty results without error. Always verify your query returns expected results with known data before using it as a detection rule.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Assigning policies at resource group scope only:</span> New subscriptions or resource groups created later won't inherit the policy. Assign security policies at the Management Group or Subscription level for blanket coverage.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={10} type="CLEANUP" title="Cleanup — prevent unexpected charges"
            isOpen={open.has(9)} onToggleOpen={() => toggleOpen(9)}
            isChecked={checked.has(9)} onToggleChecked={() => toggleChecked(9)}>
            <p className="text-sm text-gray-400 mb-3">Defender for Cloud enhanced plans (Defender for Servers, Storage, etc.) cost per resource-hour. Disable plans when lab is complete.</p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 1. Disable Defender plans</p>
                <p className="text-gray-400">Portal: Defender for Cloud → Environment settings → subscription → disable plans</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 2. Remove custom Azure Policy assignments</p>
                <p className="text-gray-400">az policy assignment delete --name &lt;assignment-name&gt; --scope /subscriptions/&lt;subId&gt;</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 3. Delete Log Analytics workspace (if created for lab)</p>
                <p className="text-gray-400">az monitor log-analytics workspace delete --resource-group &lt;rg&gt; --workspace-name &lt;name&gt; --yes</p>
              </div>
            </div>
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={5} checkedCount={checked.size} total={TOTAL} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module5" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 5 Overview
          </Link>
          <Link to="/module6" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 6 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task5;
