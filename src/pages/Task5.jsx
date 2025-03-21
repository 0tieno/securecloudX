import Content from "../components/Content";

const Task5 = () => {
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
    </Content>
  );
};

export default Task5;
