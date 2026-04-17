import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useProgress } from "../hooks/useProgress";

/**
 * Silently marks the phase overview as complete when the component mounts.
 * Drop this anywhere inside an Overview page component.
 */
export default function AutoMarkOverview({ phaseId }) {
  const { user } = useAuth();
  const { isComplete, toggle } = useProgress(user?.id);

  useEffect(() => {
    if (user && !isComplete(phaseId, "overview")) {
      toggle(phaseId, "overview", true);
    }
    // Only run when user loads the page for the first time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, phaseId]);

  return null;
}
