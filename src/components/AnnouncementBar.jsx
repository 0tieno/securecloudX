import { Terminal, Zap } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-2 left-2 right-2 text-gray-300 text-center font-mono text-xs sm:text-sm py-2 sm:py-3 px-2 sm:px-4 z-50 shadow-lg"
      style={{ letterSpacing: "0.02em" }}
    >
      {/* Desktop version */}
      <div className="hidden sm:flex items-center justify-center space-x-2">
        <Terminal className="w-4 h-4 text-red-400" />
        <span className="text-red-400">[SYSTEM ALERT]</span>
        <span>
          Ongoing [October] - a blog a day challenge
        </span>
        <Zap className="w-4 h-4 text-red-400 animate-pulse" />
      </div>

      {/* Mobile version */}
      <div className="flex sm:hidden items-center justify-center space-x-1">
        <Terminal className="w-3 h-3 text-red-400 flex-shrink-0" />
        <span className="text-red-400 text-xs">[ALERT]</span>
        <span className="text-xs truncate">
          Cloud pentesting labs & Blogs now live - Open sourced!
        </span>
        <Zap className="w-3 h-3 text-red-400 animate-pulse flex-shrink-0" />
      </div>
    </div>
  );
}
