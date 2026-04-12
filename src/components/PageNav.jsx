import { useNavigate } from "react-router-dom";
import { Terminal } from "lucide-react";

const maxWidthClasses = {
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
};

/**
 * Shared navigation bar for standalone pages.
 *
 * @param {"site" | "personal"} variant  - "site" = securecloudX branding, "personal" = $!rr0nn3y
 * @param {string} subtitle              - First subtitle line shown below logo
 * @param {string} command               - Terminal command line shown below subtitle
 * @param {"4xl" | "6xl"} maxWidth       - Max container width
 * @param {Array<{label, path, active?}>} links - Right-side nav buttons
 */
export default function PageNav({
  variant = "site",
  subtitle,
  command,
  maxWidth = "6xl",
  links = [],
}) {
  const navigate = useNavigate();
  const widthClass = maxWidthClasses[maxWidth] ?? "max-w-6xl";

  return (
    <nav className="bg-gray-900 border-b border-gray-700 px-4 sm:px-6 py-4">
      <div className={`${widthClass} mx-auto`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mr-2 sm:mr-3" />
              <h1
                className="text-xl sm:text-2xl font-bold text-gray-300 cursor-pointer"
                onClick={() => navigate("/")}
              >
                {variant === "personal" ? (
                  <>
                    I&apos;m <span className="text-red-400">$!rr0nn3y</span>
                  </>
                ) : (
                  <>
                    secure<span className="text-red-400">cloud</span>X
                  </>
                )}
              </h1>
            </div>
            {(subtitle || command) && (
              <div className="ml-8 sm:ml-11 hidden sm:block">
                {subtitle && (
                  <p className="text-gray-500 text-sm">{subtitle}</p>
                )}
                {command && (
                  <div className="text-xs text-gray-600 mt-1">{command}</div>
                )}
              </div>
            )}
          </div>

          {/* Nav links */}
          <div className="flex items-center justify-start sm:justify-end space-x-4 sm:space-x-6 ml-8 sm:ml-0">
            {links.map((link) =>
              link.active ? (
                <span
                  key={link.label}
                  className="text-red-400 text-xs sm:text-sm font-mono cursor-default whitespace-nowrap"
                >
                  {link.label}
                </span>
              ) : (
                <button
                  key={link.label}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-mono whitespace-nowrap"
                  onClick={() => navigate(link.path)}
                >
                  {link.label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
