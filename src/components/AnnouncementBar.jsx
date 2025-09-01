import React from "react";
import { Terminal, Zap } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-2 left-0 right-0 mx-2 bg-gray-800 border border-red-400 text-gray-300 text-center font-mono text-sm py-3 px-4 z-50 shadow-lg"
      style={{ letterSpacing: "0.02em" }}
    >
      <div className="flex items-center justify-center space-x-2">
        <Terminal className="w-4 h-4 text-red-400" />
        <span className="text-red-400">[SYSTEM ALERT]</span>
        <span>
          Cloud pentesting labs now live - penetration testing arsenal deployed
        </span>
        <Zap className="w-4 h-4 text-red-400 animate-pulse" />
      </div>
    </div>
  );
}
