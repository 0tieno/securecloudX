import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useProgress } from "../hooks/useProgress";
import Certificate from "../components/Certificate";

const PHASE_IDS = [1, 2, 3, 4, 5, 6, 7];
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

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
            Complete all 7 core phases (overview + lab) to unlock your certificate.
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
            You've completed all 8 phases of the Cloud Security Engineering Program.
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
        {(() => {
          const certShareBase = `${SUPABASE_URL}/functions/v1/cert-share`;
          const now = new Date();
          const issueYear = now.getFullYear();
          const issueMonth = now.getMonth() + 1;
          const verifyUrl = `${window.location.origin}/verify/${user?.id ?? ""}`;
          const linkedInUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent("Cloud Security Engineering Certificate")}&organizationId=&issueYear=${issueYear}&issueMonth=${issueMonth}&certUrl=${encodeURIComponent(verifyUrl)}`;
          return (
        <div className="mt-12 max-w-lg mx-auto text-center bg-gray-800 border border-gray-700 p-6">
          <p className="text-gray-300 text-sm mb-1">You earned it — now let the world know.</p>
          <p className="text-gray-500 text-xs leading-relaxed mb-5">
            Share your achievement, tag us on socials, and help others discover the program.
            Every share helps someone start their cloud security journey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('I just completed all 8 phases of the @securecloudX Cloud Security Engineering Program! \u{1F6E1}\n\nVerify my certificate:')}&url=${encodeURIComponent(certShareBase + '?certId=SCX')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-400 hover:text-gray-200 font-mono text-xs px-4 py-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Share on X
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-blue-600 hover:border-blue-400 text-blue-400 hover:text-blue-300 font-mono text-xs px-4 py-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              Add to LinkedIn
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
            tag <span className="text-gray-400">@securecloudX</span> on X · <span className="text-gray-400">@ronney otieno</span> on LinkedIn · we love seeing your wins
          </p>
        </div>
          );
        })()}
      </div>
    </div>
  );
}
