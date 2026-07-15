import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal, BookOpen, FlaskConical, Award, ChevronRight, X } from "lucide-react";

const WELCOME_KEY = (uid) => `scx_welcomed_${uid}`;

export function hasSeenWelcome(uid) {
  return !!localStorage.getItem(WELCOME_KEY(uid));
}

function markSeen(uid) {
  localStorage.setItem(WELCOME_KEY(uid), "1");
}

const FEATURES = [
  { icon: FlaskConical, label: "Hands-on labs",    desc: "real-world attack & defence scenarios" },
  { icon: BookOpen,     label: "Research blogs",   desc: "in-depth cloud security breakdowns"    },
  { icon: Award,        label: "Certificates",     desc: "verifiable proof of your skills"       },
];

export default function WelcomeModal({ user, onClose }) {
  const navigate = useNavigate();
  const username =
    user?.user_metadata?.user_name ?? user?.email?.split("@")[0] ?? "there";

  function dismiss() {
    markSeen(user.id);
    onClose();
  }

  function handleStart() {
    markSeen(user.id);
    onClose();
    navigate("/home");
  }

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") dismiss(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={dismiss}
    >
      <div
        className="w-full max-w-md border border-gray-700 bg-gray-900 font-mono shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Red accent bar */}
        <div className="h-0.5 bg-gradient-to-r from-red-500 via-red-400/60 to-transparent" />

        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-700/60 bg-gray-800/50">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-gray-400 text-[11px]">init.sh — welcome</span>
          <button
            onClick={dismiss}
            className="ml-auto text-gray-600 hover:text-gray-400 transition-colors"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="text-green-400 text-xs mb-2">$ ./welcome --user {username}</p>
          <h2 className="text-xl font-bold text-gray-100 mb-1">
            You're in,{" "}
            <span className="text-red-400">{username}</span>.
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            securecloudX is your hands-on cloud security training ground.
            Here's what you've just unlocked.
          </p>

          <ul className="space-y-3.5 mb-8">
            {FEATURES.map(({ icon: Icon, label, desc }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  <span className="text-gray-200 font-semibold">{label}</span>
                  <span className="text-gray-500"> — {desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={handleStart}
            className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2.5 flex items-center justify-center gap-2 transition-colors group"
          >
            <Terminal className="w-4 h-4" />
            Start Exploring
            <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
