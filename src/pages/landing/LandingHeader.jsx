import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal, Shield, CalendarDays, LogIn, Users, Globe, Clock, ChevronRight } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import LatestBlogsPanel from "./LatestBlogsPanel";

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
    <div className="mb-16 font-mono">
      {/*
        gap-6: tighter column gutter so left and right feel like one composition.
        items-start: both columns anchor to their own top edge.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_268px] gap-6 items-start">

        {/* ── LEFT: hero ── */}
        {/*
          flex-col gap-6: single spacing token drives all vertical rhythm —
          no more ad-hoc mb/mt on each child.
        */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

          {/* Terminal window — badge lives in the title bar so this block
              and the blog panel share the exact same top edge. */}
          <div className="w-full border border-gray-700 bg-gray-900/70">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-700/60 bg-gray-800/60">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-gray-300 text-[11px]">root@securecloudX:~</span>
              {/* Badge tucked to the right of the title bar */}
              <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] text-gray-300 border border-gray-700/80 px-2 py-0.5">
                <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                free &amp; open source
              </span>
            </div>
            <div className="px-4 py-4 flex items-center gap-2">
              <span className="text-green-400 select-none">$</span>
              <span className="text-gray-500 select-none">./learn</span>
              <span className="text-red-400 font-semibold">
                {displayedText}
                <span className="animate-pulse text-green-400">▋</span>
              </span>
            </div>
          </div>

          {/* Heading + tagline as one grouped block */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-100 mb-3 leading-none">
              secure<span className="text-red-400">cloud</span>X
            </h1>
            <p className="text-gray-400 text-sm flex items-start gap-2">
              <Shield className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
              Learn cloud security by doing — labs, blogs, and real-world challenges.
            </p>
          </div>

          {/* CTAs + optional session status as one block */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-2.5 transition-colors flex items-center justify-center gap-2 group"
                onClick={() => (user ? navigate("/get-started") : signIn())}
              >
                {user ? (
                  <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                ) : (
                  <LogIn className="w-4 h-4" />
                )}
                <span>{user ? "Open Dashboard" : "Get Started"}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="https://cal.com/i-am-ronney?redirect=false"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-2.5 transition-colors flex items-center justify-center gap-2"
              >
                <CalendarDays className="w-4 h-4 text-yellow-500" />
                Book a Call
              </a>
            </div>
            {user && (
              <p className="text-[11px] text-gray-600">
                <span className="text-green-500">●</span>{" "}
                {user.user_metadata?.user_name ?? user.email} · session active
              </p>
            )}
          </div>

          {/* Stats strip — w-full so it matches the terminal window width */}
          <div className="w-full flex items-stretch text-xs border border-gray-700/70 divide-x divide-gray-700/70">
            <div className="flex items-center gap-2 px-4 py-2.5">
              <Users className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-gray-100 font-semibold">400+/mo</span>
              <span className="text-gray-500">learners</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5">
              <Globe className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-gray-100 font-semibold">30+</span>
              <span className="text-gray-500">countries</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5">
              <Clock className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-gray-100 font-semibold">1 yr</span>
              <span className="text-gray-500">growing</span>
            </div>
          </div>

        </div>

        {/* ── RIGHT: latest blogs panel ── */}
        <LatestBlogsPanel />

      </div>
    </div>
  );
}
