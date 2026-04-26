import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
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
    <header className="w-full bg-gray-800 p-4 text-gray-300 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">securecloudX<span className="text-xs bg-gray-600 text-white px-2 py-0.5 rounded ml-2 md:hidden">SCX</span></h1>
        <p className="text-sm text-gray-400">Master cloud security. Build secure systems.</p>
      </div>

      <div className="flex items-center space-x-3">
        {/* Search */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 border border-gray-700 hover:border-gray-500 px-2.5 py-1 transition-colors font-mono text-xs"
          aria-label="Open search"
        >
          <Search size={13} />
          <span className="hidden sm:inline">Search</span>
          <span className="hidden sm:flex items-center gap-0.5 text-gray-600">
            <kbd className="text-[10px] bg-gray-700 border border-gray-600 px-1 py-0.5 rounded">Ctrl</kbd>
            <kbd className="text-[10px] bg-gray-700 border border-gray-600 px-1 py-0.5 rounded">K</kbd>
          </span>
        </button>

        {/* X (Twitter) Icon */}
        <a href="https://x.com/securecloudX" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.3 2H22L14.8 10.6 23 22h-5l-5.7-7.9L6.3 22H2l8.7-9.6L2.3 2h5.2l5.2 7.5L18.3 2ZM17.2 20h1.6l-9.7-14h-1.7l9.8 14Z"/>
          </svg>
        </a>

        {/* User avatar + logout */}
        {user && (
          <div className="flex items-center space-x-2 border-l border-gray-600 pl-3 ml-1">
            {user.user_metadata?.avatar_url ? (
              <img
                src={user.user_metadata.avatar_url}
                alt={user.user_metadata?.user_name ?? "avatar"}
                className="w-7 h-7 rounded-full border border-gray-600"
              />
            ) : null}
            <span className="text-xs text-gray-400 font-mono hidden sm:block">
              {user.user_metadata?.user_name ?? user.email}
            </span>
            <button
              onClick={handleSignOut}
              className="text-xs text-red-400 hover:text-red-300 font-mono border border-red-500/40 hover:border-red-400 px-2 py-1 transition-colors"
              title="Sign out"
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
