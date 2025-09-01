import { Link } from "react-router-dom";
import {
  Terminal,
  Shield,
  Lock,
  Code,
  AlertTriangle,
  Users,
  BookOpen,
} from "lucide-react";
import Content from "../components/Content";
import useChallengeUnlock from "../hooks/useChallengeUnlock";

const Home = () => {
  const unlockedDays = useChallengeUnlock();
  const currentDay = unlockedDays[unlockedDays.length - 1] || 1;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <Content className="max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Terminal Header */}
        <div className="bg-gray-800 border border-gray-700 rounded-t-lg p-3 sm:p-4 mb-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
            <span className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm">
              root@securecloudx:~/engineering
            </span>
          </div>
        </div>
        {/* Main Terminal Content */}
        <div className="bg-gray-800 border-l border-r border-b border-gray-700 rounded-b-lg p-3 sm:p-6">
          {/* Welcome Section */}
          <div className="mb-6 sm:mb-8">

            <div className="text-green-400 text-xs sm:text-sm mb-2">
              $ cat welcome.txt
            </div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-300 mb-2 flex flex-col sm:flex-row sm:items-center">
              <span>Welcome to secureCloudX _engineering-part_</span>
            </h1>
            <div className="text-gray-500 text-xs sm:text-sm pl-2 sm:pl-3 py-1">
              <span>Last updated: Aug 25, 2025 | Status: ACTIVE</span>
            </div>
          </div>

          {/* Cloud Security Assessment */}
          <div className="mb-6 sm:mb-8 bg-gray-900 border border-gray-600 p-3 sm:p-6 rounded">
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-2 sm:mb-0 sm:mr-3" />
              <h3 className="text-sm sm:text-xl font-semibold text-yellow-400 break-words">
                is_this_for_you?.sh --career-readiness
              </h3>
            </div>
            <div className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-base">
              # Cloud security is one of the most in-demand skills in tech. 
              <br />
              #  With businesses shifting to the cloud, securing digital assets is no longer optional—it's a necessity.
              <br /># This could be one of the best decisions in your career this year.
            </div>

            {/* Skills Matrix */}
            <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4 rounded mt-3 sm:mt-4">
              <div className="text-green-400 text-xs sm:text-sm mb-2 sm:mb-3">
                $ cat skills_matrix.json
                <br />
                # What It Takes to Become a Cloud Security Expert
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start sm:items-center">
                  <Code className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
                  <span className="text-gray-300 text-xs sm:text-base">
                    Master the Fundamentals: Networking, Linux, Security Basics
                  </span>
                </div>
                <div className="flex items-start sm:items-center">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
                  <span className="text-gray-300 text-xs sm:text-base">
                    Cloud Platforms: Azure, AWS, GCP (choose one, master it)
                  </span>
                </div>
                <div className="flex items-start sm:items-center">
                  <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
                  <span className="text-gray-300 text-xs sm:text-base">
                    Master Security Tools
                  </span>
                </div>
                <div className="flex items-start sm:items-center">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
                  <span className="text-gray-300 text-xs sm:text-base">
                    Certifications: AZ-500, CISSP, CCSP, Security+
                  </span>
                </div>
                <div className="flex items-start sm:items-center">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
                  <span className="text-gray-300 text-xs sm:text-base">
                    Community: Engage, contribute, share knowledge
                  </span>
                </div>
              </div>
            </div>

            {/* External Resources */}
            <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
              <div className="text-blue-400 text-xs sm:text-sm">
                <a
                  href="https://www.nojones.net/posts/breaking-into-cloudsec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors break-all sm:break-normal"
                >
                  → breaking_into_cloudsec.md
                </a>
              </div>
              <div className="text-blue-400 text-xs sm:text-sm">
                <a
                  href="https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors break-all sm:break-normal"
                >
                  → cloud_security_breaches_2021.analysis
                </a>
              </div>
            </div>
          </div>

          {/* Next Steps Section */}
          <div className="mb-6 sm:mb-8 bg-gray-900 border border-gray-600 p-3 sm:p-6 rounded">
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-2 sm:mb-0 sm:mr-3" />
              <h4 className="text-sm sm:text-lg font-semibold text-yellow-400 break-words">
                ./next_steps.sh --action-required
              </h4>
            </div>
            <div className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-base">
              # Ready to start your cloud security career?
              <br /># secureCloudX is the best place
              <br /># In case you need one on one guidance, book a slot
              <br /># Join our weekly challenges and prepare for upcoming
              hackathons
            </div>
            <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4 rounded">
              <Link
                to={`/day${currentDay}`}
                className="text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-base break-all sm:break-normal"
              >
                → cd /challenges/week_{currentDay} && ./start.sh
              </Link>
            </div>
          </div>

          {/* Challenge Benefits */}
          <div className="mb-6 sm:mb-8">
            <div className="text-green-400 text-xs sm:text-sm mb-3 sm:mb-4">
              $ cat challenge_features.txt
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-300 mb-3 sm:mb-4">
              Why Use secureCloudX?
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <span className="text-green-400 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  ✓
                </span>
                <div>
                  <span className="text-gray-300 font-semibold text-xs sm:text-base">
                    Free & Open Source:
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-xs sm:text-base">
                    Complete access to all materials
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  ✓
                </span>
                <div>
                  <span className="text-gray-300 font-semibold text-xs sm:text-base">
                    Hands-On Learning:
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-xs sm:text-base">
                    Practical learning on both security engineering and pentesting
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  ✓
                </span>
                <div>
                  <span className="text-gray-300 font-semibold text-xs sm:text-base">
                    Critical Thinking:
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-xs sm:text-base">
                    Guided learning with intentional problem-solving gaps
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  ✓
                </span>
                <div>
                  <span className="text-gray-300 font-semibold text-xs sm:text-base">
                    Capstone Project:
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-xs sm:text-base">
                    Build portfolio-worthy security implementations
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  ✓
                </span>
                <div>
                  <span className="text-gray-300 font-semibold text-xs sm:text-base">
                    AI-Enhanced:
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-xs sm:text-base">
                    Specially designed prompts for accelerated learning
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-2 sm:mr-3 mt-1 text-sm sm:text-base">
                  ✓
                </span>
                <div>
                  <span className="text-gray-300 font-semibold text-xs sm:text-base">
                    Living Platform:
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-xs sm:text-base">
                    Regular updates aligned with industry standards
                  </span>
                </div>
              </div>
            </div>

            {/* Community Links */}
            <div className="mt-4 sm:mt-6 bg-gray-800 border border-gray-700 p-3 sm:p-4 rounded">
              <div className="text-cyan-400 text-xs sm:text-sm mb-2">
                $ cat community.links
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <a
                  href="https://x.com/securecloudX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm break-all sm:break-normal"
                >
                  → X.com/securecloudX
                </a>
                <a
                  href="https://chat.whatsapp.com/Llp1Z8uw8xP5NIByASUV7V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors text-xs sm:text-sm break-all sm:break-normal"
                >
                  → whatsapp_community.join()
                </a>
              </div>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mb-6 sm:mb-8 bg-gray-900 border border-gray-600 p-3 sm:p-6 rounded">
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-2 sm:mb-0 sm:mr-3" />
              <h2 className="text-sm sm:text-lg font-semibold text-yellow-400 break-words">
                ./check_prerequisites.sh
              </h2>
            </div>
            <div className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-base">
              # What you need to know/have...
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start sm:items-center">
                <span className="text-green-400 mr-2 sm:mr-3 text-xs sm:text-sm flex-shrink-0">
                  [REQUIRED]
                </span>
                <span className="text-gray-300 text-xs sm:text-base">
                  Basic Cloud Computing knowledge (Azure preferred)
                </span>
              </div>
              <div className="flex items-start sm:items-center">
                <span className="text-green-400 mr-2 sm:mr-3 text-xs sm:text-sm flex-shrink-0">
                  [REQUIRED]
                </span>
                <span className="text-gray-300 text-xs sm:text-base">
                  Azure Free Tier Account (recommended)
                </span>
              </div>
              <div className="flex items-start sm:items-center">
                <span className="text-yellow-400 mr-2 sm:mr-3 text-xs sm:text-sm flex-shrink-0">
                  [MINDSET]
                </span>
                <span className="text-gray-300 text-xs sm:text-base">
                  Willingness to experiment, break things, and learn
                </span>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="mb-6 sm:mb-8 bg-gray-900 border border-blue-600 p-3 sm:p-6 rounded">
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-2 sm:mb-0 sm:mr-3" />
              <h3 className="text-sm sm:text-lg font-semibold text-blue-400 break-words">
                ./subscribe.sh --updates --labs
              </h3>
            </div>
            <div className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-base">
              # Get notified about new security challenges and updates
            </div>
            <a
              href="https://forms.office.com/r/5yqb8Xw5GK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded 
                         font-mono transition-colors duration-300 border border-blue-500 text-xs sm:text-base"
            >
              → microsoft_forms.subscribe()
            </a>
          </div>

          {/* Get Started */}
          <div className="bg-gray-900 border border-green-600 p-3 sm:p-6 rounded">
            <div className="text-green-400 text-xs sm:text-sm mb-3 sm:mb-4">
              $ ./initialize_training.sh
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-300 mb-3 sm:mb-4">
              🚀 Start Your Journey
            </h2>
            <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4 rounded">
              {unlockedDays.includes(1) ? (
                <Link
                  to="/start"
                  className="text-green-400 hover:text-green-300 transition-colors font-mono text-xs sm:text-base break-all sm:break-normal"
                >
                  → cd /training/day0 && ./start_from_zero.sh
                </Link>
              ) : (
                <span className="text-gray-500 font-mono cursor-not-allowed text-xs sm:text-base break-all sm:break-normal">
                  → ./day1_iam.sh [LOCKED] # Complete Day 0 first
                </span>
              )}
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Home;
