import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal, Shield, Lock, CalendarDays } from "lucide-react";

const PHRASES = [
  "Cloud Security Engineering",
  "Cloud Penetration Testing",
  "Cloud Security Research",
  "Cloud Ethical Hacking",
];

export default function LandingHeader() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < PHRASES[phraseIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + PHRASES[phraseIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1500);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setCharIndex(0);
        setDisplayedText("");
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, 800);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, phraseIndex]);

  return (
    <div className="flex flex-col items-center mb-16 text-center font-mono">
      {/* Terminal-style logo section */}
      <div className="mb-8 relative">
        <div className=" p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4">root@securecloudX:~$</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main heading with security styling */}
      <div className="mb-6">
        <h1 className="text-5xl font-bold mb-4 text-gray-300">
          secure<span className="text-red-400">cloud</span>X
        </h1>
        <div className="flex items-center justify-center space-x-2 text-gray-500 mb-4">
          <Shield className="w-5 h-5" />
          <span className="text-sm">
            // Learn cloud security by doing!
          </span>
          <Lock className="w-5 h-5" />
        </div>
      </div>

      {/* Terminal-style typing animation */}
      <div className="bg-gray-900 border border-gray-700 p-4 mb-8 min-h-[60px] flex items-center justify-center w-full max-w-md">
        <div className="flex items-center space-x-2">
          <span className="text-green-400">$</span>
          <span className="text-gray-400">./learn</span>
          <span className="text-red-400 text-lg font-bold min-w-[280px] text-left">
            {displayedText}
            <span className="animate-pulse text-green-400">_</span>
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <button
          className="bg-red-600 hover:bg-red-700 border border-red-500 text-white font-mono font-semibold px-8 py-3 transition-all duration-200 group flex items-center space-x-2"
          onClick={() => navigate("/get-started")}
        >
          <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>INITIALIZE SYSTEM</span>
        </button>
        <a
          href="https://cal.com/i-am-ronney/cloud-security-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 border border-yellow-500 text-yellow-400 font-mono font-semibold px-8 py-3 transition-all duration-200 group flex items-center space-x-2"
        >
          <CalendarDays className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>BOOK A SESSION</span>
        </a>
      </div>

      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-6">
        <span>└─$</span>
        <span>No authentication required</span>
        <span className="text-green-400">✓</span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 mt-4">
        <a
          href="http://github.com/securecloudx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm group"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="inline-block"
          >
            <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.349-1.088.635-1.34-2.221-.253-4.555-1.112-4.555-4.945 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C17.138 18.162 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
          </svg>
          <span className="group-hover:underline">github.com/securecloudx</span>
        </a>
        <a
          href="https://x.com/securecloudX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M18.3 2H22L14.8 10.6 23 22h-5l-5.7-7.9L6.3 22H2l8.7-9.6L2.3 2h5.2l5.2 7.5L18.3 2ZM17.2 20h1.6l-9.7-14h-1.7l9.8 14Z" />
          </svg>
          <span className="group-hover:underline">@securecloudX</span>
        </a>
      </div>
    </div>
  );
}
