import React from "react";

const features = [
  {
    title: "Cloud Security Labs",
    description: "Hands-on labs to learn cloud security by doing.",
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M8 8h8v8H8z" stroke="#38bdf8" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Challenges & Tasks",
    description: "Daily and weekly security challenges to test your skills.",
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M8 12h8M12 8v8" stroke="#fbbf24" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Guided Roadmaps",
    description: "Step-by-step learning paths for cloud security roles.",
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2"
          stroke="#34d399"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="8"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Resource Library",
    description: "Curated blogs, guides, and tools for cloud security.",
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2"
          stroke="#818cf8"
          strokeWidth="2"
        />
        <path d="M12 7v5l4 2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Hackathons",
    description:
      "Join hackathons to apply your skills in real-world scenarios.",
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 19v-2" stroke="#f472b6" strokeWidth="2" />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M8 15c0-2.21 1.79-4 4-4s4 1.79 4 4"
          stroke="#f472b6"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Community & Support",
    description: "Get help, share insights, and connect with other learners.",
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M8 12h8" stroke="#10b981" strokeWidth="2" />
        <path d="M12 8v8" stroke="#10b981" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow hover:bg-gray-800 transition"
        >
          {feature.icon}
          <h2 className="text-lg font-semibold mb-1">{feature.title}</h2>
          <p className="text-sm text-gray-400 text-center">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
