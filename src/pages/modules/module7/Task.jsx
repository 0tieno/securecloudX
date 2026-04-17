import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 8;
const OBJECTIVES = [
  "Deploy a secure Azure VM with RBAC, MFA, and network controls",
  "Integrate Azure Key Vault, encryption, and WAF for defense-in-depth",
  "Set up Sentinel for monitoring and conduct a final security audit",
];

const Task7 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-7-capstone</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./capstone_secure_azure_deployment.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Phase 7 Capstone: Secure Azure Deployment</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Apply everything you've learned to build and secure a complete Azure environment.
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-10">
          <PhaseStepItem number={1} type="PREP" title="What You'll Build"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p className="text-xs text-gray-500 mb-2">A fully secured Azure environment for a healthcare provider (HIPAA/GDPR scenario).</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Secure VM with IAM (RBAC + MFA)</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Network controls (VNet, NSGs, Firewall)</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Data security (encryption, Key Vault, SAS)</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Monitoring (Sentinel + Defender for Cloud)</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Final security audit and documentation</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="AI" title="AI Prompt — Your Capstone Guide"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for full capstone guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Guide me through a capstone project where I secure a full Azure environment for a healthcare provider. This includes: (1) deploying a VM and securing access with RBAC and MFA, (2) configuring VNet, NSGs, and Azure Firewall, (3) encrypting data at rest and in transit, configuring Azure Key Vault, (4) deploying WAF and enabling Managed Identities, (5) setting up Microsoft Sentinel and Defender for Cloud for threat monitoring, and (6) conducting a security audit for HIPAA/GDPR compliance. Provide detailed steps for each phase with Azure portal navigation instructions."
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Deploy a Secure Azure VM"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Why? A secure VM is the foundation of your cloud environment.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a VM in the Azure Portal with a secure OS image</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Place it inside a secured VNet with a private subnet</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Disable password auth — use SSH keys or Azure Bastion only</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Configure Identity & Access (IAM)"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Why? IAM ensures only authorized identities can access your resources.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create users in Microsoft Entra ID and assign roles (RBAC)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable MFA with Conditional Access for all privileged accounts</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Apply least-privilege — remove any unused role assignments</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Network & Data Security"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Why? Defense-in-depth layers protect data at the network and storage level.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Configure NSGs to block unauthorized inbound traffic</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Deploy Azure Firewall with allow-list rules</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable encryption for storage accounts (SSE + customer-managed keys)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enforce HTTPS-only and TLS 1.2+ on all endpoints</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Configure Azure Key Vault"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">Why? Key Vault centralizes secrets management and prevents credential exposure.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create an Azure Key Vault and store application secrets and keys</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable soft delete and purge protection to prevent accidental loss</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Grant access via Managed Identity — no hardcoded credentials</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Enable Monitoring & Threat Detection"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Why? Continuous monitoring detects and responds to threats in real-time.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable Microsoft Defender for Cloud for all resource types</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Deploy Azure Sentinel and connect all data sources</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create analytics rules for suspicious login and network anomalies</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Build a playbook to auto-block malicious IPs</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={8} type="EVALUATE" title="Step 6: Test, Document & Security Audit"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <p className="text-xs text-gray-500 mb-2">Final step: validate your entire setup and document your security posture.</p>
            <ul className="space-y-1 mb-3">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>All unnecessary ports and access points closed?</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>RBAC and MFA enforced for all privileged accounts?</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>Network traffic controlled via NSGs and Firewall?</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>Sensitive data encrypted, secrets stored in Key Vault?</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>Sentinel detecting threats and Defender recommendations resolved?</span></li>
            </ul>
            <div className="p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">You've completed the SecureCloud Challenge. Document your findings and share your work!</p>
            </div>
          </PhaseStepItem>
        </div>
        <MarkPhaseComplete phaseId={7} />
        <div className="flex justify-start items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module7" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Phase 7 Overview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task7;
