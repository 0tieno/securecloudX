import Content from "../components/Content";

const Day5 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">
        Day 6: Incident Response & Threat Detection 🚨
      </h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to detect, investigate, and respond to security incidents in Azure.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base">
          <strong>Domain:</strong> Security Operations
        </p>
        <p className="text-sm sm:text-base">
          <strong>Goal:</strong> Implement Azure security monitoring and incident response strategies.
        </p>
      </div>

      {/* Overview: What & Why */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Overview</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          What is Incident Response & Threat Detection?  
          Incident response refers to the process of identifying, investigating, and mitigating security threats. In Azure, tools like Microsoft Sentinel and Defender for Cloud provide real-time threat monitoring.
        </p>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          Why is Incident Response important?  
          Security breaches can lead to data loss, service disruptions, and compliance issues. Having a proactive incident response strategy helps reduce risks and mitigate threats effectively.
        </p>

        {/* Real-World Scenario */}
        <div className="mt-4 p-3 bg-gray-700 rounded-md">
          <h4 className="text-lg font-semibold text-yellow-400">Real-World Scenario</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Your company experiences unusual login attempts from multiple locations. To investigate, you use Azure Sentinel to detect anomalies, create security alerts, and automate a playbook response to block suspicious activity.
          </p>
        </div>
      </div>

      {/* Key Notes */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Key Notes</h3>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>Azure Sentinel is a cloud-native SIEM that collects and analyzes security data.</li>
          <li>Use Kusto Query Language (KQL) to investigate security incidents.</li>
          <li>Security alerts can be automatically triggered based on predefined rules.</li>
          <li>Incident response playbooks automate actions like blocking malicious IPs.</li>
        </ul>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Your Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Today, you will set up Azure Sentinel, configure security alerts, and create an automated incident response playbook.  
          You’ll:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>Enable Azure Sentinel and connect log sources.</li>
          <li>Create security alert rules to detect threats.</li>
          <li>Use KQL queries to investigate security incidents.</li>
          <li>Design an incident response playbook to automate security actions.</li>
        </ul>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          By completing this, you’ll gain hands-on experience in detecting and responding to security incidents in Azure.
        </p>
      </div>
    </Content>
  );
};

export default Day5;