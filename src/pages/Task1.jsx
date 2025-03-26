import Content from "../components/Content";

const Task1 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Day 1 Task: Restrict Azure VM Access</h2>
      <p className="mt-2 text-gray-300">
        In this task, you'll configure **RBAC (Role-Based Access Control) and MFA (Multi-Factor Authentication)** to **secure an Azure Virtual Machine (VM)** from unauthorized access.
      </p>

      {/* Task Breakdown */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">What You’ll Do</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Assign **RBAC roles** to control access to the Azure VM.</li>
          <li>Enable **MFA** to require extra authentication before accessing the VM.</li>
          <li>Test the setup to verify that **only authorized users** can log in.</li>
        </ul>
      </div>

       {/* AI Assistance Prompt */}
       <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400">Use AI to Guide You</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Copy and paste this prompt into an AI assistant to get interactive guidance while completing the lab:
        </p>
        <blockquote className="mt-3 p-3 bg-gray-900 rounded-md text-gray-300 italic border-l-4 border-yellow-400">
        "Walk me through a lab on securing an Azure Virtual Machine (VM). The lab covers setting up Azure Active Directory (AD), creating users and groups, assigning RBAC roles for controlled access, enabling Multi-Factor Authentication (MFA), and testing the setup to ensure only authorized users can log in. Please explain each step in simple terms and include Azure portal navigation instructions where necessary."
        </blockquote>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        {/* Step 1: Set Up Azure AD */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Set Up Azure Active Directory (AD)</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Azure AD manages **user identities** and **access permissions** across cloud resources.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Azure Portal</strong> (<a href="https://portal.azure.com" className="text-blue-400">https://portal.azure.com</a>).</li>
            <li>Navigate to <strong>Azure Active Directory</strong>.</li>
            <li>Explore **Users, Groups, and Roles** to understand how permissions work.</li>
          </ul>
        </div>

        {/* Step 2: Create Users & Groups */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Create Users & Groups</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Assigning users to groups allows for **easier role management** instead of assigning permissions individually.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Add a new user: <strong>IAM &gt; Users &gt; New User</strong>.</li>
            <li>Create a group: <strong>IAM &gt; Groups &gt; New Group</strong> and add users.</li>
            <li>Use meaningful names like **"VM-Admins" or "Developers"**.</li>
          </ul>
        </div>

        {/* Step 3: Assign RBAC Roles */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Assign RBAC Roles</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** RBAC ensures that users have only the **minimum required access** to resources.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to the **Azure VM** you want to secure or create one if you don't have.</li>
            <li>Go to <strong>IAM (Access Control) &gt; Role Assignments &gt; Add role assignment</strong>.</li>
            <li>Assign a **Reader** role to a group/user (instead of Owner).</li>
            <li>Ensure that **only administrators** have full access.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Common Mistake:</strong> Assigning **Owner** or **Contributor** roles when **Read-Only** access is sufficient.
          </p>
        </div>

        {/* Step 4: Enable Multi-Factor Authentication (MFA) */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 4: Enable Multi-Factor Authentication (MFA)</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** MFA reduces the risk of account compromise **even if passwords are leaked**.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to **Azure Active Directory &gt; Security &gt; Conditional Access**.</li>
            <li>Create a new policy: **Require MFA for VM Access**.</li>
            <li>Set the **target users/groups** and enable MFA enforcement.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Best Practice:</strong> Exclude emergency accounts from MFA to avoid lockout.
          </p>
        </div>

        {/* Step 5: Test Your Setup */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 5: Test & Validate</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Always verify security settings to ensure they work as expected.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Try accessing the VM **without MFA** – it should be blocked.</li>
            <li>Attempt logging in with a user **who lacks permissions** – access should be denied.</li>
            <li>Log in with an **authorized user** – MFA should prompt before access.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> Unauthorized users **cannot access the VM**, and MFA prompts appear for all authorized users.
          </p>
        </div>
      </div>
    </Content>
  );
};

export default Task1;
