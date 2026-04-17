import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 7;
const OBJECTIVES = [
  "Configure Azure Sentinel to collect and analyze security events",
  "Create alert rules and investigate incidents using KQL",
  "Build an automated incident response playbook",
];

const Task6 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-6-incident-response</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_6_incident_response_sentinel.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Phase 6 Lab: Set Up Sentinel & Incident Response</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Detect, investigate, and respond to security incidents using Azure Sentinel and automated playbooks.
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
          <PhaseStepItem number={1} type="PREP" title="What You'll Do"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Enable Azure Sentinel and connect log sources.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Create alert rules to detect suspicious logins and anomalies.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Use KQL to investigate security incidents.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Build an automated playbook to respond to threats.</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="AI" title="AI Prompt — Use this to guide you"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Guide me step-by-step through setting up Azure Sentinel for incident response. The lab includes enabling Sentinel, connecting log sources, creating alert rules, using KQL queries to investigate security incidents, and creating an automated playbook to block suspicious IPs. Explain each step with Azure portal navigation."
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Enable Azure Security Center (Defender for Cloud)"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Why? Security Center provides a unified security posture view across resources.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Sign in to <a href="https://portal.azure.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Azure Portal</a></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to <strong className="text-gray-300">Microsoft Defender for Cloud</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable enhanced security features and review recommendations</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Set Up Azure Sentinel"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Why? Sentinel aggregates security data from all sources for threat detection.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Search for <strong className="text-gray-300">Microsoft Sentinel</strong> and create a new workspace</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Add data connectors: Azure AD Sign-ins, Azure Activity, Security Events</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable built-in analytics rules for common attack patterns</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Investigate Security Alerts"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Why? Effective investigation reduces time-to-response for security incidents.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Sentinel &gt; Incidents</strong> to review triggered alerts</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Use KQL in Log Analytics to query suspicious sign-in events</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Map the incident timeline and identify the attack vector</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Automate Response with a Playbook"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">Why? Automated playbooks reduce manual response time for repeated incidents.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to <strong className="text-gray-300">Sentinel &gt; Automation &gt; Playbooks</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a Logic App playbook to block a suspicious IP on alert trigger</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Attach the playbook to an analytics rule for automatic execution</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Test & Validate"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Simulate an attack and confirm detection and response.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Simulate suspicious login activity and verify Sentinel generates an alert</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Confirm the playbook executes automatically in response</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Review incident logs and document your findings</span></li>
            </ul>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: Threats detected, incidents created, and playbook executed automatically.</p>
            </div>
          </PhaseStepItem>
        </div>
        <MarkPhaseComplete phaseId={6} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module6" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Phase 6 Overview
          </Link>
          <Link to="/module7" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Phase 7 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task6;
