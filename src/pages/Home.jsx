import Content from "../components/Content";

const Home = () => {
  return (
    <Content className="bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-start">🌥️ Welcome to Azure Cloud Security</h1>
      
      <p className="text-gray-300 text-base md:text-lg text-start">
        This is a 7-day challenge designed to help you get started with cloud security using Azure.
        You will learn key security concepts, best practices, and hands-on skills to secure cloud environments.
      </p>

      <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">🛡️ Why Take This Challenge?</h2>
      <ul className="mt-4 text-gray-300 space-y-3 text-sm md:text-base">
        <li>
          <span className="text-white font-semibold">🔹 Hands-on Learning:</span> Work on real-world security scenarios.
        </li>
        <li>
          <span className="text-white font-semibold">🔹 Practical Skills:</span> Learn how to secure cloud workloads using Azure tools.
        </li>
        <li>
          <span className="text-white font-semibold">🔹 Capstone Project:</span> Apply your knowledge in a final project.
        </li>
      </ul>

      <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">📅 Challenge Structure</h2>
      <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base">
        {[
          "Identity & Access Management",
          "Network Security",
          "Data Security",
          "Application Security",
          "Security Monitoring",
          "Incident Response",
          "Capstone Project",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-400 font-semibold mr-2">Day {index + 1}:</span> {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">🚀 Get Started</h2>
      <p className="text-gray-300 text-base md:text-lg text-start">
        Ready to begin? Start with{" "}
        <span className="text-blue-400 font-semibold">Day 1: Identity & Access Management</span>.
      </p>
    </Content>
  );
};

export default Home;
