import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

/**
 * Landing page for the GitHub OAuth callback.
 * Supabase handles the token exchange automatically via the URL hash/code.
 * We just wait for the session to settle then redirect to /home.
 */
export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase will detect the ?code= param and exchange it for a session.
    // onAuthStateChange in AuthContext will pick it up. We just wait briefly
    // then navigate; if auth fails, the ProtectedRoute on /home will redirect
    // back to /.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event) => {
        if (event === "SIGNED_IN") {
          subscription.unsubscribe();
          navigate("/home", { replace: true });
        }
      }
    );

    // Fallback: if we never hear SIGNED_IN within 5 s, go to landing
    const fallback = setTimeout(() => {
      subscription.unsubscribe();
      navigate("/", { replace: true });
    }, 5000);

    return () => {
      clearTimeout(fallback);
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center font-mono">
      <div className="bg-gray-800 border border-gray-700 p-8 text-center">
        <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 justify-center">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <p className="text-green-400 mb-2">root@securecloudX:~$</p>
        <p className="text-gray-300">
          ./authenticate --provider github
          <span className="animate-pulse text-green-400 ml-1">_</span>
        </p>
        <p className="text-gray-500 text-sm mt-4">Establishing secure session…</p>
      </div>
    </div>
  );
}
