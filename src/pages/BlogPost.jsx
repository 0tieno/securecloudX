import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { ArrowLeft } from "lucide-react";
import MarkdownContent from "../components/MarkdownContent";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <Navigate to="/posts" replace />;
  }

  if (post.isExternal) {
    // Redirect to external URL
    window.open(post.url, "_blank");
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
          <MarkdownContent content={post.content} variant="blog" />
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
