import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Calendar, Clock, ArrowLeft, Search, Terminal } from "lucide-react";

// Helper to fetch markdown files from public/blog
const BLOGS_PATH = "/blog/";

// List of blog post filenames and their metadata
const blogFiles = [
  {
    filename: "hello-open-source.md",
    date: "2025-08-31",
    author: "SecureCloudX Team",
  },
  {
    filename: "cloud-security-fundamentals.md",
    date: "2025-08-30",
    author: "Alex Chen",
  },
  {
    filename: "secure-coding-practices.md",
    date: "2025-08-28",
    author: "Sarah Mitchell",
  },
  {
    filename: "devsecops-pipeline-security.md",
    date: "2025-09-01",
    author: "Marcus Rodriguez",
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
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        console.log("Starting to fetch blog posts...");

        const fetchedPosts = await Promise.all(
          blogFiles.map(async (meta) => {
            try {
              const url = BLOGS_PATH + meta.filename;
              console.log(`Fetching: ${url}`);

              const res = await fetch(url);
              if (!res.ok) {
                console.warn(
                  `Failed to fetch ${meta.filename}: ${res.status} ${res.statusText}`
                );
                return null;
              }

              const text = await res.text();
              console.log(
                `Successfully fetched ${meta.filename}, length: ${text.length}`
              );

              const { title, excerpt, readingTime } =
                extractMetadataFromMarkdown(text);
              console.log(`Post data for ${meta.filename}:`, {
                ...meta,
                title,
                excerpt,
                readingTime,
              });
              return { ...meta, title, excerpt, content: text, readingTime };
            } catch (error) {
              console.error(`Error fetching ${meta.filename}:`, error);
              return null;
            }
          })
        );

        // Filter out failed fetches and sort by date
        const validPosts = fetchedPosts
          .filter((post) => post !== null)
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        console.log(`Successfully loaded ${validPosts.length} blog posts`);
        console.log(
          "Posts with authors:",
          validPosts.map((p) => ({ title: p.title, author: p.author }))
        );
        setPosts(validPosts);
        setError(null);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError(error.message);
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

  // Filter posts based on search only
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="flex items-center space-x-2 text-green-400 font-mono">
          <Terminal className="w-5 h-5 animate-pulse" />
          <span>Loading intel...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center font-mono">
          <div className="text-red-400 text-xl mb-4">
            [ERROR] Failed to load data
          </div>
          <div className="text-gray-500 text-sm mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded font-mono hover:bg-gray-700 transition-colors border border-gray-600"
          >
            [RETRY]
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pb-32 font-mono">
      <div className="w-full max-w-4xl mx-auto px-4 py-10">
        {!selectedPost ? (
          <>
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Terminal className="w-6 h-6 text-green-400 mr-3" />
                <h1 className="text-3xl font-bold text-gray-300">
                  cloud_security_intel
                </h1>
              </div>
              <p className="text-gray-500 max-w-2xl">
                // Cloud penetration testing, cloud security engineering, and
                research.
              </p>
            </div>

            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="grep -i 'vulnerability' posts/*"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600 font-mono"
                />
              </div>
            </div>

            {/* Blog Posts List */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 font-mono">
                  {posts.length === 0
                    ? "// no intelligence found"
                    : "// no matches for search query"}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredPosts.map((post, idx) => {
                  const postDate = new Date(post.date);
                  const formattedDate = postDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  });

                  return (
                    <article
                      key={post.filename}
                      className="bg-gray-800 border border-gray-700 p-6 hover:border-gray-600 transition-colors cursor-pointer group"
                      onClick={() => handleSelectPost(post)}
                    >
                      <div className="flex flex-col">
                        <header className="mb-3">
                          <h2 className="text-xl text-gray-300 mb-2 group-hover:text-gray-200 transition-colors">
                            {post.title}
                          </h2>

                          <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {formattedDate}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.readingTime}m
                            </div>
                            <div className="flex items-center">
                              <span className="text-gray-600">by</span>
                              <span className="text-gray-400 ml-1">
                                {post.author}
                              </span>
                            </div>
                          </div>
                        </header>

                        <p className="text-gray-400 mb-3 leading-relaxed text-sm">
                          {post.excerpt}
                        </p>

                        <footer>
                          <span className="text-green-400 text-sm hover:text-green-300 transition-colors">
                            cat {post.filename.replace(".md", "")} →
                          </span>
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
              className="mb-8 inline-flex items-center text-green-400 hover:text-green-300 transition-colors group font-mono"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              cd ../
            </button>

            <article className=" p-8">
              <header className="mb-8 pb-6 border-b border-gray-700">
                <h1 className="text-3xl text-gray-300 mb-4">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center text-gray-500 space-x-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(selectedPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {selectedPost.readingTime}m read
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">by</span>
                    <span className="text-gray-400 ml-1">
                      {selectedPost.author}
                    </span>
                  </div>
                </div>
              </header>

              <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed">
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1
                        className="text-2xl text-gray-300 mb-6 mt-8 font-mono"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-xl text-gray-300 mb-4 mt-6 font-mono"
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-lg text-gray-300 mb-3 mt-5 font-mono"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-gray-400 mb-4 leading-relaxed"
                        {...props}
                      />
                    ),
                    code: ({ node, inline, ...props }) =>
                      inline ? (
                        <code
                          className="bg-gray-900 px-2 py-1 text-green-400 text-sm font-mono border border-gray-700"
                          {...props}
                        />
                      ) : (
                        <code
                          className="block bg-gray-900 p-4 text-green-400 text-sm overflow-x-auto font-mono border border-gray-700"
                          {...props}
                        />
                      ),
                    pre: ({ node, ...props }) => (
                      <pre
                        className="bg-gray-900 p-4 overflow-x-auto mb-4 border border-gray-700"
                        {...props}
                      />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-4 border-gray-600 pl-4 italic text-gray-500 my-4 font-mono"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="list-disc list-inside text-gray-400 mb-4 space-y-1"
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal list-inside text-gray-400 mb-4 space-y-1"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="text-gray-400" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-green-400 hover:text-green-300 underline transition-colors"
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
      <footer className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 z-50 font-mono">
        <div className="w-full max-w-6xl mx-auto px-4 py-3">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="text-gray-500 text-sm">
              root@securecloudx:~# whoami
            </div>
            <div className="text-gray-500 text-sm">
              cloud security engineer | cloud penetration tester
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="mailto:securecloudx.learn@gmail.com"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                contact
              </a>
              <a
                href="http://github.com/securecloudx"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                github
              </a>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-2">
            <div className="flex items-center space-x-4 text-xs">
              <a
                href="mailto:securecloudx.learn@gmail.com"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                contact
              </a>
              <a
                href="http://github.com/securecloudx"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                github
              </a>
            </div>
            <div className="text-gray-500 text-xs">
              root@securecloudx:~# whoami
            </div>
            <div className="text-gray-500 text-xs">
              cloud security engineer | cloud penetration tester
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OpenSourceBlog;
