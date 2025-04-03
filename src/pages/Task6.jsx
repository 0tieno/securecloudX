import Content from "../components/Content";

const Day6 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">
        Day 6 Lab: Security Monitoring & Threat Intelligence 📊
      </h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to continuously monitor security events, detect threats, and use threat intelligence in Azure.
      </p>

      {/* Task Breakdown */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">What You’ll Do</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Enable Microsoft Defender for Cloud and configure security recommendations.</li>
          <li>Deploy Azure Sentinel and connect data sources.</li>
          <li>Use Log Analytics to analyze security logs.</li>
          <li>Set up threat intelligence integration for proactive security.</li>
        </ul>
      </div>


       {/* AI Assistance Prompt */}
       <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400">Use AI to Guide You</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Copy and paste this prompt into an AI assistant to get interactive guidance while completing the lab:
        </p>
        <blockquote className="mt-3 p-3 bg-gray-900 rounded-md text-gray-300 italic border-l-4 border-yellow-400">
        "Provide a step-by-step hands-on lab on Security Monitoring & Threat Intelligence using Azure. The lab should include enabling Microsoft Defender for Cloud, deploying Azure Sentinel, using Log Analytics for security monitoring, and integrating threat intelligence for proactive defense. Include instructions on how to test and validate security alerts by simulating suspicious activities."
        </blockquote>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray">Step-by-Step Guide</h3>

        {/* Step 1: Enable Microsoft Defender for Cloud */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 1: Enable Microsoft Defender for Cloud</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Microsoft Defender for Cloud helps in security posture management and provides advanced threat protection.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to Microsoft Defender for Cloud in the Azure portal.</li>
            <li>Enable security recommendations for your subscriptions.</li>
          </ul>
        </div>

        {/* Step 2: Deploy Azure Sentinel */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 2: Deploy Azure Sentinel</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Azure Sentinel is a cloud-native SIEM tool for detecting, investigating, and responding to security threats.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Navigate to Azure Sentinel in the Azure portal.</li>
            <li>Connect your data sources, such as Microsoft Defender for Identity and Azure Active Directory.</li>
            <li>Configure alert rules for real-time threat detection.</li>
          </ul>
        </div>

        {/* Step 3: Analyze Security Logs with Log Analytics */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 3: Analyze Security Logs with Log Analytics</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Log Analytics allows you to query and analyze security logs for detecting anomalies and suspicious activity.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to Log Analytics in the Azure portal.</li>
            <li>Run queries to examine security logs for any suspicious activities or anomalies.</li>
          </ul>
        </div>

        {/* Step 4: Set Up Threat Intelligence Integration */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Step 4: Set Up Threat Intelligence Integration</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Threat intelligence helps identify emerging threats and enhance your security posture with proactive measures.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Integrate Microsoft Threat Intelligence in Azure Sentinel.</li>
            <li>Configure the system to alert on any emerging threats based on global intelligence.</li>
          </ul>
        </div>

        {/* Step 5: Test & Validate */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Step 5: Test & Validate</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            **Why?** Testing ensures that your security monitoring tools are functioning correctly and providing accurate alerts.
          </p>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Simulate suspicious activity (e.g., unauthorized login attempts) to verify that the tools detect it.</li>
            <li>Ensure that alerts are triggered and threat intelligence is properly integrated.</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> Security incidents should be detected and alerted, with threat intelligence correctly integrated for proactive defense.
          </p>
        </div>

        <p className="text-green-300 text-sm sm:text-base mt-3">
            <strong>congrats!</strong> you just finished day 6. Ensure to document your learning and findings. You will need them in the capstone project. See you on day 7.
          </p>
      </div>
    </Content>
  );
};

export default Day6;
