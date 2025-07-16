import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { ArrowLeft, Eye } from "lucide-react";
import { useCloudViewTracker } from "../hooks/useCloudViewTracker";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);
  const [viewCount, setViewCount] = useState(0);
  const { trackView, getViews } = useCloudViewTracker();

  useEffect(() => {
    if (post && !post.isExternal) {
      // Track the view and get updated count
      const handleViewTracking = async () => {
        try {
          const newCount = await trackView(post.id);
          setViewCount(newCount);
        } catch (error) {
          console.error("Error tracking view:", error);
          // Fallback to just getting existing view count
          const existingCount = await getViews(post.id);
          setViewCount(existingCount);
        }
      };

      handleViewTracking();
    }
  }, [post, trackView, getViews]);

  if (!post) {
    return <Navigate to="/posts" replace />;
  }

  if (post.isExternal) {
    // Redirect to external URL
    window.open(post.url, "_blank");
    return <Navigate to="/posts" replace />;
  }

 const formatContent = (content) => {
  const lines = content.trim().split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-2xl font-bold text-gray-100 mb-4 mt-6">
          {line.substring(2)}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-semibold text-gray-200 mb-3 mt-5">
          {line.substring(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold text-gray-300 mb-2 mt-4">
          {line.substring(4)}
        </h3>
      );
    } else if (line.startsWith("```")) {
      // Handle code blocks
      i++;
      let codeContent = [];
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeContent.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={i} className="mb-4">
          <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
            <code className="text-green-400 text-sm">
              {codeContent.join("\n")}
            </code>
          </pre>
        </div>
      );
    } else if (line.startsWith("`") && line.endsWith("`")) {
      elements.push(
        <p key={i} className="text-gray-300 mb-4 leading-relaxed">
          <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
            {line.slice(1, -1)}
          </code>
        </p>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      // Handle lists
      const listItems = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        listItems.push(lines[i].trim().substring(2));
        i++;
      }
      i--; // Adjust for the outer loop increment
      elements.push(
        <ul
          key={i}
          className="list-disc list-inside text-gray-300 mb-4 space-y-2"
        >
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else if (line.startsWith("|") && line.includes("|")) {
      // Handle tables
      const tableRows = [];
      let isHeader = true;

      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const currentLine = lines[i].trim();

        // Skip separator line (|------|----------|)
        if (currentLine.includes("---")) {
          i++;
          isHeader = false;
          continue;
        }

        // Parse table row
        const cells = currentLine
          .split("|")
          .map((cell) => cell.trim())
          .filter((cell) => cell.length > 0);

        tableRows.push({ cells, isHeader });
        isHeader = false;
        i++;
      }
      i--; // Adjust for the outer loop increment

      if (tableRows.length > 0) {
        elements.push(
          <div key={i} className="mb-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                {tableRows[0] && (
                  <tr className="border-b border-gray-600">
                    {tableRows[0].cells.map((cell, cellIndex) => (
                      <th
                        key={cellIndex}
                        className="text-left py-2 px-3 text-purple-400 font-semibold"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                )}
              </thead>
              <tbody className="text-gray-300">
                {tableRows.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-gray-700">
                    {row.cells.map((cell, cellIndex) => (
                      <td key={cellIndex} className="py-2 px-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    } else if (line.startsWith("![")) {
      // Image syntax: ![alt text](image_url)
      const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (imageMatch) {
        const [, altText, imageUrl] = imageMatch;
        elements.push(
          <div key={i} className="mb-6 text-center">
            <img
              src={imageUrl}
              alt={altText}
              className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
              style={{ maxHeight: "500px" }}
              onError={(e) => {
                e.target.style.display = "none";
                const fallback = document.createElement("div");
                fallback.textContent = `Image not found: ${altText}`;
                fallback.className = "text-gray-500 text-sm italic";
                e.target.parentNode.appendChild(fallback);
              }}
            />
            {altText && (
              <p className="text-gray-400 text-sm mt-2 italic">{altText}</p>
            )}
          </div>
        );
      }
    } else if (line.startsWith("> ")) {
      // Handle blockquotes
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().replace(/^> /, ""));
        i++;
      }
      i--; // for outer loop

      elements.push(
        <blockquote
          key={i}
          className="border-l-4 border-blue-500 pl-4 italic text-gray-400 bg-gray-800/40 rounded mb-4"
        >
          {quoteLines.map((q, qIndex) => {
            const processedQuote = q.replace(
              /`([^`]+)`/g,
              '<code className="bg-gray-800 px-1 py-0.5 rounded text-green-400">$1</code>'
            );
            return (
              <p
                key={qIndex}
                className="mb-1"
                dangerouslySetInnerHTML={{ __html: processedQuote }}
              />
            );
          })}
        </blockquote>
      );
    } else if (line.length > 0) {
      // Regular paragraph
      let processedLine = line;

      // Process markdown links [text](url)
      processedLine = processedLine.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" style="color: #60a5fa; text-decoration: underline;" target="_blank" rel="noopener noreferrer" onmouseover="this.style.color=\'#93c5fd\'" onmouseout="this.style.color=\'#60a5fa\'">$1</a>'
      );

      // Process inline code
      processedLine = processedLine.replace(
        /`([^`]+)`/g,
        '<code className="bg-gray-800 px-2 py-1 rounded text-green-400">$1</code>'
      );

      elements.push(
        <p
          key={i}
          className="text-gray-300 mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    } else {
      // Empty line
      elements.push(<br key={i} />);
    }

    i++;
  }

  return elements;
};


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
            {viewCount > 0 && (
              <span className="text-gray-500">{viewCount} views</span>
            )}
          </div>
        </header>

        {/* Blog post content */}
        <article className="text-gray-300">
          {formatContent(post.content)}
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
