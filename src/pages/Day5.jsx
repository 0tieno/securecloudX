import Content from "../components/Content";

const Day5 = () => {
  return (
    <Content>
      <h2 className="text-3xl font-bold text-gray-300">Day 5: Data Security & Encryption 🔒</h2>
      <p className="mt-2 text-gray-300">
        Learn how to protect sensitive data stored in Azure using encryption and access controls.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p><strong>Domain:</strong> Data Security</p>
        <p><strong>Goal:</strong> Secure data at rest and in transit using Azure security features.</p>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Enable Storage Account Encryption</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Go to <strong>Azure Storage Account</strong>.</li>
            <li>Enable <strong>encryption at rest</strong> using Microsoft or customer-managed keys.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Secure Databases with Transparent Data Encryption (TDE)</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Go to <strong>Azure SQL Database</strong>.</li>
            <li>Enable <strong>Transparent Data Encryption (TDE)</strong>.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Use Azure Key Vault for Secret Management</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Navigate to <strong>Azure Key Vault</strong>.</li>
            <li>Store and manage secrets securely.</li>
          </ul>
        </div>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-2xl font-semibold text-white">Task</h3>
        <p className="text-gray-300 mt-2">
          Encrypt an Azure SQL database and configure Azure Key Vault for secret management.
        </p>
      </div>
    </Content>
  );
};

export default Day5;