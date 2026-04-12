import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Edit3, ExternalLink } from "lucide-react";
import { externalLinks } from "../data/externalLinks";

const BLOG_MANIFEST_PATH = "/blog/blog-manifest.json";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(BLOG_MANIFEST_PATH);
        const manifest = await res.json();
        const internalPosts = (manifest.posts ?? [])
          .filter((p) => p.layout === "post")
          .map((p) => ({ ...p, isExternal: false }));

        const all = [...internalPosts, ...externalLinks].sort((a, b) => {
          if (a.date === "Not yet") return 1;
          if (b.date === "Not yet") return -1;
          return new Date(b.date) - new Date(a.date);
        });

        setPosts(all);
      } catch (e) {
        console.error("Failed to load blog manifest:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return null;

  return (
    <div className="max-w-xl mx-auto mt-12 px-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400 mb-4 flex items-center">
        Blogs...
        <Edit3 className="mr-3 text-blue-400" size={32} />
      </h2>

      <p className="text-gray-400 mb-6">
        Here is a collection of blog posts that you might find useful while
        using securecloudx challenges or maybe not. It is all matters cloud
        security and Dev(Sec)Ops. I have dabbled in textual, graphical, and
        video content.
      </p>

      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={index} className="text-gray-300 text-sm md:text-base">
            <div className="flex items-start justify-between">
              <div className="flex items-center flex-1">
                <span className="mr-2">•</span>
                {post.isExternal ? (
                  <a
                    href={post.url}
                    className="text-gray-300 hover:text-gray-100 transition-colors underline decoration-1 underline-offset-3 decoration-gray-500 hover:decoration-gray-300 flex-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </a>
                ) : (
                  <div className="flex-1">
                    <Link
                      to={`/posts/${post.slug}`}
                      className="text-gray-300 hover:text-gray-100 transition-colors underline decoration-1 underline-offset-3 decoration-gray-500 hover:decoration-gray-300 font-medium"
                    >
                      {post.title}
                    </Link>
                    {post.excerpt && (
                      <p className="text-gray-400 text-xs mt-1 ml-0">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center ml-4 text-xs md:text-sm text-gray-500 flex-shrink-0">
                <span>({post.date})</span>
              </div>
            </div>

            {/* Associated Lab Link */}
            {post.associatedLab && (
              <div className="ml-4 mt-2">
                {post.associatedLab.day ? (
                  <Link
                    to={`/module${post.associatedLab.day}`}
                    className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Related: Module {post.associatedLab.day} -{" "}
                    {post.associatedLab.title}
                  </Link>
                ) : post.associatedLab.path ? (
                  <Link
                    to={post.associatedLab.path}
                    className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Related: {post.associatedLab.title}
                  </Link>
                ) : null}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
