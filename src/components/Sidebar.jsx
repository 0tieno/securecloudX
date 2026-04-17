import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown, Menu, X, CheckCircle2 } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useProgress } from "../hooks/useProgress";

const topics = [
  { day: 1, title: "Identity & Access Management" },
  { day: 2, title: "Network Security & Perimeter Defense" },
  { day: 3, title: "Data Security" },
  { day: 4, title: "Application Security" },
  { day: 5, title: "Security Monitoring & Threat Intelligence" },
  { day: 6, title: "Incident Response & Threat Detection" },
  { day: 7, title: "Capstone Project" },
];

const Sidebar = () => {
  const [openDay, setOpenDay] = useState({});
  const [openNextSteps, setOpenNextSteps] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();
  const { user } = useAuth();
  const { isComplete } = useProgress(user?.id);

  const toggleDropdown = (day) => {
    setOpenDay((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 text-gray-300 relative z-50"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 text-gray-300 flex flex-col border-r border-gray-700 transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold p-4 flex justify-between items-center">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors"
            title="SecureCloudX Guide"
          >
            Guide
            <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded ml-2">
              SCX
            </span>
          </Link>
          <Link
            to="/posts"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors px-3 py-1.5 rounded-lg border border-blue-500/30 hover:border-blue-400/50 bg-blue-500/10 hover:bg-blue-500/20 font-medium"
            title="Visit Blog Posts"
            onClick={closeSidebar}
          >
            Visit blogs
          </Link>
        </h2>

        <nav className="flex-1 overflow-y-auto">
          <ul>
            <li>
              <Link
                to="/home"
                className={`block px-4 py-2 hover:bg-gray-600 ${
                  location.pathname === "/" ? "bg-gray-700 text-white" : ""
                }`}
                onClick={closeSidebar}
                title="Go to Welcome Page"
              >
                Welcome
              </Link>
            </li>

            <li>
              <Link
                to="/start"
                className={`block px-4 py-2 hover:bg-gray-600 ${
                  location.pathname === "/start" ? "bg-gray-700 text-white" : ""
                }`}
                onClick={closeSidebar}
                title="Cloud Basics"
              >
                Starting From Zero
              </Link>
            </li>

            {topics.map(({ day, title }) => {
              return (
                <li key={day}>
                  <button
                    onClick={() => toggleDropdown(Number(day))}
                    className={`w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-700 ${
                      location.pathname.includes(`/module${day}`)
                        ? "bg-gray-700 text-white"
                        : ""
                    }`}
                    title={`Open Phase ${day}`}
                  >
                    <span className="flex items-center gap-2">
                      {user && isComplete(day, "overview") && isComplete(day, "task") ? (
                        <CheckCircle2 size={13} className="text-green-400 shrink-0" />
                      ) : (
                        <span className="w-3.5 h-3.5 shrink-0 inline-block" />
                      )}
                      <span><strong>Phase {day}:</strong> {title}</span>
                    </span>
                    {openDay[day] ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>

                  {openDay[day] && (
                    <ul className="ml-4 border-l-2 border-gray-600">
                      <li>
                        <Link
                          to={`/module${day}`}
                          className={`block px-4 py-1 hover:bg-gray-600 ${
                            location.pathname === `/module${day}`
                              ? "bg-gray-700 text-white"
                              : ""
                          }`}
                          onClick={closeSidebar}
                          title={`Overview for Phase ${day}`}
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/module${day}/task`}
                          className={`block px-4 py-1 hover:bg-gray-600 ${
                            location.pathname === `/module${day}/task`
                              ? "bg-gray-700 text-white"
                              : ""
                          }`}
                          onClick={closeSidebar}
                          title={`Lab for Phase ${day}`}
                        >
                          Labs
                        </Link>
                      </li>

                      {/* ✅ Lab 3 Phases Submenu */}
                      {day === 3 && (
                        <ul className="ml-4 border-l-2 border-gray-600">
                          <li>
                            <Link
                              to="/module3/task/phase1"
                              className={`block px-4 py-1 hover:bg-gray-600 ${
                                location.pathname === "/module3/task/phase1"
                                  ? "bg-gray-700 text-white"
                                  : ""
                              }`}
                              onClick={closeSidebar}
                              title="Phase 1: Setup & Enumeration"
                            >
                              Lab 01
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/module3/task/phase2"
                              className={`block px-4 py-1 hover:bg-gray-600 ${
                                location.pathname === "/module3/task/phase2"
                                  ? "bg-gray-700 text-white"
                                  : ""
                              }`}
                              onClick={closeSidebar}
                              title="Phase 2: Threat Modeling"
                            >
                              Lab 02
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/module3/task/phase3"
                              className={`block px-4 py-1 hover:bg-gray-600 ${
                                location.pathname === "/module3/task/phase3"
                                  ? "bg-gray-700 text-white"
                                  : ""
                              }`}
                              onClick={closeSidebar}
                              title="Phase 3: Secure Coding"
                            >
                              Lab 03
                            </Link>
                          </li>
                        </ul>
                      )}

                      <li>
                        <Link
                          to={`/module/${day}/resources`}
                          className={`block px-4 py-1 hover:bg-gray-600 ${
                            location.pathname === `/module/${day}/resources`
                              ? "bg-gray-700 text-white"
                              : ""
                          }`}
                          onClick={closeSidebar}
                          title={`Resources for Phase ${day}`}
                        >
                          Resources
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            })}

            {/* Next Steps Section */}
            <li>
              <button
                onClick={() => setOpenNextSteps(!openNextSteps)}
                className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-700 mt-4"
                title="Explore next steps"
              >
                <span>Next Steps</span>
                {openNextSteps ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {openNextSteps && (
                <ul className="ml-4 border-l-2 border-gray-600">
                  <li>
                    <Link
                      to="/explore"
                      className={`block px-4 py-1 hover:bg-gray-600 ${
                        location.pathname === "/explore"
                          ? "bg-gray-700 text-white"
                          : ""
                      }`}
                      onClick={closeSidebar}
                      title="What to do next?"
                    >
                      What next?
                    </Link>
                  </li>
                </ul>
              )}

              
            {/* Forgotten Secret Lab - Mini Hack */}
            <li>
              <Link
                to="/forgotten-secret-lab"
                className={`block px-3 py-2 mx-2 my-1 rounded-lg border transition-colors font-medium text-sm ${
                  location.pathname === "/forgotten-secret-lab"
                    ? "bg-red-500/20 border-red-400/50 text-red-300"
                    : "text-red-400 hover:text-red-300 border-red-500/30 hover:border-red-400/50 bg-red-500/10 hover:bg-red-500/20"
                }`}
                onClick={closeSidebar}
                title="Git History Forensics Mini-Hack"
              >
                Mini-Hack: forgotten-secret-lab
              </Link>
            </li>

            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
