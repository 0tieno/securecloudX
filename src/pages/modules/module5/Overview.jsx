import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 5;
const OBJECTIVES = [
  "Enable Microsoft Defender for Cloud for security posture management",
  "Deploy Azure Sentinel as a cloud-native SIEM solution",
  "Use Log Analytics to detect anomalies and analyze security events",
];

const Day5 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={5} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-5-security-monitoring</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat phase_5_security_monitoring_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Phase 5: Security Monitoring & Threat Intelligence</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Learn how to continuously monitor security events, detect threats, and use threat intelligence in Azure.
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-12">
          <PhaseStepItem number={1} type="READ" title="Domain & Goal"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p><span className="text-gray-500">Domain:</span> Security Monitoring</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Implement continuous security monitoring and threat intelligence in Azure.</p>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="READ" title="What is Security Monitoring & Why it Matters"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Security monitoring involves continuously analyzing system activity, logs, and alerts to detect security threats in real time.</p>
            <p className="mt-2">Without proactive monitoring, security incidents may go undetected, leading to data breaches, financial losses, and compliance violations.</p>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="SCENARIO" title="Real-World Scenario: Global Finance Company"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>You are a security analyst for a global finance company. A recent audit revealed gaps in threat detection and response. To enhance security, you integrate <span className="text-yellow-400">Microsoft Defender for Cloud</span> and <span className="text-yellow-400">Azure Sentinel</span>, enabling real-time monitoring and automated threat response.</p>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="NOTE" title="Key Concepts"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Microsoft Defender for Cloud</span> provides security posture management and advanced threat protection.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Azure Sentinel</span> is a cloud-native SIEM for threat detection and response.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Log Analytics</span> lets you query and analyze security events for anomalies.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Threat intelligence</span> helps identify and mitigate emerging cyber threats proactively.</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="LAB" title="Your Task: Configure Security Monitoring"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>Configure security monitoring tools in Azure. You'll:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Enable Microsoft Defender for Cloud and configure recommendations</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Deploy Azure Sentinel and connect data sources</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Use Log Analytics to analyze security logs</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Set up threat intelligence integration for proactive security</span></li>
            </ul>
            <div className="mt-3"><Link to="/module5/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link></div>
          </PhaseStepItem>
        </div>
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module4" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Phase 4
          </Link>
          <Link to="/module5/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Phase 5 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day5;
