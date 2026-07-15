import { useEffect } from "react";
import { X } from "lucide-react";

const DISMISS_MS = 4000;

export default function WelcomeBackToast({ username, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, DISMISS_MS);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 w-72 bg-gray-900 border border-gray-700 font-mono shadow-xl">
      <div className="h-0.5 bg-gradient-to-r from-green-500 via-green-400/60 to-transparent" />
      <div className="px-4 py-3.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-green-400 text-xs mb-0.5">$ ./session --resume</p>
            <p className="text-gray-100 text-sm font-semibold">
              Welcome back,{" "}
              <span className="text-green-400">{username}</span>!
            </p>
            <p className="text-gray-500 text-xs mt-1">Secure session restored.</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-400 transition-colors flex-shrink-0 mt-0.5"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <div
        className="h-0.5 bg-green-500 origin-left"
        style={{ animation: `shrink ${DISMISS_MS}ms linear forwards` }}
      />
    </div>
  );
}
