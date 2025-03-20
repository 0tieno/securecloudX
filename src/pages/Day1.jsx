import Content from "../components/Content";

const Day1 = () => {
  return (
    <Content>
      <h2 className="text-3xl font-bold text-gray-300">Day 1: Identity & Access Management (IAM) 🔐</h2>
      <p className="mt-2 text-gray-300">
        Learn how to manage identities, access controls, and authentication using Azure Active Directory.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p><strong>Domain:</strong> Identity & Access Management (IAM)</p>
        <p><strong>Goal:</strong> Understand how to manage user identities, access controls, and authentication in Azure.</p>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Set Up Azure AD (Active Directory)</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Go to <strong>Azure Portal</strong>.</li>
            <li>Navigate to <strong>Azure Active Directory</strong>.</li>
            <li>Explore <strong>Users, Groups, and Roles</strong>.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Create Users and Groups</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Add a new user: <strong>IAM &gt; Users &gt; New user</strong>.</li>
            <li>Create a group and assign users: <strong>IAM &gt; Groups &gt; New Group</strong>.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Implement Role-Based Access Control (RBAC)</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Assign roles to users/groups: <strong>IAM &gt; Role Assignments &gt; Add role assignment</strong>.</li>
            <li>Use <strong>Least Privilege Access</strong> (e.g., assign "Reader" instead of "Owner").</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Enable Multi-Factor Authentication (MFA)</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Navigate to <strong>Azure AD Security &gt; Conditional Access</strong>.</li>
            <li>Require <strong>MFA</strong> for sign-ins.</li>
          </ul>
        </div>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-2xl font-semibold text-white">Task</h3>
        <p className="text-gray-300 mt-2">
          Restrict access to an Azure VM using <strong>RBAC & MFA</strong>.
        </p>
      </div>
    </Content>
  );
};

export default Day1;
