import { useId } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CurriculumResourceCard({ path, icon, kind, title, description, tags, details, command, action, status }) {
  const titleId = useId();
  const descriptionId = `${titleId}-description`;
  const Icon = icon;

  return (
    <Link
      to={path}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="block border border-gray-700 bg-gray-800/30 p-5 sm:p-7 hover:border-gray-500 transition-colors group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400">
          <Icon className="w-4 h-4 text-red-400" aria-hidden="true" />
          {kind}
        </span>
        {status && <span className="border border-gray-700 bg-gray-900 px-2 py-1 text-xs font-semibold text-green-400">{status}</span>}
      </div>
      <h3 id={titleId} className="text-xl font-bold text-gray-100 group-hover:text-red-400 leading-7">
        {title}
      </h3>
      <p id={descriptionId} className="mt-3 text-sm font-medium text-gray-300 leading-6 max-w-2xl">
        {description}
      </p>
      <ul aria-label="Topics" className="flex flex-wrap gap-2 mt-5">
        {tags.map((tag) => (
          <li key={tag} className="border border-gray-700 bg-gray-900 px-2 py-1 text-xs font-medium text-gray-300">{tag}</li>
        ))}
      </ul>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {details.map(({ label, value }) => (
          <div key={label} className="min-w-0">
            <dt className="text-xs font-semibold text-gray-400">{label}</dt>
            <dd className="mt-1 text-sm font-medium text-gray-200">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 pt-5 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs font-medium text-gray-400 break-words min-w-0">{command}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 group-hover:text-red-400 shrink-0">
          {action}
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
