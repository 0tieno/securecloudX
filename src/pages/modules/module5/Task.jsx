import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 7;
const OBJECTIVES = [
  "Enable Microsoft Defender for Cloud and act on security recommendations",
  "Deploy Azure Sentinel and connect log data sources",
  "Use Log Analytics to query and detect security anomalies",
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
          <span>/</span><span className="text-gray-400">phase-5-security-monitoring</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_5_security_monitoring_sentinel.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 5 Lab: Security Monitoring & Threat Intelligence</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Set up continuous security monitoring and threat intelligence using Azure tools.
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
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Enable Microsoft Defender for Cloud and review recommendations.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Deploy Azure Sentinel and connect security data sources.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Use Log Analytics to analyze security event logs.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Integrate threat intelligence feeds for proactive security.</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="AI" title="AI Prompt — Use this to guide you"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Walk me through a hands-on lab on setting up security monitoring and threat intelligence in Azure. The lab includes enabling Microsoft Defender for Cloud, deploying Azure Sentinel as a SIEM, configuring Log Analytics to query security events, and integrating threat intelligence feeds. Explain each step clearly with Azure portal navigation instructions."
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Enable Microsoft Defender for Cloud"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Why? Defender for Cloud provides security posture management and threat protection.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Sign in to <a href="https://portal.azure.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Azure Portal</a></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Search for <strong className="text-gray-300">Microsoft Defender for Cloud</strong> and open it</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Click on <strong className="text-gray-300">Getting Started</strong> and enable Defender plans</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Review and action the security recommendations provided</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Deploy Azure Sentinel"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Why? Sentinel is a cloud-native SIEM for threat detection and automated response.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Search for <strong className="text-gray-300">Microsoft Sentinel</strong> and create a new workspace</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Connect data connectors (Azure AD, Azure Activity, Security Events)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable analytics rules to detect suspicious activity</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Use Log Analytics"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Why? Log Analytics lets you query and correlate security events across your environment.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Open your Log Analytics workspace from the Azure Portal</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Use KQL queries to filter and analyze security logs</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create custom alerts based on query results</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Integrate Threat Intelligence"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">Why? Threat intelligence helps identify and mitigate emerging threats proactively.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>In Sentinel, navigate to <strong className="text-gray-300">Threat Intelligence</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Add threat intelligence indicators (IPs, domains, file hashes)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create analytics rules that match logs against threat intel</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Test & Validate"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Confirm your monitoring setup is working correctly.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Generate test security events and confirm Sentinel detects them</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Verify alerts appear in the Sentinel Incidents dashboard</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Check Log Analytics for correlated event data</span></li>
            </ul>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: Security events are detected and incidents are visible in Sentinel.</p>
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
