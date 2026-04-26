import { ChevronDown, ChevronUp } from "lucide-react";

const TYPE_CONFIG = {
  READ:      { label: "READ",           color: "text-blue-400",   border: "border-blue-500/40",   bg: "bg-blue-500/10"   },
  WATCH:     { label: "WATCH",          color: "text-cyan-400",   border: "border-cyan-500/40",   bg: "bg-cyan-500/10"   },
  SCENARIO:  { label: "SCENARIO",       color: "text-yellow-400", border: "border-yellow-500/40", bg: "bg-yellow-500/10" },
  NOTE:      { label: "KEY NOTES",      color: "text-green-400",  border: "border-green-500/40",  bg: "bg-green-500/10"  },
  LAB:       { label: "LAB",            color: "text-red-400",    border: "border-red-500/40",    bg: "bg-red-500/10"    },
  PRACTICE:  { label: "PRACTICE",       color: "text-cyan-400",   border: "border-cyan-500/40",   bg: "bg-cyan-500/10"   },
  AI:        { label: "AI PROMPT",      color: "text-purple-400", border: "border-purple-500/40", bg: "bg-purple-500/10" },
  PREP:      { label: "PREP",           color: "text-gray-400",   border: "border-gray-500/40",   bg: "bg-gray-700/50"   },
  EVALUATE:  { label: "EVALUATE",       color: "text-green-400",  border: "border-green-500/40",  bg: "bg-green-500/10"  },
  ARCHITECT: { label: "ARCHITECT",      color: "text-indigo-400", border: "border-indigo-500/40", bg: "bg-indigo-500/10" },
};

/**
 * Controlled expandable step item style with terminal theme.
 *
 * Props:
 *   number          – step number shown in header
 *   type            – key of TYPE_CONFIG (READ | SCENARIO | NOTE | LAB | PRACTICE | AI | PREP | EVALUATE)
 *   title           – heading text
 *   isOpen          – controlled expand/collapse state
 *   onToggleOpen    – callback to flip open state
 *   isChecked       – controlled checkbox state
 *   onToggleChecked – callback to flip checked state
 *   children        – body content (rendered when expanded)
 */
export default function PhaseStepItem({
  number,
  type = "READ",
  title,
  isOpen,
  onToggleOpen,
  isChecked,
  onToggleChecked,
  children,
}) {
  const cfg = TYPE_CONFIG[type] || TYPE_CONFIG.READ;

  return (
    <div className={`border transition-colors ${isChecked ? "border-gray-700/40" : "border-gray-700"} bg-gray-800/40`}>
      {/* Header Row */}
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none group"
        onClick={() => onToggleOpen?.()}
      >
        {/* Checkbox */}
        <button
          className={`w-5 h-5 border flex-shrink-0 flex items-center justify-center text-xs font-bold transition-all ${
            isChecked
              ? "border-green-500 bg-green-500/20 text-green-400"
              : "border-gray-600 text-transparent hover:border-gray-400"
          }`}
          onClick={(e) => { e.stopPropagation(); onToggleChecked?.(); }}
          aria-label="Mark step complete"
        >
          {isChecked ? "✓" : ""}
        </button>

        {/* Number */}
        <span className="text-gray-600 text-xs font-mono w-4 flex-shrink-0 text-center">{number}</span>

        {/* Type Badge */}
        <span className={`text-xs font-bold font-mono px-2 py-0.5 border flex-shrink-0 ${cfg.color} ${cfg.border} ${cfg.bg}`}>
          {cfg.label}
        </span>

        {/* Title */}
        <span className={`flex-1 text-sm sm:text-base font-semibold transition-colors ${
          isChecked ? "text-gray-600 line-through" : "text-gray-300 group-hover:text-white"
        }`}>
          {title}
        </span>

        {/* Expand toggle */}
        <span className="text-gray-600 flex-shrink-0">
          {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </span>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="px-4 pb-4 border-t border-gray-700/40 text-gray-400 text-sm leading-relaxed space-y-2 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}
