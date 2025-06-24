import Content from "../components/Content";
import { Link } from "react-router-dom";

const Task3 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Day 3 Lab: Data Security & Encryption</h2>
      <p className="mt-2 text-gray-300">
        Secure data at rest and in transit using encryption and access control mechanisms.
      </p>
      <ul className="list-disc pl-5 text-gray-300 mt-2">
        <li>Enable server-side encryption for storage accounts.</li>
        <li>Configure RBAC and SAS tokens for access control.</li>
        <li>Secure data in transit using HTTPS and private endpoints.</li>
      </ul>

       {/* AI Assistance Prompt */}
       <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400">Use AI to Guide You</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Copy and paste this prompt into an AI assistant to get interactive guidance while completing the lab:
        </p>
        <blockquote className="mt-3 p-3 bg-gray-900 rounded-md text-gray-300 italic border-l-4 border-yellow-400">
          "Guide me step-by-step through a lab on Data Security & Encryption in Azure. The lab covers enabling server-side encryption, configuring access control using RBAC and SAS tokens, and securing data in transit with HTTPS and private endpoints. Also, help me test and validate security settings to ensure encryption and access control are working correctly. Please explain each step in simple terms and provide relevant Azure portal navigation instructions."
        </blockquote>
      </div>
      

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
          <li>Check Azure Storage settings to confirm encryption is enabled.</li>
          <li>Attempt accessing storage without proper RBAC permissions – access should be denied.</li>
          <li>Test SAS tokens to ensure they expire as expected and follow the defined permissions.</li>
          <li>Use network monitoring tools to verify data is only transmitted over HTTPS.</li>
        </ul>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          <strong>Success Criteria:</strong> Unauthorized users cannot access data, encryption is enforced, and SAS policies work as intended.
        </p>
      </div>

      <p className="text-green-300 text-sm sm:text-base mt-3">
            <strong>congrats!</strong> you just finished day 3. Ensure to document your learning and findings. You will need them in the capstone project. See you on day 4.
          </p>


      <div className="mt-10 flex justify-between text-sm sm:text-base">
  <Link
    to="/day3"
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    ← Back to Overview
  </Link>
  <Link
    to="/day/3/resources"
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    Resources →
  </Link>
</div>

    </Content>
  );
};

export default Task3;
