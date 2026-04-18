import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-8">
          <Link to="/home" className="hover:text-gray-400 transition-colors">// phases</Link>
          <span>/</span>
          <span className="text-gray-400">explore</span>
        </div>

        {/* Title */}
        <div className="mb-8">
          <div className="text-green-400 text-xs mb-3">$ cat explore.md</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3">Don't stop pushing</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Keep building. Experiment, break things, and rebuild — learning happens in the process.
          </p>
        </div>

        {/* Next steps */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-blue-400 text-xs mb-4">$ cat next_steps.md</div>

          <div className="mb-6">
            <div className="text-gray-500 text-xs mb-3"># certifications</div>
            <ul className="space-y-2">
              {[
                {
                  label: "Microsoft Certified: Azure Security Engineer Associate",
                  href: "https://learn.microsoft.com/en-us/certifications/azure-security-engineer/",
                },
                {
                  label: "Microsoft Certified: Azure Solutions Architect Expert",
                  href: "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/",
                },
              ].map(({ label, href }) => (
                <li key={href} className="flex items-start gap-2 text-sm">
                  <span className="text-green-400 flex-shrink-0">&gt;</span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-gray-500 text-xs mb-3"># projects</div>
            <ul className="space-y-2">
              {[
                { label: "Deploy a Secure Azure Web Application", to: "/project/secure-web-app" },
                { label: "Build an Azure Security Dashboard with Sentinel", to: "/project/security-dashboard" },
              ].map(({ label, to }) => (
                <li key={to} className="flex items-start gap-2 text-sm">
                  <span className="text-green-400 flex-shrink-0">&gt;</span>
                  <Link to={to} className="text-blue-400 hover:text-blue-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Share CTA */}
        <div className="mb-8 p-4 border border-gray-700 bg-gray-800/50">
          <div className="text-gray-500 text-xs mb-2"># share your progress</div>
          <p className="text-gray-400 text-sm">
            Post your wins on{" "}
            <a
              href="https://twitter.com/intent/tweet?text=Just%20completed%20a%20module%20on%20%40securecloudX%20%F0%9F%9B%A1%EF%B8%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              X (Twitter) ↗
            </a>
            {" "}and tag <span className="text-gray-300">@securecloudX</span>
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between text-xs text-gray-500 border-t border-gray-800 pt-6">
          <Link to="/home" className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors">
            <ChevronLeft size={14} /> back to modules
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Explore;
