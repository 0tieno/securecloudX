import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Terminal } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import SearchModal from "./SearchModal";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
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
  });

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      <header className="w-full bg-gray-900 border-b border-gray-700 px-4 py-3 text-gray-300 flex items-center justify-between font-mono">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-red-400 flex-shrink-0" />
          <Link
            to="/home"
            className="text-sm font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            secure<span className="text-red-400">cloud</span><span className="text-gray-100">X</span>
          </Link>
          <span className="hidden sm:block text-gray-700 text-xs">~/dashboard</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 border border-gray-700 hover:border-gray-500 px-2.5 py-1 transition-colors text-xs"
            aria-label="Open search"
          >
            <Search size={13} />
            <span className="hidden sm:inline">Search</span>
            <span className="hidden sm:flex items-center gap-0.5 text-gray-600">
              <kbd className="text-[10px] bg-gray-700 border border-gray-600 px-1 py-0.5 rounded">Ctrl</kbd>
              <kbd className="text-[10px] bg-gray-700 border border-gray-600 px-1 py-0.5 rounded">K</kbd>
            </span>
          </button>

          {/* X (Twitter) */}
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

          {/* User */}
          {user && (
            <div className="flex items-center gap-2 border-l border-gray-700 pl-3">
              {user.user_metadata?.avatar_url && (
                <img
                  src={user.user_metadata.avatar_url}
                  alt={user.user_metadata?.user_name ?? "avatar"}
                  className="w-6 h-6 rounded-full border border-gray-600"
                />
              )}
              <span className="text-xs text-gray-400 hidden sm:block">
                {user.user_metadata?.user_name ?? user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="text-xs text-red-400 hover:text-red-300 border border-red-500/40 hover:border-red-400 px-2 py-0.5 transition-colors"
              >
                logout
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
