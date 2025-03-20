import Content from "../components/Content";

const Home = () => {
  return (
    <Content className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">🌥️ Welcome to Azure Cloud Security</h1>
      
      <p className="text-gray-300 text-lg">
        This is a 7-day challenge designed to help you get started with cloud security using Azure.
        You will learn key security concepts, best practices, and hands-on skills to secure cloud environments.
      </p>

      <h2 className="text-3xl font-bold mt-6">🛡️ Why take this challenge?</h2>
      <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
        <li><span className="text-white font-semibold">Hands-on Learning:</span> Work on real-world security scenarios.</li>
        <li><span className="text-white font-semibold">Practical Skills:</span> Learn how to secure cloud workloads using Azure tools.</li>
        <li><span className="text-white font-semibold">Capstone Project:</span> Apply your knowledge in a final project.</li>
      </ul>

      <h2 className="text-3xl font-bold mt-6">📅 Challenge Structure</h2>
      <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
        <li><span className="text-white font-semibold">Day 1:</span> Identity & Access Management</li>
        <li><span className="text-white font-semibold">Day 2:</span> Network Security</li>
        <li><span className="text-white font-semibold">Day 3:</span> Data Security</li>
        <li><span className="text-white font-semibold">Day 4:</span> Application Security</li>
        <li><span className="text-white font-semibold">Day 5:</span> Security Monitoring</li>
        <li><span className="text-white font-semibold">Day 6:</span> Incident Response</li>
        <li><span className="text-white font-semibold">Day 7:</span> Capstone Project</li>
      </ul>

      <h2 className="text-3xl font-bold mt-6">🚀 Get Started</h2>
      <p className="text-gray-300 text-lg">
        Ready to begin? Start with <span className="text-blue-400 font-semibold">Day 1: Identity & Access Management</span>.
      </p>
    </Content>
  );
};

export default Home;
