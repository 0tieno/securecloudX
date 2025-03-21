import Content from "../components/Content";

const Day7 = () => {
  return (
    <Content>
      <h2 className="text-3xl font-bold text-gray-300">Day 7: Capstone Project - Secure Azure Deployment 🏆</h2>
      <p className="mt-2 text-gray-300">
        Apply everything you've learned throughout the challenge by securing an Azure deployment.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p><strong>Domain:</strong> Comprehensive Security Implementation</p>
        <p><strong>Goal:</strong> Secure an end-to-end Azure deployment by integrating security best practices.</p>
      </div>

      {/* Capstone Project Steps */}
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

      {/* Final Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-2xl font-semibold text-white">Final Task</h3>
        <p className="text-gray-300 mt-2">
          Implement a fully secured Azure environment following best practices from the past six days.
        </p>
      </div>

      {/* Final Evaluation */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Final Evaluation</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          ✅ Were all unnecessary access points removed?<br />
          ✅ Is identity management secured with RBAC & MFA?<br />
          ✅ Is network traffic monitored and protected against threats?<br />
          ✅ Are sensitive data and secrets encrypted?<br />
          ✅ Is threat detection active with Azure Sentinel & Security Center?
        </p>
      </div>
    </Content>
  );
};

export default Day7;
