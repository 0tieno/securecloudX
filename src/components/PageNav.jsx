import { Link, useLocation } from "react-router-dom";
import { Terminal } from "lucide-react";
import SiteNavbar from "./SiteNavbar";

const maxWidthClasses = {
  "4xl": "max-w-4xl",
  "6xl": "max-w-4xl",
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
  compact = false,
  links = [],
}) {
  const { pathname } = useLocation();
  const widthClass = maxWidthClasses[maxWidth] ?? "max-w-4xl";
  if (compact) return <SiteNavbar />;

  return (
    <nav aria-label="Main navigation" className="bg-gray-900 border-b border-gray-700 px-5 sm:px-6 py-4 font-mono">
      <div className={`${widthClass} mx-auto`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mr-2 sm:mr-3" aria-hidden="true" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-300">
                <Link to="/" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">
                {variant === "personal" ? (
                  <>
                    I&apos;m <span className="text-red-400">$!rr0nn3y</span>
                  </>
                ) : (
                  <>
                    secure<span className="text-red-400">cloud</span>X
                  </>
                )}
                </Link>
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
          <div className="flex flex-wrap items-center justify-start sm:justify-end gap-x-4 sm:gap-x-6 gap-y-1 ml-8 sm:ml-0">
            {links.map((link) => {
              const active = link.active ?? pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`py-2 transition-colors duration-200 text-xs sm:text-sm font-mono whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400 ${active ? "text-red-400" : "text-gray-300 hover:text-red-400"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
