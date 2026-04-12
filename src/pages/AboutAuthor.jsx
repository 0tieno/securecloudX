import { useNavigate, Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function AboutAuthor() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <PageNav
        variant="personal"
        subtitle="Developer | Jnr Pentester(cloud &amp; web)"
        command="Here is a little bit about myself..."
        maxWidth="4xl"
        links={[
          { label: "./work", path: "/work" },
          { label: "./story", path: "/story" },
          { label: "./about", active: true },
        ]}
      />

      <div className="flex-1 flex flex-col items-center px-4 py-12">
        {/* Profile Section */}
        <div className="w-full max-w-4xl mx-auto">

          {/* About Content */}
          <div className="p-8 mb-8">
            <div className="text-start max-w-3xl mx-auto">
              <div className="text-green-400 text-sm mb-4 font-mono">
                $ And yea this is all about me:)
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the sea shore, and diverting myself in now and then finding a smooother pebble or a prettier shell than ordinary, whilist the greater ocean of truth lay all undiscovered before me.
              </p>

              <div className="border-t border-gray-700 pt-6">
                <p className="text-gray-400 text-sm mb-2">See the story:</p>
                <Link
                  to="/story"
                  className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-mono"
                >
                  /story
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
