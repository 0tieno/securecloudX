import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MarkdownContent from "../components/MarkdownContent";
import { stripFrontmatter } from "../utils/frontmatter";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const manifestRes = await fetch("/blog/blog-manifest.json");
        if (!manifestRes.ok) throw new Error("Manifest not found");
        const manifest = await manifestRes.json();

        const found = (manifest.posts ?? []).find((p) => p.slug === id);
        if (!found) {
          setNotFound(true);
          return;
        }

        setPost(found);

        const mdRes = await fetch(`/blog/${found.filename}`);
        if (!mdRes.ok) throw new Error("Post file not found");
        const markdown = await mdRes.text();
        setContent(stripFrontmatter(markdown));
      } catch (e) {
        console.error("Failed to load blog post:", e);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <span className="text-gray-400 font-mono animate-pulse">Loading...</span>
      </div>
    );
  }

  if (notFound) {
    return <Navigate to="/posts" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-xl mx-auto px-4 py-4">
        {/* Back button */}
        <Link
          to="/posts"
          className="inline-flex items-center text-gray-400 hover:text-gray-200 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-[-2px] transition-transform" />
          <span className="underline decoration-1 underline-offset-3">
            Back to Posts
          </span>
        </Link>

        {/* Blog post header */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>Published on {post.date}</span>
          </div>
        </header>

        {/* Blog post content */}
        <article className="text-gray-300">
          <MarkdownContent content={content} variant="blog" />
        </article>

        {/* Back to posts link at the bottom */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <Link
            to="/posts"
            className="inline-flex items-center text-gray-400 hover:text-gray-200 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-[-2px] transition-transform" />
            <span className="underline decoration-1 underline-offset-3">
              Back to all posts
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
