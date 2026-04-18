import { Link } from "react-router-dom";
import {
  ExternalLink,
  CheckCircle2,
  Circle,
  ChevronRight,
  Terminal,
  Lock,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useAllStepCounts } from "../hooks/useStepProgress";
import { useProgress } from "../hooks/useProgress";

const PHASES = [
  {
    id: 1,
    title: "Identity & Access Management",
    description:
      "Zero Trust IAM — Entra ID, RBAC, Conditional Access, PIM, and break-glass accounts.",
    path: "/module1",
    taskPath: "/module1/task",
  },
  {
    id: 2,
    title: "Network Security & Perimeter Defense",
    description:
      "Defense in Depth — VNets, NSG micro-segmentation, Private Endpoints, Bastion, Network Watcher.",
    path: "/module2",
    taskPath: "/module2/task",
  },
  {
    id: 3,
    title: "Data Security & Encryption",
    description:
      "Data classification, AES-256 encryption at rest, TLS in transit, SAS tokens, soft delete & versioning.",
    path: "/module3",
    taskPath: "/module3/task",
  },
  {
    id: 4,
    title: "Application Security in Azure",
    description:
      "OWASP Top 10 cloud mapping, Key Vault + Managed Identity golden pattern, App Service hardening, EasyAuth.",
    path: "/module4",
    taskPath: "/module4/task",
  },
  {
    id: 5,
    title: "Cloud Security Posture Management",
    description:
      "Defender for Cloud, Secure Score, Azure Policy, KQL logging, CIS/NIST/ISO compliance frameworks.",
    path: "/module5",
    taskPath: "/module5/task",
  },
  {
    id: 6,
    title: "Detection Engineering & Incident Response",
    description:
      "Microsoft Sentinel, NIST IR lifecycle, analytics rules, KQL detection queries, MITRE ATT&CK mapping.",
    path: "/module6",
    taskPath: "/module6/task",
  },
  {
    id: 7,
    title: "Capstone — Security Architecture Review",
    description:
      "Deploy SecureMed, STRIDE threat model, CIS benchmark review, Secure Score remediation, assessment report.",
    path: "/module7",
    taskPath: "/module7/task",
  },
];

function PhaseStatusBadge({ overviewDone, taskDone }) {
  if (overviewDone && taskDone)
    return (
      <span className="text-xs font-mono text-green-400 border border-green-500/50 bg-green-500/10 px-2 py-0.5">
        [ COMPLETE ]
      </span>
    );
  if (overviewDone || taskDone)
    return (
      <span className="text-xs font-mono text-yellow-400 border border-yellow-500/50 bg-yellow-500/10 px-2 py-0.5">
        [ IN PROGRESS ]
      </span>
    );
  return (
    <span className="text-xs font-mono text-gray-500 border border-gray-600 px-2 py-0.5">
      [ PENDING ]
    </span>
  );
}

const Home = () => {
  const { user } = useAuth();
  const { isComplete, loading } = useProgress(user?.id);
  const stepCounts = useAllStepCounts();

  const completedPhases = PHASES.filter(
    (p) => isComplete(p.id, "overview") && isComplete(p.id, "task")
  ).length;

  const nextPhase = PHASES.find(
    (p) => !isComplete(p.id, "overview") || !isComplete(p.id, "task")
  );

  return (
    <div className="min-h-screen bg-gray-900 pb-32 font-mono">
      <div className="w-full max-w-3xl mx-auto px-4 py-10">

        {/* User greeting */}
        <div className="mb-10 bg-gray-800 border border-gray-700 p-4">
          <div className="flex items-center space-x-2 text-gray-500 text-xs mb-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            <span className="ml-2">securecloudX — dashboard</span>
          </div>
          <p className="text-green-400 text-sm">
            root@securecloudX:~${" "}
            <span className="text-gray-300">
              whoami
            </span>
          </p>
          <p className="text-gray-300 mt-1">
            → {user?.user_metadata?.user_name ?? user?.email ?? "guest"}
          </p>

          {/* Overall progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>progress</span>
              <span className="text-gray-300">{completedPhases} / {PHASES.length} phases complete</span>
            </div>
            <div className="w-full bg-gray-700 h-2">
              <div
                className="h-2 bg-green-500 transition-all duration-500"
                style={{
                  width: `${(completedPhases / PHASES.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Next step prompt */}
          {!loading && nextPhase && (
            <div className="mt-3 text-sm">
              <span className="text-green-400">$</span>{" "}
              <span className="text-gray-400">
                ./learn --next-phase{" "}
                <Link
                  to={nextPhase.path}
                  className="text-red-400 hover:text-red-300 underline underline-offset-2"
                >
                  phase_{nextPhase.id}_{nextPhase.title.toLowerCase().replace(/[^a-z0-9]/g, "_")}
                </Link>
              </span>
            </div>
          )}
          {!loading && !nextPhase && completedPhases === PHASES.length && (
            <div className="mt-3 text-sm text-green-400">
              <span>$</span> all phases complete — you are cloud security ready! 🎉
              <Link
                to="/certificate"
                className="ml-3 text-red-400 hover:text-red-300 underline underline-offset-2"
              >
                → claim your certificate
              </Link>
            </div>
          )}
        </div>

        {/* Phase 0 — Starting from zero */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-300 mb-4">
            // Your Journey - The curriculum
          </h2>

          <Link
            to="/start"
            className="flex items-start gap-4 bg-gray-800 border border-gray-700 hover:border-gray-500 p-5 transition-colors group mb-4"
          >
            <span className="text-gray-500 font-bold text-xl w-8 shrink-0">0</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400">
                  New to Cloud? Start Here
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Beginner-friendly resources to build your cloud and security foundation.
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 shrink-0 mt-1" />
          </Link>
        </div>

        {/* Phases 1–7 */}
        <div className="space-y-4">
          {PHASES.map((phase) => {
            const overviewDone = isComplete(phase.id, "overview");
            const taskDone = isComplete(phase.id, "task");
            // Step progress for this phase
            const stepKey = phase.id === 3 ? null : `scx_steps_${phase.id}_task`;
            const stepsDone = phase.id === 3
              ? (stepCounts["scx_steps_3_lab1"] ?? 0) + (stepCounts["scx_steps_3_lab2"] ?? 0) + (stepCounts["scx_steps_3_lab3"] ?? 0)
              : (stepCounts[stepKey] ?? 0);
            const stepsTotal = phase.id === 3 ? 20 : (phase.id === 4 ? 5 : (phase.id === 7 ? 8 : 7));

            return (
              <div
                key={phase.id}
                className="bg-gray-800 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start gap-4 p-5">
                  <span className="text-gray-500 font-bold text-xl w-8 shrink-0">
                    {phase.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-300">
                        {phase.title}
                      </h3>
                      {!loading && (
                        <PhaseStatusBadge overviewDone={overviewDone} taskDone={taskDone} />
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {phase.description}
                    </p>

                    {/* Step progress mini-bar */}
                    {stepsDone > 0 && !taskDone && (
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span className="text-gray-500">lab progress</span>
                          <span className={stepsDone >= stepsTotal ? "text-green-400" : "text-gray-400"}>
                            {stepsDone}/{stepsTotal} steps
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 h-1">
                          <div
                            className="h-1 bg-green-500 transition-all duration-500"
                            style={{ width: `${Math.min((stepsDone / stepsTotal) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Sub-items */}
                    <div className="flex flex-col sm:flex-row gap-3 text-sm">
                      <Link
                        to={phase.path}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group/link"
                      >
                        {!loading && overviewDone ? (
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-600 shrink-0" />
                        )}
                        <span>Overview</span>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        to={phase.taskPath}
                        className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors group/link"
                      >
                        {!loading && taskDone ? (
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-600 shrink-0" />
                        )}
                        <span>Lab</span>
                        {stepsDone > 0 && !taskDone && (
                          <span className="text-xs text-gray-600 font-mono ml-1">{stepsDone}/{stepsTotal}</span>
                        )}
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community */}
        <div className="mt-12 mb-8">
          <div className="text-gray-400 text-sm mb-3">
            <span className="text-green-400">$</span> cat community.links
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://x.com/securecloudX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center gap-2"
            >
              <ExternalLink size={14} />
              → X.com/securecloudX
            </a>
            <a
              href="https://chat.whatsapp.com/Llp1Z8uw8xP5NIByASUV7V"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors text-sm inline-flex items-center gap-2"
            >
              <ExternalLink size={14} />
              → whatsapp_community.join()
            </a>
            <a
              href="https://forms.office.com/r/5yqb8Xw5GK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm inline-flex items-center gap-2"
            >
              <ExternalLink size={14} />
              → subscribe_to_updates()
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

