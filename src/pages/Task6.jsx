import Content from "../components/Content";

const Task6 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-white">Day 1 Task: Restrict Azure VM Access</h2>
      <p className="mt-2 text-gray-300">
        Configure RBAC and MFA to restrict access to an Azure VM.
      </p>
      <ul className="list-disc pl-5 text-gray-300 mt-2">
        <li>Assign an **RBAC role** to a specific user/group.</li>
        <li>Enable **MFA** for sign-in security.</li>
        <li>Test to ensure MFA is required before VM access.</li>
      </ul>

      <div className="mt-6">
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
      </div>
    </Content>
  );
};

export default Task6;
