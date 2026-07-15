import { useEffect } from "react";
import { LogIn, X } from "lucide-react";

const DISMISS_MS = 5000;

/**
 * Fixed-position toast that prompts unauthenticated users to sign in.
 * Renders at bottom-right with a self-shrinking progress bar.
 *
 * Props:
 *   onClose  — called when the toast dismisses (auto or manual)
 *   onSignIn — called when the "Sign in with GitHub" button is clicked
 */
export default function AuthToast({ onClose, onSignIn }) {
  useEffect(() => {
    const t = setTimeout(onClose, DISMISS_MS);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono w-72 border border-gray-600 bg-gray-900 shadow-2xl">
      {/* Progress bar — shrinks over DISMISS_MS, driven by @keyframes shrink in index.css */}
      <div
        className="h-0.5 bg-red-500/70 w-full"
        style={{ animation: `shrink ${DISMISS_MS}ms linear forwards` }}
      />

      <div className="flex items-start justify-between gap-3 px-4 pt-3 pb-2">
        <div>
          <p className="text-gray-200 text-sm font-semibold">Sign in required</p>
          <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
            This content is only available to authenticated users.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-300 transition-colors flex-shrink-0 mt-0.5"
          aria-label="Dismiss"
        >
          <X size={13} />
        </button>
      </div>

      <div className="px-4 pb-4 pt-1">
        <button
          onClick={onSignIn}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold py-2 transition-colors"
        >
          <LogIn size={12} />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
