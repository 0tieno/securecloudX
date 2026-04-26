import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkPhaseComplete from "../../../components/MarkPhaseComplete";

const phases = [
  {
    title: "Module 1: Understanding Data Security Basics",
    description: "Learn the fundamentals of data security and why it matters in cloud environments.",
    link: "/module3/task/phase1",
    cmd: "./module_1_data_security_basics.sh",
  },
  {
    title: "Module 2: Securing Public Data in Azure Storage",
    description: "Explore how to securely store and serve public website content using Azure Storage.",
    link: "/module3/task/phase2",
    cmd: "./module_2_azure_storage_public.sh",
  },
  {
    title: "Module 3: Protecting Private Data with High Availability",
    description: "Implement strategies for securing private data and ensuring high availability in Azure.",
    link: "/module3/task/phase3",
    cmd: "./module_3_private_data_ha.sh",
  },
];

const Task3 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span><span className="text-gray-400">phase-3-data-security</span>
          <span>/</span><span className="text-gray-500">lab</span>
        </div>
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ ls ./lab_3_data_security/</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Module 3 Lab: Data Security</h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            This lab is split into 3 phases. Select a phase below to begin.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">~40 min read &nbsp;·&nbsp; Lab: ~45 min &nbsp;·&nbsp; Est. cost: $0.00 (storage free tier)</p>
        </div>
        <div className="space-y-3 mb-12">
          {phases.map((phase, index) => (
            <Link key={index} to={phase.link} className="block border border-gray-700 hover:border-gray-500 bg-gray-800/40 hover:bg-gray-800/70 px-4 py-4 transition-colors">
              <div className="text-green-400 text-xs mb-1">{phase.cmd}</div>
              <h2 className="text-sm font-semibold text-gray-300 mb-1">{phase.title}</h2>
              <p className="text-xs text-gray-500">{phase.description}</p>
            </Link>
          ))}
        </div>
        <MarkPhaseComplete phaseId={3} />
        <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6 mt-8">
          <Link to="/module3" className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> Module 3 Overview
          </Link>
          <Link to="/module4" className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors">
            Module 4 <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task3;
