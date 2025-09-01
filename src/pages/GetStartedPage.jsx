import React from "react";
import { useNavigate } from "react-router-dom";
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
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <Terminal className="w-8 h-8 text-red-400 mr-3" />
            <h1 className="text-4xl font-bold text-gray-300">
              secure<span className="text-red-400">cloud</span>X
            </h1>
          </div>
          <p className="text-gray-500 max-w-2xl">
            // Choose your learning path in cloud security and penetration
            testing
          </p>
          <div className="mt-4 text-sm text-gray-600">
            root@securecloudx:~# ./choose_path.sh
          </div>
        </div>

        {/* Back Navigation Button */}
        <div className="w-full max-w-md mb-8 flex justify-start">
          <button
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 font-mono hover:bg-gray-700 hover:border-gray-600 transition-colors group"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            cd ../
          </button>
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

        {/* Terminal Style Info */}
        <div className="mt-12 max-w-md text-center">
          <div className="bg-gray-800 border border-gray-700 p-4 text-left">
            <div className="text-green-400 text-sm mb-2">$ whoami</div>
            <div className="text-gray-400 text-sm mb-2">
              cloud_security_guru
            </div>
            <div className="text-green-400 text-sm mb-2">$ echo $MISSION</div>
            <div className="text-gray-400 text-sm">
              "Build secure systems. Share knowledge. Protect digital
              infrastructure."
            </div>
          </div>
        </div>
      </div>

      {/* Footer - now flows with content instead of fixed */}
      <footer className="bg-gray-900 border-t border-gray-700 py-6 mt-8 font-mono">
        <div className="flex flex-col lg:flex-row items-start justify-center w-full max-w-6xl mx-auto px-4 gap-6 lg:gap-8">
          <div className="flex flex-col items-start w-full lg:w-auto text-left">
            <div className="font-semibold text-gray-300 text-lg mb-1">
              Master cloud security. Build secure systems.
            </div>
            <div className="text-red-400 mb-2">securecloudX</div>
            <a
              href="mailto:conradakunga@gmail.com"
              className="text-red-400 hover:text-red-300 transition-colors text-sm"
            >
              securecloudx.learn@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-start w-full lg:w-auto text-left">
            <div className="flex items-center mb-2">
              <span className="mr-2 text-red-400">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline-block"
                >
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.349-1.088.635-1.34-2.221-.253-4.555-1.112-4.555-4.945 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C17.138 18.162 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </span>
              <a
                href="http://github.com/securecloudx"
                className="text-red-400 hover:text-red-300 transition-colors text-sm"
              >
                securecloudx
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-red-400">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline-block"
                >
                  <path d="M20 3.924c-.735.326-1.524.547-2.353.646a4.118 4.118 0 001.804-2.27c-.793.47-1.672.81-2.606.995A4.107 4.107 0 009.847 7.03c-3.417-.172-6.444-1.81-8.468-4.297a4.07 4.07 0 00-.555 2.067c0 1.426.726 2.683 1.83 3.422a4.093 4.093 0 01-1.86-.513v.052c0 1.993 1.417 3.656 3.3 4.036-.345.093-.708.143-1.083.143-.265 0-.52-.026-.77-.073.52 1.623 2.032 2.805 3.827 2.836A8.233 8.233 0 010 17.542a11.616 11.616 0 006.29 1.844c7.547 0 11.675-6.155 11.675-11.495 0-.175-.004-.349-.012-.522A8.18 8.18 0 0020 3.924z" />
                </svg>
              </span>
              <a
                href="https://x.com/securecloudX"
                className="text-red-400 hover:text-red-300 transition-colors text-sm"
              >
                securecloudX
              </a>
            </div>
          </div>

          <div className="text-gray-400 text-base w-full lg:flex-1 text-left lg:text-left">
            securecloudX is built on the strong belief that with the right
            discipline, anyone can master cloud security through practical,
            hands-on learning.
          </div>
        </div>
      </footer>
    </div>
  );
}
