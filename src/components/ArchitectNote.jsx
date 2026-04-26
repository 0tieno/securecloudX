/**
 * Cloud Security Architect's Note — inline callout for module content.
 *
 * Surfaces architect-level design principles, threat models, compliance
 * mapping, and real-world incident context inside a PhaseStepItem body.
 *
 * @param {string}    title    - Optional bold heading inside the note
 * @param {ReactNode} children - Body content
 * @param {string}    className - Extra Tailwind classes on the wrapper
 */
export default function ArchitectNote({ title, children, className = "" }) {
  return (
    <div className={`border-l-4 border-indigo-500 bg-indigo-950/30 rounded-r p-4 my-3 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-indigo-400 text-xs font-bold font-mono tracking-widest uppercase">
          ⬡ Architect&apos;s Note
        </span>
      </div>
      {title && (
        <p className="text-indigo-300 text-sm font-semibold mb-2">{title}</p>
      )}
      <div className="text-gray-300 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
