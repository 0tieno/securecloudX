import { useNavigate } from "react-router-dom";
import { Terminal, ArrowLeft, Briefcase } from "lucide-react";

export default function Work() {
  const navigate = useNavigate();

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
                  I'm <span className="text-red-400">$!rr0n3y</span>
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
            <div className="text-green-400 text-sm font-mono mb-4">
              $ cat work_experience.txt
            </div>
          </div>

          {/* Work Experience List */}
          <div className="p-6 sm:p-8">
            <div className="space-y-6">
              {/* Program Associate */}
              <div className="border-l-4 border-green-400 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    <span className="text-green-400">Program Associate</span>
                    <span className="text-gray-400">, Positive Sum Africa</span>
                  </h3>
                  <span className="text-gray-500 text-sm">(Oct, 2024)</span>
                </div>
              </div>

              {/* Intern */}
              <div className="border-l-4 border-blue-400 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    <span className="text-blue-400">Intern</span>
                    <span className="text-gray-400">, KamiLimu</span>
                  </h3>
                  <span className="text-gray-500 text-sm">(Feb, 2024)</span>
                </div>
              </div>

              {/* Mobile Security Fellowship */}
              <div className="border-l-4 border-purple-400 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    <span className="text-purple-400">
                      Mobile Security Fellowship
                    </span>
                    <span className="text-gray-400">, Mobile Hacking Lab</span>
                  </h3>
                  <span className="text-gray-500 text-sm">
                    (Jul - Nov, 2024)
                  </span>
                </div>
              </div>

              {/* Junior Security Analyst */}
              <div className="border-l-4 border-yellow-400 pl-4">
                <div className="flex items-start mb-2">
                  <span className="text-red-400 text-lg mr-2">▶</span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                      <h3 className="text-lg font-semibold">
                        <span className="text-yellow-400">
                          Junior Security Analyst
                        </span>
                        <span className="text-gray-400">
                          , Yelbridges Limited
                        </span>
                      </h3>
                      <span className="text-gray-500 text-sm">
                        (May - Aug, 2023)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Co-Founder and Club Lead */}
              <div className="border-l-4 border-cyan-400 pl-4">
                <div className="flex items-start mb-2">
                  <span className="text-red-400 text-lg mr-2">▶</span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                      <h3 className="text-lg font-semibold">
                        <span className="text-cyan-400">
                          Co-Founder and Club Lead
                        </span>
                        <span className="text-gray-400">
                          , Cyber Security Club of Kimathi
                        </span>
                      </h3>
                      <span className="text-gray-500 text-sm">
                        (2022 - '23)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Peer Mentor */}
              <div className="border-l-4 border-orange-400 pl-4">
                <div className="flex items-start mb-2">
                  <span className="text-red-400 text-lg mr-2">▶</span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                      <h3 className="text-lg font-semibold">
                        <span className="text-orange-400">Peer Mentor</span>
                        <span className="text-gray-400">, KamiLimu</span>
                      </h3>
                      <span className="text-gray-500 text-sm">
                        (2022 - '23)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
