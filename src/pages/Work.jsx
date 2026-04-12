import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Briefcase,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import PageNav from "../components/PageNav";
import { workExperience } from "../data/workData";

export default function Work() {
  const navigate = useNavigate();
  const [expandedRoles, setExpandedRoles] = useState({});

  const toggleRole = (roleId) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [roleId]: !prev[roleId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <PageNav
        variant="personal"
        subtitle="Developer | Jnr Pentester(cloud &amp; web)"
        command="// my professional journey and work experience"
        maxWidth="4xl"
        links={[
          { label: "./work", active: true },
          { label: "./story", path: "/story" },
          { label: "./about", path: "/about" },
        ]}
      />

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
                $ echo "current status"
              </div>
              <div className="text-gray-400 text-sm font-mono mt-1">
                Intern @ Safaricom PLC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
