import { useNavigate, Link } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";

export default function AboutAuthor() {
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
                  Here is a little bit about myself...
                </div>
              </div>
            </div>

            {/* Right side - Navigation Links */}
            <div className="flex items-center justify-start sm:justify-end space-x-4 sm:space-x-6 ml-8 sm:ml-0">
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono"
                onClick={() => navigate("/work")}
              >
                ./work
              </button>
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono"
                onClick={() => navigate("/story")}
              >
                ./story
              </button>
              <button className="text-red-400 text-xs sm:text-sm font-mono cursor-default">
                ./about
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center px-4 py-12">
        {/* Profile Section */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gray-700  overflow-hidden">
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
                  <blockquote className="text-gray-400 text-sm mb-2">
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
                $ cat securecloudX_Founder.txt
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                In addition to [that], I'm a{" "}
                <span className="text-yellow-400">learner</span> and I love{" "}
                <span className="text-blue-400">building things</span> and{" "}
                <span className="text-red-400">hacking them</span> to prove
                security.
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
      </div>
    </div>
  );
}
