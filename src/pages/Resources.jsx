import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhaseStepItem from "../components/PhaseStepItem";
import { resourcesData } from "../data/resourcesData";

const TYPE_MAP = {
  "Learning Module": "READ",
  "Learning module": "READ",
  "Docs": "READ",
  "docs": "READ",
  "Tutorial": "PRACTICE",
  "Quickstart": "PRACTICE",
  "Quickstart step by step guide": "PRACTICE",
  "Video Tutorial": "WATCH",
  "Video": "WATCH",
  "Instructor led - Learn Live": "WATCH",
};

const SLUGS = {
  1: "phase-1-identity-and-access-management",
  2: "phase-2-network-security",
  3: "phase-3-data-protection",
  4: "phase-4-threat-detection",
  5: "phase-5-security-monitoring",
  6: "phase-6-incident-response",
  7: "phase-7-capstone-project",
  8: "phase-8-devsecops",
};

const Resources = () => {
  const { module } = useParams();
  const moduleNum = Number(module);
  const resource = resourcesData[moduleNum];
  const TOTAL = resource ? resource.resources.length : 0;
  const [open, setOpen] = useState(() => new Set([0]));
  const [checked, setChecked] = useState(new Set());
  const toggleOpen = (i) => setOpen(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const toggleChecked = (i) => setChecked(p => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });
  const slug = SLUGS[moduleNum] || `module-${module}`;

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-300 font-mono flex items-center justify-center">
        <p className="text-red-400">// error: resources not found for module {module}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">{slug}</span>
          <span>/</span><span className="text-gray-500">resources</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat module_{module}_resources.txt</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">
            Module {module}: {resource.topic} Resources
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Curated docs, guides, and videos to deepen your understanding.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-500">{checked.size}/{TOTAL} reviewed</span>
            <span className="text-gray-700"># mark resources as reviewed</span>
          </div>
          <div className="w-full bg-gray-800 border border-gray-700 h-1.5">
            <div className="bg-red-500 h-full transition-all duration-500" style={{ width: `${(checked.size / TOTAL) * 100}%` }} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 text-xs text-gray-600 mb-3">
          <button onClick={() => setOpen(new Set(resource.resources.map((_, i) => i)))} className="hover:text-gray-400 transition-colors">expand all</button>
          <span>|</span>
          <button onClick={() => setOpen(new Set())} className="hover:text-gray-400 transition-colors">collapse all</button>
        </div>
        <div className="space-y-2 mb-10">
          {resource.resources.map((res, i) => (
            <PhaseStepItem
              key={i}
              number={i + 1}
              type={TYPE_MAP[res.type] || "READ"}
              title={res.title}
              isOpen={open.has(i)}
              onToggleOpen={() => toggleOpen(i)}
              isChecked={checked.has(i)}
              onToggleChecked={() => toggleChecked(i)}
            >
              <p className="text-gray-400 text-sm mb-3">{res.description}</p>
              <div className="flex items-center gap-3">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors border border-blue-800/50 px-3 py-1 hover:border-blue-600/50"
                >
                  → open resource
                </a>
                <span className="text-xs text-gray-600">{res.type}</span>
              </div>
            </PhaseStepItem>
          ))}
        </div>
        <div className="mb-8 border border-yellow-800/40 bg-yellow-900/10 p-4">
          <p className="text-yellow-400 text-xs font-semibold mb-1">// remember</p>
          <p className="text-gray-400 text-sm">You cannot secure what you do not understand. Make sure to grasp the core components before moving on.</p>
        </div>
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
          <Link to={`/module${module}/task`} className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Back to Lab
          </Link>
          {moduleNum < 8 ? (
            <Link to={`/module${moduleNum + 1}`} className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
              Module {moduleNum + 1} <ChevronRight size={14} />
            </Link>
          ) : (
            <Link to="/explore" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
              Next Steps <ChevronRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
