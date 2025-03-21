import Content from "../components/Content";

const Task5 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-white">Day 5 Task: Incident Response & Threat Detection</h2>
      <p className="mt-2 text-gray-300">
        Set up Azure Sentinel, configure security alerts, and create an automated incident response playbook.
      </p>

      {/* Task Breakdown */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">What You’ll Do</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Enable **Azure Security Center** and **Microsoft Defender for Cloud**.</li>
          <li>Deploy **Azure Sentinel** for SIEM-based security monitoring.</li>
          <li>Create **custom detection rules** and investigate alerts.</li>
          <li>Set up **Azure Logic Apps playbooks** for automated responses.</li>
        </ul>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        {/* Step 1: Enable Azure Security Center */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Enable Azure Security Center</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Azure Security Center helps monitor security posture and detect threats.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to **Azure Security Center** in the Azure portal.</li>
            <li>Enable **Microsoft Defender for Cloud** for advanced threat protection.</li>
          </ul>
        </div>

        {/* Step 2: Deploy Azure Sentinel */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Deploy Azure Sentinel</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Azure Sentinel provides SIEM capabilities to collect, detect, and respond to security threats.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to **Azure Sentinel** in the Azure portal.</li>
            <li>Connect **data sources** such as Azure Active Directory and Microsoft Defender.</li>
            <li>Create **custom alert rules** to detect suspicious activities.</li>
          </ul>
        </div>

        {/* Step 3: Investigate Security Alerts */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Investigate Security Alerts</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Investigating alerts helps identify and mitigate security threats quickly.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to **Azure Sentinel then Incidents** to review alerts.</li>
            <li>Analyze logs using **Azure Log Analytics**.</li>
          </ul>
        </div>

        {/* Step 4: Automate Incident Response */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 4: Automate Incident Response</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Automating responses ensures quick mitigation of security threats.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Set up **Azure Logic Apps playbooks** to automate responses.</li>
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
            <li>Simulate a **brute-force attack** or unauthorized login attempt.</li>
            <li>Verify that **alerts are triggered in Azure Sentinel**.</li>
            <li>Check if **automated playbooks** respond to threats as expected.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> Security incidents should be detected, alerts should trigger, and automated responses should mitigate threats.
          </p>
        </div>
      </div>
    </Content>
  );
};

export default Task5;