import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 5;
const OBJECTIVES = [
  "Protect data at rest and in transit using Azure encryption",
  "Manage encryption keys securely with Azure Key Vault",
  "Control access to resources using Shared Access Signatures (SAS)",
];

const Day3 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={3} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-3-data-security</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_3_data_security_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 3: Data Security & Encryption</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Learn how to protect data at rest and in transit using encryption and access control mechanisms.
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
            <p><span className="text-gray-500">Domain:</span> Data Security</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Secure data using encryption, access controls, and backups.</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="What is Data Security & Why it Matters"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Data security refers to the protection of digital data from unauthorized access, corruption, or theft. In Azure, this is achieved using encryption, access control, and secure backups.</p>
            <p className="mt-2">Without strong data security, sensitive information can be exposed, leading to data breaches, compliance violations, and financial losses. Encrypting data and enforcing strict access controls helps mitigate these risks.</p>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="SCENARIO" title="Real-World Scenario: Healthcare Provider"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>You are working for a healthcare provider storing patient records in Azure Storage. To protect sensitive data, you implement <span className="text-yellow-400">encryption for data at rest</span>, enforce strict access controls using RBAC, and use <span className="text-yellow-400">private endpoints</span> to prevent exposure to the public internet.</p>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="NOTE" title="Key Concepts"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Azure provides <span className="text-gray-300">Server-Side Encryption (SSE)</span> for data at rest.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Use <span className="text-gray-300">Azure Key Vault</span> to manage encryption keys securely.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Enable <span className="text-gray-300">HTTPS-only access</span> to protect data in transit.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Use <span className="text-gray-300">Shared Access Signatures (SAS)</span> to grant limited, time-bound access.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="LAB" title="Your Task: Complete Data Security Labs (3 phases)"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>By completing the following labs, you'll understand how encryption and access controls protect cloud data:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Module 1 — Understanding Data Security Basics</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Module 2 — Securing Public Data in Azure Storage</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Module 3 — Protecting Private Data with High Availability</span></li>
            </ul>
            <div className="mt-3">
              <Link to="/module3/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link>
            </div>
          </PhaseStepItem>
        </div>

        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module2" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 2
          </Link>
          <Link to="/module3/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 3 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day3;
