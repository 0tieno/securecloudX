import Content from "../components/Content";

const Task7 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">
        Day 7: Capstone Project - Secure Azure Deployment 🏆
      </h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Apply everything you've learned throughout the challenge by securing an Azure deployment.
      </p>

      {/* Task Breakdown */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">What You’ll Do</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Deploy a **secure Azure Virtual Machine (VM)** with proper access restrictions.</li>
          <li>Configure **RBAC** and enforce **MFA** for user logins.</li>
          <li>Set up **Azure Firewall** and **DDoS Protection** for network security.</li>
          <li>Ensure sensitive data is protected with **Azure Key Vault**.</li>
          <li>Enable **Azure Sentinel** to monitor and respond to security events.</li>
        </ul>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        {/* Step 1: Deploy a Secure Virtual Machine */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Deploy a Secure Virtual Machine</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Deploying a secure Azure VM ensures a protected and isolated environment for running applications.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Deploy a **secure Azure Virtual Machine (VM)** from the Azure portal.</li>
            <li>Attach a **Network Security Group (NSG)** to restrict inbound and outbound traffic based on specific rules.</li>
          </ul>
        </div>

        {/* Step 2: Configure Identity & Access Management */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Configure Identity & Access Management</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Role-Based Access Control (RBAC) ensures only authorized users can access specific resources, and MFA improves security for user sign-ins.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Set up **RBAC** to ensure users have the least privilege access.</li>
            <li>Enable **Multi-Factor Authentication (MFA)** to strengthen user login security.</li>
          </ul>
        </div>

        {/* Step 3: Configure Network & Data Security */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Configure Network & Data Security</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Securing your network and sensitive data ensures the integrity of your Azure resources and compliance with security standards.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Deploy **Azure Firewall** to filter and control traffic to and from your network.</li>
            <li>Enable **Azure DDoS Protection** to mitigate distributed denial-of-service attacks.</li>
            <li>Store sensitive data in **Azure Key Vault** to ensure it’s encrypted and securely managed.</li>
          </ul>
        </div>

        {/* Step 4: Enable Security Monitoring */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 4: Enable Security Monitoring</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Monitoring your Azure environment helps detect and respond to security threats in real time.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Enable **Azure Security Center** to provide security recommendations and threat detection.</li>
            <li>Set up **Azure Sentinel** to monitor security events and investigate potential threats.</li>
          </ul>
        </div>

        {/* Step 5: Test & Validate */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 5: Test & Validate</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Testing ensures that your security tools are working effectively and protecting your environment from threats.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Perform tests, such as **simulating unauthorized access** or **malicious activity**, to verify detection and response mechanisms.</li>
            <li>Ensure that **alerts** and **logs** are properly configured to notify you of suspicious behavior.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> The Azure deployment is secure, with the appropriate monitoring tools detecting and responding to any incidents.
          </p>
        </div>
      </div>
    </Content>
  );
};

export default Task7;
