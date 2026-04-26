import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";
import { useStepProgress } from "../../../hooks/useStepProgress";

const TOTAL = 10;
const OBJECTIVES = [
  "Create users, groups, and understand identity types in Microsoft Entra ID",
  "Assign RBAC roles at different scopes and verify least privilege enforcement",
  "Build Conditional Access policies that require MFA and block legacy authentication",
  "Explore Privileged Identity Management (PIM) for just-in-time admin access",
  "Review sign-in and audit logs to verify your Zero Trust controls are working",
];

const Task1 = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, toggleChecked] = useStepProgress("scx_steps_1_task", TOTAL);
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span>
          <Link to="/module1" className="hover:text-gray-400 transition-colors text-gray-500">phase-1-iam</Link>
          <span>/</span><span className="text-gray-400">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_1_zero_trust_iam.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 1 Lab: Implement Zero Trust IAM Controls</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Build a Zero Trust identity configuration from scratch. Create identities, enforce least privilege with RBAC, require MFA via Conditional Access, and verify your controls with sign-in logs.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">~45 min read &nbsp;·&nbsp; Lab: ~60 min &nbsp;·&nbsp; Est. cost: $0.00 (portal only)</p>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-500">{checked.size}/{TOTAL} complete</span>
            <span className="text-gray-700"># check steps as you complete them</span>
          </div>
          <div className="w-full bg-gray-800 border border-gray-700 h-1.5">
            <div className="bg-red-500 h-full transition-all duration-500" style={{ width: `${(checked.size / TOTAL) * 100}%` }} />
          </div>
        </div>
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-blue-400 text-xs mb-3">$ cat lab_objectives.sh</div>
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
        <div className="space-y-2 mb-8">
          {/* Step 1: Prep */}
          <PhaseStepItem number={1} type="PREP" title="What You'll Do — Zero Trust IAM"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <p className="text-sm mb-2">This lab builds a Zero Trust identity configuration step by step:</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-yellow-400 flex-shrink-0">1</span><span>Create users and security groups in Entra ID</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 flex-shrink-0">2</span><span>Assign RBAC roles at different scopes and test least privilege</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 flex-shrink-0">3</span><span>Create Conditional Access policies requiring MFA</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 flex-shrink-0">4</span><span>Explore PIM for just-in-time admin access</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 flex-shrink-0">5</span><span>Review sign-in logs to verify everything works</span></li>
            </ul>
            <p className="mt-2 text-gray-600 italic text-xs">Steps have intentional gaps — designed to encourage critical thinking and exploration of the Azure portal.</p>
          </PhaseStepItem>

          {/* Step 2: AI Prompt */}
          <PhaseStepItem number={2} type="AI" title="AI Prompt — Zero Trust IAM Guide"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="text-xs text-gray-500 mb-2">Copy and paste this into your AI assistant for interactive step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-gray-700 text-gray-400 text-sm italic leading-relaxed">
              "Guide me through implementing Zero Trust IAM in Azure. The lab covers: (1) Navigate Microsoft Entra ID and explore the tenant — users, groups, app registrations. (2) Create two test users and a security group called 'SCX-Developers'. (3) Create a resource group and assign the 'Reader' role to the SCX-Developers group at the resource group scope — explain the RBAC components (security principal, role definition, scope). (4) Sign in as one of the test users and verify they can only read, not modify resources. (5) Create a Conditional Access policy that requires MFA for all users accessing the Azure Portal. (6) Create a second policy that blocks legacy authentication protocols. (7) Explain what Privileged Identity Management (PIM) is and walk me through viewing eligible roles. (8) Show me how to review sign-in logs in Entra ID to verify MFA was enforced. Explain each step with Azure portal navigation."
            </div>
          </PhaseStepItem>

          {/* Step 3: Entra ID Users & Groups */}
          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Create Users & Security Groups"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="text-xs text-gray-500 mb-2">Zero Trust starts with identity. Create the identities you'll assign permissions to.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <a href="https://portal.azure.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Azure Portal</a> → <strong className="text-gray-300">Microsoft Entra ID</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to <strong className="text-gray-300">Users → New user → Create new user</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create two test users (e.g., <code className="text-yellow-400">dev-user1@yourtenant.onmicrosoft.com</code> and <code className="text-yellow-400">dev-user2@yourtenant.onmicrosoft.com</code>)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to <strong className="text-gray-300">Groups → New group</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a <strong className="text-gray-300">Security group</strong> named <code className="text-yellow-400">SCX-Developers</code> and add both users as members</span></li>
            </ul>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">Explore:</span> While in Entra ID, browse <strong className="text-gray-300">App registrations</strong> and <strong className="text-gray-300">Enterprise applications</strong> to see where service principals live. Note the difference between human identities (users) and application identities (service principals).</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/entra/fundamentals/how-to-create-delete-users?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Create users in Entra ID</a>
            </div>
          </PhaseStepItem>

          {/* Step 4: RBAC */}
          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Assign RBAC Roles & Test Least Privilege"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="text-xs text-gray-500 mb-2">RBAC = Who can do what on which resources. Assign roles at the narrowest scope possible.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a resource group (e.g., <code className="text-yellow-400">rg-scx-iam-lab</code>)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to the resource group → <strong className="text-gray-300">Access control (IAM) → Add role assignment</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Assign the <span className="text-green-400">Reader</span> role to the <code className="text-yellow-400">SCX-Developers</code> group</span></li>
            </ul>
            <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-400 mb-1">RBAC assignment breakdown:</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Security principal:</span> SCX-Developers group</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Role definition:</span> Reader (view-only)</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Scope:</span> rg-scx-iam-lab (resource group level)</p>
            </div>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Test it:</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Open a private/incognito browser → Sign in as <code className="text-yellow-400">dev-user1</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to the resource group → Try to create a resource → <span className="text-red-400">It should fail</span></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Verify the user can <span className="text-green-400">view</span> resources but not modify or delete</span></li>
            </ul>
            <div className="mt-2 p-2 border border-red-800/50 bg-red-900/10">
              <p className="text-red-400 text-xs">Challenge: Now try assigning Contributor at the subscription level. Notice how the blast radius expands — the user can modify anything in any resource group. This is why scope matters.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Assign Azure roles</a>
            </div>
          </PhaseStepItem>

          {/* Step 5: Conditional Access + MFA */}
          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Create Conditional Access Policies"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="text-xs text-gray-500 mb-2">Conditional Access is the Zero Trust policy engine. Build two enterprise-standard policies.</p>
            <p className="text-sm mb-2"><strong className="text-gray-300">Policy 1: Require MFA for Azure Portal access</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Entra ID → Security → Conditional Access → New policy</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Name: <code className="text-yellow-400">SCX — Require MFA for Azure Portal</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Assignments → Users: <code className="text-yellow-400">All users</code> (exclude your break-glass account)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Target resources → Cloud apps: <code className="text-yellow-400">Microsoft Azure Management</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Grant → <code className="text-yellow-400">Require multifactor authentication</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Enable policy: <code className="text-yellow-400">Report-only</code> first (to test without enforcing), then switch to <code className="text-yellow-400">On</code></span></li>
            </ul>
            <p className="text-sm mt-3 mb-2"><strong className="text-gray-300">Policy 2: Block legacy authentication</strong></p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>New policy → Name: <code className="text-yellow-400">SCX — Block Legacy Auth</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Assignments → Users: <code className="text-yellow-400">All users</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Conditions → Client apps → Select <code className="text-yellow-400">Exchange ActiveSync clients</code> and <code className="text-yellow-400">Other clients</code></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Grant → <code className="text-yellow-400">Block access</code></span></li>
            </ul>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">These two policies (require MFA + block legacy auth) are the absolute minimum for any organization. Microsoft's own security guidance calls them "security defaults on steroids."</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/entra/identity/conditional-access/howto-conditional-access-policy-all-users-mfa?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Require MFA for all users</a>
              <a href="https://learn.microsoft.com/entra/identity/conditional-access/howto-conditional-access-policy-block-legacy?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Block legacy authentication</a>
            </div>
          </PhaseStepItem>

          {/* Step 6: PIM */}
          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Explore Privileged Identity Management (PIM)"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="text-xs text-gray-500 mb-2">PIM = no standing admin access. Admins request elevated roles only when needed, and they expire automatically.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Entra ID → Identity Governance → Privileged Identity Management</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Click <strong className="text-gray-300">Microsoft Entra roles</strong> → Review the list of directory roles</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Click <strong className="text-gray-300">My roles</strong> → See which roles you're eligible for vs. actively assigned</span></li>
            </ul>
            <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-400 mb-1">Key concepts to observe:</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Eligible</span> — User can request activation (not active by default)</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Active</span> — Role is currently activated (time-bound)</p>
              <p className="text-gray-300">• <span className="text-yellow-400">Expired</span> — Activation window has passed</p>
            </div>
            <div className="mt-2 p-2 border border-gray-700 bg-gray-800">
              <p className="text-xs text-gray-500"><span className="text-cyan-400">Note:</span> PIM requires Entra ID P2 licensing (included in free trials). If you don't have P2, browse the PIM interface and understand the concept — you'll encounter PIM in every enterprise environment and on the AZ-500 exam.</p>
            </div>
            <div className="mt-2 space-y-1">
              <a href="https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-getting-started?wt.mc_id=studentamb_387261" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block">→ Microsoft Learn: Start using PIM</a>
            </div>
          </PhaseStepItem>

          {/* Step 7: Verify with Logs */}
          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Review Sign-in Logs & Validate Controls"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="text-xs text-gray-500 mb-2">Trust but verify. Check the logs to confirm your policies are actually enforcing.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <strong className="text-gray-300">Entra ID → Sign-in logs</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Find the sign-in for your test user → Click it to see details</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Check the <strong className="text-gray-300">Conditional Access</strong> tab — it shows which policies applied and their result (Success, Failure, Not Applied)</span></li>
            </ul>
            <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-sm">
              <p className="text-gray-400 mb-1">What to verify:</p>
              <p className="text-gray-300">• MFA policy shows <span className="text-green-400">"Success"</span> — user was prompted for MFA</p>
              <p className="text-gray-300">• Legacy auth policy shows <span className="text-green-400">"Not Applied"</span> — user used a modern client</p>
              <p className="text-gray-300">• <strong className="text-gray-300">Authentication Details</strong> tab shows the MFA method used (Authenticator app, SMS, etc.)</p>
            </div>
            <ul className="space-y-1.5 mt-3">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Also check <strong className="text-gray-300">Entra ID → Audit logs</strong> to see the RBAC role assignments you made earlier</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Filter by Activity: <code className="text-yellow-400">"Add member to role"</code> to find your assignments</span></li>
            </ul>
            <div className="mt-3 p-2 border border-green-800/50 bg-green-900/10">
              <p className="text-green-400 text-xs">Success: Test users can only view resources (Reader role). MFA is required for Azure Portal access. Legacy auth is blocked. Sign-in logs confirm enforcement.</p>
            </div>
            <div className="mt-2 p-2 border border-yellow-800/50 bg-yellow-900/10">
              <p className="text-yellow-400 text-xs">Cleanup: Delete test users and the resource group when done. Set Conditional Access policies to "Off" or "Report-only" if sharing a tenant. Keep your break-glass account safe.</p>
            </div>
          </PhaseStepItem>
        </div>

        <div className="space-y-2 mb-6">
          <PhaseStepItem number={8} type="ATTACKER" title="What the attacker sees if this lab is misconfigured"
            isOpen={open.has(7)} onToggleOpen={() => toggleOpen(7)}
            isChecked={checked.has(7)} onToggleChecked={() => toggleChecked(7)}>
            <p>If your Conditional Access policies are in <span className="text-yellow-400">Report-only</span> mode instead of Enabled, they generate audit data but block nothing. An attacker with stolen credentials can log in from any location, any device, without MFA — and your logs show the policy <em>would have blocked them</em> while they move freely.</p>
            <div className="mt-3 p-3 border border-red-800/40 bg-red-900/10">
              <p className="text-red-400 text-xs font-bold mb-2">Attack path: standing Global Admin</p>
              <p className="text-gray-400 text-xs">If you assign Global Admin or Owner permanently instead of using PIM, an attacker who compromises that account has immediate tenant-wide access. With PIM disabled, there's no just-in-time barrier. Most identity-related breaches start with overprivileged standing accounts, not zero-days.</p>
            </div>
            <div className="mt-2 p-2 border border-red-800/40 bg-red-900/10">
              <p className="text-gray-400 text-xs"><span className="text-red-400">Guest user risk:</span> leaving guest accounts without an access review policy means former contractors and vendors retain access indefinitely. Run: <code className="text-yellow-400">Get-AzureADUser -Filter "UserType eq 'Guest'"</code> to enumerate them.</p>
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={9} type="WARN" title="Common mistakes in this lab"
            isOpen={open.has(8)} onToggleOpen={() => toggleOpen(8)}
            isChecked={checked.has(8)} onToggleChecked={() => toggleChecked(8)}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Leaving CA policies in Report-only:</span> Nothing is enforced. Always switch to "On" to test real blocking behaviour — use a test user account, never your admin account.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Locking yourself out of the tenant:</span> Always create a break-glass account (cloud-only, excluded from all CA policies, MFA registered) before enabling CA. Store credentials in a physical safe.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Assigning Owner instead of a scoped RBAC role:</span> Owner gives full control of the subscription including deleting resource groups and changing IAM. Use Contributor or a custom role unless Owner is explicitly required.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 flex-shrink-0">!</span><span><span className="text-gray-300">Not verifying PIM activation:</span> Creating a PIM-eligible assignment doesn't test whether activation works. Activate the role as a test user and verify it shows up in Azure RBAC assignments for the activation window only.</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={10} type="CLEANUP" title="Cleanup — prevent unexpected charges & tenant pollution"
            isOpen={open.has(9)} onToggleOpen={() => toggleOpen(9)}
            isChecked={checked.has(9)} onToggleChecked={() => toggleChecked(9)}>
            <p className="text-sm text-gray-400 mb-3">Run these in order. Skipping cleanup leaves orphaned identities and misconfigured policies that could create security gaps in your tenant.</p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 1. Disable or delete test Conditional Access policies</p>
                <p className="text-gray-400">Portal: Entra ID → Security → Conditional Access → select test policies → State: Off → Save</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 2. Remove RBAC role assignments created during lab</p>
                <p className="text-gray-400">az role assignment delete --assignee &lt;objectId&gt; --role &lt;role-name&gt; --scope /subscriptions/&lt;subId&gt;</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 3. Delete test users</p>
                <p className="text-gray-400">az ad user delete --id &lt;upn-or-objectId&gt;</p>
              </div>
              <div className="p-2 border border-gray-700 bg-gray-800">
                <p className="text-green-400 mb-1"># 4. Remove PIM eligible assignments (if added)</p>
                <p className="text-gray-400">Portal: Entra ID → Privileged Identity Management → Azure AD Roles → Assignments → Eligible → Remove</p>
              </div>
            </div>
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={1} checkedCount={checked.size} total={TOTAL} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module1" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Overview
          </Link>
          <Link to="/module2" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 2 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task1;
