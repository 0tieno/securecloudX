import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="mb-4">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="#FFD600" />
          <path
            d="M24 14c-5.523 0-10 4.477-10 10s4.477 10 10 10"
            stroke="#000"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-2">time.fyi</h1>
      <p className="text-lg text-gray-300 mb-4 text-center max-w-md">
        Time related tools to help you stay productive and organized
      </p>
      <button
        className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition"
        onClick={() => navigate("/home")}
      >
        Start App
      </button>
      <span className="text-xs text-gray-400 mt-2">No sign-up required</span>
    </div>
  );
}
