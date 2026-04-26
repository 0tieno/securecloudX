import { ArrowRight, BookOpen, ExternalLink, CheckCircle2, ChevronDown, ChevronRight, Shield, Globe, Lock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Section = ({ command, children, className = "mb-8" }) => (
  <div className={className}>
    <div className="text-gray-400 text-base mb-3">{command}</div>
    {children}
  </div>
);

const ExtLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition-colors text-base flex items-center gap-2"
  >
    <ExternalLink size={16} />
    {children}
  </a>
);

const Objective = ({ children }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
    <p className="text-gray-300 text-base">{children}</p>
  </div>
);

const BeginnerIntro = () => {
  const [isObjectivesOpen, setIsObjectivesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 pb-32 font-mono">
      <div className="w-full max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <BookOpen className="w-7 h-7 text-green-400 mr-3" />
            <h1 className="text-4xl font-bold text-gray-300">
              new_to_cloud?
            </h1>
          </div>
          <p className="text-gray-400 max-w-3xl text-base">
            // Build the foundational knowledge every cloud security professional needs
          </p>
          <p className="text-gray-400 max-w-3xl text-base">
            // securecloudx assumes basic knowledge of linux and networking
          </p>
        </div>

        {/* Prerequisites check */}
        <div className="mb-8 border border-yellow-700/50 bg-yellow-900/10 p-5">
          <div className="text-yellow-400 text-sm mb-3">$ cat prerequisites_check.sh</div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Before starting Module 1, you should be comfortable with the topics below. You don't need to master them — but stalling on a lab because you don't know what a port is will slow you down. Work through the resources here first if any topic feels unfamiliar.
          </p>
          <div className="space-y-5">

            {/* Linux CLI */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400 font-semibold text-sm">01 — Linux CLI basics</span>
                <span className="text-xs text-gray-600 border border-gray-700 px-1.5 py-0.5">~2 hrs</span>
              </div>
              <p className="text-gray-500 text-xs mb-2">
                All labs use the Azure CLI, kubectl, and shell commands. You need to navigate directories, read files, pipe output, and run scripts without getting lost.
              </p>
              <div className="text-xs text-gray-600 mb-2 font-mono">
                # minimum: cd, ls, cat, grep, curl, chmod, ps, sudo, pipe |, redirect &gt;
              </div>
              <div className="space-y-1.5">
                <ExtLink href="https://linuxjourney.com/">→ linuxjourney.com — free, interactive, beginner-friendly</ExtLink>
                <ExtLink href="https://overthewire.org/wargames/bandit/">→ OverTheWire: Bandit — learn Linux by doing (levels 0–10)</ExtLink>
                <ExtLink href="https://www.youtube.com/watch?v=ZtqBQ68cfJc">→ Watch: Linux Command Line Full Course (freeCodeCamp)</ExtLink>
              </div>
            </div>

            {/* Networking */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400 font-semibold text-sm">02 — Networking fundamentals</span>
                <span className="text-xs text-gray-600 border border-gray-700 px-1.5 py-0.5">~3 hrs</span>
              </div>
              <p className="text-gray-500 text-xs mb-2">
                Module 2 (Network Security) and every lab after it assumes you know what an IP address, subnet, port, and DNS record are. Without this, NSG rules and Private Endpoints will feel like magic.
              </p>
              <div className="text-xs text-gray-600 mb-2 font-mono">
                # minimum: IP/CIDR, TCP/UDP ports, DNS, HTTP vs HTTPS, firewalls, subnets
              </div>
              <div className="space-y-1.5">
                <ExtLink href="https://www.youtube.com/watch?v=qiQR5rTSshw">→ Watch: Computer Networking Full Course (freeCodeCamp)</ExtLink>
                <ExtLink href="https://tryhackme.com/room/introtonetworking">→ TryHackMe: Intro to Networking (free room)</ExtLink>
                <ExtLink href="https://www.cloudflare.com/learning/network-layer/what-is-a-subnet/">→ Cloudflare: What is a subnet? (5 min read)</ExtLink>
              </div>
            </div>

            {/* Bash/PowerShell */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400 font-semibold text-sm">03 — Bash / PowerShell scripting</span>
                <span className="text-xs text-gray-600 border border-gray-700 px-1.5 py-0.5">~1 hr</span>
              </div>
              <p className="text-gray-500 text-xs mb-2">
                Lab commands are given step-by-step — you don't need to write scripts from scratch. But you do need to read and run them without confusion. Variables, loops, and conditional logic should be readable to you.
              </p>
              <div className="space-y-1.5">
                <ExtLink href="https://learn.microsoft.com/training/modules/introduction-to-bash/?wt.mc_id=studentamb_387261">→ Microsoft Learn: Introduction to Bash</ExtLink>
                <ExtLink href="https://learn.microsoft.com/training/modules/introduction-to-powershell/?wt.mc_id=studentamb_387261">→ Microsoft Learn: Introduction to PowerShell</ExtLink>
              </div>
            </div>

          </div>

          <div className="mt-4 pt-4 border-t border-yellow-800/30">
            <p className="text-yellow-600 text-xs">
              ⚠ Already comfortable with all three? Skip straight to the Azure account setup below and start Module 1.
            </p>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mb-8 bg-gray-800 border border-gray-700">
          <button
            onClick={() => setIsObjectivesOpen(!isObjectivesOpen)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="text-cyan-400 text-base">
                $ cat learning_objectives.txt
              </div>
            </div>
            {isObjectivesOpen ? (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {isObjectivesOpen && (
            <div className="px-6 pb-6 border-t border-gray-700 pt-4">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                By the end of this section, you should be able to:
              </h3>
              <div className="space-y-3">
                <Objective>Explain how cloud computing works and how it differs from on-premises infrastructure</Objective>
                <Objective>Describe the Shared Responsibility Model and know what you own vs. what the provider owns</Objective>
                <Objective>Differentiate IaaS, PaaS, and SaaS and their security implications in real deployments</Objective>
                <Objective>Understand the CIA Triad (Confidentiality, Integrity, Availability) as the basis of all security decisions</Objective>
                <Objective>Recognize common cloud attack vectors — misconfigurations, exposed storage, credential leaks, and over-permissioned identities</Objective>
                <Objective>Navigate the Azure Portal, understand subscriptions, resource groups, and regions</Objective>
                <Objective>Set up your Azure environment with free credits and be ready for hands-on labs</Objective>
              </div>
            </div>
          )}
        </div>

        {/* 1. What is Cloud Computing */}
        <Section command="$ cat 01_what_is_cloud_computing.sh">
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            Cloud computing is on-demand delivery of IT resources over the internet. Instead of buying and maintaining physical servers, you rent compute, storage, and networking from a provider like Azure, AWS, or GCP. This is where every organization is moving — and where attackers follow.
          </p>
          <div className="space-y-2">
            <ExtLink href="https://learn.microsoft.com/training/modules/describe-cloud-compute/?wt.mc_id=studentamb_387261">
              → Microsoft Learn: describe_cloud_computing.md
            </ExtLink>
            <ExtLink href="https://learn.microsoft.com/training/modules/describe-benefits-use-cloud-services/?wt.mc_id=studentamb_387261">
              → Microsoft Learn: cloud_service_benefits.md
            </ExtLink>
            <ExtLink href="https://youtu.be/jI8IKpjiCSM?si=oP0DHGhIMw6qk7bl">
              → Watch: cloud_security_explained_in_10_minutes.mp4
            </ExtLink>
          </div>
        </Section>

        {/* 2. Service Models */}
        <Section command="$ cat 02_service_models.sh">
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            Every cloud service falls into one of three models. Understanding these is critical because your security responsibilities change depending on the model:
          </p>
          <div className="bg-gray-800 border border-gray-700 p-4 mb-4">
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold w-12 flex-shrink-0">IaaS</span>
                <span className="text-gray-300">You manage: OS, runtime, apps, data. Provider manages: hardware, networking. <span className="text-gray-500">(e.g., Azure VMs, AWS EC2)</span></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold w-12 flex-shrink-0">PaaS</span>
                <span className="text-gray-300">You manage: apps and data. Provider manages: OS, runtime, infrastructure. <span className="text-gray-500">(e.g., Azure App Service, Azure SQL)</span></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold w-12 flex-shrink-0">SaaS</span>
                <span className="text-gray-300">You manage: data and access. Provider manages: everything else. <span className="text-gray-500">(e.g., Microsoft 365, Salesforce)</span></span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <ExtLink href="https://learn.microsoft.com/training/modules/describe-cloud-service-types/?wt.mc_id=studentamb_387261">
              → Microsoft Learn: cloud_service_types.md
            </ExtLink>
          </div>
        </Section>

        {/* 3. Shared Responsibility Model */}
        <Section command="$ cat 03_shared_responsibility_model.sh">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-base">Industry Essential</span>
          </div>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            The Shared Responsibility Model is the single most important concept in cloud security. It defines who is responsible for what. The cloud provider secures the infrastructure <span className="text-gray-500">(physical hosts, network, datacenters)</span>. You secure everything you put on it <span className="text-gray-500">(data, identities, access policies, configurations)</span>. Most cloud breaches happen because organizations misunderstand this boundary.
          </p>
          <div className="space-y-2">
            <ExtLink href="https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility?wt.mc_id=studentamb_387261">
              → Microsoft: shared_responsibility_model.md
            </ExtLink>
            <ExtLink href="https://cloudsecurityalliance.org/research/topics/shared-responsibility">
              → CSA: cloud_security_alliance_shared_responsibility.md
            </ExtLink>
          </div>
        </Section>

        {/* 4. CIA Triad */}
        <Section command="$ cat 04_cia_triad.sh">
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            Every security decision maps back to the CIA Triad. This is how the industry evaluates risk and designs controls:
          </p>
          <div className="bg-gray-800 border border-gray-700 p-4 mb-4">
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div>
                  <span className="text-green-400 font-bold">Confidentiality</span>
                  <span className="text-gray-300"> — Only authorized users can access the data. Controls: encryption, RBAC, private endpoints.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <span className="text-blue-400 font-bold">Integrity</span>
                  <span className="text-gray-300"> — Data cannot be altered without detection. Controls: hashing, audit logs, immutable storage.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <span className="text-yellow-400 font-bold">Availability</span>
                  <span className="text-gray-300"> — Systems remain accessible when needed. Controls: redundancy, backups, DDoS protection.</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. What is Cloud Security */}
        <Section command="$ cat 05_what_is_cloud_security.sh">
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            Cloud security is the practice of protecting cloud-based systems, data, and infrastructure. In the real world, cloud security engineers work on identity and access management, network segmentation, data protection, threat detection, and compliance — exactly what this challenge covers.
          </p>
          <div className="space-y-2">
            <ExtLink href="https://cloud.google.com/learn/what-is-cloud-security">
              → Read: cloud_security_according_to_google.md
            </ExtLink>
            <ExtLink href="https://www.microsoft.com/en-us/security/business/security-101/what-is-cloud-security">
              → Read: cloud_security_according_to_microsoft.md
            </ExtLink>
          </div>
        </Section>

        {/* 6. Real-World Threat Landscape */}
        <Section command="$ cat 06_real_world_threats.sh">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-400 font-semibold text-base">Why This Matters</span>
          </div>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            Cloud misconfigurations are the #1 cause of cloud data breaches. Publicly exposed storage accounts, overly permissive IAM roles, leaked credentials in git repos, and unencrypted data at rest are not theoretical — they happen daily. Study these real incidents to understand what you're defending against.
          </p>
          <div className="space-y-2">
            <ExtLink href="https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/">
              → cloud_security_breaches_2021.analysis
            </ExtLink>
            <ExtLink href="https://www.nojones.net/posts/breaking-into-cloudsec">
              → breaking_into_cloudsec.md
            </ExtLink>
          </div>
        </Section>

        {/* 7. Azure Fundamentals */}
        <Section command="$ cat 07_azure_fundamentals.sh">
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            We use Microsoft Azure throughout this challenge. Before starting the modules, understand these core building blocks — they show up in every Azure security engagement:
          </p>
          <div className="bg-gray-800 border border-gray-700 p-4 mb-4">
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="text-cyan-400">Tenant</span> — Your organization's identity boundary in Azure AD (now Entra ID)</p>
              <p><span className="text-cyan-400">Subscription</span> — A billing and access boundary. One tenant can have many subscriptions</p>
              <p><span className="text-cyan-400">Resource Group</span> — A logical container for resources. Used to apply policies, RBAC, and tags</p>
              <p><span className="text-cyan-400">Region</span> — A geographic datacenter location. Affects latency, compliance, and data residency</p>
            </div>
          </div>
          <div className="space-y-2">
            <ExtLink href="https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/?wt.mc_id=studentamb_387261">
              → Microsoft Learn: azure_core_architecture.md
            </ExtLink>
          </div>
        </Section>

        {/* 8. Azure Account Setup */}
        <Section command="$ cat 08_setup_azure_account.sh">
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            You need an Azure account to complete the hands-on labs. Choose one of the following:
          </p>
          <div className="space-y-3 mb-6">
            <div className="bg-gray-800 border border-gray-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-sm flex-shrink-0">OPTION 1</span>
                <div>
                  <a
                    href="https://azure.microsoft.com/pricing/purchase-options/azure-account/?wt.mc_id=studentamb_387261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-semibold"
                  >
                    Azure Free Account <ExternalLink size={14} />
                  </a>
                  <p className="text-gray-400 text-sm mt-1">$200 credit for 30 days + 12 months of free services. Good for anyone.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-sm flex-shrink-0">OPTION 2</span>
                <div>
                  <a
                    href="https://azure.microsoft.com/free/students/?wt.mc_id=studentamb_387261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-semibold"
                  >
                    Azure for Students <ExternalLink size={14} />
                  </a>
                  <p className="text-gray-400 text-sm mt-1">$100 credit, no credit card required. Verify with your school email.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 border border-yellow-600 p-4">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold text-sm flex-shrink-0">OPTION 3</span>
                <div>
                  <a
                    href="https://techcommunity.microsoft.com/blog/skills-hub-blog/a-new-chapter-for-the-microsoft-student-ambassadors-program-built-for-you/4508104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 inline-flex items-center gap-1 font-semibold"
                  >
                    Microsoft Student Ambassadors <ExternalLink size={14} />
                  </a>
                  <p className="text-gray-400 text-sm mt-1">
                    Become a Microsoft Student Ambassador and receive <span className="text-yellow-400 font-semibold">$150/month in Azure credits</span>, access to Microsoft 365 Copilot, Visual Studio Enterprise, and more. No application or interview required — just sign up at{" "}
                    <a
                      href="https://www.studentambassadors.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      studentambassadors.com
                    </a>{" "}
                    and start building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Azure-focus callout */}
        <div className="mb-8 border border-blue-800/50 bg-blue-900/10 p-5">
          <div className="text-blue-400 text-sm mb-3">$ cat platform_scope.md</div>
          <div className="flex items-start gap-3 mb-3">
            <Globe className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-blue-400 font-semibold">This roadmap is Azure-first.</span> The security concepts — Zero Trust, least privilege, defence in depth, CSPM — are universal. But the tools, CLI commands, and labs are Azure. That's a deliberate choice: Azure dominates enterprise cloud security hiring, and AZ-500 is the most recognised cloud security certification.
            </p>
          </div>
          <p className="text-gray-500 text-xs mb-4">
            If you later work in AWS or GCP, the concepts transfer directly. The services have different names but the same security primitives. Here's a quick mapping:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs font-mono border border-gray-700">
              <thead>
                <tr className="border-b border-gray-700 text-gray-500">
                  <th className="text-left px-3 py-2 text-blue-400">Azure</th>
                  <th className="text-left px-3 py-2 text-yellow-600">AWS</th>
                  <th className="text-left px-3 py-2 text-green-600">GCP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr><td className="px-3 py-1.5 text-gray-300">Entra ID (Azure AD)</td><td className="px-3 py-1.5 text-gray-400">IAM + Cognito</td><td className="px-3 py-1.5 text-gray-400">Cloud Identity / IAM</td></tr>
                <tr><td className="px-3 py-1.5 text-gray-300">RBAC (Azure roles)</td><td className="px-3 py-1.5 text-gray-400">IAM Policies & Roles</td><td className="px-3 py-1.5 text-gray-400">IAM Roles & Bindings</td></tr>
                <tr><td className="px-3 py-1.5 text-gray-300">NSG</td><td className="px-3 py-1.5 text-gray-400">Security Groups / NACLs</td><td className="px-3 py-1.5 text-gray-400">VPC Firewall Rules</td></tr>
                <tr><td className="px-3 py-1.5 text-gray-300">Private Endpoint</td><td className="px-3 py-1.5 text-gray-400">VPC Endpoint</td><td className="px-3 py-1.5 text-gray-400">Private Service Connect</td></tr>
                <tr><td className="px-3 py-1.5 text-gray-300">Key Vault</td><td className="px-3 py-1.5 text-gray-400">Secrets Manager / KMS</td><td className="px-3 py-1.5 text-gray-400">Secret Manager / Cloud KMS</td></tr>
                <tr><td className="px-3 py-1.5 text-gray-300">Defender for Cloud</td><td className="px-3 py-1.5 text-gray-400">Security Hub + GuardDuty</td><td className="px-3 py-1.5 text-gray-400">Security Command Center</td></tr>
                <tr><td className="px-3 py-1.5 text-gray-300">Microsoft Sentinel</td><td className="px-3 py-1.5 text-gray-400">Security Lake + OpenSearch</td><td className="px-3 py-1.5 text-gray-400">Chronicle SIEM</td></tr>
                <tr><td className="px-3 py-1.5 text-gray-300">Azure Policy</td><td className="px-3 py-1.5 text-gray-400">AWS Config + SCPs</td><td className="px-3 py-1.5 text-gray-400">Organization Policy</td></tr>
                <tr><td className="px-3 py-1.5 text-gray-300">Managed Identity</td><td className="px-3 py-1.5 text-gray-400">IAM Instance Profile / IRSA</td><td className="px-3 py-1.5 text-gray-400">Workload Identity / Service Account</td></tr>
                <tr><td className="px-3 py-1.5 text-gray-300">AKS</td><td className="px-3 py-1.5 text-gray-400">EKS</td><td className="px-3 py-1.5 text-gray-400">GKE</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Start Challenge */}
        <div className="bg-gray-800 border border-gray-700 p-6">
          <div className="text-green-400 text-base mb-2">
            $ ./start_challenge.sh
          </div>
          <h2 className="text-2xl font-bold text-gray-300 mb-4">
            Ready to Begin?
          </h2>
          <Link
            to="/module1"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white transition-colors border border-blue-500 text-base"
          >
            Start Module 1 <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeginnerIntro;
