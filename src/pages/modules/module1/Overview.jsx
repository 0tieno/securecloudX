import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoMarkOverview from "../../../components/AutoMarkOverview";
import PhaseStepItem from "../../../components/PhaseStepItem";
import ArchitectNote from "../../../components/ArchitectNote";

const TOTAL = 7;
const OBJECTIVES = [
  "Understand Zero Trust as the industry's foundational security model",
  "Navigate Microsoft Entra ID — tenants, users, groups, service principals, and managed identities",
  "Configure Role-Based Access Control (RBAC) with least privilege, including custom roles",
  "Build Conditional Access policies — the Zero Trust enforcement engine",
  "Understand Privileged Identity Management (PIM) for just-in-time admin access",
  "Recognize identity-based attack patterns and how IAM controls prevent them",
];

const Day1 = () => {
  const [open, setOpen] = useState(() => new Set([0,1,2,3,4,5,6,7]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <AutoMarkOverview phaseId={1} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-1-iam</span>
          <span>/</span><span className="text-gray-500">overview</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_1_iam_overview.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 1: Identity & Access Management (IAM)</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Identity is the new security perimeter. In the cloud, there are no physical firewalls guarding your front door — your identities <span className="text-gray-400">are</span> the front door. This module teaches you how to secure them using the same Zero Trust principles and Entra ID controls used by enterprise security teams.
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
            <p><span className="text-gray-500">Domain:</span> Identity & Access Management</p>
            <p className="mt-1"><span className="text-gray-500">Goal:</span> Implement Zero Trust identity controls using Microsoft Entra ID — RBAC, Conditional Access, MFA, and Privileged Identity Management.</p>
            <p className="mt-2 text-gray-500 text-xs">Industry alignment: AZ-500 (Manage identity and access — 25-30% of exam), SC-900 (Identity concepts), NIST SP 800-63 (Digital Identity), CIS Azure Benchmark Section 1</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="READ" title="Zero Trust — The Industry Security Model"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p>Zero Trust is the dominant security model in cloud computing. The core principle: <span className="text-yellow-400">never trust, always verify</span>. Every access request is treated as if it comes from an untrusted network — regardless of where the user is or what network they're on.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Zero Trust Principles</p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold flex-shrink-0">1</span><span><span className="text-gray-300">Verify explicitly</span> — Always authenticate and authorize based on all available data points (identity, location, device, service, data classification, anomalies)</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold flex-shrink-0">2</span><span><span className="text-gray-300">Use least privilege access</span> — Limit access with just-in-time (JIT) and just-enough-access (JEA). No standing admin privileges.</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold flex-shrink-0">3</span><span><span className="text-gray-300">Assume breach</span> — Design your systems as if the attacker is already inside. Segment access, encrypt everything, monitor continuously.</span></li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Every cloud security job description mentions Zero Trust. Microsoft, Google, AWS, and the US federal government (Executive Order 14028) all mandate it. This isn't optional knowledge — it's foundational.</p>
            </div>
            <div className="mt-3">
              <a href="https://learn.microsoft.com/security/zero-trust/zero-trust-overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Zero Trust overview</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="READ" title="Microsoft Entra ID — The Identity Platform"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p>Microsoft Entra ID (formerly Azure Active Directory) is the identity provider for all of Azure and Microsoft 365. Every authentication event, every access decision, every role assignment flows through Entra ID.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Key Identity Types</p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Users</span> — Human identities. Can be cloud-only or synced from on-premises Active Directory via Entra Connect.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Groups</span> — Collections of users for bulk permission management. Two types: Security groups (for RBAC) and Microsoft 365 groups (for collaboration).</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Service Principals</span> — Non-human identities for applications. When an app registers in Entra ID, it gets a service principal to authenticate with.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 flex-shrink-0">—</span><span><span className="text-gray-300">Managed Identities</span> — Azure-managed credentials for services to authenticate to other services without storing secrets. <span className="text-yellow-400">Always prefer these over storing credentials.</span></span></li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Entra ID Hierarchy</p>
              <div className="text-sm text-gray-400 font-mono">
                <p>Tenant <span className="text-gray-600">(your organization's Entra ID instance)</span></p>
                <p className="pl-3">├── Users & Groups</p>
                <p className="pl-3">├── App Registrations & Service Principals</p>
                <p className="pl-3">├── Conditional Access Policies</p>
                <p className="pl-3">├── Enterprise Applications</p>
                <p className="pl-3">└── Roles & Administrative Units</p>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/entra/fundamentals/whatis?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What is Microsoft Entra ID?</a>
              <a href="https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Managed identities overview</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="READ" title="RBAC — Least Privilege Access Control"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p>Role-Based Access Control (RBAC) determines <span className="text-yellow-400">who</span> can do <span className="text-yellow-400">what</span> on <span className="text-yellow-400">which resources</span>. It's the primary authorization mechanism in Azure and the practical implementation of Zero Trust's "least privilege" principle.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">RBAC Components</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Security principal</span> — Who is requesting access? (user, group, service principal, managed identity)</li>
                <li>• <span className="text-gray-300">Role definition</span> — What can they do? (Owner, Contributor, Reader, or 120+ built-in roles)</li>
                <li>• <span className="text-gray-300">Scope</span> — Where does it apply? (management group → subscription → resource group → resource)</li>
                <li>• <span className="text-gray-300">Role assignment</span> — The combination of all three: "User X has Reader role on Resource Group Y"</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Critical Built-in Roles</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-red-400">Owner</span> — Full access + can assign roles to others. <span className="text-gray-500">Use sparingly.</span></li>
                <li>• <span className="text-yellow-400">Contributor</span> — Full access but cannot assign roles. <span className="text-gray-500">Common for developers.</span></li>
                <li>• <span className="text-green-400">Reader</span> — View-only access. <span className="text-gray-500">Default for auditors and observers.</span></li>
                <li>• <span className="text-cyan-400">User Access Administrator</span> — Can manage role assignments only. <span className="text-gray-500">Needed for IAM delegation.</span></li>
                <li>• <span className="text-cyan-400">Security Reader / Security Admin</span> — Security-specific roles for SOC teams.</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-red-800/50 bg-red-900/10">
              <p className="text-red-400 text-xs">Anti-pattern: Assigning Owner at the subscription level. If that account is compromised, the attacker owns everything. Always assign at the narrowest scope possible.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/azure/role-based-access-control/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What is Azure RBAC?</a>
              <a href="https://learn.microsoft.com/azure/role-based-access-control/built-in-roles?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Azure built-in roles</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="READ" title="Conditional Access & MFA — Zero Trust Enforcement"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p>Conditional Access is <span className="text-yellow-400">the Zero Trust policy engine</span> in Entra ID. It evaluates signals (who, where, what device, what app, risk level) and makes access decisions: allow, block, or require additional verification.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">How Conditional Access Works</p>
              <div className="text-sm text-gray-400 font-mono">
                <p className="text-cyan-400">IF</p>
                <p className="pl-4">user = "admin group" AND</p>
                <p className="pl-4">app = "Azure Portal" AND</p>
                <p className="pl-4">location != "corporate network"</p>
                <p className="text-cyan-400">THEN</p>
                <p className="pl-4 text-yellow-400">REQUIRE: MFA + compliant device</p>
              </div>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Common Enterprise Policies</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Require MFA for all users</span> — The single most effective control against account compromise (blocks 99.9% of automated attacks)</li>
                <li>• <span className="text-gray-300">Block legacy authentication</span> — Older protocols (IMAP, SMTP, POP3) don't support MFA</li>
                <li>• <span className="text-gray-300">Require MFA for admin roles</span> — Global Admin, Security Admin, Exchange Admin etc.</li>
                <li>• <span className="text-gray-300">Block sign-ins from risky locations</span> — Using Entra ID Protection risk signals</li>
                <li>• <span className="text-gray-300">Require compliant devices</span> — Only Intune-managed devices can access corporate data</li>
              </ul>
            </div>
            <div className="mt-3 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Always create a "break glass" emergency access account excluded from all Conditional Access policies. If MFA systems fail or your admin is locked out, this account saves you. Store its credentials in a physical safe.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/entra/identity/conditional-access/overview?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Conditional Access overview</a>
              <a href="https://learn.microsoft.com/entra/identity/authentication/concept-mfa-howitworks?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: How MFA works</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="READ" title="Privileged Identity Management (PIM)"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p>PIM implements Zero Trust's "just-in-time access" principle. Instead of giving permanent admin roles, users <span className="text-yellow-400">request activation</span> when needed and it expires automatically.</p>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">How PIM Works</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="text-gray-300">Eligible assignment</span> — User is eligible for a role but doesn't have it active. Must request activation.</li>
                <li>• <span className="text-gray-300">Activation</span> — User requests the role, provides justification, and may require approval from another admin.</li>
                <li>• <span className="text-gray-300">Time-bound</span> — Activated role expires after a set duration (e.g., 4 hours, 8 hours).</li>
                <li>• <span className="text-gray-300">Audit trail</span> — Every activation is logged: who requested it, why, when it expires.</li>
              </ul>
            </div>
            <div className="mt-3 p-3 border border-gray-700 bg-gray-800">
              <p className="text-gray-300 text-sm font-semibold mb-2">Why This Matters</p>
              <p className="text-sm text-gray-400">If an attacker compromises a Global Admin account that uses PIM, the role isn't active — there's nothing to exploit. Without PIM, a compromised admin has permanent godmode access 24/7.</p>
            </div>
            <div className="mt-3 space-y-1">
              <a href="https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: What is PIM?</a>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="LAB" title="Your Task: Implement Zero Trust IAM Controls"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p>Build a Zero Trust identity configuration from scratch:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Create users, groups, and understand the identity types in your tenant</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Assign RBAC roles at different scopes and test least privilege</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Build Conditional Access policies — MFA enforcement + block legacy auth</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Explore PIM and understand just-in-time access</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 flex-shrink-0">$</span><span>Review sign-in logs to verify your controls are working</span></li>
            </ul>
            <div className="mt-3"><Link to="/module1/task" className="text-red-400 hover:text-red-300 transition-colors">→ ./start_lab.sh</Link></div>
          </PhaseStepItem>

          <PhaseStepItem number={8} type="ARCHITECT" title="Cloud Architect's Perspective — IAM & Zero Trust"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>

            <ArchitectNote title="Core Design Principles">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Identity IS the perimeter.</span> In cloud, there is no network boundary you can trust. Every access decision flows through identity — design IAM as your first and last line of defence.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Managed Identities &gt; Service Principals with secrets.</span> A managed identity has no credential to steal. A service principal with a client secret stored in a config file is a breach waiting to happen.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">No permanent Global Administrator.</span> Standing privileged access is the highest-value target in any Azure tenant. PIM + Conditional Access enforces just-in-time (JIT) admin access — the role only exists when activated.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Break-glass accounts are non-negotiable.</span> Two emergency access accounts, excluded from all Conditional Access, with credentials stored offline. Without these, a misconfigured MFA policy locks you out of your own tenant.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 flex-shrink-0">▸</span><span><span className="text-gray-200">Assign RBAC at the narrowest scope.</span> Subscription-level Owner is almost never the right answer. Resource group or resource scope limits blast radius when credentials are compromised.</span></li>
              </ul>
            </ArchitectNote>

            <ArchitectNote title="STRIDE Threat Model — Identity Layer">
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-indigo-800/50">
                      <th className="text-left text-indigo-300 py-1 pr-4 font-semibold">Threat</th>
                      <th className="text-left text-indigo-300 py-1 pr-4 font-semibold">Attack Vector</th>
                      <th className="text-left text-indigo-300 py-1 font-semibold">Mitigation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400 space-y-1">
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-yellow-400 font-bold">Spoofing</td>
                      <td className="py-1.5 pr-4">Token theft, pass-the-hash, OAuth token replay</td>
                      <td className="py-1.5">CAE (Continuous Access Evaluation), short token lifetimes, device compliance</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-red-400 font-bold">Elevation of Privilege</td>
                      <td className="py-1.5 pr-4">RBAC scope too broad, permanent GA assignment, role assignment abuse</td>
                      <td className="py-1.5">PIM, least-privilege scoping, RBAC access reviews</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="py-1.5 pr-4 text-blue-400 font-bold">Information Disclosure</td>
                      <td className="py-1.5 pr-4">Over-permissioned service principal reading Key Vault secrets it shouldn't</td>
                      <td className="py-1.5">Managed identities, Key Vault access policies scoped per workload</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-4 text-orange-400 font-bold">Repudiation</td>
                      <td className="py-1.5 pr-4">Admin actions with no audit trail, sign-in logs disabled</td>
                      <td className="py-1.5">Entra ID audit logs → Log Analytics, 90-day minimum retention</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Compliance Mapping">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CIS Azure Benchmark v2.0</p>
                  <p className="text-gray-400">Section 1 — Identity & Access Management (Controls 1.1–1.22). Covers MFA enforcement, guest user limits, custom roles, key rotation, and privileged account restrictions.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">NIST SP 800-63 Rev 4</p>
                  <p className="text-gray-400">Digital Identity Guidelines. AAL2 (Authenticator Assurance Level 2) requires MFA for federal systems — the same standard enterprise Zero Trust is modelled on.</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">CSA CCM v4 — IAM Domain</p>
                  <p className="text-gray-400">IAM-01 through IAM-13. Covers credential management, access reviews, privileged access, and identity lifecycle (joiner/mover/leaver).</p>
                </div>
                <div className="p-2 border border-indigo-800/40 bg-indigo-900/20">
                  <p className="text-indigo-300 font-semibold mb-1">AZ-500 / MS-500</p>
                  <p className="text-gray-400">Manage Identity &amp; Access = 25–30% of the AZ-500 exam. Conditional Access, PIM, Identity Protection, and RBAC are all exam-critical and directly map to this module.</p>
                </div>
              </div>
            </ArchitectNote>

            <ArchitectNote title="Real-World Incidents — What Happens When This Fails">
              <div className="space-y-3">
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Storm-0558 — Microsoft (2023)</p>
                  <p className="text-gray-400 text-xs">Chinese threat actor forged Azure AD authentication tokens using a stolen MSA signing key. Result: full mailbox read access to ~25 organisations including US government agencies. Root cause: signing key material accessible outside its security boundary, no anomaly detection on token claims. <span className="text-gray-300">Lesson: token validation must verify issuer, audience, and key provenance — not just signature.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">Uber MFA Fatigue Attack (2022)</p>
                  <p className="text-gray-400 text-xs">Attacker purchased Uber employee credentials from the dark web, then bombarded them with MFA push notifications until the employee accepted to stop the noise. Attacker then reached Okta admin panel and AWS console. <span className="text-gray-300">Lesson: number-matching MFA (FIDO2/passkeys) eliminates push-fatigue attacks entirely — this is now mandatory in the Microsoft Entra ID Conditional Access template library.</span></p>
                </div>
                <div className="p-3 border border-gray-700/50 bg-gray-800/40">
                  <p className="text-red-400 text-xs font-bold mb-1">SolarWinds — OAuth Lateral Movement (2020)</p>
                  <p className="text-gray-400 text-xs">After initial access via the Orion backdoor, attackers pivoted to Azure AD by forging SAML tokens (Golden SAML attack) and using OAuth tokens to access cloud resources without triggering MFA. Persisted for 9 months undetected. <span className="text-gray-300">Lesson: privileged service accounts in hybrid environments are a critical attack path — on-prem identity compromise should trigger cloud credential revocation.</span></p>
                </div>
              </div>
            </ArchitectNote>

          </PhaseStepItem>
        </div>
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
