import Content from "../components/Content";

const Home = () => {
  return (
    <Content className="bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-start">🌥️ Welcome to secureCloudX</h1>
      
      <p className="text-gray-300 text-base md:text-lg text-start">
        This is a junior learnCloudSecurity 7-day challenge designed to help you get started with cloud security using Azure.
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


      <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h4 className="text-lg sm:text-xl font-semibold text-green-400">Document Your Learning For each Day</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
            <li>Remember to use either blogs, videos, github or any social media platform of your choice to document what you've learnt each day.</li>
            <li>Be an expert and let the world know.</li>
          </ul>
          {/* <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Success Criteria:</strong> The Azure deployment is secure, with the appropriate monitoring tools detecting and responding to any incidents.
          </p> */}
      </div>
      
      <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">🚀 Get Started</h2>
      <p className="text-gray-300 text-base md:text-lg text-start">
        Ready to begin? Start with{" "}
        <span className="text-blue-400 font-semibold">Day 1: Identity & Access Management</span>.
      </p>
    </Content>
  );
};

export default Home;
