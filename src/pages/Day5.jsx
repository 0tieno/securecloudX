import Content from "../components/Content";
import { Link } from "react-router-dom";

const Day5 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">
        Day 5: Security Monitoring & Threat Intelligence 📊
      </h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to continuously monitor security events, detect threats, and
        use threat intelligence in Azure.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base">
          <strong>Domain:</strong> Security Monitoring
        </p>
        <p className="text-sm sm:text-base">
          <strong>Goal:</strong> Implement continuous security monitoring and
          threat intelligence in Azure.
        </p>
      </div>

      {/* Overview: What & Why */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          Overview
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          What is Security Monitoring? Security monitoring involves continuously
          analyzing system activity, logs, and alerts to detect security
          threats.
        </p>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          Why is it important Without proactive monitoring, security incidents
          may go undetected, leading to data breaches, financial losses, and
          compliance violations.
        </p>

        {/* Real-World Scenario */}
        <div className="mt-4 p-3 bg-gray-700 rounded-md">
          <h4 className="text-lg font-semibold text-yellow-400">
            Real-World Scenario
          </h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            You are a security analyst for a global finance company. A recent
            audit revealed gaps in threat detection and response. To enhance
            security, you integrate Microsoft Defender for Cloud and Azure
            Sentinel, enabling real-time monitoring and automated threat
            response.
          </p>
        </div>
      </div>

      {/* Key Notes */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          Key Notes
        </h3>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>
            Microsoft Defender for Cloud provides security posture management
            and advanced threat protection.
          </li>
          <li>
            Azure Sentinel is a cloud-native SIEM (Security Information and
            Event Management) solution for threat detection and response.
          </li>
          <li>
            Use Log Analytics to analyze security events and detect anomalies.
          </li>
          <li>
            Threat intelligence helps identify and mitigate emerging cyber
            threats.
          </li>
        </ul>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          Your Task
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Today, you will configure security monitoring tools in Azure to detect
          and respond to threats. You’ll:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>
            Enable Microsoft Defender for Cloud and configure security
            recommendations.
          </li>
          <li>Deploy Azure Sentinel and connect data sources.</li>
          <li>Use Log Analytics to analyze security logs.</li>
          <li>
            Set up threat intelligence integration for proactive security.
          </li>
        </ul>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          By completing this, you’ll gain hands-on experience in continuous
          security monitoring.
        </p>
      </div>

      <div className="mt-10 flex justify-between text-sm sm:text-base">
        <Link
          to="/day4"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          ← Previous: Day 4
        </Link>
        <Link
          to="/day5/task"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          Next: Start Lab →
        </Link>
      </div>
    </Content>
  );
};

export default Day5;
