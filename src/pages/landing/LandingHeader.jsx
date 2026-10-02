import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import LatestBlogsPanel from "./LatestBlogsPanel";

export default function LandingHeader() {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();

  return (
    <section className="font-mono" aria-labelledby="landing-heading">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_268px] gap-12 lg:gap-10 items-start">
        <div className="flex flex-col items-start gap-7 min-w-0">
          <p className="text-xs text-gray-400 flex items-center gap-2">
            <span className="text-green-400" aria-hidden="true">$</span>
            <span>./OpenSource</span>
          </p>

          <div>
            <h1 id="landing-heading" className="text-4xl min-[380px]:text-5xl sm:text-6xl font-bold tracking-tight text-gray-100 leading-none">
              secure<span className="text-red-400">cloud</span>X
            </h1>
            <p className="text-gray-400 text-sm mt-5 max-w-md leading-relaxed">
              Learn cloud security by doing.
              <br />
              Hands-on labs, Blogs, Resources, Research articles, and real-world challenges.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="button"
                className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-5 py-3 transition-colors inline-flex items-center gap-5 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
                onClick={() => user ? navigate("/get-started") : signIn()}
              >
                {user ? "Continue Learning" : "Get Started"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform motion-reduce:transition-none" aria-hidden="true" />
              </button>
              <Link
                to="/get-started"
                className="inline-flex items-center gap-2 py-3 text-xs text-gray-400 hover:text-gray-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
              >
                View Curriculum
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
            {user && (
              <p className="text-[11px] text-gray-400 mt-2 break-words">
                <span className="text-green-400" aria-hidden="true">●</span>{" "}
                {user.user_metadata?.user_name ?? user.email} · session active
              </p>
            )}
          </div>
        </div>

        <LatestBlogsPanel />
      </div>
    </section>
  );
}
