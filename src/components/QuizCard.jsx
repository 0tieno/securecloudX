import { useState } from "react";

/**
 * Interactive multiple-choice knowledge check.
 * Props:
 *   question   – string
 *   options    – string[]  (4 options, A–D)
 *   answer     – number    (0-based index of correct option)
 *   explanation – string   (shown after answering)
 */
export default function QuizCard({ question, options, answer, explanation }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (i) => {
    if (revealed) return;
    setSelected(i);
  };

  const handleReveal = () => {
    if (selected === null) return;
    setRevealed(true);
  };

  const handleReset = () => {
    setSelected(null);
    setRevealed(false);
  };

  const labels = ["A", "B", "C", "D"];

  return (
    <div className="border border-pink-500/30 bg-pink-950/20 rounded p-4 my-3">
      <p className="text-gray-200 text-sm font-semibold mb-3 leading-relaxed">{question}</p>
      <div className="space-y-2 mb-3">
        {options.map((opt, i) => {
          let cls = "border border-gray-700 bg-gray-800/60 text-gray-300 hover:border-gray-500 cursor-pointer";
          if (revealed) {
            if (i === answer) cls = "border border-green-500 bg-green-900/30 text-green-300 cursor-default";
            else if (i === selected) cls = "border border-red-500 bg-red-900/30 text-red-300 cursor-default line-through opacity-60";
            else cls = "border border-gray-700/40 bg-gray-800/30 text-gray-600 cursor-default";
          } else if (i === selected) {
            cls = "border border-pink-500 bg-pink-900/30 text-pink-300 cursor-pointer";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left px-3 py-2 text-sm font-mono transition-colors flex items-start gap-2 ${cls}`}
            >
              <span className="flex-shrink-0 font-bold">{labels[i]}.</span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
      {!revealed ? (
        <button
          onClick={handleReveal}
          disabled={selected === null}
          className={`text-xs font-mono px-3 py-1 border transition-colors ${
            selected === null
              ? "border-gray-700 text-gray-600 cursor-not-allowed"
              : "border-pink-500/60 text-pink-400 hover:border-pink-400 hover:text-pink-300 cursor-pointer"
          }`}
        >
          $ reveal answer
        </button>
      ) : (
        <div>
          <div className="mb-2 p-2 border border-gray-700 bg-gray-800/50">
            <span className={`text-xs font-bold font-mono mr-2 ${selected === answer ? "text-green-400" : "text-red-400"}`}>
              {selected === answer ? "✓ CORRECT" : "✗ INCORRECT"}
            </span>
            <span className="text-gray-400 text-xs leading-relaxed">{explanation}</span>
          </div>
          <button
            onClick={handleReset}
            className="text-xs font-mono text-gray-500 hover:text-gray-300 border border-gray-700 hover:border-gray-500 px-3 py-1 transition-colors"
          >
            $ retry
          </button>
        </div>
      )}
    </div>
  );
}
