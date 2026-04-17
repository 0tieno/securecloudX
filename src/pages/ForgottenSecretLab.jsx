import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const ForgottenSecretLab = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span>
          <span className="text-gray-400">forgotten-secret-lab</span>
        </div>

        {/* Live badge */}
        <div className="mb-8 p-3 border border-red-500/30 bg-red-500/5 flex items-center gap-3">
          <div className="relative flex items-center justify-center shrink-0">
            <div className="absolute w-5 h-5 border border-red-500/30 rounded-full animate-ping" />
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </div>
          <div>
            <span className="text-red-400 text-sm font-bold">[LIVE] Forgotten Secret Lab — Git Forensics Challenge</span>
            <div className="text-gray-500 text-xs mt-0.5">$ ./hunt_secrets.sh --git-history --api-exploit</div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat forgotten_secret_lab.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Forgotten Secret Lab</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            A developer accidentally committed a <code className="bg-gray-800 px-1.5 py-0.5 text-gray-300">.env</code> file containing a secret API key, then deleted it and added <code className="bg-gray-800 px-1.5 py-0.5 text-gray-300">.env</code> to <code className="bg-gray-800 px-1.5 py-0.5 text-gray-300">.gitignore</code>. But Git never forgets.
          </p>
        </div>

        {/* Your mission */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-yellow-400 text-xs mb-3">$ cat mission.txt</div>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Investigate the commit history, uncover the secret, and use it to unlock a secret message from a live API. Then add your name to the endpoint to appear on the leaderboard.
          </p>
          <ul className="space-y-1.5">
            {[
              "Hunt the secret inside Git history",
              <span key="key">Extract the key (looks like <code className="bg-gray-900 px-1.5 py-0.5 text-gray-300">SECRET-TOKEN-KEY</code>)</span>,
              "Use the key to call the live API and read the secret message",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-green-400 flex-shrink-0">&gt;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What you will learn */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-blue-400 text-xs mb-3">$ cat learning_objectives.sh</div>
          <ul className="space-y-1.5">
            {[
              "Real-world Git forensics",
              "Secret detection with open-source tools",
              "Recon & recovery from credential leaks",
              "How APIs can be abused when secrets leak",
              "Red-team & blue-team mindset",
            ].map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-green-400 flex-shrink-0">&gt;</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Getting started */}
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-4">$ ./setup_lab.sh</div>
          <div className="space-y-3">
            <div className="p-4 border border-gray-700 bg-gray-800/50">
              <div className="text-cyan-400 text-xs mb-2"># step 1 — clone the repository</div>
              <div className="bg-gray-900 border border-gray-700 p-3 text-sm text-green-400">
                git clone https://github.com/0tieno/forgotten-secret-lab.git
              </div>
              <a
                href="https://github.com/0tieno/forgotten-secret-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs mt-2 transition-colors"
              >
                view on GitHub ↗
              </a>
            </div>
            <div className="p-4 border border-gray-700 bg-gray-800/50">
              <div className="text-cyan-400 text-xs mb-2"># step 2 — navigate to the project</div>
              <div className="bg-gray-900 border border-gray-700 p-3 text-sm text-green-400">
                cd forgotten-secret-lab
              </div>
            </div>
            <div className="p-4 border border-gray-700 bg-gray-800/50">
              <div className="text-cyan-400 text-xs mb-2"># step 3 — start your investigation</div>
              <div className="bg-gray-900 border border-gray-700 p-3 text-sm text-green-400">
                ls -la && git log --oneline
              </div>
            </div>
          </div>
          <div className="mt-3 p-3 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs">
            # requires git 2.20+
          </div>
        </div>

        {/* API challenge */}
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-4">$ cat api_challenge.sh</div>
          <div className="space-y-3">
            <div className="p-4 border border-gray-700 bg-gray-800/50">
              <div className="text-cyan-400 text-xs mb-2"># query the secret API with your recovered key</div>
              <div className="bg-gray-900 border border-gray-700 p-3 text-sm text-green-400 break-all">
                curl "https://secret-api-1752358706.azurewebsites.net/api/data?key=YOUR-SECRET-KEY"
              </div>
            </div>
            <div className="p-4 border border-green-500/20 bg-green-500/5">
              <div className="text-green-400 text-xs mb-2"># success response</div>
              <div className="bg-gray-900 border border-gray-700 p-3 text-sm text-green-400">
                {`{ "message": "Congratulations! You've unlocked the secret." }`}
              </div>
              <a
                href="https://secret-api-1752358706.azurewebsites.net/api/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 text-xs mt-2 transition-colors"
              >
                view the leaderboard ↗
              </a>
            </div>
            <div className="p-4 border border-red-500/20 bg-red-500/5">
              <div className="text-red-400 text-xs mb-2"># wrong or missing key</div>
              <div className="bg-gray-900 border border-gray-700 p-3 text-sm text-red-400">
                {`{ "error": "Invalid or missing key." }`}
              </div>
            </div>
          </div>
        </div>

        {/* Helpful commands */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-green-400 text-xs mb-4">$ cat helpful_commands.md</div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 px-3 text-gray-500 font-normal">command</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-normal">what it does</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {[
                  ["git log -p", "View commit history + diffs"],
                  ["git show HEAD~1:.env", "Show deleted file in earlier commit"],
                  ['git grep "KEY" $(git rev-list --all)', "Search all commits"],
                  ["git cat-file -p", "View raw blob contents"],
                  ["git log --diff-filter=D --summary", "See deleted files"],
                  ["gitleaks detect --source .", "Detect secrets using rules"],
                  ["trufflehog git file://./", "Detect secrets via entropy"],
                  ["git secrets --scan-history", "Scan for common secret patterns"],
                ].map(([cmd, desc]) => (
                  <tr key={cmd} className="border-b border-gray-700/50">
                    <td className="py-2 px-3"><code className="text-green-400">{cmd}</code></td>
                    <td className="py-2 px-3">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bonus challenges */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-yellow-400 text-xs mb-3">$ cat bonus_challenges.txt</div>
          <p className="text-gray-500 text-xs mb-3">
            optional — share your findings in the{" "}
            <a href="https://chat.whatsapp.com/Llp1Z8uw8xP5NIByASUV7V" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">community</a>
          </p>
          <ul className="space-y-1.5">
            {[
              <span key="sha">What is the blob SHA of the deleted <code className="bg-gray-900 px-1.5 py-0.5">.env</code> file?</span>,
              "What tool found the secret fastest?",
              "Suggest one improvement to prevent this kind of leak in real-world teams.",
            ].map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-yellow-400 flex-shrink-0">&gt;</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-gray-700 pt-3 text-xs text-gray-500">
            # top 3 completions earn a unique badge on the leaderboard
          </div>
        </div>

        {/* Tracking note */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-cyan-400 text-xs mb-3">$ cat tracking_note.txt</div>
          <p className="text-gray-400 text-sm mb-2">The API logs the following for leaderboard scoring:</p>
          <ul className="space-y-1">
            {["IP address", "Timestamp", "Request path"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-gray-600">—</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-xs mt-3"># nothing sensitive is logged</p>
        </div>

        {/* Prevention tips */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-green-400 text-xs mb-3">$ cat prevention_tips.md</div>
          <ul className="space-y-1.5">
            {[
              <span key="gitignore"><code className="bg-gray-900 px-1.5 py-0.5">.gitignore</code> before committing sensitive files</span>,
              <span key="hooks">Pre-commit hooks with <code className="bg-gray-900 px-1.5 py-0.5">git-secrets</code></span>,
              "GitHub secret scanning on your repos",
              <span key="gitleaks"><code className="bg-gray-900 px-1.5 py-0.5">gitleaks</code> in CI/CD pipelines</span>,
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-green-400 flex-shrink-0">&gt;</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mindset */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-gray-600 text-xs mb-2"># mindset check</div>
          <p className="text-gray-500 text-sm italic">
            Mistakes happen. What matters is how you detect, contain, and respond. Train to think like an attacker — and defend like a pro.
          </p>
        </div>

        {/* Related reading */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-blue-400 text-xs mb-3">$ cat related_reading.md</div>
          <Link
            to="/posts/why-git-never-forgets"
            className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            "Why Git Never Forgets" — the theory behind this lab →
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between text-xs text-gray-500 border-t border-gray-800 pt-6">
          <Link to="/home" className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> back to modules
          </Link>
          <Link to="/module1" className="hover:text-gray-300 transition-colors">
            Module 1 →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgottenSecretLab;
