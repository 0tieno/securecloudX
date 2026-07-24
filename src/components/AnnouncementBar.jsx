import { Link } from "react-router-dom";
import { FlaskConical } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 bg-gray-950/95 backdrop-blur border-b border-gray-800/70 text-gray-300 text-center font-mono text-xs sm:text-sm py-2 sm:py-2.5 px-2 sm:px-4 z-50"
      style={{ letterSpacing: "0.04em" }}
    >
      {/* Desktop version */}
      <div className="hidden sm:flex items-center justify-center space-x-2">
        <FlaskConical className="w-4 h-4 text-red-400" />
        <span className="text-red-400">[NEW]</span>
        <span>
          SecureCloudX Research Hub is live —{" "}
          <Link
            to="/research"
            className="text-red-400 font-bold underline hover:text-red-300 transition-colors"
          >
            read our Research Charter
          </Link>
        </span>
        <FlaskConical className="w-4 h-4 text-red-400" />
      </div>

      {/* Mobile version */}
      <div className="flex sm:hidden items-center justify-center space-x-1">
        <FlaskConical className="w-3 h-3 text-red-400 flex-shrink-0" />
        <Link
          to="/research"
          className="text-red-400 text-xs font-bold underline hover:text-red-300 transition-colors"
        >
          Research Charter — now live
        </Link>
        <FlaskConical className="w-3 h-3 text-red-400 flex-shrink-0" />
      </div>
    </div>
  );
}
