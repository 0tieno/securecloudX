import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown, Lock, Menu, X } from "lucide-react"; // Added Lock icon

const topics = [
  { day: 1, title: "Identity & Access Management" },
  { day: 2, title: "Network Security & Perimeter Defense" },
  { day: 3, title: "Data Security" },
  { day: 4, title: "Application Security" },
  { day: 5, title: "Security Monitoring & Threat Intelligence" },
  { day: 6, title: "Incident Response & Threat Detection" },
  { day: 7, title: "Capstone Project" },
];


// Set the challenge start date (YYYY-MM-DD format)
const CHALLENGE_START_DATE = new Date("2025-04-10T00:00:00Z"); // Adjust to your actual start date

const Sidebar = () => {
  const [openDay, setOpenDay] = useState({});
  const [openNextSteps, setOpenNextSteps] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentUnlockedDay, setCurrentUnlockedDay] = useState(0);
  const sidebarRef = useRef(null);

  // Get current route
  const location = useLocation();

  // Calculate unlocked days
  useEffect(() => {
    const today = new Date();
    const timeDiff = today - CHALLENGE_START_DATE;
    const daysSinceStart = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setCurrentUnlockedDay(Math.min(daysSinceStart + 1, 7));
  }, []);

  const toggleDropdown = (day) => {
    if (day <= currentUnlockedDay) {
      setOpenDay((prev) => ({ ...prev, [day]: !prev[day] }));
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar when clicking outside
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
      <button onClick={toggleSidebar} className="md:hidden p-4 text-gray-300">
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 text-gray-300 flex flex-col border-r border-gray-700 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
     <h2 className="text-xl font-bold p-4 flex justify-between items-center">
  Guide
  <Link to="/" title="SecureCloudX">
    <img src="/favicon-32x32.png" alt="Logo" className="h-6 w-auto cursor-pointer" />
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

            {topics.map(({ day, title }) => {
              const isUnlocked = Number(day) <= currentUnlockedDay;
              return (
                <li key={day}>
                  <button
                    onClick={() => toggleDropdown(Number(day))}
                    className={`w-full text-left px-4 py-2 flex justify-between items-center ${
                      isUnlocked ? "hover:bg-gray-700" : "text-gray-500 cursor-not-allowed"
                    } ${
                      location.pathname.includes(`/day${day}`) ? "bg-gray-700 text-white" : ""
                    }`}
                    disabled={!isUnlocked}
                    title={isUnlocked ? `Open Day ${day}` : "This day is locked"}
                  >
                    <span>
                    <strong>Day {day}:</strong> {title}
                    </span>
                    {isUnlocked ? (
                      openDay[day] ? <ChevronDown size={18} /> : <ChevronRight size={18} />
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
                            location.pathname === `/day${day}` ? "bg-gray-700 text-white" : ""
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
                            location.pathname === `/day${day}/task` ? "bg-gray-700 text-white" : ""
                          }`}
                          onClick={closeSidebar}
                          title={`Lab for Day ${day}`}
                        >
                          Lab
                        </Link>
                      </li>
                      <li>
                      <Link
                        to={`/day/${day}/resources`}
                        className={`block px-4 py-1 hover:bg-gray-600 ${
                          location.pathname === `/day/${day}/resources` ? "bg-gray-700 text-white" : ""
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
      if (currentUnlockedDay >= 7) {
        setOpenNextSteps(!openNextSteps);
      }
    }}
    className={`w-full text-left px-4 py-2 flex justify-between items-center ${
      currentUnlockedDay >= 7 ? "hover:bg-gray-700" : "text-gray-500 cursor-not-allowed"
    } mt-4`}
    disabled={currentUnlockedDay < 7}
    title={currentUnlockedDay >= 7 ? "Explore next steps" : "Unlocks after Day 7"}
  >
    <span>Next Steps</span>
    {currentUnlockedDay >= 7 ? (
      openNextSteps ? <ChevronDown size={18} /> : <ChevronRight size={18} />
    ) : (
      <Lock size={18} />
    )}
  </button>

  {openNextSteps && currentUnlockedDay >= 7 && (
    <ul className="ml-4 border-l-2 border-gray-600">
      <li>
        <Link
          to="/explore"
          className={`block px-4 py-1 hover:bg-gray-600 ${
            location.pathname === "/explore" ? "bg-gray-700 text-white" : ""
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
