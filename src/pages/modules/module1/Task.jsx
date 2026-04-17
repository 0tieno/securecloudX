import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";
import PhaseStepItem from "../../../components/PhaseStepItem";

const TOTAL = 7;
const OBJECTIVES = [
  "Configure Azure Active Directory users and groups",
  "Assign Role-Based Access Control (RBAC) roles to enforce least privilege",
  "Enable MFA via Conditional Access and test the full setup",
];

const Task1 = () => {
  const [open, setOpen] = useState(() => new Set([0, 1, 2, 3, 4, 5, 6]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span>
          <Link to="/module1" className="hover:text-gray-400 transition-colors text-gray-500">phase-1-iam</Link>
          <span>/</span><span className="text-gray-400">lab</span>
        </div>

        {/* Title */}
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ./lab_1_iam_rbac_mfa.sh</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Phase 1 Lab: Restrict Azure VM Access</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Configure RBAC and MFA to secure an Azure Virtual Machine from unauthorized access.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-500">{checked.size}/{TOTAL} complete</span>
            <span className="text-gray-700"># check steps as you complete them</span>
          </div>
          <div className="w-full bg-gray-800 border border-gray-700 h-1.5">
            <div className="bg-red-500 h-full transition-all duration-500" style={{ width: `${(checked.size / TOTAL) * 100}%` }} />
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-blue-400 text-xs mb-3">$ cat lab_objectives.sh</div>
          <ul className="space-y-2">
            {OBJECTIVES.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-green-400 flex-shrink-0 mt-0.5">&gt;</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expand / Collapse All */}
        <div className="flex items-center justify-end gap-4 text-xs text-gray-600 mb-3">
          <button onClick={() => setOpen(new Set([0,1,2,3,4,5,6]))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>

        {/* Steps */}
        <div className="space-y-2 mb-8">
          <PhaseStepItem number={1} type="PREP" title="What You'll Do"
            isOpen={open.has(0)} onToggleOpen={() => toggleOpen(0)}
            isChecked={checked.has(0)} onToggleChecked={() => toggleChecked(0)}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-gray-500 flex-shrink-0">—</span><span>Assign RBAC roles to control access to the Azure VM.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500 flex-shrink-0">—</span><span>Enable MFA to require extra authentication before accessing the VM.</span></li>
              <li className="flex items-start gap-2"><span className="text-gray-500 flex-shrink-0">—</span><span>Test the setup to verify that only authorized users can log in.</span></li>
            </ul>
            <p className="mt-2 text-gray-600 italic text-xs">⚠ Steps have intentional gaps — designed to encourage critical thinking and problem-solving.</p>
          </PhaseStepItem>

          <PhaseStepItem number={2} type="AI" title="AI Prompt: Interactive Lab Guidance"
            isOpen={open.has(1)} onToggleOpen={() => toggleOpen(1)}
            isChecked={checked.has(1)} onToggleChecked={() => toggleChecked(1)}>
            <p className="mb-2">Copy this prompt into an AI assistant for step-by-step guidance:</p>
            <div className="p-3 bg-gray-900 border border-purple-500/30 text-gray-300 italic text-xs leading-relaxed">
              "Walk me through a lab on securing an Azure Virtual Machine (VM). The lab covers setting up Azure Active Directory (AD), creating users and groups, assigning RBAC roles for controlled access, enabling Multi-Factor Authentication (MFA), and testing the setup to ensure only authorized users can log in. Please explain each step in simple terms and include Azure portal navigation instructions where necessary."
            </div>
          </PhaseStepItem>

          <PhaseStepItem number={3} type="PRACTICE" title="Step 1: Set Up Azure Active Directory (AD)"
            isOpen={open.has(2)} onToggleOpen={() => toggleOpen(2)}
            isChecked={checked.has(2)} onToggleChecked={() => toggleChecked(2)}>
            <p className="mb-2"><span className="text-cyan-400">Why?</span> Azure AD manages user identities and access permissions across cloud resources.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <span className="text-gray-300">Azure Portal</span> → <a href="https://portal.azure.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">portal.azure.com</a></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to <span className="text-gray-300">Azure Active Directory</span></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Explore Users, Groups, and Roles to understand how permissions work</span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={4} type="PRACTICE" title="Step 2: Create Users & Groups"
            isOpen={open.has(3)} onToggleOpen={() => toggleOpen(3)}
            isChecked={checked.has(3)} onToggleChecked={() => toggleChecked(3)}>
            <p className="mb-2"><span className="text-cyan-400">Why?</span> Assigning users to groups allows for easier role management instead of assigning permissions individually.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Add a new user: <span className="text-gray-300">IAM → Users → New User</span></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a group: <span className="text-gray-300">IAM → Groups → New Group</span> and add users</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Use meaningful names like <span className="text-yellow-400">"VM-Admins"</span> or <span className="text-yellow-400">"Developers"</span></span></li>
            </ul>
          </PhaseStepItem>

          <PhaseStepItem number={5} type="PRACTICE" title="Step 3: Assign RBAC Roles"
            isOpen={open.has(4)} onToggleOpen={() => toggleOpen(4)}
            isChecked={checked.has(4)} onToggleChecked={() => toggleChecked(4)}>
            <p className="mb-2"><span className="text-cyan-400">Why?</span> RBAC ensures that users have only the minimum required access to resources.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Navigate to the Azure VM you want to secure (or create one)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <span className="text-gray-300">IAM (Access Control) → Role Assignments → Add role assignment</span></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Assign a <span className="text-yellow-400">Reader</span> role to a group/user (instead of Owner)</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Ensure only administrators have full access</span></li>
            </ul>
            <p className="mt-2 text-red-400 text-xs">⚠ Common mistake: Assigning Owner or Contributor roles when Read-Only access is sufficient.</p>
          </PhaseStepItem>

          <PhaseStepItem number={6} type="PRACTICE" title="Step 4: Enable Multi-Factor Authentication (MFA)"
            isOpen={open.has(5)} onToggleOpen={() => toggleOpen(5)}
            isChecked={checked.has(5)} onToggleChecked={() => toggleChecked(5)}>
            <p className="mb-2"><span className="text-cyan-400">Why?</span> MFA reduces the risk of account compromise even if passwords are leaked.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Go to <span className="text-gray-300">Azure Active Directory → Security → Conditional Access</span></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Create a new policy: <span className="text-yellow-400">Require MFA for VM Access</span></span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Set the target users/groups and enable MFA enforcement</span></li>
            </ul>
            <p className="mt-2 text-green-400 text-xs">✓ Best practice: Exclude emergency accounts from MFA to avoid lockout.</p>
          </PhaseStepItem>

          <PhaseStepItem number={7} type="PRACTICE" title="Step 5: Test & Validate"
            isOpen={open.has(6)} onToggleOpen={() => toggleOpen(6)}
            isChecked={checked.has(6)} onToggleChecked={() => toggleChecked(6)}>
            <p className="mb-2"><span className="text-cyan-400">Why?</span> Always verify security settings to ensure they work as expected.</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Try accessing the VM without MFA — it should be blocked</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Attempt login with a user lacking permissions — access should be denied</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0">$</span><span>Log in with an authorized user — MFA prompt should appear before access</span></li>
            </ul>
            <p className="mt-2 text-green-400 text-xs">✓ Success: Unauthorized users cannot access the VM; MFA prompts for authorized users.</p>
            {checked.size === TOTAL && (
              <p className="mt-3 text-green-400 font-semibold">$ echo "Phase 1 complete — document your findings for the capstone project."</p>
            )}
          </PhaseStepItem>
        </div>

        <MarkPhaseComplete phaseId={1} />

        {/* Bottom Nav */}
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module1" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Overview
          </Link>
          <Link to="/day/1/resources" className="flex items-center gap-1 text-gray-500 hover:text-blue-400 transition-colors">
            Phase 1 Resources <ChevronRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Task1;
