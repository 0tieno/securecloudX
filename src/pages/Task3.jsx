import React from "react";
import { Link } from "react-router-dom";

const phases = [
  {
    title: "Phase 1: Understanding Data Security Basics",
    description: "Learn the fundamentals of data security and why it matters in cloud environments.",
    link: "/day3/task/phase1",
  },
  {
    title: "Phase 2: Securing Public Data in Azure Storage",
    description: "Explore how to securely store and serve public website content using Azure Storage.",
    link: "/day3/task/phase2",
  },
  {
    title: "Phase 3: Protecting Private Data with High Availability",
    description: "Implement strategies for securing private data and ensuring high availability in Azure.",
    link: "/day3/task/phase3",
  },
];

const Task3 = () => {
  return (
    <div className="min-h-screen p-6 text-gray bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-300 mb-4">Lab 3: Data Security</h1>
        <p className="text-gray-300 mb-6">
          This lab is split into 3 phases. Click on a phase below to begin:
        </p>

        <div className="space-y-4">
          {phases.map((phase, index) => (
            <Link
              key={index}
              to={phase.link}
              className="block border border-gray-700 hover:border-gray-500 rounded-lg px-4 py-3 transition duration-200 hover:bg-gray-800"
            >
              <h2 className="text-lg font-semibold text-gray-300">{phase.title}</h2>
              <p className="text-sm text-gray-400">{phase.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-between text-sm sm:text-base">
              <Link
                to="/day3"
                className="text-blue-400 hover:underline hover:text-blue-300"
              >
                ← Back to Overview
              </Link>
              <Link
                to="/day3/task/phase1"
                className="text-blue-400 hover:underline hover:text-blue-300"
              >
                Go to Lab: 01 →
              </Link>
            </div>
    </div>
  );
};

export default Task3;
