import Content from "../components/Content";
import { Link } from "react-router-dom";

const ForgottenSecretLab = () => {
  return (
    <Content>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-2">
            Forgotten Secret Lab: Hacking Git History 🕵️‍♂️
          </h1>
          <p className="text-xl text-yellow-400 font-semibold">
            Welcome to the Forgotten Secret Lab!
          </p>
        </div>

        {/* Scenario */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-red-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            💡 Scenario
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            A developer accidentally committed a{" "}
            <code className="bg-gray-700 px-2 py-1 rounded">.env</code> file
            containing a secret API key, then deleted it and added{" "}
            <code className="bg-gray-700 px-2 py-1 rounded">.env</code> to{" "}
            <code className="bg-gray-700 px-2 py-1 rounded">.gitignore</code>.
            But Git never forgets...
          </p>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            <strong>Your job:</strong> Investigate the commit history, uncover
            the secret, and use it to unlock a secret message from a live API.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            What You'll Learn
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center text-gray-300 text-sm sm:text-base">
              <span className="text-green-400 mr-2">✅</span>
              Real-world Git forensics
            </div>
            <div className="flex items-center text-gray-300 text-sm sm:text-base">
              <span className="text-green-400 mr-2">✅</span>
              Secret detection with open-source tools
            </div>
            <div className="flex items-center text-gray-300 text-sm sm:text-base">
              <span className="text-green-400 mr-2">✅</span>
              Recon & recovery from credential leaks
            </div>
            <div className="flex items-center text-gray-300 text-sm sm:text-base">
              <span className="text-green-400 mr-2">✅</span>
              How APIs can be abused when secrets leak
            </div>
            <div className="flex items-center text-gray-300 text-sm sm:text-base">
              <span className="text-green-400 mr-2">✅</span>
              Red-team & blue-team mindset
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Getting Started
          </h3>
          <div className="bg-gray-900 p-3 rounded-md">
            <code className="text-green-400 text-sm">
              git clone
              https://github.com/YOUR_USERNAME/forgotten-secret-lab.git
              <br />
              cd forgotten-secret-lab
            </code>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            🎯 Your Mission
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-3">
            Recover the deleted{" "}
            <code className="bg-gray-700 px-2 py-1 rounded">.env</code> file
            from Git history and use the leaked API key to unlock a secret
            message.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-yellow-400">
                ✅ Objective:
              </h4>
              <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base ml-4 space-y-1">
                <li>Hunt the secret inside Git history.</li>
                <li>
                  Extract the key (looks like{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded">
                    SECRET-TOKEN-1234
                  </code>
                  )
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-yellow-400">
                🌐 Use it to query the secret API:
              </h4>
              <div className="bg-gray-900 p-3 rounded-md mt-2">
                <code className="text-green-400 text-sm">
                  curl
                  "https://forgottenSecretFunc12345.azurewebsites.net/api/data?key=SECRET-TOKEN-1234"
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-400">
                Success Response:
              </h4>
              <div className="bg-gray-900 p-3 rounded-md mt-2">
                <code className="text-green-400 text-sm">
                  {`{
  "message": "Congratulations! You've unlocked the secret."
}`}
                </code>
              </div>
              <p className="text-green-400 text-sm mt-2">
                🎉 Success! You found the leaked key and accessed the secret
                endpoint!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-red-400">
                Wrong or missing key?
              </h4>
              <div className="bg-gray-900 p-3 rounded-md mt-2">
                <code className="text-red-400 text-sm">
                  {`{
  "error": "Invalid or missing key."
}`}
                </code>
              </div>
              <p className="text-red-400 text-sm mt-2">
                ❌ Invalid or missing key. Try again.
              </p>
            </div>
          </div>
        </div>

        {/* Git Commands */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-purple-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Helpful Git Commands
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-2 px-3 text-purple-400 font-semibold">
                    Tool
                  </th>
                  <th className="text-left py-2 px-3 text-purple-400 font-semibold">
                    What it does
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      git log -p
                    </code>
                  </td>
                  <td className="py-2 px-3">View commit history + diffs</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      git show HEAD~1:.env
                    </code>
                  </td>
                  <td className="py-2 px-3">
                    Show deleted file in earlier commit
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      git grep "KEY" $(git rev-list --all)
                    </code>
                  </td>
                  <td className="py-2 px-3">Search all commits</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      git cat-file -p
                    </code>
                  </td>
                  <td className="py-2 px-3">View raw blob contents</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      git log --diff-filter=D --summary
                    </code>
                  </td>
                  <td className="py-2 px-3">See deleted files</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      gitleaks detect --source .
                    </code>
                  </td>
                  <td className="py-2 px-3">Detect secrets using rules</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      trufflehog git file://./
                    </code>
                  </td>
                  <td className="py-2 px-3">Detect secrets via entropy</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">
                    <code className="bg-gray-900 px-2 py-1 rounded">
                      git secrets --scan-history
                    </code>
                  </td>
                  <td className="py-2 px-3">
                    Scan for common AWS/secret patterns
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bonus Challenges */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-orange-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Bonus Challenges
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2">
            <li>
              What's the blob SHA of the deleted{" "}
              <code className="bg-gray-700 px-2 py-1 rounded">.env</code> file?
            </li>
            <li>What tool found the secret fastest?</li>
            <li>
              Suggest one improvement to prevent this kind of leak in real-world
              teams.
            </li>
          </ul>

          <div className="mt-4 p-3 bg-orange-900 bg-opacity-30 rounded-md">
            <h4 className="text-lg font-semibold text-orange-400">
              Badge Earned
            </h4>
            <p className="text-gray-300 text-sm sm:text-base mt-1">
              Complete this lab and you'll earn the{" "}
              <strong>Git Forensics Hero</strong> badge on your SecureCloudX
              profile.
            </p>
          </div>
        </div>

        {/* Advanced Tracking */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-cyan-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Advanced: Track Who Solves It
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-2">
            We've set up the API to log:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base ml-4 space-y-1">
            <li>IP address</li>
            <li>Timestamp</li>
            <li>Request path</li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            This lets us track completions and reward learners!
          </p>
          <div className="mt-3 text-sm">
            <p className="text-cyan-400">
              🔒 Don't worry — it logs nothing sensitive, only what's needed for
              leaderboard scoring.
            </p>
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            🛡 Bonus Tips: Prevent This in Real Life
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2">
            <li>
              Use{" "}
              <code className="bg-gray-700 px-2 py-1 rounded">.gitignore</code>{" "}
              before committing sensitive files
            </li>
            <li>
              Add pre-commit hooks with{" "}
              <code className="bg-gray-700 px-2 py-1 rounded">git-secrets</code>
            </li>
            <li>Set up GitHub secret scanning on your repos</li>
            <li>
              Use{" "}
              <code className="bg-gray-700 px-2 py-1 rounded">gitleaks</code> in
              CI/CD pipelines
            </li>
          </ul>
        </div>

        {/* Mindset Check */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md border-l-4 border-pink-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Mindset Check
          </h3>
          <p className="text-gray-300 text-sm sm:text-base italic">
            Mistakes happen. What matters is how you detect, contain, and
            respond. Train to think like an attacker — and defend like a pro.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between text-sm sm:text-base">
          <Link
            to="/"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            ← Back to Home
          </Link>
          <Link
            to="/day1"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Continue to Day 1 →
          </Link>
        </div>
      </div>
    </Content>
  );
};

export default ForgottenSecretLab;
