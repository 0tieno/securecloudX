import Content from "../components/Content";

const Task3 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Day 3 Task: Data Security & Encryption</h2>
      <p className="mt-2 text-gray-300">
        Secure data at rest and in transit using encryption and access control mechanisms.
      </p>
      <ul className="list-disc pl-5 text-gray-300 mt-2">
        <li>Enable **server-side encryption** for storage accounts.</li>
        <li>Configure **RBAC and SAS tokens** for access control.</li>
        <li>Secure data in transit using **HTTPS and private endpoints**.</li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Enable Data Encryption</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to <strong>Azure Storage Accounts</strong>.</li>
            <li>Enable <strong>Server-Side Encryption</strong> with Microsoft-managed keys.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Configure Access Control for Storage</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Use <strong>Shared Access Signatures (SAS)</strong> for secure access.</li>
            <li>Limit permissions using <strong>Azure RBAC</strong>.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Secure Data in Transit</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Enable <strong>HTTPS</strong> for all Azure Storage traffic.</li>
            <li>Use <strong>VPNs</strong> and <strong>private endpoints</strong> for secure access.</li>
          </ul>
        </div>
      </div>

      {/* Test & Validate */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-green-400">Step 4: Test & Validate</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Verify that encryption and access controls are correctly configured.
        </p>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
          <li>Check **Azure Storage settings** to confirm encryption is enabled.</li>
          <li>Attempt accessing storage **without proper RBAC permissions** – access should be denied.</li>
          <li>Test SAS tokens to ensure **they expire as expected** and follow the defined permissions.</li>
          <li>Use network monitoring tools to verify **data is only transmitted over HTTPS**.</li>
        </ul>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          <strong>Success Criteria:</strong> Unauthorized users cannot access data, encryption is enforced, and SAS policies work as intended.
        </p>
      </div>
    </Content>
  );
};

export default Task3;
