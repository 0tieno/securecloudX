import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 5;
const OBJECTIVES = [
  "Deploy Azure WAF to protect against OWASP vulnerabilities",
  "Enable Managed Identities to remove credential-based access",
  "Validate security by testing WAF rules and identity-based access",
];

const Task4 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_4_task", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-4-app-security</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_4_app_security_waf_managed_identities.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Phase 4 Lab: Secure Web App with WAF & Managed Identities</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Implement security controls for web applications and APIs using WAF and Managed Identities.
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-10">
          <PhaseStepItem number={1} type="PREP" title="What You'll Do"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Deploy Azure Web Application Firewall (WAF) to protect web applications.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Use Managed Identities to enhance application security.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Test the setup to ensure protection against common web threats.</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="AI" title="AI Prompt — Use this to guide you"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Walk me through a hands-on lab on securing web applications in Azure using WAF and Managed Identities. The lab should include deploying WAF to protect against web-based threats, enabling Managed Identities to remove credential-based authentication, and testing the setup to ensure security measures work."
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Deploy Azure Web Application Firewall (WAF)"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Why? WAF protects web apps from SQL injection, XSS, and OWASP threats.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Sign in to <a href="https://portal.azure.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Azure Portal</a></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to <strong className="text-gray-300">Azure Front Door & WAF</strong> or <strong className="text-gray-300">Application Gateway</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a WAF Policy and apply it to a web application</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable OWASP rule sets to protect against common vulnerabilities</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Enable Managed Identities"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Why? Managed Identities eliminate stored credentials in application code.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to Azure App Service or Azure Functions</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Identity &gt; System Assigned Identity</strong> and enable it</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Assign required RBAC roles to allow secure access to resources</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Test & Validate"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Why? Always verify security settings to ensure protection is working.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Test WAF by sending a request with a malicious payload</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Verify that SQL injection and XSS attacks are blocked</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Check Azure Security Center logs for blocked threats</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Confirm Managed Identity works by accessing a resource without credentials in code</span></li>
            </ul>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: Attacks are blocked; apps securely access resources via Managed Identities.</p>
            </div>
          </PhaseStepItem>
        </div>
        <MarkPhaseComplete phaseId={4} checkedCount={checked.size} total={TOTAL} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module4" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Phase 4 Overview
          </Link>
          <Link to="/module5" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Phase 5 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task4;
