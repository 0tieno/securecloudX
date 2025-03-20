import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openDay, setOpenDay] = useState({});

  const toggleDropdown = (day) => {
    setOpenDay((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold">Azure Cloud Security</h2>
      <nav className="mt-4">
        <ul>
          <li>
            <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-700">
              Welcome
            </Link>
          </li>

          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <li key={day}>
              <button
                onClick={() => toggleDropdown(day)}
                className="w-full text-left px-3 py-2 rounded flex justify-between items-center hover:bg-gray-700"
              >
                Day {day}
                <span>{openDay[day] ? "▼" : "►"}</span>
              </button>
              {openDay[day] && (
                <ul className="ml-4 mt-2 border-l border-gray-600">
                  <li>
                    <Link to={`/day${day}`} className="block px-3 py-1 hover:bg-gray-700">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to={`/day${day}/task`} className="block px-3 py-1 hover:bg-gray-700">
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
