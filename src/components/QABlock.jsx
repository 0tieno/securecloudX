/**
 * Terminal-style Q&A block used in TermsOfService and similar pages.
 *
 * @param {ReactNode} icon      - Lucide icon element (already sized/colored by caller)
 * @param {string}    question  - The question text (without the "Q: " prefix)
 * @param {ReactNode} children  - The answer body content
 */
export default function QABlock({ icon, question, children }) {
  return (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded">
      <div className="flex items-start mb-3">
        <span className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0">
          {icon}
        </span>
        <h2 className="text-xl font-semibold text-cyan-400">Q: {question}</h2>
      </div>
      <div className="text-gray-300 leading-relaxed ml-8">{children}</div>
    </div>
  );
}
