import Content from "../components/Content";

const Task7 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">
        Finale: Capstone Project - Secure Azure Deployment 🏆
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
          <li>Secure API keys by storing and retrieving them via **Azure Key Vault**.</li>
          <li>Enable **Azure Sentinel** to monitor and respond to security events.</li>
        </ul>
      </div>


       {/* AI Assistance Prompt */}
       <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400">Use AI to Guide You</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Copy and paste this prompt into an AI assistant to get interactive guidance while completing the lab:
        </p>
        <blockquote className="mt-3 p-3 bg-gray-900 rounded-md text-gray-300 italic border-l-4 border-yellow-400">
        "I’m working on my Capstone Project for securing an Azure deployment, and I need a hands-on, step-by-step guide to help me apply everything I’ve learned. The guide should walk me through deploying a secure Azure Virtual Machine (VM) with proper network security controls like Network Security Groups (NSGs), Azure Firewall, and DDoS Protection.

I also need to configure identity security by setting up Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA) to ensure only authorized users can access resources. Additionally, I want to store and retrieve API keys securely using Azure Key Vault in a real-world scenario.

For security monitoring, I need to set up Azure Sentinel to track security events, create alerts, and automate responses. A critical part of this project will be testing everything—simulating unauthorized access attempts and other security threats to validate that my setup detects and mitigates risks effectively.

Finally, I need guidance on how to document my work in a structured report, including:

A brief overview of my secure deployment

The implementation steps I followed

Screenshots of configurations (RBAC, MFA, Firewall, Sentinel, etc.)

Testing & validation results

Challenges I faced and key takeaways

I want this to feel like a real-world security project where I’m learning by doing. The guide should be easy to follow, engaging, and help me gain practical Azure security skills that I can confidently apply in future projects. Thanks!"
        </blockquote>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        {/* Steps */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Deploy a Secure Virtual Machine</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Deploy a **secure Azure Virtual Machine (VM)** from the Azure portal.</li>
            <li>Attach a **Network Security Group (NSG)** to restrict inbound and outbound traffic based on specific rules.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Configure Identity & Access Management</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Set up **RBAC** to ensure users have the least privilege access.</li>
            <li>Enable **Multi-Factor Authentication (MFA)** to strengthen user login security.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Configure Network & Data Security</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Deploy **Azure Firewall** to filter and control traffic to and from your network.</li>
            <li>Enable **Azure DDoS Protection** to mitigate distributed denial-of-service attacks.</li>
            <li>Store sensitive data and **API keys** in **Azure Key Vault** to ensure they’re encrypted and securely managed.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 4: Secure API Keys with Azure Key Vault</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Generate a **dummy API key** for testing.</li>
            <li>Store the API key securely in **Azure Key Vault**.</li>
            <li>Retrieve the API key using a **Python script** or an **Azure Function**.</li>
            <li>Use the retrieved API key to make a **secure API request**.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 5: Enable Security Monitoring</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Enable **Azure Security Center** to provide security recommendations and threat detection.</li>
            <li>Set up **Azure Sentinel** to monitor security events and investigate potential threats.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 6: Test & Validate</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Perform tests, such as **simulating unauthorized access** or **malicious activity**, to verify detection and response mechanisms.</li>
            <li>Ensure that **alerts** and **logs** are properly configured to notify you of suspicious behavior.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> The Azure deployment is secure, with the appropriate monitoring tools detecting and responding to any incidents.
          </p>
        </div>
      </div>

      {/* Submission Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-purple-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-purple-400">Submission</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Your report should include:
        </p>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
          <li><strong>Overview:</strong> Brief summary of your secure Azure deployment.</li>
          <li><strong>Implementation Steps:</strong> Detailed description of how you deployed and configured security measures.</li>
          <li><strong>Screenshots:</strong> Proof of configurations, including RBAC, MFA, Firewall, Sentinel, Security Center, and Key Vault API key security.</li>
          <li><strong>Testing & Validation:</strong> Details of security tests performed and their outcomes.</li>
          <li><strong>Challenges & Learnings:</strong> Any difficulties faced and insights gained during the process.</li>
        </ul>
       
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
  <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">🎯 Submit Your Report & Get Certified!</h4>
  <p className="text-gray-300 text-sm sm:text-base mt-2">
    Complete your **detailed report** and submit it to **receive your official Certificate** from Microsoft Learn.  
  </p>
  <a 
    href="https://forms.microsoft.com/" 
    className="inline-block mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
  >
    📝 Submit Report
  </a>
</div>

      </div>
    </Content>
  );
};

export default Task7;
