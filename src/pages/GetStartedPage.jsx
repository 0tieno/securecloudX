import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Terminal,
  Shield,
  Code,
  BookOpen,
  ArrowLeft,
  Lock,
} from "lucide-react";

export default function GetStartedPage() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Back Navigation Button */}
        <div className="w-full max-w-md mb-8 flex justify-between items-center">
          <button
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 font-mono hover:bg-gray-700 hover:border-gray-600 transition-colors group"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            cd ../
          </button>

          {/* User profile */}
          {user && (
            <div className="flex items-center gap-2">
              {user.user_metadata?.avatar_url && (
                <img
                  src={user.user_metadata.avatar_url}
                  alt={user.user_metadata?.user_name ?? "avatar"}
                  className="w-7 h-7 rounded-full border border-gray-600"
                />
              )}
              <span className="text-xs text-gray-400 font-mono">
                {user.user_metadata?.user_name ?? user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="text-xs text-red-400 hover:text-red-300 font-mono border border-red-500/40 hover:border-red-400 px-2 py-1 transition-colors"
              >
                logout
              </button>
            </div>
          )}
        </div>

        {/* Information Note */}
        <div className="mb-8 max-w-md w-full  p-4 sm:p-6 rounded">
          <div className="text-blue-400 text-xs sm:text-sm mb-2">
            $ cat important_note.txt
          </div>
          <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="text-yellow-400">[INFO]</span> The work on
            engineering, pentesting, or blogs assume{" "}
            <span className="text-green-400">
              no, or little, prior knowledge
            </span>{" "}
            of the subject matter and therefore should be useful{" "}
            <span className="text-cyan-400">
              regardless of your level of experience
            </span>
            .
          </div>
        </div>

        {/* Path Selection */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          {/* Engineering Path */}
          <button
            className="bg-gray-800 border border-gray-700 hover:border-blue-500 text-left p-6 transition-all duration-200 group"
            onClick={() => navigate("/home")}
          >
            <div className="flex items-start">
              <Code className="w-6 h-6 text-blue-400 mr-4 mt-1 group-hover:text-blue-300" />
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2 group-hover:text-blue-300">
                  ./cloud_security_engineering
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Cloud security engineering, secure development, and DevSecOps
                  practices
                </p>
                <div className="mt-3 text-xs text-blue-400 font-mono">
                  cd /engineering && ./start.sh
                </div>
              </div>
            </div>
          </button>

          {/* Pentesting Labs Path */}
          <button
            className="bg-gray-800 border border-gray-700 hover:border-red-500 text-left p-6 transition-all duration-200 group"
            onClick={() => navigate("/pentesting-labs")}
          >
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-red-400 mr-4 mt-1 group-hover:text-red-300" />
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2 group-hover:text-red-300">
                  ./cloud_pentesting_labs
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Hands-on penetration testing labs and security exercises
                </p>
                <div className="mt-3 text-xs text-red-400 font-mono">
                  cd /labs && ./exploit.sh
                </div>
              </div>
            </div>
          </button>

          {/* OpenSource Blogs Path */}
          <button
            className="bg-gray-800 border border-gray-700 hover:border-green-500 text-left p-6 transition-all duration-200 group"
            onClick={() => navigate("/opensource-blog")}
          >
            <div className="flex items-start">
              <BookOpen className="w-6 h-6 text-green-400 mr-4 mt-1 group-hover:text-green-300" />
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2 group-hover:text-green-300">
                  ./opensource_blog
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Security research, tutorials, and open source contributions
                </p>
                <div className="mt-3 text-xs text-green-400 font-mono">
                  cd /blog && cat *.md
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Past Hackathons Section */}
        <div className="mt-12 w-full max-w-md">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-300 mb-2 flex items-center">
              <Lock className="w-5 h-5 text-yellow-400 mr-2" />
              ./past_hackathons
            </h2>
            <p className="text-gray-500 text-sm font-mono">
              # Previous security challenges, competitions, and hacktivities
            </p>
          </div>

          <div
            className="bg-gray-800 border border-gray-700 hover:border-yellow-500 text-left p-6 transition-all duration-200 group cursor-pointer"
            onClick={() => navigate("/forgotten-secret-lab")}
          >
            <div className="flex items-start">
              <Terminal className="w-6 h-6 text-yellow-400 mr-4 mt-1 group-hover:text-yellow-300" />
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2 group-hover:text-yellow-300">
                  ./forgotten_secret_lab
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Git forensics challenge: Hunt leaked secrets in commit history
                  and exploit live APIs
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-gray-700 text-yellow-400 text-xs font-mono border border-gray-600">
                    git-forensics
                  </span>
                  <span className="px-2 py-1 bg-gray-700 text-red-400 text-xs font-mono border border-gray-600">
                    api-exploitation
                  </span>
                  <span className="px-2 py-1 bg-gray-700 text-blue-400 text-xs font-mono border border-gray-600">
                    secret-detection
                  </span>
                </div>
                <div className="text-xs text-yellow-400 font-mono">
                  cd /hackathons && ./forgotten_secret.sh
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Status: <span className="text-green-400">ACTIVE</span> |
                  Leaderboard:{" "}
                  <span className="text-yellow-400">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTF Writeups Section */}
        <div className="mt-12 w-full max-w-md">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-300 mb-2 flex items-center">
              <Shield className="w-5 h-5 text-cyan-400 mr-2" />
              ./ctf_writeups
            </h2>
            <p className="text-gray-500 text-sm font-mono">
              # Capture The Flag competitions and challenge writeups
            </p>
          </div>

          <div className="space-y-4">
            {/* Safaricom CTF - October 2025 */}
            <div
              className="bg-gray-800 border border-gray-700 hover:border-cyan-500 text-left p-6 transition-all duration-200 group cursor-pointer"
              onClick={() => navigate("/ctf/safaricom-2025")}
            >
              <div className="flex items-start">
                <Terminal className="w-6 h-6 text-cyan-400 mr-4 mt-1 group-hover:text-cyan-300" />
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-300 group-hover:text-cyan-300">
                      ./safaricom_ctf_2025
                    </h3>
                    <span className="text-xs text-green-400 px-2 py-1 bg-gray-700 border border-gray-600 font-mono">
                      FRESH
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    Safaricom Capture The Flag competition - October 4-6, 2025.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs font-mono border border-gray-600">
                      web-exploitation
                    </span>
                    <span className="px-2 py-1 bg-gray-700 text-purple-400 text-xs font-mono border border-gray-600">
                      cryptography
                    </span>
                    <span className="px-2 py-1 bg-gray-700 text-green-400 text-xs font-mono border border-gray-600">
                      forensics
                    </span>
                    <span className="px-2 py-1 bg-gray-700 text-orange-400 text-xs font-mono border border-gray-600">
                      network-analysis
                    </span>
                  </div>
                  <div className="text-xs text-cyan-400 font-mono mb-2">
                    cd /ctf/safaricom2025 && cat writeup.md
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                      Date: <span className="text-cyan-400">Oct 6, 2025</span>
                    </span>
                    <span>
                      Writeups:{" "}
                      <span className="text-yellow-400">2 Available</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder for future CTFs */}
            <div className="bg-gray-800 border border-gray-700 border-dashed text-left p-6 opacity-60">
              <div className="flex items-start">
                <Terminal className="w-6 h-6 text-gray-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-500 mb-2">
                    ./upcoming_ctfs
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    More CTF writeups and competition results coming soon...
                  </p>
                  <div className="text-xs text-gray-600 font-mono">
                    watch -n 1 "find /ctf -name '*.md' | wc -l"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-6 mt-8 font-mono">
        <div className="flex flex-col lg:flex-row items-start justify-center w-full max-w-6xl mx-auto px-4 gap-6 lg:gap-8">
          {/* Brand & Contact */}
          <div className="flex flex-col items-start w-full lg:w-auto text-left">
            <div className="flex items-center mb-2">
              <Terminal className="w-5 h-5 text-red-400 mr-2" />
              <h2 className="text-lg font-bold text-gray-300">
                secure<span className="text-red-400">cloud</span>X
              </h2>
            </div>
            <div className="text-gray-500 text-xs mb-3">
              // 2 paths: cloud security engineering and cloud penetration testing
            </div>
            <div className="text-gray-500 text-xs">
              securecloudX.guide - Some rights reserved!
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start w-full lg:w-auto text-left">
            <div className="text-gray-400 text-xs mb-2">$ ls -la ./links</div>
            <div className="space-y-1">
              <button
                className="text-gray-400 hover:text-red-400 transition-colors text-xs block"
                onClick={() => navigate("/terms-of-service")}
              >
                → ./terms_of_use
              </button>
              <button
                className="text-gray-400 hover:text-red-400 transition-colors text-xs block"
                onClick={() => navigate("/pricing")}
              >
                → ./pricing
              </button>
              <button
                className="text-gray-400 hover:text-red-400 transition-colors text-xs block"
                onClick={() => navigate("/changelog")}
              >
                → ./changelog
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
