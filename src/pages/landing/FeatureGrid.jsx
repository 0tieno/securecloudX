import React from "react";
import { Shield, Target, Users, BookOpen, Zap, Terminal } from "lucide-react";

const features = [
  {
    title: "Penetration Testing Labs",
    description:
      "Hands-on labs to master real-world attack techniques and methodologies.",
    icon: <Shield className="w-8 h-8 mx-auto mb-3 text-red-400" />,
    command: "./pentest_lab.sh",
  },
  {
    title: "Security Challenges",
    description:
      "CTF-style challenges and vulnerability assessments to sharpen your skills.",
    icon: <Target className="w-8 h-8 mx-auto mb-3 text-yellow-400" />,
    command: "./challenge.py",
  },
  {
    title: "Attack Simulation",
    description: "Simulate real attack scenarios in secure cloud environments.",
    icon: <Zap className="w-8 h-8 mx-auto mb-3 text-blue-400" />,
    command: "./simulate_attack.sh",
  },
  {
    title: "Security Arsenal",
    description:
      "Comprehensive collection of pentesting tools and exploitation frameworks.",
    icon: <Terminal className="w-8 h-8 mx-auto mb-3 text-green-400" />,
    command: "./load_arsenal.sh",
  },
  {
    title: "Threat Intelligence",
    description:
      "Stay updated with latest threats, vulnerabilities, and security research.",
    icon: <BookOpen className="w-8 h-8 mx-auto mb-3 text-purple-400" />,
    command: "./threat_intel.py",
  },
  {
    title: "Security Community",
    description:
      "Connect with ethical hackers, share exploits, and collaborate on research.",
    icon: <Users className="w-8 h-8 mx-auto mb-3 text-cyan-400" />,
    command: "./join_community.sh",
  },
];

export default function FeatureGrid() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-300 mb-4 font-mono">
          // Security Arsenal
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Master cloud security through hands-on penetration testing,
          vulnerability research, and ethical hacking methodologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-800 border border-gray-700 hover:border-gray-600 p-6 transition-all duration-200 group cursor-pointer font-mono"
          >
            {/* Terminal header */}
            <div className="flex items-center space-x-2 text-gray-500 text-xs mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="ml-2">terminal</span>
            </div>

            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-lg font-semibold mb-2 text-gray-300 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Terminal command */}
              <div className="bg-gray-900 border border-gray-700 p-2 w-full">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-400">{feature.command}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
