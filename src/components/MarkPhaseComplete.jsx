import { useAuth } from "../contexts/AuthContext";
import { useProgress } from "../hooks/useProgress";

/**
 * Terminal-styled toggle for marking a phase task complete/incomplete.
 * Only rendered when the user is authenticated.
 *
 * Props:
 *   phaseId      number  — 1–7
 *   taskKey      string  — "task" | "task-phase1" | "task-phase2" | "task-phase3"
 *   checkedCount number  — how many steps the user has checked (optional)
 *   total        number  — total steps required before enabling (optional)
 */
export default function MarkPhaseComplete({ phaseId, taskKey = "task", checkedCount, total }) {
  const { user } = useAuth();
  const { isComplete, toggle } = useProgress(user?.id);

  if (!user) return null;

  const done = isComplete(phaseId, taskKey);
  const hasGating = typeof checkedCount === "number" && typeof total === "number" && total > 0;
  const allStepsDone = !hasGating || checkedCount >= total;

  return (
    <div className="mt-8 p-4 bg-gray-800 border border-gray-700 font-mono">
      <p className="text-xs text-gray-500 mb-3">
        <span className="text-green-400">$</span> ./mark_complete --phase {phaseId}
        {taskKey !== "task" && ` --task ${taskKey}`}
      </p>

      {hasGating && !allStepsDone && (
        <p className="text-xs text-yellow-500 mb-3">
          ⚠ complete all steps first — {checkedCount}/{total} checked
        </p>
      )}

      <button
        disabled={!allStepsDone}
        onClick={() => allStepsDone && toggle(phaseId, taskKey, !done)}
        className={`flex items-center gap-3 text-sm transition-colors group ${
          !allStepsDone
            ? "text-gray-600 cursor-not-allowed"
            : done
            ? "text-green-400 hover:text-yellow-400"
            : "text-gray-400 hover:text-green-400"
        }`}
      >
        <span
          className={`border px-1 font-mono text-xs ${
            !allStepsDone
              ? "border-gray-700 text-gray-700"
              : done
              ? "border-green-500 text-green-400"
              : "border-gray-600 text-gray-600 group-hover:border-green-500 group-hover:text-green-400"
          }`}
        >
          {done ? "x" : " "}
        </span>
        <span>
          {done
            ? `Phase ${phaseId} task complete — well done!`
            : `Mark Phase ${phaseId} task as complete`}
        </span>
      </button>
    </div>
  );
}


/**
 * Terminal-styled toggle for marking a phase task complete/incomplete.
 * Only rendered when the user is authenticated.
 *
 * Props:
 *   phaseId  number  — 1–7
 *   taskKey  string  — "task" | "task-phase1" | "task-phase2" | "task-phase3"
 */
