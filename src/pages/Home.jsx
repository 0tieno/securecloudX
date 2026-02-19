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

        {/* Definition Note */}
        <div className="mb-8 p-4 sm:p-6 rounded">
          <div className="text-green-400 text-xs sm:text-sm mb-2">
            $ cat what_is_cloud_security_engineering.txt
          </div>
          <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="text-yellow-400">[INFO]</span>{" "}
            <span className="text-cyan-400">Cloud Security Engineering</span>{" "}
            involves designing, implementing, and maintaining secure cloud infrastructure and applications.
            It combines{" "}
            <span className="text-blue-400">
              security best practices, automation, and DevSecOps
            </span>{" "}
            to protect cloud environments from threats. This includes{" "}
            <span className="text-green-400">
              identity management, encryption, network security, and compliance
            </span>{" "}
            across cloud platforms like Azure, AWS, and GCP.
          </div>
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

        {/* Learning Path */}
        <div className="mb-8">
          <div className="text-gray-400 text-sm mb-4">
            $ cat learning_path.txt
          </div>
          <h2 className="text-xl font-bold text-gray-300 mb-4">What You'll Learn</h2>
          <div className="grid gap-3">
            <div className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span className="text-gray-300 text-sm">
                Master the Fundamentals: Networking, Linux, Security Basics
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span className="text-gray-300 text-sm">
                Cloud Platforms: Azure, AWS, GCP security practices
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span className="text-gray-300 text-sm">
                Identity & Access Management (IAM) and Zero Trust
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span className="text-gray-300 text-sm">
                Certifications prep: AZ-500, CISSP, CCSP, Security+
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span className="text-gray-300 text-sm">
                DevSecOps and Security Automation
              </span>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-8">
          <div className="text-gray-400 text-sm mb-4">
            $ ./check_prerequisites.sh
          </div>
          <div className="space-y-2">
            <div className="flex items-start text-sm">
              <span className="text-green-400 mr-2">[REQUIRED]</span>
              <span className="text-gray-300">
                Basic Cloud Computing knowledge (Azure preferred)
              </span>
            </div>
            <div className="flex items-start text-sm">
              <span className="text-green-400 mr-2">[REQUIRED]</span>
              <span className="text-gray-300">
                Azure Free Tier Account (recommended)
              </span>
            </div>
            <div className="flex items-start text-sm">
              <span className="text-yellow-400 mr-2">[MINDSET]</span>
              <span className="text-gray-300">
                Willingness to experiment, break things, and learn
              </span>
            </div>
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

        {/* Start Journey */}
        <div className="bg-gray-800 border border-gray-700 p-6">
          <div className="text-green-400 text-sm mb-2">
            $ ./initialize_training.sh
          </div>
          <h2 className="text-xl font-bold text-gray-300 mb-4">
            Start Your Journey
          </h2>
          <Link
            to="/start"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white transition-colors border border-blue-500 text-sm"
          >
            → cd /training/day0 && ./start_from_zero.sh
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
