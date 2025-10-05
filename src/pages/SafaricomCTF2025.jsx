import { useNavigate } from "react-router-dom";
import {
  Terminal,
  Shield,
  ArrowLeft,
  Flag,
  Clock,
  Trophy,
  ExternalLink,
} from "lucide-react";

export default function SafaricomCTF2025() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Navbar Header */}
      <nav className="bg-gray-900 border-b border-gray-700 px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left side - Logo */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mr-2 sm:mr-3" />
                <h1
                  className="text-xl sm:text-2xl font-bold text-gray-300 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  secure<span className="text-red-400">cloud</span>X
                </h1>
              </div>
              <div className="ml-8 sm:ml-11 hidden lg:block">
                <p className="text-gray-500 text-sm">
                  // Safaricom CTF 2025 - Challenge Writeups
                </p>
                <div className="text-xs text-gray-600 mt-1">
                  root@securecloudx:~# cd /ctf/safaricom2025/
                </div>
              </div>
            </div>

            {/* Right side - Navigation Links */}
            <div className="flex items-center justify-start sm:justify-end space-x-3 sm:space-x-4 ml-8 sm:ml-0">
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono whitespace-nowrap"
                onClick={() => navigate("/get-started")}
              >
                ../get_started
              </button>
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono whitespace-nowrap"
                onClick={() => navigate("/opensource-blog")}
              >
                ./blog
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Back Navigation */}
        <div className="mb-6 sm:mb-8">
          <button
            className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 font-mono hover:bg-gray-700 hover:border-gray-600 transition-colors group text-sm sm:text-base"
            onClick={() => navigate("/get-started")}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">cd ../</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
            <div className="flex items-center">
              <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400 mr-2 sm:mr-3" />
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-300">
                Safaricom CTF 2025
              </h1>
            </div>
            <span className="ml-0 sm:ml-4 px-3 py-1 bg-green-600 text-white text-sm font-mono rounded self-start">
              Oct 6, 2025
            </span>
          </div>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Challenge writeups from the Safaricom Capture The Flag competition
            for our team 404FlagNotFound. This was my first CTF competition
            experience and I learned a lot! We captured 13 flags and we were
            ranked 49/174 teams.
          </p>
        </div>

        {/* Challenge Writeups */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mb-4 sm:mb-6 flex items-center">
            <Terminal className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400 mr-2" />
            ./writeups
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {/* Real IP Heist Challenge */}
            <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 rounded hover:border-cyan-500 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2 sm:gap-0">
                <h3 className="text-lg font-semibold text-cyan-400">
                  Real IP Heist
                </h3>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs font-mono rounded">
                    web-exploitation
                  </span>
                  <span className="text-green-400 text-sm font-mono">
                    50 pts
                  </span>
                </div>
              </div>

              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Bypassed admin authentication by spoofing X-Forwarded-For
                headers to appear as localhost requests.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div className="text-xs text-gray-500 order-2 sm:order-1">
                  Flag:{" "}
                  <code className="text-yellow-400 break-all">
                    safctf{"{c0f1ec1fccb2de4a03031037251f21}"}
                  </code>
                </div>
                <button
                  onClick={() => navigate("/ctf/safaricom-2025/real-ip-heist")}
                  className="inline-flex items-center px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-mono rounded transition-colors self-start sm:self-auto order-1 sm:order-2"
                >
                  Read More →
                </button>
              </div>
            </div>

            {/* Second Challenge Placeholder */}
            <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 rounded border-dashed opacity-60">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2 sm:gap-0">
                <h3 className="text-lg font-semibold text-gray-500">
                  Challenge #2
                </h3>
                <span className="text-gray-500 text-sm font-mono self-start sm:self-auto">
                  Coming soon
                </span>
              </div>

              <p className="text-gray-600 text-sm">
                Second writeup will be added here...
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 sm:pt-8 border-t border-gray-700">
          <button
            onClick={() => navigate("/get-started")}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            ← Back to CTF List
          </button>
          <button
            onClick={() => navigate("/opensource-blog")}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            View More Writeups →
          </button>
        </div>
      </div>
    </div>
  );
}
