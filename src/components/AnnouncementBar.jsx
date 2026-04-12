import { PartyPopper } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-2 left-2 right-2 text-gray-300 text-center font-mono text-xs sm:text-sm py-2 sm:py-3 px-2 sm:px-4 z-50 shadow-lg"
      style={{ letterSpacing: "0.02em" }}
    >
      {/* Desktop version */}
      <div className="hidden sm:flex items-center justify-center space-x-2">
        <PartyPopper className="w-4 h-4 text-yellow-400" />
        <span className="text-yellow-400">[MILESTONE]</span>
        <span>
          we just turned {""}
          <span className="text-yellow-400 font-bold">
            1yr
          </span> with {""}
          <span className="text-yellow-400 font-bold">
            400 users/m
          </span> on overall {""}
          <span className="text-yellow-400 font-bold">
            4k+ in 30+ countries
          </span> {""}
          — thank you for learning with us!
        </span>
        <PartyPopper className="w-4 h-4 text-yellow-400" />
      </div>

      {/* Mobile version */}
      <div className="flex sm:hidden items-center justify-center space-x-1">
        <PartyPopper className="w-3 h-3 text-yellow-400 flex-shrink-0" />
        <span className="text-yellow-400 text-xs font-bold">1 Year!</span>
        <span className="text-xs">SecureCloudX turns 1 🎉</span>
        <PartyPopper className="w-3 h-3 text-yellow-400 flex-shrink-0" />
      </div>
    </div>
  );
}
