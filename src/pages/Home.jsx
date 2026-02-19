import { Link } from "react-router-dom";
import {
  Code,
  Target,
  ExternalLink,
} from "lucide-react";

const Home = () => {

  return (
    <div className="min-h-screen bg-gray-900 pb-32 font-mono">
      <div className="w-full max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Code className="w-7 h-7 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold text-gray-300">
              cloud_security_engineering
            </h1>
          </div>
          <p className="text-gray-400 max-w-3xl text-base">
            // Focus: Cloud security engineering, secure development, and DevSecOps practices
          </p>
          <div className="flex items-center mt-4 text-base text-gray-400">
            <Target className="w-5 h-5 mr-2" />
            <span>7-day challenge format</span>
          </div>
        </div>
        
          <div className="flex items-center mt-4 text-base text-gray-400">
            <span>securecloudX is a cloud security guide that introduces you to different security domains in cloud environments. It guides you through hands-on labs and practical exercises to build your cloud security skills. Not necessary to be an expert in all domains, but to understand the fundamentals of each. The ordering of the days is intentional and builds upon previous concepts.</span>
          </div>
          

        {/* Your Journey - Day Chapters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-300 mb-6 mt-8">
            The Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Day 0 */}
            <Link
              to="/start"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3 text-lg">0</span>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-blue-400">
                  New to Cloud? Start Here
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                If you're completely new to cloud and cloud security concepts, start with beginner-friendly resources to build your foundation.
              </p>
            </Link>

            {/* Day 1 */}
            <Link
              to="/day1"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3 text-lg">1</span>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-blue-400">
                  Identity & Access Management (IAM)
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Master identity and access management principles, authentication, authorization, and role-based access control in cloud environments.
              </p>
            </Link>

            {/* Day 2 */}
            <Link
              to="/day2"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3 text-lg">2</span>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-blue-400">
                  Network Security & Perimeter Defense
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Learn network security fundamentals, firewall configuration, network segmentation, and perimeter defense strategies for cloud infrastructure.
              </p>
            </Link>

            {/* Day 3 */}
            <Link
              to="/day3"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3 text-lg">3</span>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-blue-400">
                  Data Security & Encryption
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Explore data protection techniques, encryption at rest and in transit, key management, and secure data storage practices in the cloud.
              </p>
            </Link>

            {/* Day 4 */}
            <Link
              to="/day4"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3 text-lg">4</span>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-blue-400">
                  Application Security in Azure
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Secure your cloud applications with secure coding practices, vulnerability management, and Azure-specific security features.
              </p>
            </Link>

            {/* Day 5 */}
            <Link
              to="/day5"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3 text-lg">5</span>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-blue-400">
                  Security Monitoring & Threat Intelligence
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Implement security monitoring, logging, threat detection, and leverage threat intelligence to protect your cloud infrastructure.
              </p>
            </Link>

            {/* Day 6 */}
            <Link
              to="/day6"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3 text-lg">6</span>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-blue-400">
                  Incident Response & Threat Detection
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Develop incident response plans, learn threat detection techniques, and practice responding to security incidents in cloud environments.
              </p>
            </Link>

            {/* Day 7 */}
            <Link
              to="/day7"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3 text-lg">7</span>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-blue-400">
                  Capstone Project - Secure Azure Deployment
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Apply everything you've learned by building and deploying a secure, production-ready cloud application on Azure.
              </p>
            </Link>
          </div>
        </div>

                {/* Community */}
        <div className="mb-8">
          <div className="text-gray-400 text-base mb-3">
            $ cat community.links
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://x.com/securecloudX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-base inline-flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → X.com/securecloudX
            </a>
            <a
              href="https://chat.whatsapp.com/Llp1Z8uw8xP5NIByASUV7V"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors text-base inline-flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → whatsapp_community.join()
            </a>
            <a
              href="https://forms.office.com/r/5yqb8Xw5GK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-base inline-flex items-center gap-2"
            >
              <ExternalLink size={16} />
              → subscribe_to_updates()
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
