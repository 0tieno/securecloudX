import { useNavigate } from "react-router-dom";
import {
  Terminal,
  Shield,
  ArrowLeft,
  Copy,
  ExternalLink,
  Flag,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function RealIPHeistWriteup() {
  const navigate = useNavigate();
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text, identifier) => {
    navigator.clipboard.writeText(text);
    setCopiedText(identifier);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const CodeBlock = ({ children, identifier, language = "bash" }) => (
    <div className="relative">
      <div className="bg-gray-900 border border-gray-600 rounded overflow-hidden">
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-600">
          <span className="text-gray-400 text-sm font-mono">{language}</span>
          <button
            onClick={() => copyToClipboard(children, identifier)}
            className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            <Copy className="w-4 h-4 mr-1" />
            {copiedText === identifier ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Navbar Header */}
      <nav className="bg-gray-900 border-b border-gray-700 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left side - Logo */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mr-2 sm:mr-3" />
                <h1
                  className="text-xl sm:text-2xl font-bold text-gray-300 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  secure<span className="text-red-400">cloud</span>X
                </h1>
              </div>
              <div className="ml-8 sm:ml-11 hidden sm:block">
                <p className="text-gray-500 text-sm">
                  // Real IP Heist - Safaricom CTF 2025 Writeup
                </p>
                <div className="text-xs text-gray-600 mt-1">
                  root@securecloudx:~# cat /ctf/safaricom2025/real-ip-heist.md
                </div>
              </div>
            </div>

            {/* Right side - Navigation Links */}
            <div className="flex items-center justify-start sm:justify-end space-x-4 sm:space-x-6 ml-8 sm:ml-0">
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono"
                onClick={() => navigate("/ctf/safaricom-2025")}
              >
                ../safaricom_ctf
              </button>
              <button
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono"
                onClick={() => navigate("/get-started")}
              >
                ../get_started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <button
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 font-mono hover:bg-gray-700 hover:border-gray-600 transition-colors group"
            onClick={() => navigate("/ctf/safaricom-2025")}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            cd ../safaricom_ctf/
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-300">Real IP Heist</h1>
            <span className="ml-4 px-3 py-1 bg-green-600 text-white text-sm font-mono rounded">
              SOLVED
            </span>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-4 rounded mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <Flag className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-400">Points:</span>
                <span className="text-green-400 ml-2">50</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-gray-400">Category:</span>
                <span className="text-cyan-400 ml-2">Web Exploitation</span>
              </div>
              <div className="flex items-center">
                <ExternalLink className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-gray-400">Target:</span>
                <span className="text-yellow-400 ml-2">54.72.82.22:8085</span>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <Terminal className="w-5 h-5 text-cyan-400 mr-2" />
            ./summary
          </h2>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <p className="text-gray-400 leading-relaxed mb-4">
              We exploited a server-side trust in IP-related headers (e.g.{" "}
              <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                X-Forwarded-For
              </code>
              ) to make the application treat our requests as coming from an
              internal/localhost address. The app used that perceived IP (or
              access level sent in the login form) to gate an admin panel. By
              spoofing appropriate headers when requesting
              <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                /admin
              </code>
              , we were granted admin access and the flag was revealed.
            </p>
            <div className="bg-gray-900 border border-gray-600 p-4 rounded">
              <div className="text-green-400 text-sm mb-2">$ echo $FLAG</div>
              <div className="text-yellow-400 font-mono">
                safctf{"{c0f1ec1fccb2de4a03031037251f21}"}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Used */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <Terminal className="w-5 h-5 text-cyan-400 mr-2" />
            ./tools_used
          </h2>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-cyan-400 mr-3">•</span>
                <code className="text-gray-300">curl</code>
                <span className="text-gray-400 ml-2">
                  (built-in) for all requests
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-cyan-400 mr-3">•</span>
                <span className="text-gray-300">Basic inspection with</span>
                <code className="text-cyan-400 bg-gray-700 px-1 rounded ml-2">
                  curl -v
                </code>
                <span className="text-gray-400 ml-1">and</span>
                <code className="text-cyan-400 bg-gray-700 px-1 rounded ml-1">
                  curl -i
                </code>
              </li>
            </ul>
          </div>
        </div>

        {/* Reconnaissance */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <Shield className="w-5 h-5 text-yellow-400 mr-2" />
            ./reconnaissance
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <p className="text-gray-400 mb-4">
                1. Fetch the root page and examine returned HTML/JS and server
                headers:
              </p>
              <CodeBlock identifier="recon1">
                curl -i http://54.72.82.22:8085/
              </CodeBlock>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <h3 className="text-gray-300 font-semibold mb-3">
                Observations from the page:
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  The HTML contains a login form that posts to{" "}
                  <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                    /
                  </code>
                  .
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  The client-side JS sends the form with an{" "}
                  <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                    X-Forwarded-For
                  </code>{" "}
                  header (set to{" "}
                  <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                    8.8.8.8
                  </code>{" "}
                  in the page JS). That strongly suggested the server reads
                  trustable headers to determine client IP.
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>A comment
                  in the HTML (
                  <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                    {"<!--x real admins use internal tools -->"}
                  </code>
                  ) hinted the admin interface is reachable only by requests
                  perceived to originate from an internal address (e.g.,{" "}
                  <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                    127.0.0.1
                  </code>
                  ).
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <p className="text-gray-400 mb-4">
                We also saw the server responded with "Access denied: Admins
                only....try harder!" for unauthenticated requests — confirming a
                gate existed.
              </p>
            </div>
          </div>
        </div>

        {/* Initial Tests */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <Terminal className="w-5 h-5 text-purple-400 mr-2" />
            ./initial_tests
          </h2>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <p className="text-gray-400 mb-4">
              We probed a few endpoints and headers to see how the app behaved
              and which headers it trusted. Example checks:
            </p>
            <CodeBlock identifier="initial-tests">
              curl -i http://54.72.82.22:8085/robots.txt curl -i
              http://54.72.82.22:8085/admin curl -i http://54.72.82.22:8085/flag
            </CodeBlock>
            <p className="text-gray-400 mt-4">
              We then tested submitting the login form with an{" "}
              <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                access_level
              </code>{" "}
              of
              <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                Admin
              </code>{" "}
              while spoofing IP headers. The server responded differently
              depending on these headers.
            </p>
          </div>
        </div>

        {/* Exploitation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <Shield className="w-5 h-5 text-red-400 mr-2" />
            ./exploitation
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <p className="text-gray-400 mb-4">
                We used{" "}
                <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                  curl
                </code>{" "}
                POSTs that mimicked the form submission but injected spoofed IP
                headers. The successful payloads included headers like{" "}
                <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                  X-Forwarded-For
                </code>{" "}
                and/or
                <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                  X-Real-IP
                </code>{" "}
                set to{" "}
                <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                  127.0.0.1
                </code>{" "}
                (localhost). Example commands used (copied exactly from the
                terminal):
              </p>

              <CodeBlock identifier="exploit1">
                curl -i -X POST http://54.72.82.22:8085/ \ -H "Content-Type:
                application/x-www-form-urlencoded" \ -H "X-Forwarded-For:
                127.0.0.1" \ -d "username=attacker&access_level=Admin"
              </CodeBlock>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded">
              <p className="text-gray-400 mb-4">
                And directly requesting the admin panel while spoofing headers:
              </p>
              <CodeBlock identifier="exploit2">
                curl -i http://54.72.82.22:8085/admin \ -H "X-Forwarded-For:
                127.0.0.1" \ -H "X-Real-IP: 127.0.0.1" \ -H "Host: localhost"
              </CodeBlock>
              <p className="text-gray-400 mt-4">
                Multiple header variants were tried (e.g.{" "}
                <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                  Forwarded: for=127.0.0.1
                </code>
                ,
                <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                  Client-IP
                </code>
                ,{" "}
                <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                  True-Client-IP
                </code>
                , and chained{" "}
                <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                  X-Forwarded-For
                </code>{" "}
                values). The server accepted requests that presented
                <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                  127.0.0.1
                </code>{" "}
                in these trusted headers.
              </p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <Flag className="w-5 h-5 text-green-400 mr-2" />
            ./result
          </h2>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <p className="text-gray-400 mb-4">
              The{" "}
              <code className="text-cyan-400 bg-gray-700 px-1 rounded">
                /admin
              </code>{" "}
              response returned the flag:
            </p>
            <div className="bg-gray-900 border border-gray-600 p-4 rounded mb-4">
              <div className="text-green-400 text-sm mb-2">
                $ curl -i http://54.72.82.22:8085/admin -H "X-Forwarded-For:
                127.0.0.1"
              </div>
              <div className="text-yellow-400 font-mono text-lg">
                Flag: safctf{"{c0f1ec1fccb2de4a03031037251f21}"}
              </div>
            </div>
            <p className="text-gray-400 text-sm italic">
              (Recorded directly from the server response.)
            </p>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
            <Terminal className="w-5 h-5 text-green-400 mr-2" />
            ./key_learnings
          </h2>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded">
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-300">
                    Never trust client-provided headers for security decisions
                  </strong>
                  <br />
                  Headers like X-Forwarded-For, X-Real-IP can easily be spoofed
                  by attackers.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-300">
                    IP-based access control is fragile
                  </strong>
                  <br />
                  Applications should use proper authentication and
                  authorization mechanisms instead of relying on IP addresses.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-300">
                    Always examine HTML comments and client-side code
                  </strong>
                  <br />
                  Developer comments often reveal valuable information about the
                  application's security model.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-700">
          <button
            onClick={() => navigate("/ctf/safaricom-2025")}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            ← Back to Safaricom CTF 2025
          </button>
          <button
            onClick={() => navigate("/get-started")}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            View All CTFs →
          </button>
        </div>
      </div>
    </div>
  );
}
