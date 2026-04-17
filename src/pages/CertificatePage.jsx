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
      </div>
    </div>
  );
}
