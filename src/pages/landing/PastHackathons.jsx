import { Terminal } from "lucide-react";
import CurriculumResourceCard from "./CurriculumResourceCard";

export default function PastHackathons() {
  return (
    <section id="hackathons" className="mt-12 sm:mt-16 scroll-mt-32 md:scroll-mt-24" aria-labelledby="hackathons-heading">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">01 / hands-on challenges</span>
        <div className="flex-1 h-px bg-gray-700" />
      </div>
      <h2 id="hackathons-heading" className="text-2xl font-bold text-gray-200 tracking-tight">Past hackathons</h2>
      <p className="text-gray-300 text-sm font-medium leading-6 mt-3 mb-6 max-w-xl">Revisit past events through hands-on security challenges. Investigate, test your approach, and learn in an authorized lab.</p>
      <CurriculumResourceCard
        path="/forgotten-secret-lab"
        icon={Terminal}
        kind="Hands-on lab"
        title="Forgotten Secret Lab"
        description="Hunt leaked secrets in Git commit history and investigate APIs in the authorized lab."
        tags={["Git forensics", "API exploitation", "Secret detection"]}
        details={[
          { label: "Access", value: "GitHub sign-in required" },
          { label: "Leaderboard", value: "Available" },
        ]}
        command="cd /hackathons && ./forgotten_secret.sh"
        action="Open the lab"
        status="Active"
      />
    </section>
  );
}
