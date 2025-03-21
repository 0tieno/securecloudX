import Content from "../components/Content";

const Task2 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-white">Day 2 Task: Secure an Azure VM with NSG & Firewall</h2>
      <p className="mt-2 text-gray-300">
        In this task, you'll configure **Network Security Groups (NSGs) and Azure Firewall** to **protect an Azure Virtual Machine (VM) from unauthorized access**.
      </p>

      {/* Task Breakdown */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">What You’ll Do</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Create a **Virtual Network (VNet)** and define subnets.</li>
          <li>Set up **Network Security Groups (NSGs)** to filter traffic.</li>
          <li>Deploy **Azure Firewall** to block unauthorized access.</li>
          <li>Test security settings to ensure protection.</li>
        </ul>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        {/* Step 1: Create a Virtual Network (VNet) */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Create a Virtual Network (VNet)</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** A VNet provides network isolation and segmentation.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Azure Portal &gt; Virtual Networks &gt; Create</strong>.</li>
            <li>Define subnets for better security and organization.</li>
          </ul>
        </div>

        {/* Step 2: Configure NSGs */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Configure Network Security Groups (NSGs)</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** NSGs act as a firewall to control inbound and outbound traffic.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to **NSGs &gt; Create a new NSG**.</li>
            <li>Add **inbound/outbound rules** to allow only necessary traffic.</li>
            <li>Restrict RDP/SSH access to specific IP addresses.</li>
          </ul>
        </div>

        {/* Step 3: Deploy Azure Firewall */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Deploy Azure Firewall</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Azure Firewall provides centralized traffic control and protection.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to **Azure Firewall &gt; Create a new firewall**.</li>
            <li>Attach the firewall to your Virtual Network.</li>
            <li>Define rules to **block or allow traffic** based on security needs.</li>
          </ul>
        </div>

        {/* Step 4: Test Security Settings */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 4: Test & Validate</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Testing ensures that security policies work as expected.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Try accessing the VM from an **unauthorized IP** – it should be blocked.</li>
            <li>Verify that only **allowed users/IPs** can access the VM.</li>
            <li>Check logs to confirm blocked and allowed traffic.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> Unauthorized access is blocked, and only permitted traffic flows through.
          </p>
        </div>
      </div>
    </Content>
  );
};

export default Task2;