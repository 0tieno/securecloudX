import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown, ChevronLeft, Menu, X, CheckCircle2, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useProgress } from "../hooks/useProgress";

const coreTopics = [
  { day: 1, title: "Identity & Access Management" },
  { day: 2, title: "Network Security & Perimeter Defense" },
  { day: 3, title: "Data Security & Encryption" },
  { day: 4, title: "Application Security" },
  { day: 5, title: "Cloud Security Posture Management" },
  { day: 6, title: "Detection Engineering & IR" },
  { day: 7, title: "Security Architecture Review" },
];

const advancedTopics = [
  { day: 8, title: "DevSecOps Fundamentals" },
  { day: 9, title: "Kubernetes & AKS Security" },
];

const Sidebar = () => {
  const [openDay, setOpenDay] = useState({});
  const [openNextSteps, setOpenNextSteps] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
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
        className={`fixed md:static top-0 left-0 h-full bg-gray-800 text-gray-300 flex flex-col border-r border-gray-700 transition-all duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${isCollapsed ? "w-10" : "w-64"}`}
      >
        {/* Desktop collapse toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex items-center justify-center h-8 w-full text-gray-500 hover:text-gray-300 hover:bg-gray-700/50 transition-colors border-b border-gray-700/50 flex-shrink-0"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <PanelLeftOpen size={14} /> : <PanelLeftClose size={14} />}
        </button>

        <div className={`flex flex-col flex-1 overflow-hidden ${isCollapsed ? "hidden md:hidden" : ""}`}>
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

        <nav className="flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

            {coreTopics.map(({ day, title }) => {
              return (
                <li key={day}>
                  <button
                    onClick={() => toggleDropdown(Number(day))}
                    className={`w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-700 ${
                      location.pathname.includes(`/module${day}`)
                        ? "bg-gray-700 text-white"
                        : ""
                    }`}
                    title={`Open Module ${day}`}
                  >
                    <span className="flex items-center gap-2">
                      {user && isComplete(day, "overview") && isComplete(day, "task") ? (
                        <CheckCircle2 size={13} className="text-green-400 shrink-0" />
                      ) : (
                        <span className="w-3.5 h-3.5 shrink-0 inline-block" />
                      )}
                      <span><strong>Module {day}:</strong> {title}</span>
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
                          title={`Overview for Module ${day}`}
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
                          title={`Lab for Module ${day}`}
                        >
                          Labs
                        </Link>
                      </li>

                      {/*  Lab 3 Phases Submenu */}
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
                              title="Module 1: Setup & Enumeration"
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
                              title="Module 2: Threat Modeling"
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
                              title="Module 3: Secure Coding"
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
                          title={`Resources for Module ${day}`}
                        >
                          Resources
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );            })}

            {/* Advanced Topics section */}
            <li className="mt-3">
              <div className="px-4 py-1 text-xs text-yellow-600 uppercase tracking-widest flex items-center gap-2">
                Advanced Topics
                <span className="border border-yellow-700/50 text-yellow-700 px-1 text-[10px]">optional</span>
              </div>
            </li>

            {advancedTopics.map(({ day, title }) => {
              return (
                <li key={day}>
                  <button
                    onClick={() => toggleDropdown(Number(day))}
                    className={`w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-700 ${
                      location.pathname.includes(`/module${day}`)
                        ? "bg-gray-700 text-white"
                        : ""
                    }`}
                    title={`Open Module ${day}`}
                  >
                    <span className="flex items-center gap-2">
                      {user && isComplete(day, "overview") && isComplete(day, "task") ? (
                        <CheckCircle2 size={13} className="text-green-400 shrink-0" />
                      ) : (
                        <span className="w-3.5 h-3.5 shrink-0 inline-block" />
                      )}
                      <span><strong>Module {day}:</strong> {title}</span>
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
                            location.pathname === `/module${day}` ? "bg-gray-700 text-white" : ""
                          }`}
                          onClick={closeSidebar}
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/module${day}/task`}
                          className={`block px-4 py-1 hover:bg-gray-600 ${
                            location.pathname === `/module${day}/task` ? "bg-gray-700 text-white" : ""
                          }`}
                          onClick={closeSidebar}
                        >
                          Labs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/module/${day}/resources`}
                          className={`block px-4 py-1 hover:bg-gray-600 ${
                            location.pathname === `/module/${day}/resources` ? "bg-gray-700 text-white" : ""
                          }`}
                          onClick={closeSidebar}
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

            </li>

            {/* Reference Tools */}
            <li className="mt-2">
              <div className="px-4 py-1 text-xs text-gray-500 uppercase tracking-widest">Reference</div>
              <ul>
                <li>
                  <Link
                    to="/glossary"
                    className={`block px-4 py-1.5 hover:bg-gray-600 text-sm ${
                      location.pathname === "/glossary" ? "bg-gray-700 text-white" : ""
                    }`}
                    onClick={closeSidebar}
                    title="Cloud Security Glossary"
                  >
                    Glossary
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cert-map"
                    className={`block px-4 py-1.5 hover:bg-gray-600 text-sm ${
                      location.pathname === "/cert-map" ? "bg-gray-700 text-white" : ""
                    }`}
                    onClick={closeSidebar}
                    title="AZ-500 / CCSP / CIS Cert Map"
                  >
                    Cert Map
                  </Link>
                </li>
                <li>
                  <Link
                    to="/plan"
                    className={`block px-4 py-1.5 hover:bg-gray-600 text-sm ${
                      location.pathname === "/plan" ? "bg-gray-700 text-white" : ""
                    }`}
                    onClick={closeSidebar}
                    title="Platform Roadmap"
                  >
                    Roadmap
                  </Link>
                </li>
              </ul>
            </li>

            
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

            {/* Broken By Design Lab */}
            <li>
              <Link
                to="/lab/broken-by-design"
                className={`block px-3 py-2 mx-2 my-1 rounded-lg border transition-colors font-medium text-sm ${
                  location.pathname === "/lab/broken-by-design"
                    ? "bg-orange-500/20 border-orange-400/50 text-orange-300"
                    : "text-orange-400 hover:text-orange-300 border-orange-500/30 hover:border-orange-400/50 bg-orange-500/10 hover:bg-orange-500/20"
                }`}
                onClick={closeSidebar}
                title="Find the Misconfigurations"
              >
                Lab: Broken By Design
              </Link>
            </li>

          </ul>
        </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
