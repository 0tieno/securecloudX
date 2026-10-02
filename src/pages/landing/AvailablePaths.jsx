import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Code, FlaskConical } from "lucide-react";

const PATHS = [
  {
    title: "Cloud security engineering",
    description: "Cloud security engineering, secure development, and DevSecOps practices.",
    command: "cd /engineering && ./start.sh",
    path: "/home",
    icon: Code,
  },
  {
    title: "Research Hub",
    description: "Explore evidence-based cybersecurity research, publications, and the research charter.",
    command: "cd /research && ls",
    path: "/research",
    icon: FlaskConical,
  },
  {
    title: "Open-source blogs",
    description: "Security research, tutorials, and open-source contributions.",
    command: "cd /blog && cat *.md",
    path: "/opensource-blog",
    icon: BookOpen,
  },
];

function PathLink({ title, description, command, path, icon }) {
  const Icon = icon;
  return (
    <Link to={path} className="flex flex-col border-t border-gray-700 py-6 group min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
        <h3 className="text-base font-semibold text-gray-200 group-hover:text-red-400 leading-relaxed">{title}</h3>
        <ArrowUpRight className="w-4 h-4 text-gray-400 shrink-0 mt-1 ml-auto" aria-hidden="true" />
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mt-3">{description}</p>
      <p className="text-xs text-gray-400 mt-auto pt-5 break-words">{command}</p>
    </Link>
  );
}

export default function AvailablePaths() {
  return (
    <section id="paths" className="mt-12 sm:mt-16 scroll-mt-32 md:scroll-mt-24" aria-labelledby="paths-heading">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-gray-400 text-[10px] tracking-widest uppercase">01 / explore</span>
        <div className="flex-1 h-px bg-gray-800" />
      </div>
      <h2 id="paths-heading" className="text-2xl sm:text-3xl font-bold text-gray-200 tracking-tight">Paths available to start</h2>
      <p className="text-gray-400 text-sm mt-3 mb-8 max-w-xl leading-relaxed">These paths assume little or no prior knowledge. Whether you&apos;re starting out or building on experience, there&apos;s room to learn.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {PATHS.map((path) => <PathLink key={path.path} {...path} />)}
      </div>
    </section>
  );
}
