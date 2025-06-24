import { useParams } from "react-router-dom";
import Content from "../components/Content";
import { Link } from "react-router-dom";

const resourcesData = {
  1: {
    topic: "Identity & Access Management",
    resources: [
      { title: "Describe Azure role-based access control", description: "Learn about role-based access control.", type: "Learning Module", url: "https://learn.microsoft.com/training/modules/describe-azure-identity-access-security/6-role-based-access-control/?wt.mc_id=studentamb_387261" },
      { title: "What is Azure role-based access control (Azure RBAC)?", description: "Understand Role-Based Access Control and its use in Azure.", type: "Learning Module", url: "https://learn.microsoft.com/azure/role-based-access-control/overview/?wt.mc_id=studentamb_387261" },
      { title: "Grant a user access to Azure resources using the Azure portal", description: "practical tutorial", type: "Tutorial", url: "https://learn.microsoft.com/azure/role-based-access-control/quickstart-assign-role-user-portal/?wt.mc_id=studentamb_387261" },
      { title: "Assign Azure roles using the Azure portal", description: "practical how to guide", type: "Tutorial", url: "https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal/?wt.mc_id=studentamb_387261" },
      { title: "What are managed identities for Azure resources?", description: "practical how to guide", type: "Tutorial", url: "https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview/?wt.mc_id=studentamb_387261" },
      { title: "How it works: Microsoft Entra multifactor authentication", description: "practical how to guide", type: "Tutorial", url: "https://learn.microsoft.com/entra/identity/authentication/concept-mfa-howitworks/?wt.mc_id=studentamb_387261" },
      { title: "Security defaults in Microsoft Entra ID - MFA", description: "practical how to guide", type: "Tutorial", url: "https://learn.microsoft.com/entra/fundamentals/security-defaults/?wt.mc_id=studentamb_387261" },
      { title: "Azure IAM from Basics | Azure Managed Identities Demo with Microsoft Entra (With Notes)", description: "practical video with demo", type: "Video Tutorial", url: "https://www.youtube.com/watch?v=ng5n4MsymRE" }
    ]
  },
  2: {
    topic: "Network Security & Perimeter Defense",
    resources: [
      { title: "Quickstart step by step tutorial guide", description: "Use the Azure portal to create a virtual network", type: "Quickstart", url: "https://learn.microsoft.com/azure/virtual-network/quick-create-portal/?wt.mc_id=studentamb_387261" },
      { title: "Network Security Groups (NSG)", description: "Understand how to use NSGs to secure Azure networks.", type: "Learning Module", url: "https://learn.microsoft.com/azure/virtual-network/network-security-groups-overview/?wt.mc_id=studentamb_387261" },
      { title: "Monitor Azure Virtual Network", description: "Monitor Azure Virtual Network.", type: "docs", url: "https://learn.microsoft.com/azure/virtual-network/monitor-virtual-network/?wt.mc_id=studentamb_387261" },
      { title: "network security groups", description: "How network security groups filter network traffic", type: "docs", url: "https://learn.microsoft.com/azure/virtual-network/network-security-group-how-it-works/?wt.mc_id=studentamb_387261" },
      { title: "Fundamentals of Network Security", description: "Fundamentals of Network Security", type: "Learning Module", url: "https://learn.microsoft.com/training/modules/network-fundamentals-2/?wt.mc_id=studentamb_387261" },
      { title: "Implement network security in Azure", description: "Implement network security in Azure", type: "Learning Module", url: "https://learn.microsoft.com/training/paths/implement-network-security/?wt.mc_id=studentamb_387261" },
      { title: "Design and implement network security", description: "Design and implement network security", type: "Learning Module", url: "https://learn.microsoft.com/training/modules/design-implement-network-security-monitoring/?wt.mc_id=studentamb_387261" },
      { title: "Introduction to key Azure network security services", description: "Introduction to key Azure network security services", type: "Learning Module", url: "https://learn.microsoft.com/training/paths/introduction-azure-networking-services/?wt.mc_id=studentamb_387261" },
      { title: "Configure network security groups", description: "Configure network security groups", type: "Learning Module", url: "https://learn.microsoft.com/training/modules/configure-network-security-groups/?wt.mc_id=studentamb_387261" },
      { title: "Azure Networking Demo", description: "Azure Networking Demo | Azure VNet, Firewall, NSG and Bastion | Beginner Level Azure Project", type: "Video", url: "https://www.youtube.com/watch?v=jJSRYQQEUQc" },
      { title: "Best practices", description: "Azure best practices for network security", type: "Quickstart", url: "https://learn.microsoft.com/azure/security/fundamentals/network-best-practices/?wt.mc_id=studentamb_387261" }
    ]
  },
  3: {
    topic: "Data Protection & Encryption",
    resources: [
      { title: "Azure data Security", description: "Azure data security and encryption best practices.", type: "Docs", url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/data-encryption-best-practices/?wt.mc_id=studentamb_387261" },
      { title: "Azure customer data protection", description: "Azure customer data protection.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/protection-customer-data/?wt.mc_id=studentamb_387261" },
      { title: "Security recommendations for Blob storage", description: "Security recommendations for Blob storage.", type: "Docs", url: "https://learn.microsoft.com/en-us/azure/storage/blobs/security-recommendations/?wt.mc_id=studentamb_387261" },
      { title: "What is Azure Blob storage?", description: "What is Azure Blob storage?.", type: "Docs", url: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/?wt.mc_id=studentamb_387261" },
      { title: "Blob storage security", description: "Quickstart: Upload, download, and list blobs with the Azure portal.", type: "Quickstart step by step guide", url: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal/?wt.mc_id=studentamb_387261" },
      { title: "Plan and implement security for storage", description: "Plan and implement security for storage.", type: "Learning module", url: "https://learn.microsoft.com/en-us/training/modules/security-storage/?wt.mc_id=studentamb_387261" },
      { title: "Configure Azure Storage security", description: "Configure Azure Storage security.", type: "Learning module", url: "https://learn.microsoft.com/en-us/training/modules/configure-storage-security/?wt.mc_id=studentamb_387261" },
      { title: "Microsoft Defender for Storage", description: "What is Microsoft Defender for Storage", type: "Docs", url: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-storage-introduction/?wt.mc_id=studentamb_387261" },
      { title: "Developers Must Know this", description: "Secure your cloud data", type: "Learning module", url: "https://learn.microsoft.com/en-us/training/paths/secure-your-cloud-data/?wt.mc_id=studentamb_387261" },
      { title: "Configure Storage Security", description: "Configure Storage Security", type: "Instructor led - Learn Live", url: "https://learn.microsoft.com/en-us/shows/on-demand-instructor-led-training-series/az-104-module-19/?wt.mc_id=studentamb_387261" },
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
    topic: "Security Monitoring",
    resources: [
      { title: "Azure Policy & Governance", description: "Learn how to manage policies and governance in Azure.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/governance/" },
      { title: "Microsoft Defender for Cloud", description: "Learn about Microsoft Defender for Cloud and its security features.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/" },
      { title: "Compliance in Azure", description: "Understand Azure's compliance offerings and how to use them.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/compliance/" }
    ]
  },
  6: {
    topic: "Incident Response & Recovery",
    resources: [
      { title: "Azure Backup & Restore", description: "Learn how to configure Azure Backup and restore data.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/backup/backup-overview" },
      { title: "Incident Response Planning", description: "Learn how to create an incident response plan for Azure.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/security/compass/incident-response-playbook" },
      { title: "Azure Disaster Recovery", description: "Learn how to implement disaster recovery with Azure Site Recovery.", type: "Learning Module", url: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview" }
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
          
</div>

          <div className="mt-10 flex justify-between text-sm sm:text-base">
  <Link
    to={`/day${day}/task`}
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    ← Back to Lab
  </Link>

  {Number(day) < 7 && (
    <Link
      to={`/day${Number(day) + 1}`}
      className="text-blue-400 hover:underline hover:text-blue-300"
    >
      Next Day →
    </Link>
  )}

  {Number(day) === 7 && (
    <Link
      to="/explore"
      className="text-blue-400 hover:underline hover:text-blue-300"
    >
      🚀 Next Steps →
    </Link>
  )}
</div>


        </>
      ) : (
        <h2 className="text-3xl font-bold text-red-500">Resources not found for Day {day} ❌</h2>
      )}
    </Content>
  );
};

export default Resources;
