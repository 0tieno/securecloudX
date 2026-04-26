import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 10;
const OBJECTIVES = [
  "Design a multi-tier VNet with web, app, and data subnets",
  "Configure NSG rules to enforce micro-segmentation between tiers",
  "Deploy a VM with no public IP and access it securely via Azure Bastion",
  "Validate traffic flow using Network Watcher's IP flow verify and NSG diagnostics",
];

const Task2 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_2_task", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-2-network-security</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_2_network_segmentation.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 2 Lab: Build a Segmented Network with Secure Access</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Design a multi-tier network, lock down traffic with NSGs, deploy a VM with no public IP, and use Bastion for secure access. Validate everything with Network Watcher.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">~45 min read &nbsp;·&nbsp; Lab: ~75 min &nbsp;·&nbsp; Est. cost: ~$0.50–1.00 (Bastion + VM)</p>
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7,8,9]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-10">
          {/* Step 1: Prep */}
          <PhaseStepItem number={1} type="PREP" title="What You'll Build — Network Architecture"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p className="text-sm mb-2">You'll build a segmented network that mirrors real enterprise architecture:</p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm font-mono">
              <p className="text-gray-400">VNet: <span className="text-yellow-400">vnet-scx-lab</span> (10.0.0.0/16)</p>
              <p className="text-gray-400 pl-3">├── <span className="text-cyan-400">snet-web</span>    (10.0.1.0/24) — Web tier, NSG allows port 80/443 from internet</p>
              <p className="text-gray-400 pl-3">├── <span className="text-cyan-400">snet-app</span>    (10.0.2.0/24) — App tier, NSG allows traffic only from web subnet</p>
              <p className="text-gray-400 pl-3">├── <span className="text-cyan-400">snet-data</span>   (10.0.3.0/24) — Data tier, NSG allows traffic only from app subnet</p>
              <p className="text-gray-400 pl-3">└── <span className="text-cyan-400">AzureBastionSubnet</span> (10.0.255.0/26) — For secure VM access</p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-yellow-400">Cost note:</span> Azure Bastion has an hourly cost (~$0.19/hr for Basic SKU). Deploy it, test, and delete when done. The VNet, subnets, and NSGs are free.</p>
            </div>
          </PhaseStepItem>

          {/* Step 2: AI Prompt */}
          <PhaseStepItem number={2} type="AI" title="AI Prompt — Network Architect Guide"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Guide me step-by-step through building a secure multi-tier network in Azure. The lab covers: (1) Create a VNet called vnet-scx-lab with CIDR 10.0.0.0/16, with 4 subnets: snet-web (10.0.1.0/24), snet-app (10.0.2.0/24), snet-data (10.0.3.0/24), and AzureBastionSubnet (10.0.255.0/26). (2) Create 3 NSGs: nsg-web (allow HTTP/HTTPS from internet, deny all other inbound), nsg-app (allow traffic only from snet-web, deny all other), nsg-data (allow traffic only from snet-app, deny all other). Associate each NSG with its subnet. (3) Deploy a small Linux VM (B1s) in snet-app with NO public IP address. (4) Deploy Azure Bastion (Basic SKU) in the AzureBastionSubnet and connect to the VM through the portal. (5) Use Network Watcher IP flow verify to test: can snet-web reach snet-app? Can snet-web reach snet-data directly? (6) Check NSG flow logs and effective security rules. Explain each step with portal navigation and explain the security principle behind each decision."
            </div>
          </PhaseStepItem>

          {/* Step 3: VNet + Subnets */}
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Create VNet with Multi-Tier Subnets"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Defense in Depth starts with network segmentation — isolating workloads into separate subnets.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Virtual Networks → Create</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Resource group: <code className="text-yellow-400">rg-scx-network-lab</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name: <code className="text-yellow-400">vnet-scx-lab</code>, Address space: <code className="text-yellow-400">10.0.0.0/16</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Add subnets:</span></li>
            </ul>
            <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-300">• <code className="text-yellow-400">snet-web</code> — 10.0.1.0/24 <span className="text-gray-500">(web-facing tier)</span></p>
              <p className="text-gray-300">• <code className="text-yellow-400">snet-app</code> — 10.0.2.0/24 <span className="text-gray-500">(application logic)</span></p>
              <p className="text-gray-300">• <code className="text-yellow-400">snet-data</code> — 10.0.3.0/24 <span className="text-gray-500">(databases)</span></p>
              <p className="text-gray-300">• <code className="text-yellow-400">AzureBastionSubnet</code> — 10.0.255.0/26 <span className="text-gray-500">(exact name required by Azure)</span></p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">Why this design?</span> An attacker who compromises a web server can't directly reach the database — they'd need to pivot through the app tier first. Each hop requires passing through an NSG.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/virtual-network/quick-create-portal?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Quickstart: Create a virtual network</a>
            </div>
          </PhaseStepItem>

          {/* Step 4: NSGs */}
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Configure NSGs for Micro-Segmentation"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">NSGs enforce traffic rules between subnets. Create one per tier with specific allow/deny rules.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">NSG 1: nsg-web</strong></p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create NSG → Name: <code className="text-yellow-400">nsg-web</code> → Associate with <code className="text-yellow-400">snet-web</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Inbound rule: Allow <code className="text-yellow-400">HTTP (80)</code> and <code className="text-yellow-400">HTTPS (443)</code> from <code className="text-yellow-400">Internet</code> — Priority 100</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Inbound rule: <span className="text-red-400">Deny all other inbound</span> — Priority 4000</span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">NSG 2: nsg-app</strong></p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create NSG → Name: <code className="text-yellow-400">nsg-app</code> → Associate with <code className="text-yellow-400">snet-app</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Inbound rule: Allow <code className="text-yellow-400">port 8080</code> from source <code className="text-yellow-400">10.0.1.0/24</code> (web subnet only) — Priority 100</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Inbound rule: <span className="text-red-400">Deny all other inbound</span> — Priority 4000</span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">NSG 3: nsg-data</strong></p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create NSG → Name: <code className="text-yellow-400">nsg-data</code> → Associate with <code className="text-yellow-400">snet-data</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Inbound rule: Allow <code className="text-yellow-400">port 1433</code> (SQL) from source <code className="text-yellow-400">10.0.2.0/24</code> (app subnet only) — Priority 100</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Inbound rule: <span className="text-red-400">Deny all other inbound</span> — Priority 4000</span></li>
            </ul>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">Key insight:</span> Notice the data subnet only accepts traffic from the app subnet. Even if an attacker gets into the web tier, they can't reach the database directly — this is micro-segmentation in action.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/virtual-network/manage-network-security-group?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Create and manage NSGs</a>
            </div>
          </PhaseStepItem>

          {/* Step 5: VM + Bastion */}
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Deploy VM (No Public IP) & Connect via Bastion"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Zero public IPs = zero attack surface for management ports. Use Bastion for secure access.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Deploy the VM:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Virtual Machines → Create</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Size: <code className="text-yellow-400">Standard_B1s</code> (cheapest, sufficient for testing)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Image: <code className="text-yellow-400">Ubuntu Server 22.04 LTS</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Networking: VNet = <code className="text-yellow-400">vnet-scx-lab</code>, Subnet = <code className="text-yellow-400">snet-app</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Public IP: <span className="text-red-400">None</span> — this is critical</span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Deploy Bastion:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to the VM → <strong className="text-gray-300">Connect → Bastion</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Azure will prompt you to deploy Bastion into the AzureBastionSubnet</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>SKU: <code className="text-yellow-400">Basic</code> — wait for deployment (takes ~5 minutes)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enter your VM credentials → Connect through the browser-based SSH session</span></li>
            </ul>
            <div className="mt-2 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">You're now connected to a VM that has zero public IP addresses and zero management ports open. This is enterprise-grade secure access.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/bastion/quickstart-host-portal?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Quickstart: Deploy Azure Bastion</a>
            </div>
          </PhaseStepItem>

          {/* Step 6: Network Watcher */}
          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Validate with Network Watcher"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">Network Watcher lets you verify whether traffic is allowed or denied — without sending actual packets.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Network Watcher → IP flow verify</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Select your VM and test these scenarios:</span></li>
            </ul>
            <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-400 mb-1">Test 1: <span className="text-green-400">Should ALLOW</span></p>
              <p className="text-gray-300 pl-3">Direction: Inbound | Source: 10.0.1.5 (web tier) | Dest: VM IP | Port: 8080</p>
              <p className="text-gray-400 mt-2 mb-1">Test 2: <span className="text-red-400">Should DENY</span></p>
              <p className="text-gray-300 pl-3">Direction: Inbound | Source: 10.0.3.5 (data tier) | Dest: VM IP | Port: 8080</p>
              <p className="text-gray-400 mt-2 mb-1">Test 3: <span className="text-red-400">Should DENY</span></p>
              <p className="text-gray-300 pl-3">Direction: Inbound | Source: 8.8.8.8 (internet) | Dest: VM IP | Port: 22</p>
            </div>
            <ul className="space-y-1.5 mt-3">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Also check <strong className="text-gray-300">Network Watcher → Effective security rules</strong> on the VM's NIC to see all applied NSG rules</span></li>
            </ul>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/network-watcher/ip-flow-verify-overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: IP flow verify</a>
              <a href="https://learn.microsoft.com/azure/network-watcher/network-watcher-network-configuration-diagnostics-overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: NSG diagnostics</a>
            </div>
          </PhaseStepItem>

          {/* Step 7: Wrap-up */}
          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Review Architecture & Clean Up"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Review what you built and document the security decisions.</p>
            <div className="p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-300 font-semibold mb-1">Architecture Review Checklist</p>
              <ul className="space-y-0.5 text-gray-400">
                <li>• VNet with 4 subnets — proper segmentation by tier</li>
                <li>• NSGs enforce: web ← internet (80/443), app ← web only, data ← app only</li>
                <li>• VM has no public IP — accessible only via Bastion</li>
                <li>• No management ports (22, 3389) open to the internet</li>
                <li>• Network Watcher confirms traffic rules are working</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: Multi-tier segmentation enforced, lateral movement blocked, secure access via Bastion, no public exposure.</p>
            </div>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Cleanup: Delete Bastion first (it has hourly costs), then delete the resource group to remove everything else. VNets and NSGs are free but clean up is good practice.</p>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-500 mb-1">guided portfolio project:</p>
              <a href="https://learn.microsoft.com/training/modules/guided-project-configure-secure-access-workloads/?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">→ Configure secure access to workloads with Azure virtual networking services</a>
            </div>
          </PhaseStepItem>
        </div>

        <div className="space-y-2 mb-6">
          <PhaseStepItem number={8} type="ATTACKER" title="What the attacker sees if this lab is misconfigured"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <p>If your NSG allows inbound SSH/RDP from <span className="text-yellow-400">0.0.0.0/0</span>, every automated scanner on the internet is hitting your VM's port 22 within minutes of deployment. Most Azure VMs face brute-force attempts within 30 seconds of a public IP assignment.</p>
            <div className="mt-3 p-3 border border-red-800/40 bg-red-900/10">
              <p className="text-red-400 text-xs font-bold mb-2">Attack path: exposed management ports</p>
              <p className="text-gray-400 text-xs">Attacker runs <code className="text-yellow-400">masscan -p 22,3389 &lt;your-IP&gt;</code>, finds the open port, brute-forces with credential lists. Without Azure Defender for Servers, this may go undetected. Result: shell access or RDP session on your VM.</p>
            </div>
            <div className="mt-2 p-2 border border-red-800/40 bg-red-900/10">
              <p className="text-gray-400 text-xs"><span className="text-red-400">Missing Private Endpoints:</span> If your storage account or SQL database has a public endpoint and the "Allow Azure services" firewall rule enabled, any Azure-hosted attacker resource (including free trial VMs) can attempt to connect to it.</p>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={9} type="WARN" title="Common mistakes in this lab"
            isOpen={open.has(8)} onToggleOpen={() => toggleOpen(8)}
            isChecked={checked.has(8)} onToggleChecked={() => toggleChecked(8)}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">NSG allow-all rule left in place:</span> "Allow inbound Any:Any" or source 0.0.0.0/0 on high-value ports (22, 3389, 445) is one of the most common misconfigurations found in cloud pen tests. Always verify NSG effective rules after configuration.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">VNet peering without route tables:</span> By default peered VNets communicate directly. In Hub-Spoke, you must add User Defined Routes (UDRs) pointing to the hub firewall so traffic is inspected, not bypassed.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Forgetting to enable Bastion diagnostic logs:</span> Bastion logs (SSH sessions, RDP connections) go to a Log Analytics workspace — but only if you configure diagnostic settings. Without logs, you have no audit trail.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Private Endpoint without disabling public endpoint:</span> Creating a Private Endpoint doesn't disable the public endpoint automatically. You must explicitly set <code className="text-yellow-400">publicNetworkAccess: Disabled</code> on the resource too.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={10} type="CLEANUP" title="Cleanup — prevent unexpected charges"
            isOpen={open.has(9)} onToggleOpen={() => toggleOpen(9)}
            isChecked={checked.has(9)} onToggleChecked={() => toggleChecked(9)}>
            <p className="text-sm text-gray-400 mb-3">Azure Firewall and Bastion are expensive if left running. Delete them first.</p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 1. Delete the resource group (removes VNet, NSGs, Bastion, Firewall)</p>
                <p className="text-gray-400">az group delete --name rg-network-lab --yes --no-wait</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 2. Delete Private Endpoints (if in separate RG)</p>
                <p className="text-gray-400">az network private-endpoint delete --name &lt;pe-name&gt; --resource-group &lt;rg&gt;</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 3. Verify no Azure Firewall policy remains (charged separately)</p>
                <p className="text-gray-400">az network firewall policy list --output table</p>
              </div>
            </div>
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={2} checkedCount={checked.size} total={TOTAL} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module2" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 2 Overview
          </Link>
          <Link to="/module3" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 3 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task2;
