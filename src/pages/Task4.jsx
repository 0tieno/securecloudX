import Content from "../components/Content";

const Task4 = () => {
  return (
    <Content>
      <h2 className="text-2xl font-bold text-white">Day 1 Task: Restrict Azure VM Access</h2>
      <p className="mt-2 text-gray-300">
        Configure RBAC and MFA to restrict access to an Azure VM.
      </p>
      <ul className="list-disc pl-5 text-gray-300 mt-2">
        <li>Assign an **RBAC role** to a specific user/group.</li>
        <li>Enable **MFA** for sign-in security.</li>
        <li>Test to ensure MFA is required before VM access.</li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Step-by-Step Guide</h3>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Enable Web Application Firewall (WAF)</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Go to <strong>Azure Front Door</strong> or <strong>Azure Application Gateway</strong>.</li>
            <li>Enable <strong>Web Application Firewall (WAF)</strong>.</li>
            <li>Configure rules to block malicious traffic.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Use Managed Identities for Authentication</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Enable <strong>Managed Identity</strong> for an Azure resource.</li>
            <li>Use it to authenticate without storing credentials.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Implement Secure API Management</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Deploy <strong>Azure API Management</strong>.</li>
            <li>Apply <strong>rate limiting</strong> and <strong>authentication</strong> policies.</li>
          </ul>
        </div>
      </div>
    </Content>
  );
};

export default Task4;
