import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AuthToast from "../../components/AuthToast";

const BLOG_MANIFEST_PATH = "/blog/blog-manifest.json";
const POSTS_PER_PAGE = 3;

function formatDate(dateStr) {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
  });
}

export default function LatestBlogsPanel() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function loadPosts() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(BLOG_MANIFEST_PATH, { signal: controller.signal });
        if (!response.ok) throw new Error(`Blog manifest request failed: ${response.status}`);
        const manifest = await response.json();
        if (!Array.isArray(manifest.posts)) throw new Error("Blog manifest is missing its posts list.");
        const sorted = manifest.posts
          .filter((post) => post.layout === "post")
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        if (!controller.signal.aborted) setPosts(sorted);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Unable to load latest blogs:", error);
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    loadPosts();
    return () => controller.abort();
  }, [retry]);

  function handlePostClick(slug) {
    if (!user) {
      setShowToast(true);
      return;
    }
    navigate(`/posts/${slug}`);
  }

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const visible = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <>
      <aside className="border-t lg:border-t-0 lg:border-l border-gray-700/60 pt-6 lg:pt-0 lg:pl-6 font-mono" aria-labelledby="latest-blogs-heading">

        {/* Panel heading */}
        <div className="pb-2">
          <h2 id="latest-blogs-heading" className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
            Latest Blogs
          </h2>
        </div>

        {/* Post list */}
        <ul className="divide-y divide-gray-700/40" aria-busy={loading}>

          {/* Skeleton while loading */}
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="py-4 space-y-2 animate-pulse motion-reduce:animate-none">
                <div className="h-2.5 bg-gray-700/60 rounded w-4/5" />
                <div className="h-2 bg-gray-800 rounded w-2/5" />
              </li>
            ))}

          {!loading && !error &&
            visible.map((post) => (
              <li key={post.slug}>
                <button
                  onClick={() => handlePostClick(post.slug)}
                  className="w-full text-left py-4 group transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
                >
                  <p className="text-gray-300 text-sm font-medium leading-relaxed group-hover:text-red-400 transition-colors line-clamp-2">
                    {post.title}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400 text-[10px]">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-[10px] text-gray-400 group-hover:text-red-400 transition-colors">
                      Read →
                    </span>
                  </div>
                </button>
              </li>
            ))}

        </ul>
        {!loading && error && (
          <div role="alert" className="py-4 text-xs text-gray-400 leading-relaxed">
            <p>Latest articles are temporarily unavailable.</p>
            <button type="button" className="py-3 text-red-400 underline underline-offset-4 cursor-pointer" onClick={() => setRetry((value) => value + 1)}>Try again</button>
          </div>
        )}
        {!loading && !error && posts.length === 0 && (
          <p className="py-4 text-xs text-gray-400">New articles are on the way.</p>
        )}

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <nav className="flex flex-wrap items-center pt-2" aria-label="Blog pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                aria-label={`Blog page ${n}`}
                aria-current={n === page ? "page" : undefined}
                className={`text-[10px] min-w-8 min-h-11 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 ${
                  n === page
                    ? "text-red-400 border-b border-red-400"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {n}
              </button>
            ))}
          </nav>
        )}

      </aside>

      {/* Auth toast — rendered outside the aside so it can be fixed-positioned */}
      {showToast && (
        <AuthToast
          onClose={() => setShowToast(false)}
          onSignIn={() => { setShowToast(false); signIn(); }}
        />
      )}
    </>
  );
}
