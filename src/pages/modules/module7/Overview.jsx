import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 5;
const OBJECTIVES = [
  "Apply IAM, network, data, and app security in a unified Azure deployment",
  "Deploy Azure Sentinel for comprehensive threat detection and response",
  "Conduct a security audit and verify compliance with industry standards",
];

const Day7 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4]));
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 7: Capstone Project — Secure Azure Deployment</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Apply everything you've learned throughout the challenge by securing an end-to-end Azure deployment.
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
            <p><span className="text-gray-500">Domain:</span> Comprehensive Security Implementation</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Secure an end-to-end Azure deployment by integrating security best practices from all 7 phases.</p>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="READ" title="What is this Capstone & Why it Matters"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>The capstone project brings everything together — you'll secure a full Azure deployment using all the tools, configurations, and strategies learned across the previous 6 phases.</p>
            <p className="mt-2">A secure deployment ensures your environment is protected from external and internal threats, preventing data breaches and operational disruptions.</p>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="SCENARIO" title="Real-World Scenario: Healthcare Provider Deployment"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>You are a cloud security engineer tasked with securing a new Azure deployment for a large healthcare provider. The company handles sensitive patient data and must comply with strict privacy regulations (HIPAA, GDPR). Your job is to implement a comprehensive security posture across <span className="text-yellow-400">identity, network, and data layers</span> to ensure confidentiality, integrity, and availability.</p>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="NOTE" title="Final Task Overview"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Configure identity management with RBAC and MFA for all users.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Set up NSGs and Azure Firewall to monitor and control traffic.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Configure encryption for sensitive data in transit and at rest.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Deploy Azure Sentinel and configure real-time threat detection alerts.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Conduct a security audit for HIPAA/GDPR compliance.</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="EVALUATE" title="Final Evaluation Checklist"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>All unnecessary access points removed?</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>Identity management secured with RBAC & MFA?</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>Network traffic monitored and protected with NSGs and Azure Firewall?</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>Sensitive data and secrets encrypted with Azure encryption?</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>Threat detection active with Azure Sentinel & Defender for Cloud?</span></li>
            </ul>
            <div className="mt-3"><Link to="/module7/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_capstone.sh</Link></div>
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
