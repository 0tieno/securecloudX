import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal, Shield, Lock, CalendarDays, LogIn, Users, Globe, Clock } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const PHRASES = [
  "Cloud Security Engineering",
  "Cloud Penetration Testing",
  "Cloud Security Research",
  "Cloud Ethical Hacking",
];

export default function LandingHeader() {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();
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
        timeout = setTimeout(() => setTyping(false), 1500);
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
    <div className="flex flex-col items-center mb-16 text-center font-mono relative">

      {/* Artsy annotation - left of heading */}
      <div
        className="absolute hidden sm:flex flex-col items-end select-none pointer-events-none"
        style={{ right: "calc(50% + 165px)", top: "42px" }}
      >
        <p
          className="text-yellow-400 text-[11px] whitespace-nowrap"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic", transform: "rotate(-4deg)", transformOrigin: "right center" }}
        >
          free &amp; open sourced.
        </p>
        <svg width="90" height="38" viewBox="0 0 90 38" fill="none" className="mt-0.5">
          <path d="M3 5 C25 3 62 22 84 28" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M79 22 L85 29 L78 31" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Terminal-style logo section */}
      <div className="flex items-center space-x-2 text-gray-400 text-sm mb-8">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4">root@securecloudX:~$</span>
      </div>

      {/* Main heading */}
      <div className="mb-6">
        <h1 className="text-5xl font-bold mb-4 text-gray-300">
          secure<span className="text-red-400">cloud</span>X
        </h1>

        <div className="flex items-center justify-center space-x-2 text-gray-500 mb-4">
          <Shield className="w-5 h-5" />
          <span className="text-sm">// Learn cloud security by doing!</span>
          <Lock className="w-5 h-5" />
        </div>
      </div>

      {/* Terminal typing animation */}
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
          onClick={() => (user ? navigate("/get-started") : signIn())}
        >
          {user ? (
            <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          ) : (
            <LogIn className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          )}
          <span>{user ? "OPEN DASHBOARD" : "INITIALIZE SYSTEM"}</span>
        </button>
        <a
          href="https://cal.com/i-am-ronney?redirect=false"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 border border-yellow-500 text-yellow-400 font-mono font-semibold px-8 py-3 transition-all duration-200 group flex items-center space-x-2"
        >
          <CalendarDays className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>BOOK A CALL</span>
        </a>
      </div>

      {/* Session status */}
      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-6">
        <span>└─$</span>
        {user ? (
          <>
            <span className="text-green-400">{user.user_metadata?.user_name ?? user.email}</span>
            <span>@securecloudX:~$</span>
            <span className="text-green-400">session active ✓</span>
          </>
        ) : (
          <>
            <span>auth: github required</span>
            <span className="text-yellow-400"></span>
          </>
        )}
      </div>

      {/* Stats strip */}
      <div className="flex items-center gap-5 font-mono text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-gray-300 font-semibold">400+/m</span>
          <span>learners</span>
        </div>
        <span className="text-gray-700">|</span>
        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-gray-300 font-semibold">30+</span>
          <span>countries</span>
        </div>
        <span className="text-gray-700">|</span>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-gray-300 font-semibold">1 yr</span>
          <span>& growing</span>
        </div>
      </div>
    </div>
  );
}
