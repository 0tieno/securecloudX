import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AuthToast from "../../components/AuthToast";

const BLOG_MANIFEST_PATH = "/blog/blog-manifest.json";
const POSTS_PER_PAGE = 3;

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function LatestBlogsPanel() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch(BLOG_MANIFEST_PATH)
      .then((r) => r.json())
      .then((manifest) => {
        const sorted = (manifest.posts ?? [])
          .filter((p) => p.layout === "post")
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sorted);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

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
      <aside className="border border-gray-700 bg-gray-800/30 overflow-hidden font-mono">

        {/* Red accent bar */}
        <div className="h-0.5 bg-gradient-to-r from-red-500 via-red-400/60 to-transparent" />

        {/* Panel heading */}
        <div className="px-4 pt-3.5 pb-3 border-b border-gray-700/60">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
            Latest Blogs
          </h2>
        </div>

        {/* Post list */}
        <ul className="divide-y divide-gray-700/50">

          {/* Skeleton while loading */}
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="px-4 py-4 space-y-2 animate-pulse">
                <div className="h-2.5 bg-gray-700/60 rounded w-4/5" />
                <div className="h-2 bg-gray-800 rounded w-2/5" />
              </li>
            ))}

          {!loading &&
            visible.map((post) => (
              <li key={post.slug}>
                <button
                  onClick={() => handlePostClick(post.slug)}
                  className="w-full text-left px-4 py-4 group hover:bg-white/[0.03] transition-colors"
                >
                  <p className="text-green-400 text-sm font-medium leading-snug group-hover:text-green-300 transition-colors line-clamp-2">
                    {post.title}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-300 text-[10px]">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-[10px] text-gray-300 group-hover:text-green-500 transition-colors">
                      Read →
                    </span>
                  </div>
                </button>
              </li>
            ))}

        </ul>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-700/60">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`text-xs w-5 h-5 flex items-center justify-center transition-colors ${
                  n === page
                    ? "text-gray-100 border-b border-gray-400"
                    : "text-gray-600 hover:text-gray-300"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
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
