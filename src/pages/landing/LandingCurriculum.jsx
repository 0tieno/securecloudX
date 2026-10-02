import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { PHASES, ADVANCED } from "../../data/phases";
import { useAuth } from "../../contexts/AuthContext";
import AuthToast from "../../components/AuthToast";

function ModuleLink({ module, onClick }) {
  return (
    <Link
      to={module.path}
      onClick={onClick}
      className="flex h-full items-start gap-3 sm:gap-4 border-t border-gray-700 hover:border-gray-500 hover:bg-gray-800/30 py-6 transition-colors group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
    >
      <span className="text-red-400 text-sm font-semibold w-7 sm:w-8 shrink-0 pt-0.5">
        {String(module.id).padStart(2, "0")}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-200 group-hover:text-red-400 mb-3 leading-relaxed">
          {module.title}
        </h3>
        <p className="text-gray-300 text-sm font-medium leading-6">
          {module.description}
        </p>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 shrink-0 mt-1.5" aria-hidden="true" />
    </Link>
  );
}

export default function LandingCurriculum() {
  const { user, signIn } = useAuth();
  const [showToast, setShowToast] = useState(false);

  function handleModuleClick(e) {
    if (!user) {
      e.preventDefault();
      setShowToast(true);
    }
  }

  return (
    <section id="curriculum" className="w-full mt-12 sm:mt-16 scroll-mt-32 md:scroll-mt-24" aria-labelledby="curriculum-heading">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">01 / curriculum</span>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      <div className="mb-8">
        <h2 id="curriculum-heading" className="text-2xl sm:text-3xl font-bold text-gray-200 tracking-tight">
          Build your core skills.
        </h2>
        <p className="text-gray-300 text-sm font-medium mt-3 max-w-xl leading-6">
          Follow {PHASES.length} core modules from identity to architecture, with hands-on labs at every step.
          Complete the overviews and labs to earn your completion certificate.
        </p>
        {!user && <p className="text-gray-400 text-xs font-medium mt-3 leading-6">Browse the curriculum freely. Sign in with GitHub to open the modules and labs.</p>}
      </div>

      <Link
        to="/start"
        onClick={handleModuleClick}
        className="flex items-start gap-3 sm:gap-4 border border-gray-700 border-l-2 border-l-red-400 bg-gray-800/40 px-4 sm:px-5 py-6 transition-colors group mb-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
      >
        <span className="text-red-400 text-sm font-semibold w-7 sm:w-8 shrink-0 pt-0.5">00</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-gray-400 mb-2">Your starting point</p>
          <h3 className="text-base font-semibold text-gray-200 group-hover:text-red-400 mb-2">
            New to Cloud? Start Here
          </h3>
          <p className="text-gray-300 text-sm font-medium leading-6">
            Beginner-friendly resources to build your cloud and security foundation.
          </p>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 shrink-0 mt-1.5" aria-hidden="true" />
      </Link>

      <ol aria-label="Core modules" className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mb-12">
        {PHASES.map((phase, index) => (
          <li
            key={phase.id}
            className={`min-w-0${
              PHASES.length % 2 !== 0 && index === PHASES.length - 1
                ? " sm:col-span-2"
                : ""
            }`}
          >
            <ModuleLink module={phase} onClick={handleModuleClick} />
          </li>
        ))}
      </ol>

      <section id="advanced-topics" aria-labelledby="advanced-heading" className="scroll-mt-32 md:scroll-mt-24">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h2 id="advanced-heading" className="text-2xl font-bold text-gray-200 tracking-tight">Advanced topics</h2>
          <span className="text-xs font-semibold text-gray-400 tracking-wider">
            / OPTIONAL
          </span>
        </div>
        <p className="text-gray-300 text-sm font-medium mb-6 leading-6 max-w-xl">
          Complete the core path first. These {ADVANCED.length} optional modules extend your skills into specialist domains and are not required for your certificate.
        </p>
        <ol aria-label="Advanced modules" className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {ADVANCED.map((adv) => (
            <li
              key={adv.id}
              className="min-w-0"
            >
              <ModuleLink module={adv} onClick={handleModuleClick} />
            </li>
          ))}
        </ol>
      </section>

      {showToast && (
        <AuthToast
          onClose={() => setShowToast(false)}
          onSignIn={() => { setShowToast(false); signIn(); }}
        />
      )}
    </section>
  );
}
