import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";
import SiteNavbar from "./SiteNavbar";

function HeaderActions({ onSearch }) {
  return (
    <>
      <button
        onClick={onSearch}
        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 border border-gray-700 hover:border-gray-500 px-2.5 py-1 transition-colors text-xs"
        aria-label="Open search"
      >
        <Search size={13} />
        <span className="hidden sm:inline">Search</span>
        <span className="hidden sm:flex items-center gap-0.5 text-gray-600">
          <kbd className="text-xs font-medium bg-gray-700 border border-gray-600 px-1 py-0.5 rounded">Ctrl</kbd>
          <kbd className="text-xs font-medium bg-gray-700 border border-gray-600 px-1 py-0.5 rounded">K</kbd>
        </span>
      </button>
      <a
        href="https://x.com/securecloudX"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-300 transition-colors"
        aria-label="Follow on X"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.3 2H22L14.8 10.6 23 22h-5l-5.7-7.9L6.3 22H2l8.7-9.6L2.3 2h5.2l5.2 7.5L18.3 2ZM17.2 20h1.6l-9.7-14h-1.7l9.8 14Z"/>
        </svg>
      </a>
    </>
  );
}

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  // Global Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      <SiteNavbar actions={<HeaderActions onSearch={() => setSearchOpen(true)} />} />
    </>
  );
};

export default Header;
