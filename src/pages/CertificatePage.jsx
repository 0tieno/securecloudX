import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useProgress } from "../hooks/useProgress";
import Certificate from "../components/Certificate";

const PHASE_IDS = [1, 2, 3, 4, 5, 6, 7];

export default function CertificatePage() {
  const { user, loading: authLoading } = useAuth();
  const { isComplete, loading } = useProgress(user?.id);
  const navigate = useNavigate();

  const allDone =
    !loading &&
    PHASE_IDS.every(
      (id) => isComplete(id, "overview") && isComplete(id, "task")
    );

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <span className="text-gray-500 font-mono text-sm animate-pulse">loading...</span>
      </div>
    );
  }

  if (!allDone) {
    return (
      <div className="min-h-screen bg-gray-900 font-mono pb-20">
        <div className="w-full max-w-2xl mx-auto px-4 py-20 text-center">
          <Lock className="w-12 h-12 text-gray-600 mx-auto mb-6" />
          <h1 className="text-xl text-gray-300 mb-3">Certificate Locked</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Complete all 7 phases (overview + lab) to unlock your certificate.
          </p>
          <div className="inline-flex flex-col gap-2 text-left text-sm">
            {PHASE_IDS.map((id) => {
              const ov = isComplete(id, "overview");
              const tk = isComplete(id, "task");
              const done = ov && tk;
              return (
                <div key={id} className="flex items-center gap-2">
                  <span className={done ? "text-green-400" : "text-gray-600"}>
                    {done ? "✓" : "○"}
                  </span>
                  <span className={done ? "text-gray-400" : "text-gray-600"}>
                    Phase {id}
                  </span>
                  {!done && (
                    <span className="text-gray-700 text-xs">
                      {!ov && !tk ? "(overview + lab)" : !ov ? "(overview)" : "(lab)"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <button
              onClick={() => navigate("/home")}
              className="text-gray-500 hover:text-gray-300 text-sm font-mono border border-gray-700 hover:border-gray-500 px-4 py-2 transition-colors"
            >
              ← back to dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const userName =
    user?.user_metadata?.full_name ??
    user?.user_metadata?.user_name ??
    user?.email ??
    "Learner";

  return (
    <div className="min-h-screen bg-gray-900 font-mono pb-20">
      <div className="w-full max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <ShieldCheck className="w-8 h-8 text-green-400 mx-auto mb-3" />
          <h1 className="text-xl text-gray-300 mb-2">
            Congratulations, {user?.user_metadata?.user_name ?? "learner"}!
          </h1>
          <p className="text-gray-500 text-sm">
            You've completed all 7 phases of the Cloud Security Engineering Program.
          </p>
        </div>

        {/* Certificate */}
        <div className="overflow-x-auto flex justify-center">
          <Certificate
            userName={userName}
            userId={user?.id}
            completedDate={new Date()}
          />
        </div>

        {/* Social CTA */}
        <div className="mt-12 max-w-lg mx-auto text-center bg-gray-800 border border-gray-700 p-6">
          <p className="text-gray-300 text-sm mb-1">You earned it — now let the world know.</p>
          <p className="text-gray-500 text-xs leading-relaxed mb-5">
            Share your achievement, tag us on socials, and help others discover the program.
            Every share helps someone start their cloud security journey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <a
              href="https://twitter.com/intent/tweet?text=I%20just%20completed%20the%20Cloud%20Security%20Engineering%20Program%20on%20%40securecloudX%20%F0%9F%9B%A1%EF%B8%8F%20Check%20it%20out%3A%20https%3A%2F%2Fsecureclouds.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-400 hover:text-gray-200 font-mono text-xs px-4 py-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Post on X
            </a>
            <a
              href="https://github.com/0tieno/securecloudX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-yellow-600 hover:border-yellow-400 text-yellow-400 hover:text-yellow-300 font-mono text-xs px-4 py-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Star on GitHub
            </a>
          </div>

          <p className="text-gray-600 text-[11px] font-mono">
            tag <span className="text-gray-400">@0tieno</span> on X · <span className="text-gray-400">@i_am_ronney</span> on LinkedIn · we love seeing your wins
          </p>
        </div>
      </div>
    </div>
  );
}
