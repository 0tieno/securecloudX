import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 6;
const OBJECTIVES = [
  "Implement Virtual Networks (VNet) for secure resource isolation",
  "Configure Network Security Groups (NSGs) to filter traffic",
  "Deploy Azure Firewall and understand DDoS protection",
];

const Day2 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={2} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-2-network-security</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_2_network_security_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 2: Network Security & Perimeter Defense</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Learn how to secure Azure resources by implementing Virtual Networks (VNet), Network Security Groups (NSG), Azure Firewall, and DDoS protection.
          </p>
        </div>

      {/* Domain & Goal */}
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

        <div className="flex items-center justify-end gap-4 text-xs text-gray-600 mb-3">
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>

        <div className="space-y-2 mb-12">
          <PhaseStepItem number={1} type="READ" title="Domain & Goal"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p><span className="text-gray-500">Domain:</span> Network Security</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Implement perimeter security controls to protect Azure resources from unauthorized access and cyber threats.</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="What is Network Security & Why it Matters"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Network Security is a set of technologies and policies that help protect cloud infrastructure by controlling and filtering traffic.</p>
            <p className="mt-2">Without proper security measures, attackers can exploit open ports, inject malware, or perform denial-of-service attacks. Proper network security ensures data integrity, availability, and confidentiality.</p>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="READ" title="Must Read: Network Security Fundamentals"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>Before proceeding, review these foundational resources:</p>
            <ul className="space-y-2 mt-2">
              <li><a href="https://learn.microsoft.com/en-us/training/modules/network-fundamentals-2/?wt.mc_id=studentamb_387261" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">→ Fundamentals of Network Security (Microsoft Learn)</a></li>
              <li><a href="https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility/?wt.mc_id=studentamb_387261" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">→ Shared responsibility in the cloud (network security)</a></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="SCENARIO" title="Real-World Scenario: Open Ports Attack"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p>A company deployed a web application on Azure, but their VMs had open RDP <span className="text-yellow-400">(port 3389)</span> and SSH <span className="text-yellow-400">(port 22)</span> ports exposed to the internet. Attackers exploited these to gain access. By implementing NSGs, firewalls, and DDoS protection, the company was able to prevent future breaches and secure their infrastructure.</p>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="NOTE" title="Key Concepts"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Virtual Networks (VNet)</span> allow resources to communicate securely and in isolation.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Network Security Groups (NSGs)</span> control inbound and outbound traffic rules.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Azure Firewall</span> provides centralized security policy enforcement.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">DDoS Protection</span> helps mitigate denial-of-service attacks.</span></li>
            </ul>
            <p className="mt-2 text-gray-600 text-xs">→ Visit the resources page for deeper reading on each concept.</p>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="LAB" title="Your Task: Secure Azure VM with NSGs & Firewall"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p>Secure an Azure Virtual Machine using NSGs, a firewall, and DDoS protection. You'll:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Create a Virtual Network (VNet) to organize resources</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Configure Network Security Groups (NSGs) to restrict access</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Deploy Azure Firewall to control traffic</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Learn about DDoS Protection (advanced — <a href="https://learn.microsoft.com/en-us/training/modules/introduction-azure-ddos-protection/?wt.mc_id=studentamb_387261" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">read more</a>)</span></li>
            </ul>
            <div className="mt-3">
              <Link to="/module2/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link>
            </div>
          </PhaseStepItem>
        </div>

        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to="/module1" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 1
          </Link>
          <Link to="/module2/task" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 2 Lab <ChevronRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Day2;
