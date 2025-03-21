import Content from "../components/Content";

const Day1 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">
        Day 1: Identity & Access Management (IAM) 🔐
      </h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to manage identities, access controls, and authentication using Azure Active Directory.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base">
          <strong>Domain:</strong> Identity & Access Management (IAM)
        </p>
        <p className="text-sm sm:text-base">
          <strong>Goal:</strong> Understand how to manage user identities, access controls, and authentication in Azure.
        </p>
      </div>

      {/* Overview: What & Why */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Overview</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          **What is IAM?**  
          Identity & Access Management (IAM) is a **framework of policies and technologies** that ensures **the right people have the right access** to resources. In Azure, IAM is managed using **Azure Active Directory (Azure AD)** and **Role-Based Access Control (RBAC)**.
        </p>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          **Why is IAM important?**  
          Without proper IAM controls, unauthorized users can access sensitive data, modify critical settings, or even delete resources. **A well-implemented IAM strategy reduces security risks and improves compliance.**
        </p>

        {/* Real-World Scenario */}
        <div className="mt-4 p-3 bg-gray-700 rounded-md">
          <h4 className="text-lg font-semibold text-yellow-400">Real-World Scenario</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Imagine you work in a **bank’s cybersecurity team**. Developers need access to cloud databases, but not all should modify financial records. Using **RBAC**, you assign **"Read-Only" permissions** to developers and **"Full Control"** only to database admins. This prevents unauthorized modifications while allowing necessary access.
          </p>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Key Notes</h3>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li><strong>Azure AD</strong> is the core identity provider in Azure.</li>
          <li><strong>RBAC</strong> allows you to control who can access which resources.</li>
          <li><strong>MFA (Multi-Factor Authentication)</strong> adds an extra layer of security.</li>
          <li>IAM policies help organizations **prevent data breaches** and **maintain compliance**.</li>
        </ul>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Your Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Today, you will **secure an Azure Virtual Machine (VM) using RBAC & MFA**.  
          You’ll:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>Assign **RBAC roles** to control who can access the VM.</li>
          <li>Enable **MFA** to require an extra verification step.</li>
          <li>Test access to confirm that **only authorized users** can log in.</li>
        </ul>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          By completing this, you’ll understand **how IAM protects cloud environments from unauthorized access.**
        </p>
      </div>
    </Content>
  );
};

export default Day1;
