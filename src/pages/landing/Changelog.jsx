import React from "react";

const changelog = [
  {
    date: "22 Aug, 2025",
    desc: "Data Engineering, Machine Learning Roadmap and more.",
  },
  {
    date: "23 Jul, 2025",
    desc: "AI Quiz Summaries, New Go Roadmap, and YouTube Videos",
  },
  {
    date: "27 Jun, 2025",
    desc: "Revamped roadmaps, AI Tutor, Guides, Roadmaps and more",
  },
  {
    date: "12 May, 2025",
    desc: "AI Agents, Red Teaming Roadmaps and Community Courses",
  },
  { date: "03 Apr, 2025", desc: "AI Tutor, C++ and Java Roadmaps" },
  {
    date: "21 Feb, 2025",
    desc: "Cloudflare and ASP.NET Roadmaps, New Dashboard",
  },
  { date: "04 Feb, 2025", desc: "Our first paid course about SQL is live" },
  {
    date: "21 Dec, 2024",
    desc: "PHP and System Design Roadmaps, Get Featured",
  },
  {
    date: "18 Nov, 2024",
    desc: "AI Roadmaps Improved, Schedule Learning Time",
  },
  {
    date: "16 Oct, 2024",
    desc: "DevOps Project Ideas, Team Dashboard, Redis Content",
  },
];

export default function Changelog() {
  return (
    <div className="w-full flex flex-col items-center mt-16">
      <h2 className="text-xl max-w-xl font-semibold text-center mb-2 text-gray-100">
        We are always improving our content, adding new resources and adding
        features to enhance your learning experience.
      </h2>
      <div className="w-full max-w-2xl mx-auto mt-8">
        <div className="relative border-l border-gray-700 pl-8">
          {changelog.map((item, idx) => (
            <div key={item.date} className="flex items-start mb-8">
              <div className="absolute -left-2.5 mt-1 w-3 h-3 bg-gray-700 rounded-full border-2 border-gray-900"></div>
              <div className="w-32 text-gray-400 text-sm font-medium">
                {item.date}
              </div>
              <div className="ml-4 text-gray-100 font-medium leading-snug">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
