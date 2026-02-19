import { Link } from "react-router-dom";
import {
  Terminal,
  Shield,
  Code,
  BookOpen,
  Target,
} from "lucide-react";
import useChallengeUnlock from "../hooks/useChallengeUnlock";

const Home = () => {
  const unlockedDays = useChallengeUnlock();
  const currentDay = unlockedDays[unlockedDays.length - 1] || 1;

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
          <p className="text-gray-500 max-w-3xl">
            // Cloud security engineering, secure development, and DevSecOps practices
          </p>
          <div className="flex items-center mt-4 text-sm text-gray-400">
            <Target className="w-4 h-4 mr-2" />
            <span>7-day challenge available</span>
          </div>
        </div>

          <div className="mt-3 text-xs text-gray-400">
            # Focus: Secure cloud architecture, IAM, security automation, and compliance
          </div>

        {/* Resources */}
        <div className="mb-8">
          <div className="text-gray-400 text-sm mb-3">
            $ ls -la ./resources
          </div>
          <div className="space-y-2">
            <a
              href="https://www.nojones.net/posts/breaking-into-cloudsec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm block"
            >
              → breaking_into_cloudsec.md
            </a>
            <a
              href="https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm block"
            >
              → cloud_security_breaches_2021.analysis
            </a>
          </div>
        </div>

        {/* Your Journey - Day Chapters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-300 mb-6">
            Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Day 0 */}
            <Link
              to="/start"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3">0</span>
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400">
                  New to Cloud? Start Here
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                If you're completely new to cloud and cloud security concepts, start with beginner-friendly resources to build your foundation.
              </p>
            </Link>

            {/* Day 1 */}
            <Link
              to="/day1"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3">1</span>
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400">
                  Identity & Access Management (IAM)
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Master identity and access management principles, authentication, authorization, and role-based access control in cloud environments.
              </p>
            </Link>

            {/* Day 2 */}
            <Link
              to="/day2"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3">2</span>
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400">
                  Network Security & Perimeter Defense
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Learn network security fundamentals, firewall configuration, network segmentation, and perimeter defense strategies for cloud infrastructure.
              </p>
            </Link>

            {/* Day 3 */}
            <Link
              to="/day3"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3">3</span>
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400">
                  Data Security & Encryption
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Explore data protection techniques, encryption at rest and in transit, key management, and secure data storage practices in the cloud.
              </p>
            </Link>

            {/* Day 4 */}
            <Link
              to="/day4"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3">4</span>
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400">
                  Application Security in Azure
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Secure your cloud applications with secure coding practices, vulnerability management, and Azure-specific security features.
              </p>
            </Link>

            {/* Day 5 */}
            <Link
              to="/day5"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3">5</span>
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400">
                  Security Monitoring & Threat Intelligence
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Implement security monitoring, logging, threat detection, and leverage threat intelligence to protect your cloud infrastructure.
              </p>
            </Link>

            {/* Day 6 */}
            <Link
              to="/day6"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3">6</span>
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400">
                  Incident Response & Threat Detection
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Develop incident response plans, learn threat detection techniques, and practice responding to security incidents in cloud environments.
              </p>
            </Link>

            {/* Day 7 */}
            <Link
              to="/day7"
              className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-colors group"
            >
              <div className="flex items-start mb-2">
                <span className="text-gray-500 font-semibold mr-3">7</span>
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400">
                  Capstone Project - Secure Azure Deployment
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Apply everything you've learned by building and deploying a secure, production-ready cloud application on Azure.
              </p>
            </Link>
          </div>
        </div>

                {/* Community */}
        <div className="mb-8">
          <div className="text-gray-400 text-sm mb-3">
            $ cat community.links
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://x.com/securecloudX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              → X.com/securecloudX
            </a>
            <a
              href="https://chat.whatsapp.com/Llp1Z8uw8xP5NIByASUV7V"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              → whatsapp_community.join()
            </a>
            <a
              href="https://forms.office.com/r/5yqb8Xw5GK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              → subscribe_to_updates()
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
