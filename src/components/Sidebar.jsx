import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react"; // Import Lucide icons

const topics = {
  1: "Identity & Access Management",
  2: "Network Security & Perimeter Defense",
  3: "Data Protection & Encryption",
  4: "Threat Detection & Monitoring",
  5: "Incident Response & Recovery",
  6: "Compliance & Governance",
  7: "Capstone Project",
};

const Sidebar = () => {
  const [openDay, setOpenDay] = useState({});

  const toggleDropdown = (day) => {
    setOpenDay((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="w-64 bg-gray-800 text-gray-400 h-screen flex flex-col border-r border-gray-700">
      <h2 className="text-xl font-bold text-gray-300 p-4">Azure Cloud Security</h2>
      <nav className="flex-1 overflow-y-auto">
        <ul>
          <li>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-700">
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
                    <Link to={`/day${day}`} className="block px-4 py-1 hover:bg-gray-700">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to={`/day${day}/task`} className="block px-4 py-1 hover:bg-gray-700">
                      Task
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
