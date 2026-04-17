import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 5;
const OBJECTIVES = [
  "Understand how identity and access management works in Azure",
  "Configure Role-Based Access Control (RBAC) to enforce least privilege",
  "Enable Multi-Factor Authentication (MFA) for enhanced security",
];

const Day1 = () => {
  const [open, setOpen] = useState(() => new Set([0, 1, 2, 3, 4]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={1} />
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-1-iam</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>

        {/* Title */}
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_1_iam_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 1: Identity & Access Management (IAM)</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Learn how to manage identities, access controls, and authentication using Microsoft Entra ID (Azure Active Directory).
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-500">{checked.size}/{TOTAL} complete</span>
            <span className="text-gray-700"># click items to check off</span>
          </div>
          <div className="w-full bg-gray-800 border border-gray-700 h-1.5">
            <div className="bg-red-500 h-full transition-all duration-500" style={{ width: `${(checked.size / TOTAL) * 100}%` }} />
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-blue-400 text-xs mb-3">$ cat learning_objectives.sh</div>
          <ul className="space-y-2">
            {OBJECTIVES.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&gt;</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expand / Collapse All */}
        <div className="flex items-center justify-end gap-4 text-xs text-gray-600 mb-3">
          <button onClick={() => setOpen(new Set([0,1,2,3,4]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>

        {/* Steps */}
        <div className="space-y-2 mb-12">
          <PhaseStepItem number={1} type="READ" title="Domain & Goal"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p><span className="text-gray-500">Domain:</span> Identity & Access Management (IAM)</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Understand how to manage user identities, access controls, and authentication in Azure.</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="What is IAM & Why it Matters"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Identity & Access Management (IAM) is a framework of policies and technologies that ensures the right people have the right access to resources. In Azure, IAM is managed using Microsoft Entra ID (Azure Active Directory) and Role-Based Access Control (RBAC).</p>
            <p className="mt-2">Without proper IAM controls, unauthorized users can access sensitive data, modify critical settings, or even delete resources. A well-implemented IAM strategy reduces security risks and improves compliance.</p>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="SCENARIO" title="Real-World Scenario: Bank Access Control"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>Imagine you work in a bank's cybersecurity team. Developers need access to cloud databases, but not all should modify financial records. Using RBAC, you assign <span className="text-yellow-400">"Read-Only"</span> permissions to developers and <span className="text-yellow-400">"Full Control"</span> only to database admins. This prevents unauthorized modifications while allowing necessary access.</p>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="NOTE" title="Key Concepts"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Microsoft Entra ID (Azure AD)</span> is the core identity provider in Azure.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">RBAC</span> allows you to control who can access which resources.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">MFA</span> adds an extra layer of security beyond passwords.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>IAM policies help organizations prevent data breaches and maintain compliance.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="LAB" title="Your Task: Secure Azure VM with RBAC & MFA"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>Secure an Azure Virtual Machine (VM) using RBAC & MFA. You'll:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Assign RBAC roles to control who can access the VM.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Enable MFA to require an extra verification step.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Test access to confirm that only authorized users can log in.</span></li>
            </ul>
            <div className="mt-3">
              <Link to="/module1/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link>
            </div>
          </PhaseStepItem>
        </div>

        {/* Bottom Nav */}
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/start" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> /start
          </Link>
          <Link to="/module1/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 1 Lab <ChevronRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Day1;
