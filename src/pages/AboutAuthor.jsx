import { useNavigate, Link } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";

export default function AboutAuthor() {
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
                I'm <span className="text-red-400">$!rr0n3y</span>
              </h1>
            </div>
            <div className="ml-11">
              <p className="text-gray-500 text-sm">
                Developer | Jnr Pentester(cloud & web)
              </p>
              <div className="text-xs text-gray-600 mt-1">
                Here is a little bit about myself...
              </div>
            </div>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex items-center space-x-6">
            <button
              className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm font-mono"
              onClick={() => navigate("/pricing")}
            >
              ./pricing
            </button>
            <button
              className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm font-mono"
              onClick={() => navigate("/changelog")}
            >
              ./changelog
            </button>
            <button className="text-red-400 text-sm font-mono cursor-default">
              ./about
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center px-4 py-12">
        {/* Back Navigation Button */}
        <div className="w-full max-w-4xl mb-8 flex justify-start">
          <button
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 font-mono hover:bg-gray-700 hover:border-gray-600 transition-colors group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            cd ../
          </button>
        </div>

        {/* Profile Section */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gray-700 border-4 border-red-400 overflow-hidden">
                  <img
                    src="/images/ron.jpg"
                    alt="Ronney Otieno"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-2xl font-bold text-white">
                    RO
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-300 mb-2">
                  I'm ronney | room_thinker
                </h1>
                <p className="text-gray-400 text-lg mb-6">
                  I innovate, and get things done! that's the story of my life.
                </p>

                {/* Quote */}
                <div className="border-l-4 border-red-400 pl-6 mb-6">
                  <blockquote className="text-xl text-gray-300 italic">
                    "If I do but one thing today, may I be human sunshine for
                    someone."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="p-8 mb-8">
            <div className="text-start max-w-3xl mx-auto">
              <div className="text-green-400 text-sm mb-4 font-mono">
                $ cat about_ronney.txt
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a <span className="text-yellow-400">learner</span> and I
                love <span className="text-blue-400">building things</span> and{" "}
                <span className="text-red-400">hacking them</span> to prove
                security. And ultimately,{" "}
                <span className="text-green-400">I get things done!</span>
              </p>

              <div className="border-t border-gray-700 pt-6">
                <p className="text-gray-400 text-sm mb-2">More about me:</p>
                <a
                  href="https://www.ronneyotieno.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-mono"
                >
                  www.ronneyotieno.me
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          {/* Footer */}
          <footer className="bg-gray-900 border-t border-gray-700 py-8 mt-12 font-mono">
            <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 gap-8">
              {/* Author Info */}
              <div className="text-center">
                <div className="font-semibold text-gray-300 text-xl mb-2">
                  Ronney Otieno
                </div>
                <div className="text-gray-400 text-sm mb-4">
                  Developer | Junior Penetration Tester | Cloud Security
                  Enthusiast
                </div>
                <div className="text-gray-500 text-sm italic max-w-md">
                  "If I do but one thing today, may I be human sunshine for
                  someone."
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-8">
                {/* GitHub */}
                <div className="flex items-center gap-2">
                  <span className="text-red-400">
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    0tieno
                  </a>
                </div>

                {/* Twitter/X */}
                <div className="flex items-center gap-2">
                  <span className="text-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M18.3 2H22L14.8 10.6 23 22h-5l-5.7-7.9L6.3 22H2l8.7-9.6L2.3 2h5.2l5.2 7.5L18.3 2ZM17.2 20h1.6l-9.7-14h-1.7l9.8 14Z" />
                    </svg>
                  </span>
                  <a
                    href="https://x.com/ron_otieno"
                    className="text-red-400 hover:text-red-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ron_otieno
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-2">
                  <span className="text-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <a
                    href="https://linkedin.com/in/ronney-otieno"
                    className="text-red-400 hover:text-red-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ronney-otieno
                  </a>
                </div>
              </div>

              {/* Bottom Copyright */}
              <div className="text-center border-t border-gray-700 pt-6 w-full">
                <div className="text-gray-500 text-xs">
                  &copy; {new Date().getFullYear()} Ronney Otieno - Building
                  secure systems, one line at a time.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
