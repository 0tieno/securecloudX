import Content from "../components/Content";

const Task2 = () => {
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
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Create a Virtual Network (VNet)</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Azure Portal &gt; Virtual Networks &gt; Create</strong>.</li>
            <li>Define subnets for better security.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Set Up Network Security Groups (NSGs)</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to <strong>NSGs &gt; Add inbound/outbound rules</strong>.</li>
            <li>Allow only necessary traffic (e.g., RDP/SSH for admins only).</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Implement Azure DDoS Protection</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>DDoS Protection Plans &gt; Create</strong>.</li>
            <li>Attach the plan to your VNet.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Use Azure Firewall</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Deploy <strong>Azure Firewall</strong> and configure rules to block unauthorized traffic.</li>
          </ul>
        </div>
      </div>
    </Content>
  );
};

export default Task2;
