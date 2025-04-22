import Content from "../components/Content";

const Task2 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-gray">Day 2 Lab: Secure an Azure VM with NSG & Firewall</h2>
      <p className="mt-2 text-gray-300">
        In this task, you'll configure <strong>Network Security Groups (NSGs) and Azure Firewall</strong> to <strong>protect an Azure Virtual Machine (VM) from unauthorized access.</strong>. Refer to resources page when stuck.
      </p>

      {/* Task Breakdown */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">What You’ll Do</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Create a <strong>Virtual Network (VNet)</strong> and define subnets.</li>
          <li>Set up <strong>Network Security Groups (NSGs)</strong> to filter traffic.</li>
          <li>Deploy <strong>Azure Firewall</strong> to block unauthorized access.</li>
          <li>Test security settings to ensure protection.</li>
        </ul>
      </div>


      <div className="mt-6 p-4 border-l-4 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">Do this practical before starting the lab</h3>
        <p className="mt-3">
          <a 
            href="https://learn.microsoft.com/en-us/azure/firewall/tutorial-firewall-deploy-portal-policy/?wt.mc_id=studentamb_387261" 
            className="text-blue-400 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            🔗Tutorial: Deploy and configure Azure Firewall and policy using the Azure portal
          </a>
        </p>
      </div>


       {/* AI Assistance Prompt */}
       <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400">Use AI to Guide You</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Copy and paste this prompt into an AI assistant to get interactive guidance while completing the lab:
        </p>
        <blockquote className="mt-3 p-3 bg-gray-900 rounded-md text-gray-300 italic border-l-4 border-yellow-400">
        "Guide me step-by-step through a lab on securing an Azure Virtual Machine (VM) using Network Security Groups (NSGs) and Azure Firewall. The lab includes creating a Virtual Network (VNet), configuring NSGs to filter traffic, deploying Azure Firewall for additional protection, and testing security settings to ensure only authorized access is allowed. Please explain each step in simple terms and include Azure portal navigation instructions where necessary."
        </blockquote>
      </div>

      

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        {/* Step 1: Create a Virtual Network (VNet) */}
        <div className="mt-4 p-4  rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Create a Virtual Network (VNet)</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            <strong>Why?</strong> A VNet provides network isolation and segmentation.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Sign in to <a href="https://portal.azure.com/?wt.mc_id=studentamb_387261" className="text-blue-400">Azure Portal</a>.</li>
            <li>Go to <strong>Virtual Networks</strong> and click <strong>Create</strong>.</li>
            <li>Choose a <strong>Resource Group</strong> and provide a unique <strong>VNet Name</strong>.</li>
            <li>Define a subnet (e.g., <strong>subnet1</strong> with 10.0.0.0/24 CIDR block).</li>
            <li>Click <strong>Review + Create</strong> and then <strong>Create</strong>.</li>
          </ul>
        </div>

        {/* Step 2: Configure NSGs */}
        <div className="mt-4 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Configure Network Security Groups (NSGs)</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            <strong>Why?</strong> NSGs act as a firewall to control inbound and outbound traffic.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to <strong>Network Security Groups</strong> in the Azure Portal.</li>
            <li>Click <strong>Create</strong> and assign it to the same <strong>Resource Group</strong> as your VNet.</li>
            <li>Go to <strong>Inbound Security Rules</strong> and add rules:
              <ul className="list-disc pl-5 mt-2">
                <li>Allow <strong>RDP (3389)</strong> or <strong>SSH (22)</strong> only for specific IPs.</li>
                <li>Block all other incoming traffic by default.</li>
              </ul>
            </li>
            <li>Associate the NSG with the VM’s subnet.</li>
          </ul>
        </div>

        {/* Step 3: Deploy Azure Firewall */}
        <div className="mt-4 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Deploy Azure Firewall</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            <strong>Why?</strong> Azure Firewall provides centralized traffic control and protection.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Azure Firewall</strong> and click <strong>Create</strong>.</li>
            <li>Assign it to the same VNet and subnet.</li>
            <li>Define rules:
              <ul className="list-disc pl-5 mt-2">
                <li><strong>Deny all inbound traffic</strong> except for allowed services.</li>
                <li>Allow only essential outbound traffic.</li>
              </ul>
            </li>
          </ul>
        </div>

         {/* Step 4: Deploy a Test-VM */}
         <div className="mt-4 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 4: Deploy a Test-VM</h4>
        </div>

        {/* Step 4: Test Security Settings */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 4: Test & Validate</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            <strong>Why?</strong> Testing ensures that security policies work as expected.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Try accessing the VM from an <strong>unauthorized IP</strong> – it should be blocked.</li>
            <li>Verify that only <strong>allowed users/IPs</strong> can access the VM.</li>
            <li>Check <strong>Azure Monitor Logs</strong> to confirm blocked and allowed traffic.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> Unauthorized access is blocked, and only permitted traffic flows through.
          </p>
        </div>

        <p className="text-green-300 text-sm sm:text-base mt-3">
            <strong>congrats!</strong> you just finished day 2. Ensure to document your learning and findings. You will need them in the capstone project. See you on day 3.
        </p>
        
        {/* Youtube  video */}


<section className="max-w-4xl  mx-auto px-4 py-10">
      

      <div className="w-full h-[140px] sm:h-[260px] md:h-[450px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <iframe
          src="https://www.youtube.com/embed/m1LQmlcoUIM"
          title="product pre-launch"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
      </div>
    </Content>
  );
};

export default Task2;