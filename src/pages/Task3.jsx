import React from "react";
import { Link } from "react-router-dom";

const phases = [
  {
    title: "Phase 1: Setup & Enumeration",
    description: "Initialize the lab and explore the surface of the app.",
    link: "/day3/task/phase1",
  },
  {
    title: "Phase 2: Threat Modeling",
    description: "Identify potential threats and vulnerabilities in the architecture.",
    link: "/day3/task/phase2",
  },
  {
    title: "Phase 3: Secure Coding",
    description: "Review insecure code and apply secure development practices.",
    link: "/day3/task/phase3",
  },
  {
    title: "Phase 4: Container Security",
    description: "Inspect and secure container images for best practices.",
    link: "/day3/task/phase4",
  },
];

const Task3 = () => {
  return (
    <div className="min-h-screen p-6 text-white bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">🧪 Lab 3: Data Security</h1>
        <p className="text-gray-300 mb-6">
          This lab is split into 4 phases. Click on a phase below to begin:
        </p>

        <div className="space-y-4">
          {phases.map((phase, index) => (
            <Link
              key={index}
              to={phase.link}
              className="block border border-gray-700 hover:border-gray-500 rounded-lg px-4 py-3 transition duration-200 hover:bg-gray-800"
            >
              <h2 className="text-lg font-semibold">{phase.title}</h2>
              <p className="text-sm text-gray-400">{phase.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task3;
