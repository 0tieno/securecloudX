import Content from "../components/Content";

const Day6 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">Day 6: Security Monitoring & Threat Intelligence 📊</h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to continuously monitor security events, detect threats, and use threat intelligence in Azure.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base"><strong>Domain:</strong> Security Monitoring</p>
        <p className="text-sm sm:text-base"><strong>Goal:</strong> Implement continuous security monitoring and threat intelligence in Azure.</p>
      </div>

      {/* Step-by-Step Guide */}
      {/* <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Enable Azure Defender for Cloud</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Microsoft Defender for Cloud</strong>.</li>
            <li>Enable <strong>Advanced Threat Protection</strong> for key resources.</li>
            <li>Review security recommendations and apply fixes.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Integrate Threat Intelligence in Azure Sentinel</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to <strong>Azure Sentinel</strong>.</li>
            <li>Connect <strong>Microsoft Threat Intelligence</strong> to monitor global threats.</li>
            <li>Create custom alerts for potential security risks.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Analyze Logs with Azure Monitor</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Azure Monitor</strong> and open <strong>Log Analytics</strong>.</li>
            <li>Run <strong>Kusto Query Language (KQL)</strong> queries to analyze logs.</li>
            <li>Create alerts for unusual login activities.</li>
          </ul>
        </div>
      </div> */}

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Set up Microsoft Defender for Cloud, integrate threat intelligence into Azure Sentinel, and analyze security logs using Log Analytics.
        </p>
      </div>
    </Content>
  );
};

export default Day6;
