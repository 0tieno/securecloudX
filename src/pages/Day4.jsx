import Content from "../components/Content";

const Day4 = () => {
  return (
    <Content>
      <h2 className="text-3xl font-bold text-white">Day 4: Application Security in Azure 🛡️</h2>
      <p className="mt-2 text-gray-300">
        Learn how to secure applications deployed in Azure using security best practices.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p><strong>Domain:</strong> Application Security</p>
        <p><strong>Goal:</strong> Implement security controls for web applications and APIs in Azure.</p>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Enable Web Application Firewall (WAF)</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Go to <strong>Azure Front Door</strong> or <strong>Azure Application Gateway</strong>.</li>
            <li>Enable <strong>Web Application Firewall (WAF)</strong>.</li>
            <li>Configure rules to block malicious traffic.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Use Managed Identities for Authentication</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Enable <strong>Managed Identity</strong> for an Azure resource.</li>
            <li>Use it to authenticate without storing credentials.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">Implement Secure API Management</h4>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Deploy <strong>Azure API Management</strong>.</li>
            <li>Apply <strong>rate limiting</strong> and <strong>authentication</strong> policies.</li>
          </ul>
        </div>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-2xl font-semibold text-white">Task</h3>
        <p className="text-gray-300 mt-2">
          Secure a web application using Web Application Firewall (WAF) and Managed Identities.
        </p>
      </div>
    </Content>
  );
};

export default Day4;