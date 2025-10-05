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
                  secure<span className="text-red-400">cloud</span>X
                </h1>
              </div>
              <div className="ml-8 sm:ml-11 hidden sm:block">
                <p className="text-gray-500 text-sm">
                  // Safaricom CTF 2025 - Challenge Writeups
                </p>
                <div className="text-xs text-gray-600 mt-1">
                  root@securecloudx:~# cd /ctf/safaricom2025/
                </div>
              </div>
            </div>

            {/* Right side - Navigation Links */}
            <div className="flex items-center justify-start sm:justify-end space-x-4 sm:space-x-6 ml-8 sm:ml-0">
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono"
                onClick={() => navigate("/get-started")}
              >
                ../get_started
              </button>
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono"
                onClick={() => navigate("/opensource-blog")}
              >
                ./blog
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <button
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 font-mono hover:bg-gray-700 hover:border-gray-600 transition-colors group"
            onClick={() => navigate("/get-started")}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            cd ../
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-300">
              Safaricom CTF 2025
            </h1>
            <span className="ml-4 px-3 py-1 bg-green-600 text-white text-sm font-mono rounded">
              FRESH
            </span>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-gray-400">Date:</span>
                <span className="text-cyan-400 ml-2">October 6, 2025</span>
              </div>
              <div className="flex items-center">
                <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-gray-400">Challenges Solved:</span>
                <span className="text-yellow-400 ml-2">2</span>
              </div>
              <div className="flex items-center">
                <Flag className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-400">Points Earned:</span>
                <span className="text-green-400 ml-2">100+</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTF Overview */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <Terminal className="w-5 h-5 text-cyan-400 mr-2" />
            ./competition_overview
          </h2>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <p className="text-gray-400 leading-relaxed mb-4">
              Participated in the Safaricom Capture The Flag competition,
              tackling various cybersecurity challenges across multiple domains
              including web exploitation, cryptography, forensics, and network
              analysis.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 text-cyan-400 text-sm font-mono border border-gray-600 rounded">
                web-exploitation
              </span>
              <span className="px-3 py-1 bg-gray-700 text-purple-400 text-sm font-mono border border-gray-600 rounded">
                cryptography
              </span>
              <span className="px-3 py-1 bg-gray-700 text-green-400 text-sm font-mono border border-gray-600 rounded">
                forensics
              </span>
              <span className="px-3 py-1 bg-gray-700 text-orange-400 text-sm font-mono border border-gray-600 rounded">
                network-analysis
              </span>
            </div>
          </div>
        </div>

        {/* Challenge Writeups */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-300 mb-6 flex items-center">
            <Shield className="w-5 h-5 text-cyan-400 mr-2" />
            ./challenge_writeups
          </h2>

          <div className="space-y-6">
            {/* Real IP Heist Challenge */}
            <div className="bg-gray-800 border border-gray-700 rounded overflow-hidden">
              <div className="bg-gray-700 px-6 py-3 border-b border-gray-600">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    Real IP Heist
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="px-2 py-1 bg-gray-600 text-cyan-400 text-xs font-mono rounded">
                      web-exploitation
                    </span>
                    <span className="text-green-400 text-sm font-mono">
                      50 points
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  Exploited server-side trust in IP-related headers
                  (X-Forwarded-For) to bypass admin authentication by spoofing
                  internal/localhost addresses.
                </p>

                <div className="bg-gray-900 border border-gray-600 p-4 rounded mb-4">
                  <div className="text-green-400 text-sm mb-2">
                    $ cat target_info.txt
                  </div>
                  <div className="text-gray-300 text-sm font-mono">
                    Target: http://54.72.82.22:8085/
                    <br />
                    Flag: safctf{"{c0f1ec1fccb2de4a03031037251f21}"}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-400 w-20">Tools:</span>
                    <span className="text-gray-300">
                      curl, basic HTTP header manipulation
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-400 w-20">Method:</span>
                    <span className="text-gray-300">
                      IP header spoofing, admin panel access
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-400 w-20">Status:</span>
                    <span className="text-green-400">✓ SOLVED</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/ctf/safaricom-2025/real-ip-heist")}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-mono rounded transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Writeup
                </button>
              </div>
            </div>

            {/* Second Challenge Placeholder */}
            <div className="bg-gray-800 border border-gray-700 rounded overflow-hidden">
              <div className="bg-gray-700 px-6 py-3 border-b border-gray-600">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    Challenge #2
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="px-2 py-1 bg-gray-600 text-purple-400 text-xs font-mono rounded">
                      category-tbd
                    </span>
                    <span className="text-green-400 text-sm font-mono">
                      XX points
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  Details of your second challenge writeup will be added here...
                </p>

                <div className="bg-gray-900 border border-gray-600 p-4 rounded mb-4">
                  <div className="text-green-400 text-sm mb-2">
                    $ cat challenge2_info.txt
                  </div>
                  <div className="text-gray-300 text-sm font-mono">
                    Target: TBD
                    <br />
                    Flag: TBD
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-400 w-20">Tools:</span>
                    <span className="text-gray-300">TBD</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-400 w-20">Method:</span>
                    <span className="text-gray-300">TBD</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-400 w-20">Status:</span>
                    <span className="text-green-400">✓ SOLVED</span>
                  </div>
                </div>

                <button className="mt-4 inline-flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-mono rounded transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Writeup
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Output Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <Terminal className="w-5 h-5 text-green-400 mr-2" />
            ./terminal_session
          </h2>
          <div className="bg-black border border-gray-600 p-4 rounded font-mono text-sm overflow-x-auto">
            <div className="text-green-400">
              root@securecloudx:~/ctf/safaricom2025#
            </div>
            <div className="text-gray-300 mt-2">
              <span className="text-cyan-400">$</span> ls -la writeups/
              <br />
              total 2<br />
              -rw-r--r-- 1 hacker hacker 4096 Oct 6 23:32 real-ip-heist.md
              <br />
              -rw-r--r-- 1 hacker hacker 3847 Oct 6 23:45 challenge2.md
              <br />
              <br />
              <span className="text-cyan-400">$</span> wc -l writeups/*.md
              <br />
              <span className="text-yellow-400"> 127</span>{" "}
              writeups/real-ip-heist.md
              <br />
              <span className="text-yellow-400"> 98</span>{" "}
              writeups/challenge2.md
              <br />
              <span className="text-yellow-400"> 225</span> total
              <br />
              <br />
              <span className="text-cyan-400">$</span> echo "CTF session
              complete!"
              <br />
              <span className="text-green-400">CTF session complete!</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-700">
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
