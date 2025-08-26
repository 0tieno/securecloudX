import React from "react";

export default function PricingSection() {
  return (
    <div className="w-full flex flex-col items-center mt-16">
      <h2 className="text-2xl font-semibold text-center mb-2 border-b border-gray-700 pb-1 w-64">
        Pricing
      </h2>
      <p className="text-gray-300 text-center mb-8 max-w-xl">
        Keep using the app for free. Upgrade anytime to support the development,
        and unlock additional features.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-8">
        {/* Personal Plan */}
        <div className="bg-gray-900 rounded-xl p-8 w-80 shadow flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-1">Personal</h3>
          <p className="text-gray-300 mb-2">Free</p>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mb-4 hover:bg-yellow-300 transition">
            Sign up
          </button>
          <p className="text-gray-400 text-center mb-4 text-sm">
            All the basic features to help you manage your time and stay
            productive.
          </p>
          <ul className="text-gray-200 text-sm space-y-2 w-full">
            <li className="flex items-center gap-2">
              <span className="text-green-400">👤</span> Unlimited Individual
              Timezones
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">👥</span> Team Timezones (up to
              3)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">📁</span> 1 Workspace and Project
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">⏲️</span> Pomodoro Timer
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">🗓️</span> Daily Planner (7 days
              history)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> 7 tasks per day
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">🎵</span> Focus Sounds
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">🌎</span> World Clock, Timer,
              Stopwatch
            </li>
          </ul>
        </div>
        {/* Professional Plan */}
        <div className="bg-gray-900 rounded-xl p-8 w-80 shadow flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-1">Professional</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="line-through text-gray-400 text-sm">$9.99</span>
            <span className="text-yellow-400 text-lg font-bold">$5.99</span>
            <span className="text-gray-400 text-sm">/mo</span>
          </div>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mb-4 hover:bg-yellow-300 transition">
            Sign up
          </button>
          <p className="text-gray-400 text-center mb-4 text-sm">
            Unlock advanced features and support the development of the app.
          </p>
          <ul className="text-gray-200 text-sm space-y-2 w-full">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✅</span> All the basic features
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">👥</span> Team Timezones (up to
              10)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">📁</span> Unlimited Workspaces &
              Projects
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">⏲️</span> Advanced Pomodoro Timer
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">🗓️</span> Daily Planner
              (Unlimited History)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> Unlimited tasks
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">🚀</span> Early access to new
              features
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">💛</span> Support the development
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Links */}
      <div className="flex flex-col items-center mt-4 mb-2">
        <div className="flex gap-6 text-gray-400 text-sm mb-2">
          <a href="#" className="hover:text-yellow-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-yellow-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-400">
            Refund Policy
          </a>
        </div>
        <div className="text-gray-500 text-xs">
          © 2024 time.fyi - Your ultimate time management companion
        </div>
      </div>
    </div>
  );
}
