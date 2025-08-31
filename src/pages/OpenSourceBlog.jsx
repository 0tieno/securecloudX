import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

// Helper to fetch markdown files from Docs/blogs
const BLOGS_PATH = "/Docs/blogs/";

// List of blog post filenames (for demo, ideally auto-generated)
const blogFiles = ["hello-open-source.md"];

function getTitleAndExcerpt(markdown) {
  const lines = markdown.split("\n");
  const title =
    lines.find((line) => line.startsWith("# "))?.replace("# ", "") ||
    "Untitled";
  const excerpt = lines.slice(1, 5).join(" ").slice(0, 120) + "...";
  return { title, excerpt };
}

const OpenSourceBlog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch all blog posts
    Promise.all(
      blogFiles.map(async (filename) => {
        const res = await fetch(BLOGS_PATH + filename);
        const text = await res.text();
        const { title, excerpt } = getTitleAndExcerpt(text);
        return { filename, title, excerpt, content: text };
      })
    ).then(setPosts);
  }, []);

  const handleSelect = (post) => {
    setLoading(true);
    setSelectedPost(post);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pb-40">
      <div className="w-full max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-8 text-center drop-shadow-lg">
          Open Source Blog
        </h1>
        {!selectedPost ? (
          <div>
            {posts.map((post) => (
              <div
                key={post.filename}
                className="mb-8 border-b border-blue-900 pb-6"
              >
                <h2
                  className="text-2xl font-bold text-blue-300 mb-2 cursor-pointer hover:underline"
                  onClick={() => handleSelect(post)}
                >
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4 text-lg">{post.excerpt}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold shadow"
                  onClick={() => handleSelect(post)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white bg-opacity-5 border border-blue-900 rounded-xl shadow-lg p-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold shadow"
            >
              ← Back to Blog List
            </button>
            <ReactMarkdown className="prose prose-invert max-w-none text-lg text-gray-100">
              {selectedPost.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
      {/* Footer from GetStartedPage, with dark bg */}
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 bg-opacity-95 py-4 mt-8 border-t border-blue-900 flex justify-center items-center z-50">
        <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-4xl mx-auto px-2 md:px-4 gap-4 md:gap-0">
          <div className="flex flex-col items-start md:mr-8 mb-2 md:mb-0 w-full md:w-auto text-left">
            <div className="font-semibold text-blue-200 text-lg mb-1">
              Master cloud security. Build secure systems.
            </div>
            <div className="text-blue-400">securecloudX</div>
            <a
              href="mailto:conradakunga@gmail.com"
              className="text-blue-400 hover:underline text-sm"
            >
              securecloudx.learn@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-start md:mr-8 mb-2 md:mb-0 w-full md:w-auto text-left">
            <div className="flex items-center mb-1">
              <span className="mr-2 text-blue-400">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline-block"
                >
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.349-1.088.635-1.34-2.221-.253-4.555-1.112-4.555-4.945 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C17.138 18.162 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </span>
              <a
                href="http://github.com/securecloudx"
                className="text-blue-400 hover:underline text-sm"
              >
                securecloudx
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-blue-400">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline-block"
                >
                  <path d="M20 3.924c-.735.326-1.524.547-2.353.646a4.118 4.118 0 001.804-2.27c-.793.47-1.672.81-2.606.995A4.107 4.107 0 009.847 7.03c-3.417-.172-6.444-1.81-8.468-4.297a4.07 4.07 0 00-.555 2.067c0 1.426.726 2.683 1.83 3.422a4.093 4.093 0 01-1.86-.513v.052c0 1.993 1.417 3.656 3.3 4.036-.345.093-.708.143-1.083.143-.265 0-.52-.026-.77-.073.52 1.623 2.032 2.805 3.827 2.836A8.233 8.233 0 010 17.542a11.616 11.616 0 006.29 1.844c7.547 0 11.675-6.155 11.675-11.495 0-.175-.004-.349-.012-.522A8.18 8.18 0 0020 3.924z" />
                </svg>
              </span>
              <a
                href="https://x.com/securecloudX"
                className="text-blue-400 hover:underline text-sm"
              >
                securecloudX
              </a>
            </div>
          </div>
          <div className="text-blue-300 text-base w-full md:flex-1 text-left">
            securecloudX is built on the strong belief that with the right
            discipline, anyone can master cloud security through practical,
            hands-on learning.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OpenSourceBlog;
