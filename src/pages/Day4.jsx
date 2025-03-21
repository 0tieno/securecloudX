import Content from "../components/Content";

const Day4 = () => {
  return (
    <Content>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-300">
        Day 4: Application Security in Azure 🛡️
      </h2>
      <p className="mt-2 text-gray-300 text-sm sm:text-base">
        Learn how to secure applications deployed in Azure using security best practices.
      </p>

      {/* Domain & Goal */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <p className="text-sm sm:text-base">
          <strong>Domain:</strong> Application Security
        </p>
        <p className="text-sm sm:text-base">
          <strong>Goal:</strong> Implement security controls for web applications and APIs in Azure.
        </p>
      </div>

      {/* Overview: What & Why */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Overview</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          <strong>What is Application Security?</strong>  
          Application security involves **protecting applications from threats and vulnerabilities** by implementing secure authentication, access control, and network protections.
        </p>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          <strong>Why is Application Security important?</strong>  
          Web applications and APIs are common attack targets. Implementing security measures **prevents unauthorized access, data breaches, and service disruptions**.
        </p>

        {/* Real-World Scenario */}
        <div className="mt-4 p-3 bg-gray-700 rounded-md">
          <h4 className="text-lg font-semibold text-yellow-400">Real-World Scenario</h4>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            A **financial services company** is hosting a web application on Azure. To secure it, they configure **Web Application Firewall (WAF)** to prevent common attacks, enable **Managed Identities** to securely access Azure resources, and enforce **HTTPS-only traffic**.
          </p>
        </div>
      </div>

      {/* Key Notes */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Key Notes</h3>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>Azure **Web Application Firewall (WAF)** protects against **SQL injection, XSS, and other attacks**.</li>
          <li>Use **Managed Identities** to avoid storing secrets in code.</li>
          <li>Enable **HTTPS and TLS 1.2+** for secure communication.</li>
          <li>Apply **Zero Trust principles** by restricting access based on identity and context.</li>
        </ul>
      </div>

      {/* Task Section */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Your Task</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Secure a web application using **Web Application Firewall (WAF) and Managed Identities**.  
          You’ll:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-2 space-y-2">
          <li>Deploy **Azure WAF** to protect against common web attacks.</li>
          <li>Enable **Managed Identities** to secure app authentication to Azure services.</li>
          <li>Restrict application access using **Azure AD authentication**.</li>
          <li>Test the setup by simulating an attack and verifying security logs.</li>
        </ul>
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          By completing this, you’ll gain hands-on experience with **securing applications in Azure**.
        </p>
      </div>
    </Content>
  );
};

export default Day4;
