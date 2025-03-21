import { useParams } from "react-router-dom";
import Content from "../components/Content";

const resourcesData = {
  1: {
    topic: "Identity & Access Management",
    links: [
      { title: "Azure Active Directory Overview", url: "https://learn.microsoft.com/en-us/azure/active-directory/" },
      { title: "Role-Based Access Control (RBAC)", url: "https://learn.microsoft.com/en-us/azure/role-based-access-control/" },
      { title: "Multi-Factor Authentication (MFA)", url: "https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks" }
    ]
  },
  2: {
    topic: "Network Security & Perimeter Defense",
    links: [
      { title: "Azure Virtual Network (VNet)", url: "https://learn.microsoft.com/en-us/azure/virtual-network/" },
      { title: "Network Security Groups (NSG)", url: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview" },
      { title: "Azure DDoS Protection", url: "https://learn.microsoft.com/en-us/azure/ddos-protection/ddos-protection-overview" }
    ]
  },
  3: {
    topic: "Data Protection & Encryption",
    links: [
      { title: "Azure Storage Security", url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-security-guide" },
      { title: "Data Encryption in Azure", url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-overview" },
      { title: "Azure Key Vault Overview", url: "https://learn.microsoft.com/en-us/azure/key-vault/general/overview" }
    ]
  },
  4: {
    topic: "Threat Detection & Monitoring",
    links: [
      { title: "Azure Security Center", url: "https://learn.microsoft.com/en-us/azure/security-center/security-center-introduction" },
      { title: "Azure Sentinel (SIEM)", url: "https://learn.microsoft.com/en-us/azure/sentinel/" },
      { title: "Log Analytics & Monitoring", url: "https://learn.microsoft.com/en-us/azure/azure-monitor/" }
    ]
  },
  5: {
    topic: "Incident Response & Recovery",
    links: [
      { title: "Azure Backup & Restore", url: "https://learn.microsoft.com/en-us/azure/backup/backup-overview" },
      { title: "Incident Response Planning", url: "https://learn.microsoft.com/en-us/security/compass/incident-response-playbook" },
      { title: "Azure Disaster Recovery", url: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview" }
    ]
  },
  6: {
    topic: "Compliance & Governance",
    links: [
      { title: "Azure Policy & Governance", url: "https://learn.microsoft.com/en-us/azure/governance/" },
      { title: "Microsoft Defender for Cloud", url: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/" },
      { title: "Compliance in Azure", url: "https://learn.microsoft.com/en-us/azure/compliance/" }
    ]
  },
  7: {
    topic: "Capstone Project",
    links: [
      { title: "Final Project Guide", url: "https://learn.microsoft.com/en-us/training/paths/azure-security/" },
      { title: "Azure Security Best Practices", url: "https://learn.microsoft.com/en-us/security/benchmark/azure/" },
      { title: "Case Studies & Real-World Scenarios", url: "https://techcommunity.microsoft.com/t5/security-compliance-and-identity/bd-p/security-compliance-identity" }
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
          <h2 className="text-3xl font-bold text-white">Day {day}: {resource.topic} Resources 📚</h2>
          <p className="mt-2 text-gray-300">Expand your knowledge with the following resources:</p>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
            <ul className="list-disc pl-5 text-gray-300">
              {resource.links.map((link, index) => (
                <li key={index} className="mt-2">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <h2 className="text-3xl font-bold text-red-500">Resources not found for Day {day} ❌</h2>
      )}
    </Content>
  );
};

export default Resources;
