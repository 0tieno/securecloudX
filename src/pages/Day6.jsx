import Content from "../components/Content";

const Day6 = () => {
  return (
    <Content>
      <h2 className="text-3xl font-bold text-gray-300">Day 6: Incident Response & Monitoring 🚨</h2>
      <p className="mt-2 text-gray-300">
        Learn how to monitor security events, detect threats, and respond to incidents in Azure.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p><strong>Domain:</strong> Security Monitoring & Incident Response</p>
        <p><strong>Goal:</strong> Implement security monitoring and threat detection using Azure tools.</p>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Enable Azure Security Center</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Go to <strong>Azure Security Center</strong>.</li>
            <li>Enable <strong>security recommendations</strong> and monitoring.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Configure Azure Sentinel</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Navigate to <strong>Azure Sentinel</strong>.</li>
            <li>Connect data sources and configure <strong>threat detection rules</strong>.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Set Up Log Analytics</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Go to <strong>Azure Monitor</strong>.</li>
            <li>Create and configure <strong>Log Analytics Workspaces</strong>.</li>
          </ul>
        </div>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-2xl font-semibold text-white">Task</h3>
        <p className="text-gray-300 mt-2">
          Configure Azure Sentinel to detect suspicious activities and analyze security logs.
        </p>
      </div>
    </Content>
  );
};

export default Day6;