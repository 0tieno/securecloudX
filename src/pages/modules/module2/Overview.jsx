import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";
import ArchitectNote from "../../../components/ArchitectNote";
import QuizCard from "../../../components/QuizCard";

const TOTAL = 7;
const OBJECTIVES = [
  "Understand Defense in Depth as the layered security model for cloud networking",
  "Design Virtual Networks (VNets) with proper segmentation using subnets",
  "Configure Network Security Groups (NSGs) with inbound/outbound security rules",
  "Implement Private Endpoints to eliminate public internet exposure for Azure services",
  "Use Azure Bastion for secure, jump-box-free remote access to VMs",
  "Understand hub-spoke network topology and Azure Firewall for centralized traffic control",
];

const Day2 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5,6,7]));
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 2: Network Security & Segmentation</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            In the cloud, your network is software-defined — which means it can be misconfigured just as easily as it can be secured. This module teaches you how to segment networks, control traffic flow, eliminate public exposure, and implement Defense in Depth using the same patterns used in enterprise Azure environments.
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
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6,7]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-12">
          <PhaseStepItem number={1} type="READ" title="Domain & Goal"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p><span className="text-gray-500">Domain:</span> Network Security & Segmentation</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Design and implement secure network architectures in Azure using VNets, NSGs, Private Endpoints, Bastion, and Azure Firewall.</p>
            <p className="mt-2 text-gray-500 text-xs">Industry alignment: AZ-500 (Secure networking — 20-25% of exam), CIS Azure Benchmark Section 6 (Networking), NIST 800-53 SC (System and Communications Protection)</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="Defense in Depth — Layered Network Security"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Defense in Depth is a security strategy that uses multiple layers of protection. If one layer fails, the next layer catches the threat. In cloud networking, every layer adds friction for an attacker:</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-16 flex-shrink-0">Layer 1</span>
                  <div><span className="text-gray-300">DDoS Protection</span> — Absorbs volumetric attacks before they reach your network</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-16 flex-shrink-0">Layer 2</span>
                  <div><span className="text-gray-300">Azure Firewall / WAF</span> — Centralized traffic filtering and application-layer protection</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-16 flex-shrink-0">Layer 3</span>
                  <div><span className="text-gray-300">VNet Segmentation</span> — Isolate workloads into separate VNets and subnets</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-16 flex-shrink-0">Layer 4</span>
                  <div><span className="text-gray-300">NSGs</span> — Allow/deny rules on subnets and NICs (network interface cards)</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-16 flex-shrink-0">Layer 5</span>
                  <div><span className="text-gray-300">Private Endpoints</span> — Remove public internet exposure for PaaS services entirely</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold w-16 flex-shrink-0">Layer 6</span>
                  <div><span className="text-gray-300">Encryption</span> — TLS in transit, encryption at rest on every service</div>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/security/fundamentals/network-overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure network security overview</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="READ" title="VNets, Subnets & NSGs — The Foundation"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>A Virtual Network (VNet) is your private network space in Azure. Subnets divide it into segments. NSGs control what traffic can flow between them.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">VNet Design Principles</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">One VNet per workload/environment</span> — Don't mix production and dev in the same VNet</li>
                <li>• <span className="text-gray-300">Separate subnets by tier</span> — Web tier, app tier, data tier, management subnet</li>
                <li>• <span className="text-gray-300">Plan CIDR ranges carefully</span> — Use non-overlapping address spaces (e.g., 10.1.0.0/16 for prod, 10.2.0.0/16 for dev)</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">NSG Rules — How They Work</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• NSGs contain <span className="text-gray-300">inbound</span> and <span className="text-gray-300">outbound</span> security rules</li>
                <li>• Each rule has: <span className="text-yellow-400">Priority</span> (100-4096, lower = higher priority), <span className="text-yellow-400">Source/Destination</span>, <span className="text-yellow-400">Port</span>, <span className="text-yellow-400">Action</span> (Allow/Deny)</li>
                <li>• Rules are evaluated in priority order — first match wins</li>
                <li>• Default rules: deny all inbound from internet, allow all outbound</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-red-800/50 bg-red-900/10">
              <p className="text-red-400 text-xs">Never open RDP (3389) or SSH (22) to 0.0.0.0/0 (the entire internet). This is the #1 network misconfiguration in cloud environments and the first thing attackers scan for.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/virtual-network/virtual-networks-overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What is Azure Virtual Network?</a>
              <a href="https://learn.microsoft.com/azure/virtual-network/network-security-groups-overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Network security groups</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="READ" title="Private Endpoints — Eliminating Public Exposure"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p>By default, Azure PaaS services (Storage, SQL, Key Vault) have public endpoints accessible from the internet. <span className="text-yellow-400">Private Endpoints</span> move the service's network interface into your VNet, making it accessible only through your private network.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Before vs. After Private Endpoints</p>
              <div className="text-sm font-mono">
                <p className="text-red-400">Before: App → Internet → storageaccount.blob.core.windows.net (public IP)</p>
                <p className="text-green-400 mt-1">After:  App → VNet → Private Endpoint → storageaccount.blob.core.windows.net (private IP 10.x.x.x)</p>
              </div>
            </div>
            <div className="mt-3 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Private Endpoints are a top CIS Azure Benchmark recommendation. In enterprise environments, any PaaS service without a Private Endpoint is flagged as a security finding. You'll configure one in Module 3 (Data Security).</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/private-link/private-endpoint-overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What is a Private Endpoint?</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="READ" title="Azure Bastion — Secure Remote Access"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>Azure Bastion provides RDP and SSH access to VMs directly through the Azure portal — over TLS, without exposing any public IP on the VM. No jump box, no VPN, no open management ports.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Why Bastion Matters</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">No public IP needed</span> — The VM has no internet-facing management port</li>
                <li>• <span className="text-gray-300">TLS encrypted</span> — Connection goes through the Azure portal over HTTPS</li>
                <li>• <span className="text-gray-300">No NSG rules for RDP/SSH</span> — Bastion connects via Azure's backbone network</li>
                <li>• <span className="text-gray-300">Hardened by default</span> — Azure manages the Bastion host, patching, and availability</li>
              </ul>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/bastion/bastion-overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What is Azure Bastion?</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="SCENARIO" title="Real-World Scenario: Exposed Database"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p>A startup deploys an Azure SQL Database with the default configuration — public endpoint enabled, "Allow Azure services" firewall rule active, no Private Endpoint. An attacker discovers the server name (which follows a predictable pattern: <code className="text-yellow-400">servername.database.windows.net</code>) and begins brute-forcing credentials.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">How Defense in Depth Would Have Prevented This</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-yellow-400">Private Endpoint</span> → Database not reachable from the internet at all</li>
                <li>• <span className="text-yellow-400">NSG on subnet</span> → Only app tier subnet can reach database tier</li>
                <li>• <span className="text-yellow-400">Disable public endpoint</span> → Remove the attack surface entirely</li>
                <li>• <span className="text-yellow-400">Managed Identity</span> → No password to brute-force (from Module 1)</li>
              </ul>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="LAB" title="Your Task: Build a Segmented Network with Secure Access"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>Design and implement a secure network architecture:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Create a VNet with web, app, and data subnets</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Configure NSGs to control traffic between tiers</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Deploy a VM with no public IP and use Bastion for access</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Verify NSG rules block unauthorized lateral movement</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Use Network Watcher to diagnose and validate traffic flow</span></li>
            </ul>
            <div className="mt-3"><Link to="/module2/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link></div>
          </PhaseStepItem>

          <PhaseStepItem number={8} type="ARCHITECT" title="Cloud Architect's Perspective — Network Security"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>

            <ArchitectNote title="Core Design Principles">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">NSGs are stateful packet filters — not firewalls.</span> An NSG cannot do deep packet inspection, TLS termination, or IDPS. For east-west traffic inspection between workloads, you need Azure Firewall Premium or a third-party NVA.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Segment by workload risk level, not org chart.</span> A finance workload and a dev sandbox in the same VNet is a lateral movement risk. Segment based on data sensitivity and blast radius.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Private Endpoints = zero public attack surface for PaaS.</span> Every Azure PaaS service (Storage, Key Vault, SQL, etc.) with a public endpoint is potentially reachable from the internet. Private Endpoints bind the service to your VNet via a private IP — no public route exists.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Hub-Spoke = centralised security control plane.</span> All traffic routes through the hub (Azure Firewall, NVA, Bastion). Spokes are workload VNets. This topology gives you one place to enforce policy, inspect traffic, and log everything.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Never SSH/RDP to a VM with a public IP.</span> Azure Bastion provides browser-based SSH/RDP over HTTPS with no public IP on the VM. JIT VM Access (Defender for Cloud) goes further — port 22/3389 is closed by default and opened only on-demand.</span></li>
              </ul>
            </ArchitectNote>

            <ArchitectNote title="STRIDE Threat Model — Network Layer">
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-indigo-800/50">
                      <th className="text-left text-indigo-300 py-1 pr-4 font-semibold">Threat</th>
                      <th className="text-left text-indigo-300 py-1 pr-4 font-semibold">Attack Vector</th>
                      <th className="text-left text-indigo-300 py-1 font-semibold">Mitigation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-yellow-400 font-bold">Spoofing</td>
                      <td className="py-1.5 pr-4">IP spoofing across subnets, ARP poisoning on shared segments</td>
                      <td className="py-1.5">Azure SDN prevents ARP/IP spoofing by default; NSG source IP filtering</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-orange-400 font-bold">Tampering</td>
                      <td className="py-1.5 pr-4">MITM on unencrypted east-west traffic, DNS hijacking</td>
                      <td className="py-1.5">TLS everywhere (service-to-service), Azure Private DNS zones, DNSSEC</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-blue-400 font-bold">Info Disclosure</td>
                      <td className="py-1.5 pr-4">Flat network = attacker pivots freely once inside any VM</td>
                      <td className="py-1.5">Micro-segmentation, Application Security Groups (ASGs), workload isolation</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-red-400 font-bold">Denial of Service</td>
                      <td className="py-1.5 pr-4">Volume attack on public endpoints, TCP SYN flood</td>
                      <td className="py-1.5">Azure DDoS Protection Standard, WAF rate limiting, Anycast scrubbing</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-4 text-purple-400 font-bold">Elev. of Privilege</td>
                      <td className="py-1.5 pr-4">SSRF to IMDS endpoint (169.254.169.254) — steal VM identity token</td>
                      <td className="py-1.5">IMDSv2 required (PUT token header), block IMDS from app tier via NSG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Compliance Mapping">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CIS Azure Benchmark v2.0</p>
                  <p className="text-gray-400">Section 6 — Networking (Controls 6.1–6.6). Covers NSG flow logs, Network Watcher, RDP/SSH restrictions, and public IP exposure limits.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">NIST SP 800-41 Rev 1</p>
                  <p className="text-gray-400">Guidelines on Firewalls and Firewall Policy. Defines the principle that firewalls must be the sole path between network segments — directly maps to Azure Firewall in hub-spoke topology.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CSA CCM v4 — IVS Domain</p>
                  <p className="text-gray-400">Infrastructure &amp; Virtualisation Security (IVS-06 through IVS-13). Network segmentation, hypervisor security, and virtualised network controls.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">NIST SP 800-125B</p>
                  <p className="text-gray-400">Secure Virtual Network Configuration for Virtual Machine (VM) Protection. Directly applicable to Azure VNet design and subnet segmentation patterns.</p>
                </div>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Real-World Incidents — What Happens When This Fails">
              <div className="space-y-3">
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Capital One Data Breach (2019) — 106 Million Records <a href="https://krebsonsecurity.com/2019/07/what-we-can-learn-from-the-capital-one-hack/" target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-400 hover:text-indigo-300 font-normal">↗ source</a></p>
                  <p className="text-gray-400 text-xs">A misconfigured WAF (AWS) allowed a Server-Side Request Forgery (SSRF) attack. The attacker used the WAF's IAM role to query the EC2 Instance Metadata Service (IMDS) and steal credentials. No network segmentation meant the WAF had direct access to S3 buckets containing customer data. <span className="text-gray-300">Lesson: block IMDS access from web-facing tiers via network controls; never give WAF roles access to data storage directly.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Microsoft Exchange ProxyLogon (2021) <a href="https://msrc.microsoft.com/blog/2021/03/multiple-security-updates-released-for-exchange-server/" target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-400 hover:text-indigo-300 font-normal">↗ source</a></p>
                  <p className="text-gray-400 text-xs">Four zero-day vulnerabilities in on-premises Exchange Server were exploited via ports 443 and 80 exposed directly to the internet. 250,000+ servers compromised globally within days of disclosure. <span className="text-gray-300">Lesson: management interfaces must never be internet-reachable. Azure Bastion and JIT VM Access solve this for cloud VMs — no management port should have a public inbound NSG rule.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Misconfigured Kubernetes Dashboard — Tesla (2018) <a href="https://www.wired.com/story/cryptojacking-tesla-amazon-cloud/" target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-400 hover:text-indigo-300 font-normal">↗ source</a></p>
                  <p className="text-gray-400 text-xs">Tesla's Kubernetes dashboard was exposed on the public internet with no authentication. Within minutes of discovery, attackers deployed a cryptominer, exfiltrated AWS credentials from environment variables, and accessed S3 buckets containing telemetry data. <span className="text-gray-300">Lesson: every management UI must be behind private networking + authenticated access. No public-facing admin panel is acceptable.</span></p>
                </div>
              </div>
            </ArchitectNote>

          </PhaseStepItem>
        </div>

        {/* Knowledge Check */}
        <div className="mb-8 p-4 border border-pink-800/30 bg-pink-950/10">
          <div className="text-pink-400 text-xs mb-4">$ ./knowledge_check.sh --module 2</div>
          <div className="space-y-4">
            <QuizCard
              question="An NSG rule allows port 22 (SSH) inbound from 0.0.0.0/0 on a production VM. What is the correct remediation?"
              options={[
                "Change the port to a non-standard SSH port (e.g., 2222)",
                "Remove the rule and enable Azure Bastion for SSH access — no public inbound required",
                "Restrict the source to the office IP range",
                "Add a second NSG rule to deny SSH from known bad IPs"
              ]}
              answer={1}
              explanation="Azure Bastion provides browser-based SSH/RDP through the Azure portal without any public inbound ports on the VM. Changing ports is security through obscurity. Office IPs change. Deny rules for bad IPs are impossible to maintain exhaustively."
            />
            <QuizCard
              question="A web app needs to query an Azure SQL database. What network architecture enforces Zero Trust connectivity?"
              options={[
                "Allow the app to connect over the public internet with TLS",
                "Place both in the same VNet subnet with no NSG",
                "Use a Private Endpoint for SQL and a VNet Integration for the App Service — no public DB exposure",
                "Whitelist the app's outbound IP in the SQL firewall"
              ]}
              answer={2}
              explanation="Private Endpoints put the SQL database on a private IP in your VNet — unreachable from the public internet. VNet Integration lets App Service route outbound traffic through a VNet. IP whitelisting still exposes the database publicly."
            />
            <QuizCard
              question="What is the primary purpose of a Hub-Spoke network topology in Azure?"
              options={[
                "To reduce costs by sharing a single VNet across all workloads",
                "To centralise shared services (firewall, DNS, Bastion) in a hub while isolating workloads in peered spoke VNets",
                "To allow all spoke VNets to communicate directly without going through the hub",
                "To replace NSGs with route tables"
              ]}
              answer={1}
              explanation="Hub-Spoke centralises security inspection at the hub (Azure Firewall, Bastion) while each spoke is isolated. All traffic between spokes (and to internet) flows through the hub firewall. This is the Microsoft and enterprise standard for Azure network architecture."
            />
          </div>
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
