import { Link, useLocation } from "react-router-dom";

const Dot = () => <span className="text-gray-600">·</span>;

const Footer = () => {
  const { pathname } = useLocation();

  const pageTitle = pathname === "/" ? "home" : pathname.replace(/^\//, "").replace(/\//g, " › ");
  const issueTitle = encodeURIComponent(`Issue on /${pageTitle === "home" ? "" : pageTitle}: `);
  const issueUrl = `https://github.com/0tieno/securecloudX/issues/new?title=${issueTitle}&labels=bug`;

  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-gray-500 text-xs py-4 px-6 mt-8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        <span className="text-gray-500">&copy; {new Date().getFullYear()} securecloudX</span> <Dot /> some rights reserved

        <Dot />
        <Link to="/about" className="hover:text-gray-300 transition-colors">Founder</Link>
        <Dot />
        <Link to="/changelog" className="hover:text-gray-300 transition-colors">Changelog</Link>
        <Dot />
        <Link to="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms</Link>
        <Dot />
        <Link to="/pricing" className="hover:text-gray-300 transition-colors">Pricing</Link>
        <Dot />

        {/* GitHub */}
        <a
          href="https://github.com/0tieno/securecloudX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          GitHub
        </a>
        <Dot />

        {/* Report issue*/}
        <a
          href={issueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Report issue in this page 
        </a>
      </div>
    </footer>
  );
};

export default Footer;
