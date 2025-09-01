import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Calendar, Clock, ArrowLeft, Search, Tag } from "lucide-react";

// Helper to fetch markdown files from Docs/blogs
const BLOGS_PATH = "/Docs/blogs/";

// List of blog post filenames and their metadata (add more as needed)
const blogFiles = [
  {
    filename: "hello-open-source.md",
    date: "2025-08-31",
    tags: ["open-source", "introduction"],
  },
  {
    filename: "cloud-security-fundamentals.md",
    date: "2025-08-30",
    tags: ["cloud", "security", "fundamentals"],
  },
  {
    filename: "secure-coding-practices.md",
    date: "2025-08-28",
    tags: ["security", "coding", "best-practices"],
  },
  {
    filename: "devsecops-pipeline-security.md",
    date: "2025-09-01",
    tags: ["devsecops", "ci-cd", "security", "automation"],
  },
];

function extractMetadataFromMarkdown(markdown) {
  const lines = markdown.split("\n");

  // Extract title from first # heading
  const title =
    lines.find((line) => line.startsWith("# "))?.replace("# ", "") ||
    "Untitled";

  // Extract excerpt from content (first few lines after title, excluding empty lines)
  const contentLines = lines.filter(
    (line) =>
      !line.startsWith("#") &&
      line.trim() !== "" &&
      !line.startsWith("---") &&
      !line.startsWith("_Posted on")
  );
  const excerpt = contentLines.slice(0, 2).join(" ").slice(0, 150) + "...";

  // Extract reading time estimate (roughly 200 words per minute)
  const wordCount = markdown.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return { title, excerpt, readingTime };
}

const OpenSourceBlog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await Promise.all(
          blogFiles.map(async (meta) => {
            try {
              const res = await fetch(BLOGS_PATH + meta.filename);
              if (!res.ok) {
                console.warn(`Failed to fetch ${meta.filename}:`, res.status);
                return null;
              }
              const text = await res.text();
              const { title, excerpt, readingTime } =
                extractMetadataFromMarkdown(text);
              return { ...meta, title, excerpt, content: text, readingTime };
            } catch (error) {
              console.warn(`Error fetching ${meta.filename}:`, error);
              return null;
            }
          })
        );

        // Filter out failed fetches and sort by date
        const validPosts = fetchedPosts
          .filter((post) => post !== null)
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setPosts(validPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  // Get all unique tags
  const allTags = [...new Set(posts.flatMap((post) => post.tags || []))];

  // Filter posts based on search and tag
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag =
      !selectedTag || (post.tags && post.tags.includes(selectedTag));

    return matchesSearch && matchesTag;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="text-blue-400 text-xl">Loading blog posts...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pb-32">
      <div className="w-full max-w-4xl mx-auto px-4 py-10">
        {!selectedPost ? (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-extrabold text-blue-400 mb-4 drop-shadow-lg">
                SecureCloudX Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Insights, tutorials, and thoughts on cloud security, DevSecOps,
                and modern development practices.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Tags Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag("")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    !selectedTag
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  All Posts
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                      selectedTag === tag
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  {posts.length === 0
                    ? "No blog posts found."
                    : "No posts match your filters."}
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
                {filteredPosts.map((post, idx) => {
                  const postDate = new Date(post.date);
                  const formattedDate = postDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });

                  return (
                    <article
                      key={post.filename}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group"
                      onClick={() => handleSelectPost(post)}
                    >
                      <div className="flex flex-col h-full">
                        <header className="mb-4">
                          <h2 className="text-2xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors">
                            {post.title}
                          </h2>

                          <div className="flex items-center text-sm text-gray-400 space-x-4 mb-3">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formattedDate}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readingTime} min read
                            </div>
                          </div>

                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </header>

                        <p className="text-gray-300 mb-4 leading-relaxed flex-1">
                          {post.excerpt}
                        </p>

                        <footer>
                          <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            Read More
                            <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </footer>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          /* Single Post View */
          <div className="w-full max-w-4xl mx-auto">
            <button
              onClick={handleBackToList}
              className="mb-8 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </button>

            <article className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <header className="mb-8 pb-6 border-b border-gray-700">
                <h1 className="text-4xl font-bold text-blue-300 mb-4">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center text-gray-400 space-x-6 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    {new Date(selectedPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    {selectedPost.readingTime} min read
                  </div>
                </div>

                {selectedPost.tags && selectedPost.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              <div className="prose prose-invert prose-blue max-w-none">
                <ReactMarkdown
                  className="text-gray-300 leading-relaxed"
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1
                        className="text-3xl font-bold text-blue-300 mb-6 mt-8"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-2xl font-semibold text-blue-300 mb-4 mt-6"
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-xl font-semibold text-blue-300 mb-3 mt-5"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-gray-300 mb-4 leading-relaxed"
                        {...props}
                      />
                    ),
                    code: ({ node, inline, ...props }) =>
                      inline ? (
                        <code
                          className="bg-gray-800 px-2 py-1 rounded text-blue-300 text-sm"
                          {...props}
                        />
                      ) : (
                        <code
                          className="block bg-gray-800 p-4 rounded-lg text-green-400 text-sm overflow-x-auto"
                          {...props}
                        />
                      ),
                    pre: ({ node, ...props }) => (
                      <pre
                        className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"
                        {...props}
                      />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="list-disc list-inside text-gray-300 mb-4 space-y-1"
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal list-inside text-gray-300 mb-4 space-y-1"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="text-gray-300" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                        {...props}
                      />
                    ),
                  }}
                >
                  {selectedPost.content}
                </ReactMarkdown>
              </div>
            </article>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-gray-900/95 via-gray-900/95 to-gray-800/95 backdrop-blur-sm py-4 border-t border-gray-700 z-50">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 gap-4 md:gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-semibold text-blue-200 text-lg mb-1">
              Master cloud security. Build secure systems.
            </div>
            <div className="text-blue-400">securecloudX</div>
            <a
              href="mailto:securecloudx.learn@gmail.com"
              className="text-blue-400 hover:underline text-sm"
            >
              securecloudx.learn@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="http://github.com/securecloudx"
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" fill="currentColor" className="mr-2">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.349-1.088.635-1.34-2.221-.253-4.555-1.112-4.555-4.945 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C17.138 18.162 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
              </svg>
              securecloudx
            </a>

            <a
              href="https://x.com/securecloudX"
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" fill="currentColor" className="mr-2">
                <path d="M20 3.924c-.735.326-1.524.547-2.353.646a4.118 4.118 0 001.804-2.27c-.793.47-1.672.81-2.606.995A4.107 4.107 0 009.847 7.03c-3.417-.172-6.444-1.81-8.468-4.297a4.07 4.07 0 00-.555 2.067c0 1.426.726 2.683 1.83 3.422a4.093 4.093 0 01-1.86-.513v.052c0 1.993 1.417 3.656 3.3 4.036-.345.093-.708.143-1.083.143-.265 0-.52-.026-.77-.073.52 1.623 2.032 2.805 3.827 2.836A8.233 8.233 0 010 17.542a11.616 11.616 0 006.29 1.844c7.547 0 11.675-6.155 11.675-11.495 0-.175-.004-.349-.012-.522A8.18 8.18 0 0020 3.924z" />
              </svg>
              securecloudX
            </a>
          </div>

          <div className="text-blue-300 text-sm text-center md:text-left max-w-md">
            Built with the belief that anyone can master cloud security through
            practical, hands-on learning.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OpenSourceBlog;
