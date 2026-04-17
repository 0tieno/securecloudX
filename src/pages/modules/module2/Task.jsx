import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 7;
const OBJECTIVES = [
  "Set up a Virtual Network (VNet) with subnets for network isolation",
  "Configure NSG rules to filter inbound and outbound traffic",
  "Deploy Azure Firewall to block unauthorized access to your VM",
];

const Task2 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-2-network-security</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_2_network_security_nsg_firewall.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Phase 2 Lab: Secure a VM with NSG & Firewall</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Configure Network Security Groups and Azure Firewall to protect a VM from unauthorized access.
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
            <p className="mb-2 text-gray-500 text-xs">The list does not follow the lab order, but gives you an overview of what you'll build.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Create a Virtual Network (VNet) with subnets.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Configure NSGs to filter inbound/outbound traffic.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Deploy Azure Firewall to block unauthorized access.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500">-</span><span>Deploy a test VM and validate security settings.</span></li>
            </ul>
            <div className="mt-3 p-3 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs mb-1">pre-lab reading</p>
              <a href="https://learn.microsoft.com/en-us/azure/firewall/tutorial-firewall-deploy-portal-policy/?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">→ Tutorial: Deploy and configure Azure Firewall using the Azure portal</a>
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={2} type="AI" title="AI Prompt — Use this to guide you"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Guide me step-by-step through a lab on securing an Azure Virtual Machine (VM) using Network Security Groups (NSGs) and Azure Firewall. The lab includes creating a VNet, configuring NSGs to filter traffic, deploying Azure Firewall for additional protection, and testing security settings. Please explain each step in simple terms and include Azure portal navigation instructions."
            </div>
          </PhaseStepItem>
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Create a Virtual Network (VNet)"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Why? A VNet provides network isolation and segmentation.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Sign in to <a href="https://portal.azure.com/?wt.mc_id=studentamb_387261" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Azure Portal</a></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Virtual Networks</strong> and click Create</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Choose a Resource Group and provide a unique VNet Name</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Define a subnet (e.g. subnet1 with 10.0.0.0/24 CIDR)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Click Review + Create then Create</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Configure Network Security Groups (NSGs)"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">Why? NSGs act as a firewall to control inbound and outbound traffic.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to <strong className="text-gray-300">Network Security Groups</strong> in Azure Portal</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Click Create and assign to the same Resource Group as your VNet</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Add inbound rule: Allow RDP (3389) or SSH (22) for specific IPs only</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Add inbound rule: Block all other incoming traffic by default</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Associate the NSG with the VM's subnet</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Deploy Azure Firewall"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Why? Azure Firewall provides centralized traffic control and protection.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Azure Firewall</strong> and click Create</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Assign it to the same VNet and subnet</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Define rule: Deny all inbound traffic except allowed services</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Define rule: Allow only essential outbound traffic</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Deploy a Test VM"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">Deploy a VM inside the VNet to test your security settings against.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a VM inside the VNet you configured</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Make sure it uses the subnet associated with the NSG</span></li>
            </ul>
          </PhaseStepItem>
          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Test & Validate"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Why? Testing ensures that security policies work as expected.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Try accessing the VM from an unauthorized IP — it should be blocked</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Verify only allowed users/IPs can access the VM</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Check Azure Monitor Logs to confirm blocked and allowed traffic</span></li>
            </ul>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: Unauthorized access is blocked; only permitted traffic flows through.</p>
            </div>
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-1">guided portfolio project:</p>
              <a href="https://learn.microsoft.com/training/modules/guided-project-configure-secure-access-workloads/?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">→ Configure secure access to workloads with Azure virtual networking services</a>
            </div>
          </PhaseStepItem>
        </div>
        <MarkPhaseComplete phaseId={2} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module2" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Phase 2 Overview
          </Link>
          <Link to="/module3" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Phase 3 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task2;
