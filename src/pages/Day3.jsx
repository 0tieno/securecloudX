import Content from "../components/Content";

const Day3 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">Day 3: Data Security & Encryption 🔑</h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to protect data at rest and in transit using encryption and access control mechanisms.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base"><strong>Domain:</strong> Data Security</p>
        <p className="text-sm sm:text-base"><strong>Goal:</strong> Secure data using encryption, access controls, and backups.</p>
      </div>

      {/* Step-by-Step Guide */}
      {/* <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Enable Data Encryption</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to <strong>Azure Storage Accounts</strong>.</li>
            <li>Enable <strong>Server-Side Encryption</strong> with Microsoft-managed keys.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Configure Access Control for Storage</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Use <strong>Shared Access Signatures (SAS)</strong> for secure access.</li>
            <li>Limit permissions using <strong>Azure RBAC</strong>.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Secure Data in Transit</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Enable <strong>HTTPS</strong> for all Azure Storage traffic.</li>
            <li>Use <strong>VPNs</strong> and <strong>private endpoints</strong> for secure access.</li>
          </ul>
        </div>
      </div> */}

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Encrypt Azure Storage and configure secure access using SAS and RBAC.
        </p>
      </div>
    </Content>
  );
};

export default Day3;
