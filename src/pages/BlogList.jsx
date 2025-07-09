import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Eye } from "lucide-react";
import { viewTracker } from "../utils/viewTracker";

const BlogList = () => {
  // Sort blog posts by date (most recent first)
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    // Handle special dates like "Not yet"
    if (a.date === "Not yet") return 1;
    if (b.date === "Not yet") return -1;

    // Parse dates for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Sort in descending order (newest first)
    return dateB - dateA;
  });

  return (
    <div className="max-w-xl mx-auto mt-12 px-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400 mb-4">
        Blogs
      </h2>

      <p className="text-gray-400 mb-6">
        I do not{" "}
        <a
          href="https://securecloudwithronney.hashnode.dev/"
          className="underline decoration-1 underline-offset-3"
        >
          write
        </a>{" "}
        a lot but do share my learnings and thoughts from time to time. I have
        dabbled in textual, graphical, and video content.
      </p>

      <ul className="space-y-3">
        {sortedBlogPosts.map((post, index) => (
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
                  <Link
                    to={`/posts/${post.id}`}
                    className="text-gray-300 hover:text-gray-100 transition-colors underline decoration-1 underline-offset-3 decoration-gray-500 hover:decoration-gray-300 flex-1"
                  >
                    {post.title}
                  </Link>
                )}
              </div>

              <div className="flex items-center ml-4 text-xs md:text-sm text-gray-500 flex-shrink-0">
                {!post.isExternal && (
                  <div className="flex items-center mr-3">
                    <Eye className="w-3 h-3 mr-1" />
                    <span>{viewTracker.getViews(post.id)}</span>
                  </div>
                )}
                <span>({post.date})</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
