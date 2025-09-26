import { useNavigate, Link } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Navbar Header */}
      <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <Terminal className="w-8 h-8 text-red-400 mr-3" />
              <h1
                className="text-2xl font-bold text-gray-300 cursor-pointer"
                onClick={() => navigate("/")}
              >
                I'm <span className="text-red-400">ronney</span>
              </h1>
            </div>
            <div className="ml-11">
              <p className="text-gray-500 text-sm">
                Developer | Jnr Pentester
              </p>
              <div className="text-xs text-gray-600 mt-1">
                Here is a little bit about myself...
              </div>
            </div>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex items-center space-x-6">
            <button className="text-red-400 text-sm font-mono cursor-default">
              ./pricing
            </button>
            <button
              className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm font-mono"
              onClick={() => navigate("/changelog")}
            >
              ./changelog
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center px-4 py-12">

        <div className="w-full flex flex-col items-center">
         {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-6 mt-8 font-mono">
        <div className="flex flex-col lg:flex-row items-start justify-center w-full max-w-6xl mx-auto px-4 gap-6 lg:gap-8">
          <div className="flex flex-col items-start w-full lg:w-auto text-left">
            <div className="font-semibold text-gray-300 text-lg mb-1">
              Ronney Otieno - Developer | Jnr Pentester.
            </div>            
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
                href="https://github.com/0tieno"
                className="text-red-400 hover:text-red-300 transition-colors text-sm"
              >
                0tieno
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://x.com/ron_otieno"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.3 2H22L14.8 10.6 23 22h-5l-5.7-7.9L6.3 22H2l8.7-9.6L2.3 2h5.2l5.2 7.5L18.3 2ZM17.2 20h1.6l-9.7-14h-1.7l9.8 14Z" />
                </svg>
              </a>
              <a
                href="https://x.com/securecloudX"
                className="text-red-400 hover:text-red-300 transition-colors text-sm pl-2"
              >
                ron_otieno
              </a>
            </div>
          </div>

          <div className="text-gray-400 text-base w-full lg:flex-1 text-left lg:text-left">
            If I do but one thing today, may I be human sunshine for someone.
          </div>
        </div>
      </footer>
        </div>
      </div>
    </div>
  );
}
