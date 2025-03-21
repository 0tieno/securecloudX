import Content from "../components/Content";

const Task7 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-white">Day 1 Task: Restrict Azure VM Access</h2>
      <p className="mt-2 text-gray-300">
        Configure RBAC and MFA to restrict access to an Azure VM.
      </p>
      <ul className="list-disc pl-5 text-gray-300 mt-2">
        <li>Assign an **RBAC role** to a specific user/group.</li>
        <li>Enable **MFA** for sign-in security.</li>
        <li>Test to ensure MFA is required before VM access.</li>
      </ul>


      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-white">Capstone Project Steps</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">1. Deploy a Secure Virtual Machine</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Deploy an Azure Virtual Machine (VM).</li>
            <li>Attach a Network Security Group (NSG) with restrictive rules.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">2. Implement Identity & Access Management</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Enable Role-Based Access Control (RBAC) for least privilege access.</li>
            <li>Enforce Multi-Factor Authentication (MFA) for user logins.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">3. Configure Network & Data Security</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Deploy Azure Firewall to filter traffic.</li>
            <li>Enable Azure DDoS Protection for resilience.</li>
            <li>Encrypt sensitive data using Azure Key Vault.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">4. Monitor & Respond to Security Events</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Enable Azure Security Center recommendations.</li>
            <li>Set up Azure Sentinel to detect threats and analyze security logs.</li>
          </ul>
        </div>
      </div>
    </Content>
  );
};

export default Task7;
