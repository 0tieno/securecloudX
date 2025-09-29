import { useNavigate } from "react-router-dom";
import {
  Terminal,
  ArrowLeft,
  Briefcase,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Work() {
  const navigate = useNavigate();
  const [expandedRoles, setExpandedRoles] = useState({});

  const toggleRole = (roleId) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [roleId]: !prev[roleId],
    }));
  };

  const workExperience = [
    {
      id: "founder",
      title: "Founder",
      company: "Founder & CEO at X",
      period: "(April, 2025 - present)",
      color: "blue-400",
      contributions: [
        "Experimenting and Developing lots of user-centric cloud native software solutions for a probable company X. I've built 3 other applications currently in the hand of users. When things finally picks up, I'll be ready to update this. Or if they don't, I'll pivot.",
        
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Navbar Header */}
      <nav className="bg-gray-900 border-b border-gray-700 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left side - Logo */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mr-2 sm:mr-3" />
                <h1
                  className="text-xl sm:text-2xl font-bold text-gray-300 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  I'm <span className="text-red-400">$!rr0nn3y</span>
                </h1>
              </div>
              <div className="ml-8 sm:ml-11 hidden sm:block">
                <p className="text-gray-500 text-sm">
                  Developer | Jnr Pentester(cloud & web)
                </p>
                <div className="text-xs text-gray-600 mt-1">
                  // my professional journey and work experience
                </div>
              </div>
            </div>

            {/* Right side - Navigation Links */}
            <div className="flex items-center justify-start sm:justify-end space-x-4 sm:space-x-6 ml-8 sm:ml-0">
              <button className="text-red-400 text-xs sm:text-sm font-mono cursor-default">
                ./work
              </button>
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono"
                onClick={() => navigate("/story")}
              >
                ./story
              </button>
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono"
                onClick={() => navigate("/about")}
              >
                ./about
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Work Header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Briefcase className="w-8 h-8 text-red-400 mr-3" />
              <h1 className="text-3xl font-bold text-gray-300">Work</h1>
                      </div>
                      <div className="text-gray-400">
                          I have been fortunate to work with some amazing teams on various amazing products. And some of our.[my] work are currently used by thousands. Just allow me to list one that gives me sleepless nights...
                      </div>
          </div>

          {/* Work Experience List */}
          <div className="p-6 sm:p-8">
            <div className="space-y-6">
              {workExperience.map((role) => (
                <div
                  key={role.id}
                  className={`border-l-4 border-${role.color} pl-4`}
                >
                  <div
                    className="cursor-pointer hover:bg-gray-800 hover:bg-opacity-50 p-3 -ml-3 rounded transition-colors"
                    onClick={() => toggleRole(role.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col sm:flex-row sm:items-baseline flex-1">
                        <h3 className="text-lg font-semibold">
                          <span className={`text-${role.color}`}>
                            {role.title}
                          </span>
                          <span className="text-gray-400">
                            , {role.company}
                          </span>
                        </h3>
                        <span className="text-gray-500 text-sm sm:ml-4">
                          {role.period}
                        </span>
                      </div>
                      <div className="ml-4">
                        {expandedRoles[role.id] ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {expandedRoles[role.id] && (
                    <div className="mt-4 ml-3">
                      <div className="text-gray-500 text-sm font-mono mb-2">
                        $ cat {role.id.replace("-", "_")}_contributions.txt
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {role.contributions.map((contribution, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-400 mr-2 flex-shrink-0">
                                ▸
                              </span>
                              <span className="text-gray-300 text-sm leading-relaxed">
                                {contribution}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Terminal prompt */}
            <div className="mt-8 pt-4 border-t border-gray-600">
              <div className="text-green-400 text-sm font-mono">
                $ echo "Building secure systems, one role at a time"
              </div>
              <div className="text-gray-400 text-sm font-mono mt-1">
                Looking for speaker and jobs in SWE, DevOps & Cloud Security
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
