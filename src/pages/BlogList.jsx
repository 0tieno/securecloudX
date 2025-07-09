import React from "react";
import { Link } from "react-router-dom";
import { Edit3, ExternalLink } from "lucide-react";
import { blogPosts } from "../data/blogData";

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
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400 mb-4 flex items-center">
        Blogs...
        <Edit3 className="mr-3 text-blue-400" size={32} />
      </h2>

      <p className="text-gray-400 mb-6">
        Here is a list of blog posts that you might find useful while using
        securecloudx challenges or maybe not. I have dabbled in textual,
        graphical, and video content.
      </p>

      <ul className="space-y-4">
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
                <span>({post.date})</span>
              </div>
            </div>

            {/* Associated Lab Link */}
            {post.associatedLab && (
              <div className="ml-4 mt-2">
                <Link
                  to={`/day${post.associatedLab.day}`}
                  className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Related: Day {post.associatedLab.day} -{" "}
                  {post.associatedLab.title}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
