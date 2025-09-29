import { useNavigate, Link } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";

export default function Story() {
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
                  I'm <span className="text-red-400">$!rr0nn3y</span>
                </h1>
              </div>
              <div className="ml-8 sm:ml-11 hidden sm:block">
                <p className="text-gray-500 text-sm">
                  Developer | Jnr Pentester(cloud & web)
                </p>
                <div className="text-xs text-gray-600 mt-1">
                  and yeah, this is all about me. :)
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
              <button className="text-red-400 text-xs sm:text-sm font-mono cursor-default">
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
          {/* Main Content */}
          <div className="p-8 sm:p-12">
            {/* Navigation Menu */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-4 italic">
                and yeah, this is all about me. :)
              </p>

              <div className="mb-6">
                <p className="text-gray-300 font-medium mb-3">Jump to:</p>
                <div className="space-y-1">
                  <Link
                    to="/work"
                    className="block text-red-400 hover:text-red-300 underline transition-colors"
                  >
                    My Work
                  </Link>
                  <a
                    href="#conferences"
                    className="block text-red-400 hover:text-red-300 underline transition-colors"
                  >
                    Conferences, Presentations and Publications
                  </a>
                  <a
                    href="#achievements"
                    className="block text-red-400 hover:text-red-300 underline transition-colors"
                  >
                    Achievements, Honors and Awards
                  </a>
                </div>
              </div>
            </div>

            {/* About Section */}
            <section id="about" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-300 mb-6">About</h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  When I think about how I'd like to spend my days alive (and
                  consequently remembered for when no more), I think of giving
                  everything I put my mind and body to, everything.
                </p>
              </div>
            </section>

            {/* News Timeline Section */}
            <section id="timeline" className="mb-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-300 mb-2">
                  <span className="line-through text-gray-500">Not</span> IN THE
                  NEWS
                </h2>
                <p className="text-gray-500 text-sm line-through">
                  Perhaps you've used a software I have built!
                </p>
              </div>

              {/* 2025 Timeline */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-300 mb-4">
                  2025
                </h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex">
                    <span className="text-gray-500 min-w-[100px]">
                      - Oct 9:
                    </span>
                    <span>
                      [At 22] graduated IT preacher. My pulpit? The keyboard.
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 min-w-[100px]">
                      - September:
                    </span>
                    <span>
                      [bounced]{" "}
                      <a href="#" className="text-blue-400 hover:text-blue-300">
                        Experts Live Speaker
                      </a>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 min-w-[100px]">- Aug:</span>
                    <span>[awarded Distinction] Cloud & Network Security</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 min-w-[100px]">- July:</span>
                    <span>
                      Started writing software in JavaScript/TypeScript for{" "}
                      <span className="text-yellow-400">.ke</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 min-w-[100px]">
                      - April:
                    </span>
                    <span>Sat for my last undergrad exam</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 min-w-[100px]">
                      - April:
                    </span>
                    <span>[awarded "A"] Defended my final year project</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 min-w-[100px]">
                      - April 8:
                    </span>
                    <span className="text-green-400">Open source creator</span>
                  </div>
                </div>
              </div>

              {/* 2024 Timeline */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-300 mb-4">
                  2024
                </h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex">
                    <span className="text-gray-500 min-w-[120px]">
                      - November 31:
                    </span>
                    <span>
                      [As a Team] recognized by Microsoft ADC as{" "}
                      <a href="#" className="text-blue-400 hover:text-blue-300">
                        Most Vibrant in Kenya
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* 2023 Timeline */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-300 mb-4">
                  2023
                </h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex">
                    <span className="text-gray-500 min-w-[120px]">
                      - November 31:
                    </span>
                    <span>
                      Joined Global tech program -{" "}
                      <a href="#" className="text-blue-400 hover:text-blue-300">
                        Microsoft
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </section>
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
  );
}
