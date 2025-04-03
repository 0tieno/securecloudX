import { useParams } from "react-router-dom";
import Content from "../components/Content";

const resourcesData = {
  1: {
    topic: "Identity & Access Management",
    resources: [
      { title: "Azure Active Directory Overview", description: "Learn about Azure Active Directory and its features.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/active-directory/" },
      { title: "Role-Based Access Control (RBAC)", description: "Understand Role-Based Access Control and its use in Azure.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/role-based-access-control/" },
      { title: "Multi-Factor Authentication (MFA)", description: "Learn about MFA and how to configure it in Azure.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks" }
    ]
  },
  2: {
    topic: "Network Security & Perimeter Defense",
    resources: [
      { title: "Azure Virtual Network (VNet)", description: "Learn about setting up and managing virtual networks in Azure.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/virtual-network/" },
      { title: "Network Security Groups (NSG)", description: "Understand how to use NSGs to secure Azure networks.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview" },
      { title: "Azure DDoS Protection", description: "Learn how to protect Azure resources from DDoS attacks.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/ddos-protection/ddos-protection-overview" }
    ]
  },
  3: {
    topic: "Data Protection & Encryption",
    resources: [
      { title: "Azure Storage Security", description: "Learn how to secure Azure storage accounts and data.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-security-guide" },
      { title: "Data Encryption in Azure", description: "Understand encryption methods and how to apply them in Azure.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-overview" },
      { title: "Azure Key Vault Overview", description: "Learn how to use Azure Key Vault to manage secrets and keys.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/key-vault/general/overview" }
    ]
  },
  4: {
    topic: "Threat Detection & Monitoring",
    resources: [
      { title: "Azure Security Center", description: "Learn about Azure Security Center and its threat detection features.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/security-center/security-center-introduction" },
      { title: "Azure Sentinel (SIEM)", description: "Learn about Azure Sentinel, a cloud-native SIEM solution.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/sentinel/" },
      { title: "Log Analytics & Monitoring", description: "Understand how to monitor and analyze logs using Azure Monitor.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/azure-monitor/" }
    ]
  },
  5: {
    topic: "Incident Response & Recovery",
    resources: [
      { title: "Azure Backup & Restore", description: "Learn how to configure Azure Backup and restore data.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/backup/backup-overview" },
      { title: "Incident Response Planning", description: "Learn how to create an incident response plan for Azure.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/security/compass/incident-response-playbook" },
      { title: "Azure Disaster Recovery", description: "Learn how to implement disaster recovery with Azure Site Recovery.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview" }
    ]
  },
  6: {
    topic: "Compliance & Governance",
    resources: [
      { title: "Azure Policy & Governance", description: "Learn how to manage policies and governance in Azure.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/governance/" },
      { title: "Microsoft Defender for Cloud", description: "Learn about Microsoft Defender for Cloud and its security features.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/" },
      { title: "Compliance in Azure", description: "Understand Azure's compliance offerings and how to use them.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/compliance/" }
    ]
  },
  7: {
    topic: "Capstone Project",
    resources: [
      { title: "Final Project Guide", description: "Step-by-step guide for completing the capstone project.", type: "Video", url: "https://learn.microsoft.com/en-us/training/paths/azure-security/" },
      { title: "Azure Security Best Practices", description: "Learn security best practices in Azure.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/security/benchmark/azure/" },
      { title: "Case Studies & Real-World Scenarios", description: "Explore case studies and real-world scenarios to apply your knowledge.", type: "Video", url: "https://techcommunity.microsoft.com/t5/security-compliance-and-identity/bd-p/security-compliance-identity" }
    ]
  }
};

const Resources = () => {
  const { day } = useParams();
  const resource = resourcesData[Number(day)];

  return (
    <Content>
      {resource ? (
        <>
          <h2 className="text-3xl font-bold text-gray-400">Day {day}: {resource.topic} Resources 📚</h2>
          <p className="mt-2 text-gray-300">Explore the following resources to deepen your understanding:</p>

          {/* Resources Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full table-auto bg-gray-800 rounded-lg shadow-md">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-gray">Title</th>
                  <th className="px-6 py-3 text-left text-gray">Description</th>
                  <th className="px-6 py-3 text-left text-gray">Type of Content</th>
                </tr>
              </thead>
              <tbody>
                {resource.resources.map((res, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="px-6 py-4 text-blue-400 hover:underline">
                      <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{res.description}</td>
                    <td className="px-6 py-4 text-gray-300">{res.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
  <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">💡 Security Starts with Understanding</h3>
  <p className="text-gray-300 text-sm sm:text-base mt-2">
  Always remember, you cannot secure what you do not understand. Make sure to grasp the architectural and core components of the cloud so that you can properly secure them.
            </p>
            
            {/* <p className="mt-3">
    <a 
      href="https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/" 
      className="text-blue-400 hover:underline"
      target="_blank" 
      rel="noopener noreferrer"
    >
      🔗 Cloud Security Breaches and Vulnerabilities (Blog)
    </a>
  </p> */}
</div>

        </>
      ) : (
        <h2 className="text-3xl font-bold text-red-500">Resources not found for Day {day} ❌</h2>
      )}
    </Content>
  );
};

export default Resources;
