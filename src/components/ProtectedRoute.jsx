import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

/**
 * Wraps a route so only authenticated users can access it.
 * Shows a terminal-style loading screen while the initial session is resolved.
 */
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center font-mono">
        <div className="text-gray-400">
          <span className="text-green-400">$</span> authenticating
          <span className="animate-pulse text-green-400 ml-1">_</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
