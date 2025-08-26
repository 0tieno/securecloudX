import React from "react";

const features = [
  {
    title: "Timezones",
    description: "Convert time across different zones",
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
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Pomodoro",
    description: "Boost productivity with timed work sessions",
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
        <path
          d="M12 8v4l3 2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Daily Planner",
    description: "Plan your days and weeks to stay organized",
    icon: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M16 2v4M8 2v4M3 10h18"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "World Clock",
    description: "Check current time anywhere in the world",
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
        <path
          d="M12 7v5l4 2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Timer",
    description: "Set countdowns with alarm for any task",
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
        <path
          d="M12 8v4l3 2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Stopwatch",
    description: "Measure elapsed time precisely",
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
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
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
