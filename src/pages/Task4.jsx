import Content from "../components/Content";
import { Link } from "react-router-dom";

const Task4 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Day 4 Lab: Secure Web Applications</h2>
      <p className="mt-2 text-gray-300">
        Implement security controls for web applications and APIs in Azure using Web Application Firewall (WAF) and Managed Identities.
      </p>

      {/* Task Breakdown */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">What You’ll Do</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Deploy Azure Web Application Firewall (WAF) to protect web applications.</li>
          <li>Use Managed Identities to enhance application security.</li>
          <li>Test the setup to ensure protection against common web threats.</li>
        </ul>
      </div>

       {/* AI Assistance Prompt */}
       <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400">Use AI to Guide You</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Copy and paste this prompt into an AI assistant to get interactive guidance while completing the lab:
        </p>
        <blockquote className="mt-3 p-3 bg-gray-900 rounded-md text-gray-300 italic border-l-4 border-yellow-400">
        "Walk me through a hands-on lab on securing web applications in Azure using Web Application Firewall (WAF) and Managed Identities. The lab should include deploying WAF to protect against web-based threats, enabling Managed Identities to remove credential-based authentication, and testing the setup to ensure security measures work. Provide detailed step-by-step instructions in simple terms, including Azure portal navigation and validation steps."
        </blockquote>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        {/* Step 1: Deploy Azure WAF */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Deploy Azure Web Application Firewall (WAF)</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** WAF helps protect web applications from common threats like SQL injection and cross-site scripting (XSS).
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Azure Portal</strong> (<a href="https://portal.azure.com" className="text-blue-400">https://portal.azure.com</a>).</li>
            <li>Navigate to <strong>Azure Front Door & WAF</strong> or <strong>Application Gateway</strong>.</li>
            <li>Create a WAF Policy and apply it to a web application.</li>
            <li>Enable rule sets to protect against OWASP vulnerabilities.</li>
          </ul>
        </div>

        {/* Step 2: Enable Managed Identities */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Enable Managed Identities</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Managed Identities eliminate the need for credentials in code when accessing Azure resources.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to Azure App Service or Azure Functions.</li>
            <li>Go to Identity &gt; System Assigned Identity and enable it.</li>
            <li>Assign required RBAC roles to allow secure access to resources.</li>
          </ul>
        </div>

        {/* Step 3: Test & Validate */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 3: Test & Validate</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Always verify security settings to ensure protection is working correctly.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Test WAF by attempting to access the app with a malicious payload.</li>
            <li>Verify that SQL injection and XSS attacks are blocked.</li>
            <li>Check logs in Azure Security Center for blocked threats.</li>
            <li>Ensure that Managed Identities work by accessing a resource without credentials in code.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> Unauthorized attacks should be blocked, and applications should securely access resources via Managed Identities.
          </p>
        </div>

        <p className="text-green-300 text-sm sm:text-base mt-3">
            <strong>congrats!</strong> you just finished day 4. Ensure to document your learning and findings. You will need them in the capstone project. See you on day 5.
          </p>
      </div>

<div className="mt-10 flex justify-between text-sm sm:text-base">
  <Link
    to="/day4"
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    ← Back to Overview
  </Link>
  <Link
    to="/day/4/resources"
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    Resources →
  </Link>
</div>


    </Content>
  );
};

export default Task4;