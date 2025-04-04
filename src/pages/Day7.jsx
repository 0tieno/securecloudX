import Content from "../components/Content";

const Day7 = () => {
  return (
    <Content>
      <h2 className="text-3xl font-bold text-gray-300">Day 7: Capstone Project - Secure Azure Deployment 🏆</h2>
      <p className="mt-2 text-gray-300">
        Apply everything you've learned throughout the challenge by securing an Azure deployment.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p><strong>Domain:</strong> Comprehensive Security Implementation</p>
        <p><strong>Goal:</strong> Secure an end-to-end Azure deployment by integrating security best practices.</p>
      </div>

      {/* Overview: What & Why */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Overview</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          What is this Capstone Project?  
          The capstone project brings everything together. You'll secure a full Azure deployment using all the tools, configurations, and strategies learned over the last 6 days.
        </p>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          Why is this important?  
          A secure deployment ensures that your environment is protected from external and internal threats, preventing data breaches and operational disruptions.
        </p>

        {/* Real-World Scenario */}
        <div className="mt-4 p-3 bg-gray-700 rounded-md">
          <h4 className="text-lg font-semibold text-yellow-400">Real-World Scenario</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            You are a cloud security engineer tasked with securing a new Azure deployment for a large healthcare provider. The company handles sensitive patient data and is required to comply with strict privacy regulations. Your job is to implement a comprehensive security posture across identity, network, and data layers to ensure confidentiality, integrity, and availability.
          </p>
        </div>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Final Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Today, you’ll secure an Azure environment by applying security best practices. Your task includes:
        </p>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>Configure identity management with RBAC and MFA for all users and roles.</li>
          <li>Set up network security with NSGs and Azure Firewall to monitor and control traffic.</li>
          <li>Ensure data protection by configuring encryption for sensitive data in transit and at rest.</li>
          <li>Deploy Azure Sentinel and configure alerts for real-time threat detection.</li>
          <li>Conduct a security audit to identify any vulnerabilities and ensure compliance with industry standards (e.g., HIPAA, GDPR).</li>
        </ul>
      </div>

      {/* Final Evaluation */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Final Evaluation</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          ✅ Were all unnecessary access points removed?<br />
          ✅ Is identity management secured with RBAC & MFA?<br />
          ✅ Is network traffic monitored and protected against threats using NSGs and Azure Firewall?<br />
          ✅ Are sensitive data and secrets encrypted with Azure Encryption?<br />
          ✅ Is threat detection active with Azure Sentinel & Microsoft Defender for Cloud?
        </p>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          Success Criteria: Successfully securing the Azure deployment will be evaluated based on the configurations above, and any remaining gaps should be identified for further enhancement.
        </p>
      </div>
    </Content>
  );
};

export default Day7;
