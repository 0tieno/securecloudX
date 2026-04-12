import { useNavigate, Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Story() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <PageNav
        variant="personal"
        subtitle="Developer | Jnr Pentester(cloud &amp; web)"
        command="and yeah, this is all about me. :)"
        maxWidth="4xl"
        links={[
          { label: "./work", path: "/work" },
          { label: "./story", active: true },
          { label: "./about", path: "/about" },
        ]}
      />

      <div className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="p-8 sm:p-12">
            {/* Navigation Menu */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-4 italic">
                and yeah, this is all about me. :)
              </p>

              <div className="mb-6">
                <p className="text-gray-300 font-medium mb-3">Jump to:</p>
                <div className="space-y-1">
                  <Link
                    to="/work"
                    className="block text-red-400 hover:text-red-300 underline transition-colors"
                  >
                    My Work
                  </Link>
                  <a
                    href="#conferences"
                    className="block text-red-400 hover:text-red-300 underline transition-colors"
                  >
                    Conferences, Presentations and Publications
                  </a>
                  <a
                    href="#achievements"
                    className="block text-red-400 hover:text-red-300 underline transition-colors"
                  >
                    Achievements, Honors and Awards
                  </a>
                </div>
              </div>
            </div>

            {/* About Section */}
            <section id="about" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-300 mb-6">About</h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  When I think about how I'd like to spend my days alive (and
                  consequently remembered for when no more), I think of giving
                  everything I put my mind and body to, everything.
                </p>
              </div>
            </section>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm mb-2">More about me:</p>
              <a
                href="https://www.ronneyotieno.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-mono"
              >
                www.ronneyotieno.me
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
