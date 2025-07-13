import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown, Lock, Menu, X } from "lucide-react";
import useChallengeUnlock from "../hooks/useChallengeUnlock";

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
  const unlockedDays = useChallengeUnlock();

  const [openDay, setOpenDay] = useState({});
  const [openNextSteps, setOpenNextSteps] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = (day) => {
    if (unlockedDays.includes(day)) {
      setOpenDay((prev) => ({ ...prev, [day]: !prev[day] }));
    }
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
                to="/"
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

            {/* Forgotten Secret Lab - Mini Hack */}
            <li>
              <Link
                to="/forgotten-secret-lab"
                className={`block px-4 py-2 hover:bg-gray-600 border-l-4 border-red-500 ${
                  location.pathname === "/forgotten-secret-lab"
                    ? "bg-gray-700 text-white"
                    : ""
                }`}
                onClick={closeSidebar}
                title="Git History Forensics Mini-Hack"
              >
                🕵️‍♂️ Mini-Hack: Secret Lab
              </Link>
            </li>

            {topics.map(({ day, title }) => {
              const isUnlocked = unlockedDays.includes(day);
              return (
                <li key={day}>
                  <button
                    onClick={() => toggleDropdown(Number(day))}
                    className={`w-full text-left px-4 py-2 flex justify-between items-center ${
                      isUnlocked
                        ? "hover:bg-gray-700"
                        : "text-gray-500 cursor-not-allowed"
                    } ${
                      location.pathname.includes(`/day${day}`)
                        ? "bg-gray-700 text-white"
                        : ""
                    }`}
                    disabled={!isUnlocked}
                    title={
                      isUnlocked ? `Open Day ${day}` : "This day is locked"
                    }
                  >
                    <span>
                      <strong>Day {day}:</strong> {title}
                    </span>
                    {isUnlocked ? (
                      openDay[day] ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )
                    ) : (
                      <Lock size={18} />
                    )}
                  </button>

                  {openDay[day] && isUnlocked && (
                    <ul className="ml-4 border-l-2 border-gray-600">
                      <li>
                        <Link
                          to={`/day${day}`}
                          className={`block px-4 py-1 hover:bg-gray-600 ${
                            location.pathname === `/day${day}`
                              ? "bg-gray-700 text-white"
                              : ""
                          }`}
                          onClick={closeSidebar}
                          title={`Overview for Day ${day}`}
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/day${day}/task`}
                          className={`block px-4 py-1 hover:bg-gray-600 ${
                            location.pathname === `/day${day}/task`
                              ? "bg-gray-700 text-white"
                              : ""
                          }`}
                          onClick={closeSidebar}
                          title={`Lab for Day ${day}`}
                        >
                          Labs
                        </Link>
                      </li>

                      {/* ✅ Lab 3 Phases Submenu */}
                      {day === 3 && (
                        <ul className="ml-4 border-l-2 border-gray-600">
                          <li>
                            <Link
                              to="/day3/task/phase1"
                              className={`block px-4 py-1 hover:bg-gray-600 ${
                                location.pathname === "/day3/task/phase1"
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
                              to="/day3/task/phase2"
                              className={`block px-4 py-1 hover:bg-gray-600 ${
                                location.pathname === "/day3/task/phase2"
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
                              to="/day3/task/phase3"
                              className={`block px-4 py-1 hover:bg-gray-600 ${
                                location.pathname === "/day3/task/phase3"
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
                          to={`/day/${day}/resources`}
                          className={`block px-4 py-1 hover:bg-gray-600 ${
                            location.pathname === `/day/${day}/resources`
                              ? "bg-gray-700 text-white"
                              : ""
                          }`}
                          onClick={closeSidebar}
                          title={`Resources for Day ${day}`}
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
                onClick={() => {
                  if (unlockedDays.includes(7)) {
                    setOpenNextSteps(!openNextSteps);
                  }
                }}
                className={`w-full text-left px-4 py-2 flex justify-between items-center ${
                  unlockedDays.includes(7)
                    ? "hover:bg-gray-700"
                    : "text-gray-500 cursor-not-allowed"
                } mt-4`}
                disabled={!unlockedDays.includes(7)}
                title={
                  unlockedDays.includes(7)
                    ? "Explore next steps"
                    : "Unlocks after Day 7"
                }
              >
                <span>Next Steps</span>
                {unlockedDays.includes(7) ? (
                  openNextSteps ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )
                ) : (
                  <Lock size={18} />
                )}
              </button>

              {openNextSteps && unlockedDays.includes(7) && (
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
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
