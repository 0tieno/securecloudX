import Content from "../components/Content";
import { Link } from "react-router-dom";

const Day3 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">
        Day 3: Data Security & Encryption
      </h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to protect data at rest and in transit using encryption and access control mechanisms.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base">
          <strong>Domain:</strong> Data Security
        </p>
        <p className="text-sm sm:text-base">
          <strong>Goal:</strong> Secure data using encryption, access controls, and backups.
        </p>
      </div>

      {/* Overview: What & Why */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Overview</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          What is Data Security?  
          Data security refers to the protection of digital data from unauthorized access, corruption, or theft. In Azure, this is achieved using encryption, access control, and secure backups.
        </p>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          Why is Data Security important?  
          Without strong data security, sensitive information can be exposed, leading to data breaches, compliance violations, and financial losses. Encrypting data and enforcing strict access controls helps mitigate these risks.
        </p>

        {/* Real-World Scenario */}
        <div className="mt-4 p-3 bg-gray-700 rounded-md">
          <h4 className="text-lg font-semibold text-yellow-400">Real-World Scenario</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Imagine you are working for a healthcare provider storing patient records in Azure Storage. To protect sensitive data, you implement encryption for data at rest, enforce strict access controls using RBAC, and use private endpoints to prevent exposure to the public internet.
          </p>
        </div>
      </div>

      {/* Key Notes */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Key Notes</h3>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>Azure provides Server-Side Encryption (SSE) for data at rest.</li>
          <li>Use Azure Key Vault to manage encryption keys securely.</li>
          <li>Enable HTTPS-only access to protect data in transit.</li>
          <li>Use Shared Access Signatures (SAS) to grant limited access to resources.</li>
        </ul>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Your Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Today, you will encrypt Azure Storage and configure secure access using SAS and RBAC.  
          You’ll:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>Enable Server-Side Encryption with Microsoft-managed or customer-managed keys.</li>
          <li>Configure RBAC roles to limit access to storage resources.</li>
          <li>Create a Shared Access Signature (SAS) to provide secure access.</li>
          <li>Test your setup to ensure unauthorized users cannot access the data.</li>
        </ul>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          By completing this, you’ll understand how encryption and access controls protect cloud data.
        </p>
      </div>

      <div className="mt-10 flex justify-between text-sm sm:text-base">
  <Link
    to="/day2"
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    ← Previous: Day 2
  </Link>
  <Link
    to="/day3/task"
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    Next: Start Lab →
  </Link>
</div>

    </Content>
  );
};

export default Day3;