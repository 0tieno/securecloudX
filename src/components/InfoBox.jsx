const colorVariants = {
  yellow: { border: "border-yellow-500", heading: "text-yellow-400" },
  blue: { border: "border-blue-500", heading: "text-blue-400" },
  red: { border: "border-red-500", heading: "text-red-400" },
  green: { border: "border-green-500", heading: "text-green-400" },
  cyan: { border: "border-cyan-500", heading: "text-cyan-400" },
};

/**
 * Colored info / callout box with a left border accent.
 *
 * @param {"yellow"|"blue"|"red"|"green"|"cyan"} color - Accent color
 * @param {string|ReactNode} title                     - Box heading (optional)
 * @param {string} className                           - Extra classes on the wrapper
 * @param {ReactNode} children                         - Box body content
 */
export default function InfoBox({ color = "yellow", title, className = "", children }) {
  const { border, heading } = colorVariants[color] ?? colorVariants.yellow;

  return (
    <div className={`p-4 bg-gray-800 border-l-4 ${border} rounded-lg shadow-md ${className}`}>
      {title && (
        <h3 className={`text-lg sm:text-xl font-semibold ${heading}`}>{title}</h3>
      )}
      <div className="text-gray-300 text-sm sm:text-base mt-2">{children}</div>
    </div>
  );
}
