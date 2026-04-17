import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  const pageTitle = pathname === "/" ? "home" : pathname.replace(/^\//, "").replace(/\//g, " › ");
  const issueTitle = encodeURIComponent(`Issue on /${pageTitle === "home" ? "" : pageTitle}: `);
  const issueUrl = `https://github.com/0tieno/securecloudX/issues/new?title=${issueTitle}&labels=bug`;

  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-4 mt-8 border-t border-gray-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} securecloudX. some rights reserved.
      </p>
      <p className="text-xs mt-1">
        Creator{" "}
        <a
          href="https://ronneyotieno.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          s!rr0nn3y
        </a>
      </p>
      <a
        href={issueUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-400 text-xs mt-2 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Report an issue with this page
      </a>
    </footer>
  );
};

export default Footer;
