import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  
  return (
    <div className={`bg-gray-900 text-white w-64 min-h-screen p-4 ${open ? "block" : "hidden"} md:block`}>
      <h2 className="text-xl font-bold">Guide</h2>
      <ul className="mt-4">
        <li><Link to="/" className="block py-2">Welcome</Link></li>
        <li><Link to="/day1" className="block py-2">Day 1: IAM</Link></li>
        <li><Link to="/day2" className="block py-2">Day 2: Network Security</Link></li>
        <li><Link to="/day3" className="block py-2">Day 3: App Security</Link></li>
        <li><Link to="/day4" className="block py-2">Day 4: VM Security</Link></li>
        <li><Link to="/day5" className="block py-2">Day 5: Data Security</Link></li>
        <li><Link to="/day6" className="block py-2">Day 6: Monitoring</Link></li>
        <li><Link to="/day7" className="block py-2">Day 7: Capstone</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
