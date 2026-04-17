import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 5;
const OBJECTIVES = [
  "Set up Azure Sentinel for real-time threat monitoring",
  "Use KQL (Kusto Query Language) to investigate security incidents",
  "Design automated incident response playbooks",
];

const Day6 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={6} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-6-incident-response</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_6_incident_response_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 6: Incident Response & Threat Detection</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Learn how to detect, investigate, and respond to security incidents in Azure.
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
            <p><span className="text-gray-500">Domain:</span> Security Operations</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Implement Azure security monitoring and incident response strategies.</p>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="READ" title="What is Incident Response & Why it Matters"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Incident response is the process of identifying, investigating, and mitigating security threats. In Azure, tools like Microsoft Sentinel and Defender for Cloud provide real-time threat monitoring.</p>
            <p className="mt-2">Security breaches can lead to data loss, service disruptions, and compliance issues. A proactive incident response strategy reduces risks and mitigates threats effectively.</p>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="SCENARIO" title="Real-World Scenario: Suspicious Login Attempts"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>Your company experiences unusual login attempts from multiple locations. To investigate, you use <span className="text-yellow-400">Azure Sentinel</span> to detect anomalies, create security alerts, and automate a playbook response to <span className="text-yellow-400">block suspicious activity</span> automatically.</p>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="NOTE" title="Key Concepts"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Azure Sentinel</span> is a cloud-native SIEM that collects and analyzes security data.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Use <span className="text-gray-300">KQL (Kusto Query Language)</span> to investigate security incidents.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Security alerts can be automatically triggered based on predefined rules.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Incident response playbooks</span> automate actions like blocking malicious IPs.</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="LAB" title="Your Task: Set Up Sentinel & Response Playbook"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>Set up Azure Sentinel and create an automated incident response playbook. You'll:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Enable Azure Sentinel and connect log sources</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Create security alert rules to detect threats</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Use KQL queries to investigate security incidents</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Design an automated incident response playbook</span></li>
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
