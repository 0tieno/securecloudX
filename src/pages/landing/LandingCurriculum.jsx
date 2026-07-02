import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Lock, LogIn } from "lucide-react";
import { PHASES, ADVANCED } from "../../data/phases";
import { useAuth } from "../../contexts/AuthContext";

export default function LandingCurriculum() {
  const { user, signIn } = useAuth();
  const [gateVisible, setGateVisible] = useState(false);

  function handleModuleClick(e) {
    if (!user) {
      e.preventDefault();
      setGateVisible(true);
    }
  }

  return (
    <div className="w-full mt-16">
      {/* Section header */}
      <div className="mb-8 text-center">
        <p className="text-green-400 text-sm mb-1">
          <span>$</span> cat curriculum.md
        </p>
        <h2 className="text-3xl font-bold text-gray-300">
          // What You&apos;ll Learn
        </h2>
        <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
          7 core modules + 2 advanced topics. Hands-on labs for every phase.
          Complete the core path to earn your certificate.
        </p>
      </div>

      {/* Login gate banner */}
      {gateVisible && (
        <div className="mb-6 border border-red-500/50 bg-red-500/10 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <LogIn className="w-5 h-5 text-red-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1 text-sm">
            <span className="text-red-300 font-semibold">auth required — </span>
            <span className="text-gray-400">you need to sign in before accessing a module.</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <button
              onClick={signIn}
              className="bg-red-600 hover:bg-red-700 border border-red-500 text-white font-mono font-semibold px-4 py-1.5 transition-colors"
            >
              SIGN IN
            </button>
            <button
              onClick={() => setGateVisible(false)}
              className="text-gray-500 hover:text-gray-300 transition-colors font-mono"
            >
              dismiss
            </button>
          </div>
        </div>
      )}

      {/* Phase 0 — full width */}
      <Link
        to="/start"
        onClick={handleModuleClick}
        className="flex items-start gap-4 bg-gray-800 border border-gray-700 hover:border-gray-500 p-5 transition-colors group mb-3"
      >
        <span className="text-gray-500 font-bold text-xl w-8 shrink-0">0</span>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-300 group-hover:text-blue-400 mb-1">
            New to Cloud? Start Here
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Beginner-friendly resources to build your cloud and security foundation.
          </p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 shrink-0 mt-1" />
      </Link>

      {/* Core phases — 2-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {PHASES.map((phase, index) => (
          <Link
            key={phase.id}
            to={phase.path}
            onClick={handleModuleClick}
            className={`flex items-start gap-4 bg-gray-800 border border-gray-700 hover:border-gray-500 p-5 transition-colors group${
              PHASES.length % 2 !== 0 && index === PHASES.length - 1
                ? " sm:col-span-2"
                : ""
            }`}
          >
            <span className="text-gray-500 font-bold text-xl w-8 shrink-0">
              {phase.id}
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-300 group-hover:text-blue-400 mb-1">
                {phase.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 shrink-0 mt-1" />
          </Link>
        ))}
      </div>

      {/* Advanced topics — 2-column grid */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-lg font-bold text-gray-300">// Advanced Topics</h3>
          <span className="text-xs font-mono text-yellow-400 border border-yellow-500/40 bg-yellow-500/10 px-2 py-0.5">
            OPTIONAL
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          Complete the core path first. These modules extend your skills into specialist domains.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ADVANCED.map((adv) => (
            <Link
              key={adv.id}
              to={adv.path}
              onClick={handleModuleClick}
              className="flex items-start gap-4 bg-gray-800 border border-yellow-900/40 hover:border-yellow-700/50 p-5 transition-colors group"
            >
              <span className="text-yellow-700 font-bold text-xl w-8 shrink-0">
                {adv.id}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-gray-300 group-hover:text-blue-400">
                    {adv.title}
                  </h3>
                  <span className="text-xs font-mono text-yellow-600 border border-yellow-700/40 px-1.5 py-0.5">
                    ADVANCED
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
