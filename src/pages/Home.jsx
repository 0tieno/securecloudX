import { useState } from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";

const Home = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    // TODO: Integrate with backend/email service
    setEmail("");
    alert("Thanks for subscribing! You'll receive reminders.");
  };

  return (
    <Content className="bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-start">🌥️ Welcome to secureCloudX</h1>
      
      <p className="text-gray-300 text-base md:text-lg text-start">
        Welcome to <strong>secureCloudX</strong>—a 7-day hands-on journey into cloud security,  
        designed by <a href="https://ronneyotieno.me" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">$!rronn3y</a> 
        to help you get started with cloud security using Azure. 
        Throughout this challenge, you’ll explore key security concepts, best practices, and real-world skills to protect cloud infrastructures.
      </p>

      {/* Cloud Security Matters Section */}
      <div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">🔒 Cloud Security Matters</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Security remains one of the biggest challenges in cloud computing. As cloud adoption grows,  
          security incidents and vulnerabilities continue to rise.
        </p>
        <p className="mt-3">
          <a 
            href="https://www.nojones.net/posts/breaking-into-cloudsec" 
            className="text-blue-400 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            🔗 Breaking into Cloud Security (Blog)
          </a>
        </p>
      </div>

      {/* Why Take This Challenge */}
      <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">🛡️ Why Take This Challenge?</h2>
      <ul className="mt-4 text-gray-300 space-y-3 text-sm md:text-base">
        <li><span className="text-white font-semibold">🔹 Hands-on Learning:</span> Work on real-world security scenarios.</li>
        <li><span className="text-white font-semibold">🔹 Practical Skills:</span> Learn how to secure cloud workloads using Azure tools.</li>
        <li><span className="text-white font-semibold">🔹 Capstone Project:</span> Apply your knowledge in a final project.</li>
      </ul>

      {/* Challenge Structure */}
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

      {/* Document Your Learning */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
        <h4 className="text-lg sm:text-xl font-semibold text-green-400">Document Your Learning For Each Day</h4>
        <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base mt-2">
          <li>Use blogs, videos, GitHub, or social media to document what you've learned.</li>
          <li>Be an expert and let the world know.</li>
        </ul>
      </div>

       {/* Email Subscription Form */}
       <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-400">📩 Stay Updated</h3>
        <p className="text-gray-300 text-sm sm:text-base mt-2">
          Enter your email to receive daily reminders about the challenge.
        </p>
        <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Get Started */}
      <h2 className="text-xl md:text-3xl font-bold mt-6 text-start">🚀 Get Started</h2>
      <p className="text-gray-300 text-base md:text-lg text-start">
        Ready to begin? Start with{" "}
        <Link to="/Day1" className="text-blue-400 font-semibold hover:underline">
          Day 1: Identity & Access Management
        </Link>.
      </p>
    </Content>
  );
};

export default Home;
