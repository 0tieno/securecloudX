import { useNavigate, Link } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";

const changelog = [
  {
    date: "02 Sept, 2025",
    desc: "Added open source blogs and labs on pentesting.",
  },
  {
    date: "01 Sept, 2025",
    desc: "Redesigned the site with security vibe and look.",
  },
  {
    date: "26 Aug, 2025",
    desc: "Added this landing page.",
  },
  {
    date: "22 Aug, 2025",
    desc: "Added consultation services due to user demand.",
  },
  { date: "12 Aug, 2025", desc: "Added more lab tasks on data security" },
  {
    date: "13 July, 2025",
    desc: "Mini-hackathon on git forensics. 34 participants.",
  },
  { date: "04 June, 2025", desc: "Introduced weekly challenge format" },
  {
    date: "13 May, 2025",
    desc: "New features and improvements based on user feedback.",
  },
  {
    date: "10 April, 2025",
    desc: "Officially launched the site to the public",
  },
  {
    date: "8 April, 2025",
    desc: "Prelaunced the platform via a community meetup call",
  },
];

export default function Changelog() {
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
                secure<span className="text-red-400">cloud</span>X
              </h1>
            </div>
            <div className="ml-11">
              <p className="text-gray-500 text-sm">
                // changelog: track updates and improvements
              </p>
              <div className="text-xs text-gray-600 mt-1">
                root@securecloudx:~# ./changelog.sh
              </div>
            </div>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex items-center space-x-6">
            <button
              className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm font-mono"
              onClick={() => navigate("/about")}
            >
              ./about
            </button>
            <button
              className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm font-mono"
              onClick={() => navigate("/pricing")}
            >
              ./pricing
            </button>
            <button className="text-red-400 text-sm font-mono cursor-default">
              ./changelog
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center px-4 py-12">
        {/* Back Navigation Button */}
        <div className="w-full max-w-2xl mb-8 flex justify-start">
          <button
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 font-mono hover:bg-gray-700 hover:border-gray-600 transition-colors group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            cd ../
          </button>
        </div>

        <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
          <div className="flex items-center justify-center mb-2 w-full max-w-xs sm:max-w-md mx-auto">
            <hr className="flex-grow border-t border-gray-700 mx-2" />
            <span className="text-2xl sm:text-3xl font-semibold text-center px-2">
              Changelog
            </span>
            <hr className="flex-grow border-t border-gray-700 mx-2" />
          </div>
          <h3 className="text-lg sm:text-xl max-w-md font-semibold text-center mb-12 mt-6 text-gray-100 mx-auto">
            With <span className="text-yellow-400">
               400+ monthly average users {" "}
            </span>
            as of {new Date().toLocaleDateString()}, we are always improving our content, adding new resources and
            adding features to enhance your learning experience.
          </h3>
          <div className="w-full max-w-2xl mx-auto mt-6 sm:mt-8 flex justify-center">
            <div className="relative flex flex-col">
              {/* Vertical line for the whole timeline, perfectly centered */}
              <div
                className="absolute top-0"
                style={{
                  left: "16px",
                  width: "2px",
                  height: "100%",
                  background: "#374151",
                  zIndex: 0,
                }}
              ></div>
              {changelog.map((item, idx) => (
                <div
                  key={item.date}
                  className="flex flex-row items-center mb-6 sm:mb-8"
                >
                  {/* Timeline column, 32px wide */}
                  <div
                    className="relative flex flex-col items-center"
                    style={{ width: "32px" }}
                  >
                    {/* Dot, centered at 16px */}
                    <div
                      className="w-3 h-3 bg-gray-700 rounded-full border-2 border-gray-900 z-10"
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: 0,
                        transform: "translate(-50%, 0)",
                      }}
                    ></div>
                  </div>
                  {/* Date and description */}
                  <div className="flex flex-col sm:flex-row items-start w-full">
                    <div className="w-full sm:w-32 text-gray-400 text-xs sm:text-sm font-medium mb-1 sm:mb-0">
                      {item.date}
                    </div>
                    <div className="ml-0 sm:ml-4 text-gray-100 font-medium leading-snug text-sm sm:text-base">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
                  </div>
                  {/* Footer Links */}
                            <div className="flex flex-col items-center mt-4 mb-2">
                              <div className="flex gap-6 text-gray-400 text-sm mb-2">
                                <Link to="/terms-of-service" className="hover:text-yellow-400">
                                  Terms of Use
                                </Link>
                              </div>
                              <div className="text-gray-500 text-xs">
                                &copy; {new Date().getFullYear()} securecloudX.guide - Your
                                ultimate cloud security guide
                              </div>
                            </div>
        </div>
      </div>
    </div>
  );
}
