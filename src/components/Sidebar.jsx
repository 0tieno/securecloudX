import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react"; // Import icons

const topics = {
  1: "Identity & Access Management",
  2: "Network Security & Perimeter Defense",
  3: "Data Security",
  4: "Application Security",
  5: "Incident Response & Threat Detection ",
  6: "Security Monitoring & Threat Intelligence",
  7: "Capstone Project",
};

const Sidebar = () => {
  const [openDay, setOpenDay] = useState({});
  const [openNextSteps, setOpenNextSteps] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleDropdown = (day) => {
    setOpenDay((prev) => ({ ...prev, [day]: !prev[day] }));
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
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 text-gray-300 flex flex-col border-r border-gray-700 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-xl font-bold p-4">Guide</h2>
        <nav className="flex-1 overflow-y-auto">
          <ul>
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-700" onClick={closeSidebar}>
                Welcome
              </Link>
            </li>

            {Object.entries(topics).map(([day, topic]) => (
              <li key={day}>
                <button
                  onClick={() => toggleDropdown(day)}
                  className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-700"
                >
                  <span>
                    <strong>Day {day}:</strong> {topic}
                  </span>
                  {openDay[day] ? (
                    <ChevronDown size={18} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={18} className="text-gray-400" />
                  )}
                </button>
                {openDay[day] && (
                  <ul className="ml-4 border-l-2 border-gray-600">
                    <li>
                      <Link to={`/day${day}`} className="block px-4 py-1 hover:bg-gray-700" onClick={closeSidebar}>
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link to={`/day${day}/task`} className="block px-4 py-1 hover:bg-gray-700" onClick={closeSidebar}>
                        Lab
                      </Link>
                    </li>
                    <li>
                      <Link to={`/day/${day}/resources`} className="block px-4 py-1 hover:bg-gray-700" onClick={closeSidebar}>
                        Resources
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}

            {/* Next Steps Section */}
            <li>
              <button
                onClick={() => setOpenNextSteps(!openNextSteps)}
                className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-700 mt-4"
              >
                <span>Next Steps</span>
                {openNextSteps ? (
                  <ChevronDown size={18} className="text-gray-400" />
                ) : (
                  <ChevronRight size={18} className="text-gray-400" />
                )}
              </button>
              {openNextSteps && (
                <ul className="ml-4 border-l-2 border-gray-600">
                  {/* <li>
                    <Link to="/next-steps" className="block px-4 py-1 hover:bg-gray-700" onClick={closeSidebar}>
                      Explore More
                    </Link>
                  </li> */}
                  {/* New Explore Page Link */}
                  <li>
                    <Link to="/explore" className="block px-4 py-1 hover:bg-gray-700" onClick={closeSidebar}>
                      what next?
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
