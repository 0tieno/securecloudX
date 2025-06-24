import Content from "../components/Content";
import { Link } from "react-router-dom";

const Task5 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Day 5 Lab: Incident Response & Threat Detection</h2>
      <p className="mt-2 text-gray-300">
        Set up Azure Sentinel, configure security alerts, and create an automated incident response playbook.
      </p>

      {/* Task Breakdown */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">What You’ll Do</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Enable Azure Security Center and Microsoft Defender for Cloud.</li>
          <li>Deploy Azure Sentinel for SIEM-based security monitoring.</li>
          <li>Create custom detection rules and investigate alerts.</li>
          <li>Set up Azure Logic Apps playbooks for automated responses.</li>
        </ul>
      </div>


       {/* AI Assistance Prompt */}
       <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400">Use AI to Guide You</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Copy and paste this prompt into an AI assistant to get interactive guidance while completing the lab:
        </p>
        <blockquote className="mt-3 p-3 bg-gray-900 rounded-md text-gray-300 italic border-l-4 border-yellow-400">
        "Guide me through a hands-on lab on setting up Incident Response and Threat Detection using Azure Sentinel. The lab should include enabling Azure Security Center and Microsoft Defender for Cloud, deploying Azure Sentinel, configuring custom detection rules, investigating security alerts, and automating responses using Azure Logic Apps playbooks. Provide step-by-step instructions, including how to simulate security incidents for testing."
        </blockquote>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        {/* Step 1: Enable Azure Security Center */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Enable Azure Security Center</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Azure Security Center helps monitor security posture and detect threats.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to Azure Security Center in the Azure portal.</li>
            <li>Enable Microsoft Defender for Cloud for advanced threat protection.</li>
          </ul>
        </div>

        {/* Step 2: Deploy Azure Sentinel */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Deploy Azure Sentinel</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Azure Sentinel provides SIEM capabilities to collect, detect, and respond to security threats.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to Azure Sentinel in the Azure portal.</li>
            <li>Connect data sources such as Azure Active Directory and Microsoft Defender.</li>
            <li>Create custom alert rules to detect suspicious activities.</li>
          </ul>
        </div>

        {/* Step 3: Investigate Security Alerts */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Investigate Security Alerts</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Investigating alerts helps identify and mitigate security threats quickly.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to Azure Sentinel then Incidents to review alerts.</li>
            <li>Analyze logs using Azure Log Analytics.</li>
          </ul>
        </div>

        {/* Step 4: Automate Incident Response */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 4: Automate Incident Response</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Automating responses ensures quick mitigation of security threats.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Set up Azure Logic Apps playbooks to automate responses.</li>
            <li>Configure playbooks to trigger responses for specific security incidents.</li>
          </ul>
        </div>

        {/* Step 5: Test & Validate */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 5: Test & Validate</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Ensuring your security setup works is critical for effective protection.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Simulate a brute-force attack or unauthorized login attempt.</li>
            <li>Verify that alerts are triggered in Azure Sentinel.</li>
            <li>Check if automated playbooks respond to threats as expected.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> Security incidents should be detected, alerts should trigger, and automated responses should mitigate threats.
          </p>
        </div>

        <p className="text-green-300 text-sm sm:text-base mt-3">
            <strong>congrats!</strong> you just finished day 5. Ensure to document your learning and findings. You will need them in the capstone project. See you on day 6.
          </p>
      </div>


<div className="mt-10 flex justify-between text-sm sm:text-base">
  <Link
    to="/day6"
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    ← Back to Overview
  </Link>
  <Link
    to="/day/6/resources"
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    Resources →
  </Link>
</div>


    </Content>
  );
};

export default Task5;