import Content from "../components/Content";

const Day2 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">Day 2: Network Security & Perimeter Defense 🛡️</h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Secure Azure resources using Virtual Networks (VNet), Firewalls, and DDoS protection.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base"><strong>Domain:</strong> Network Security</p>
        <p className="text-sm sm:text-base"><strong>Goal:</strong> Secure Azure resources using Virtual Networks, Firewalls, and DDoS protection.</p>
      </div>

      {/* Step-by-Step Guide */}
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

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Secure a Virtual Machine (VM) with an <strong>NSG & Azure Firewall</strong>.
        </p>
      </div>
    </Content>
  );
};

export default Day2;
