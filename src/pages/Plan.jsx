import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const DONE = "done";
const IN_PROGRESS = "in-progress";
const PLANNED = "planned";

const STATUS_CONFIG = {
  [DONE]:        { label: "DONE",        color: "text-green-400",  border: "border-green-500/40",  bg: "bg-green-500/10"  },
  [IN_PROGRESS]: { label: "IN PROGRESS", color: "text-yellow-400", border: "border-yellow-500/40", bg: "bg-yellow-500/10" },
  [PLANNED]:     { label: "PLANNED",     color: "text-gray-400",   border: "border-gray-600",      bg: "bg-gray-700/30"   },
};

const ROADMAP = [
  {
    category: "Core Curriculum",
    items: [
      { title: "Module 1 — Identity & Access Management (IAM / Zero Trust)", status: DONE, path: "/module1" },
      { title: "Module 2 — Network Security & Perimeter Defense", status: DONE, path: "/module2" },
      { title: "Module 3 — Data Security & Encryption", status: DONE, path: "/module3" },
      { title: "Module 4 — Application Security in Azure", status: DONE, path: "/module4" },
      { title: "Module 5 — Cloud Security Posture Management (CSPM)", status: DONE, path: "/module5" },
      { title: "Module 6 — Detection Engineering & Incident Response", status: DONE, path: "/module6" },
      { title: "Module 7 — Capstone: Security Architecture Review", status: DONE, path: "/module7" },
      { title: "Module 8 — DevSecOps Fundamentals", status: DONE, path: "/module8" },
      { title: "Module 9 — Kubernetes & AKS Security", status: IN_PROGRESS, path: "/module9" },
      { title: "Module 10 — Secrets Management & Key Lifecycle", status: PLANNED },
      { title: "Module 11 — Cloud Governance & Landing Zone Security", status: PLANNED },
    ],
  },
  {
    category: "Architect's Layer (Step 8 per module)",
    items: [
      { title: "STRIDE threat model tables per module", status: DONE },
      { title: "Compliance mapping: CIS / NIST / CSA CCM per module", status: DONE },
      { title: "Real-world breach references with source links", status: DONE },
      { title: "AWS equivalent callouts per module", status: DONE },
    ],
  },
  {
    category: "Learning Quality",
    items: [
      { title: "Knowledge check quizzes (3 scenario MCQs per module)", status: DONE },
      { title: "Time & cost estimates per lab", status: DONE },
      { title: "Lab cleanup steps — prevent surprise Azure bills", status: DONE },
      { title: "Common mistakes / troubleshooting per lab", status: DONE },
      { title: "Attacker's perspective callouts in labs", status: DONE },
      { title: "Capstone security assessment report template", status: DONE },
    ],
  },
  {
    category: "Reference Tools",
    items: [
      { title: "Glossary — 60+ cloud security terms with module cross-refs", status: DONE, path: "/glossary" },
      { title: "Cert Map — AZ-500 / CCSP / CIS exam objective cross-reference", status: DONE, path: "/cert-map" },
      { title: "Broken By Design lab — find & exploit live misconfigurations", status: DONE, path: "/lab/broken-by-design" },
      { title: "Site-wide search", status: DONE, path: "/search" },
    ],
  },
  {
    category: "Certification & Credentialing",
    items: [
      { title: "Completion certificate with public verification URL", status: DONE, path: "/certificate" },
      { title: "LinkedIn 'Add to Profile' one-click certification button", status: DONE, path: "/certificate" },
    ],
  },
  {
    category: "Community & Advanced",
    items: [
      { title: "Interactive CTF-style cloud security challenges", status: PLANNED },
      { title: "Community lab submission system (open-source contributions)", status: PLANNED },
      { title: "Multi-cloud crosswalk module (Azure ↔ AWS ↔ GCP)", status: PLANNED },
      { title: "Live threat intel feed integration (CVE / MSRC)", status: PLANNED },
      { title: "Automated lab scoring against real Azure tenant", status: PLANNED },
    ],
  },
];

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span className={`text-xs font-mono font-bold px-2 py-0.5 border flex-shrink-0 ${cfg.color} ${cfg.border} ${cfg.bg}`}>
      {cfg.label}
    </span>
  );
}

export default function Plan() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span>
          <span className="text-gray-400">plan</span>
        </div>

        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat ROADMAP.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Platform Roadmap</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            What's been built, what's in progress, and what's coming next. This is a living document — updated as features ship.
          </p>
        </div>

        {/* Legend */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-gray-500 text-xs mb-3"># status legend</div>
          <div className="flex flex-wrap gap-3">
            {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
              <span key={key} className={`text-xs font-mono font-bold px-2 py-0.5 border ${cfg.color} ${cfg.border} ${cfg.bg}`}>
                {cfg.label}
              </span>
            ))}
          </div>
        </div>

        {/* Roadmap sections */}
        <div className="space-y-8">
          {ROADMAP.map((section) => (
            <div key={section.category}>
              <div className="text-gray-500 text-xs mb-3"># {section.category.toLowerCase()}</div>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <div key={item.title} className="flex items-center gap-3 p-3 border border-gray-700 bg-gray-800/40">
                    <StatusBadge status={item.status} />
                    <span className={`flex-1 text-sm ${item.status === DONE ? "text-gray-400" : item.status === IN_PROGRESS ? "text-gray-200" : "text-gray-600"}`}>
                      {item.title}
                    </span>
                    {item.path && item.status !== PLANNED && (
                      <Link to={item.path} className="text-gray-600 hover:text-gray-400 transition-colors flex-shrink-0">
                        <ChevronRight size={14} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-gray-500 text-xs mb-2"># open source</div>
          <p className="text-gray-400 text-sm">
            This platform is open source. Suggest features or contribute content on{" "}
            <a href="https://github.com/0tieno/securecloudX" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              GitHub ↗
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
