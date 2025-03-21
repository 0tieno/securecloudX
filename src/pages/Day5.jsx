import Content from "../components/Content";

const Day5 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">Day 5: Incident Response & Threat Detection 🚨</h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to detect, investigate, and respond to security incidents in Azure.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base"><strong>Domain:</strong> Security Operations</p>
        <p className="text-sm sm:text-base"><strong>Goal:</strong> Implement Azure security monitoring and incident response strategies.</p>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Set Up Azure Security Center</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Azure Security Center</strong>.</li>
            <li>Enable <strong>Microsoft Defender for Cloud</strong> to monitor security risks.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Monitor with Azure Sentinel (SIEM)</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to <strong>Azure Sentinel</strong> and connect log sources.</li>
            <li>Create <strong>custom detection rules</strong> for threats.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Investigate Incidents & Alerts</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Azure Security Center</strong> and review active alerts.</li>
            <li>Use <strong>Log Analytics</strong> to investigate suspicious activities.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Automate Incident Response</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Set up <strong>Azure Logic Apps</strong> to automate threat response.</li>
            <li>Use <strong>playbooks</strong> to handle security alerts.</li>
          </ul>
        </div>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Set up Azure Sentinel, configure security alerts, and create an automated incident response playbook.
        </p>
      </div>
    </Content>
  );
};

export default Day5;
