import Content from "../components/Content";

const Day2 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">
        Day 2: Network Security & Perimeter Defense
      </h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to secure Azure resources by implementing Virtual Networks (VNet), Network Security Groups (NSG), Azure Firewall, and DDoS protection.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base">
          <strong>Domain:</strong> Network Security
        </p>
        <p className="text-sm sm:text-base">
          <strong>Goal:</strong> Implement perimeter security controls to protect Azure resources from unauthorized access and cyber threats.
        </p>
      </div>

      {/* Overview: What & Why */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Overview</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          What is Network Security?  
          Network Security is a set of technologies and policies that help protect cloud infrastructure by controlling and filtering traffic.
        </p>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          Why is it important?  
          Without proper security measures, attackers can exploit open ports, inject malware, or perform denial-of-service attacks. Proper network security ensures data integrity, availability, and confidentiality.
        </p>

        {/* Real-World Scenario */}
        <div className="mt-4 p-3 bg-gray-700 rounded-md">
          <h4 className="text-lg font-semibold text-yellow-400">Real-World Scenario</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            A company deployed a web application on Azure, but their VMs had open RDP (3389) and SSH (22) ports. Attackers exploited these to gain access. By implementing NSGs, firewalls, and DDoS protection, the company was able to prevent future breaches and secure their infrastructure.
          </p>
        </div>

         {/* must read Section */}
      <div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">🔒 must read</h3>
        <p className="mt-3">
          <a 
            href="https://learn.microsoft.com/azure/private-link/network-security-perimeter-concepts/?wt.mc_id=studentamb_387261" 
            className="text-blue-400 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            🔗 What is a network security perimeter?
            (article by microsoft)
          </a>
        </p>
      </div>
      </div>

      {/* Notes Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Key Notes</h3>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li><strong>Virtual Networks (VNet)</strong> allow resources to communicate securely.</li>
          <li><strong>Network Security Groups (NSGs)</strong> control inbound and outbound traffic.</li>
          <li><strong>Azure Firewall</strong> provides centralized security policy enforcement.</li>
          <li><strong>DDoS Protection</strong> helps mitigate denial-of-service attacks.</li>
        </ul>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Your Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Today, you will secure an Azure Virtual Machine (VM) using NSGs, a firewall, and DDoS protection.  
          You’ll:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>Create a Virtual Network (VNet) to organize resources.</li>
          <li>Configure Network Security Groups (NSGs) to restrict access.</li>
          <li>Deploy Azure Firewall to control outbound and inbound traffic.</li>
          <li>Enable DDoS Protection to prevent attack floods.</li>
        </ul>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          By completing this, you’ll understand how to protect cloud environments from network-based attacks.
        </p>

         {/* must read Section */}
      <div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">before you proceed to the lab</h3>
        <p className="mt-3">
          <a 
            href="https://learn.microsoft.com/azure/private-link/create-network-security-perimeter-portal/?wt.mc_id=studentamb_387261" 
            className="text-blue-400 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            🔗 Create your first network security perimeter
            (quickstart step by step guide)
          </a>
        </p>
      </div>
      </div>
    </Content>
  );
};

export default Day2;