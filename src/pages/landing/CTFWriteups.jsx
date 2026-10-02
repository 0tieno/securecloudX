import { BookOpen } from "lucide-react";
import CurriculumResourceCard from "./CurriculumResourceCard";

export default function CTFWriteups() {
  return (
    <section id="ctfs" className="mt-12 sm:mt-16 scroll-mt-32 md:scroll-mt-24" aria-labelledby="ctf-heading">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">02 / competition writeups</span>
        <div className="flex-1 h-px bg-gray-700" />
      </div>
      <h2 id="ctf-heading" className="text-2xl font-bold text-gray-200 tracking-tight">CTF writeups</h2>
      <p className="text-gray-300 text-sm font-medium leading-6 mt-3 mb-6 max-w-xl">Learn from competition solutions. Follow the investigation, understand the techniques, and take those lessons into your own practice.</p>
      <CurriculumResourceCard
        path="/ctf/safaricom-2025"
        icon={BookOpen}
        kind="Competition writeups"
        title="Safaricom CTF 2025"
        description="Explore the Real IP Heist writeup, including the investigation and solution to a web authentication challenge."
        tags={["Web exploitation", "HTTP headers", "Authentication"]}
        details={[
          { label: "Event", value: "October 4–6, 2025" },
          { label: "Writeups", value: "1 available · more coming soon" },
        ]}
        command="cd /ctf/safaricom2025 && cat writeup.md"
        action="Read the writeups"
      />
    </section>
  );
}
