import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 5;
const OBJECTIVES = [
  "Deploy Azure Web Application Firewall (WAF) to block OWASP attacks",
  "Use Managed Identities to eliminate credential-based authentication",
  "Apply Zero Trust principles to restrict application access",
];

const Day4 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={4} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-4-app-security</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_4_app_security_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 4: Application Security in Azure</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Learn how to secure applications deployed in Azure using security best practices.
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
            <p><span className="text-gray-500">Domain:</span> Application Security</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Implement security controls for web applications and APIs in Azure.</p>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="READ" title="What is Application Security & Why it Matters"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Application security involves protecting applications from threats and vulnerabilities by implementing secure authentication, access control, and network protections.</p>
            <p className="mt-2">Web applications and APIs are common attack targets. Implementing security measures prevents unauthorized access, data breaches, and service disruptions.</p>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="SCENARIO" title="Real-World Scenario: Financial Services Company"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>A financial services company hosting a web application on Azure configures <span className="text-yellow-400">Web Application Firewall (WAF)</span> to prevent common attacks, enables <span className="text-yellow-400">Managed Identities</span> to securely access Azure resources without storing credentials, and enforces HTTPS-only traffic.</p>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="NOTE" title="Key Concepts"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Azure WAF</span> protects against SQL injection, XSS, and other OWASP attacks.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Managed Identities</span> eliminate the need to store secrets in code.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Enable <span className="text-gray-300">HTTPS and TLS 1.2+</span> for secure communication.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span>Apply <span className="text-gray-300">Zero Trust</span> by restricting access based on identity and context.</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="LAB" title="Your Task: Secure Web App with WAF & Managed Identities"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>Secure a web application using WAF and Managed Identities. You'll:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Deploy Azure WAF to protect against web-based attacks</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Enable Managed Identities to secure app authentication</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Restrict application access using Azure AD authentication</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Test by simulating an attack and verifying security logs</span></li>
            </ul>
            <div className="mt-3"><Link to="/module4/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link></div>
          </PhaseStepItem>
        </div>
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module3" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 3
          </Link>
          <Link to="/module4/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 4 Lab <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day4;
