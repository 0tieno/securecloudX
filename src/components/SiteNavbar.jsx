import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Cloud, LogIn, User } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Curriculum", path: "/get-started" },
  { label: "Community", path: "/community" },
];

function Avatar({ url }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 overflow-hidden grid place-items-center shrink-0">
      {url && !failed ? (
        <img src={url} alt="" className="w-full h-full object-cover" onError={() => setFailed(true)} />
      ) : <User size={16} className="text-gray-400" aria-hidden="true" />}
    </span>
  );
}

export default function SiteNavbar({ actions }) {
  const { user, signIn, signOut } = useAuth();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [authError, setAuthError] = useState("");
  const accountRef = useRef(null);
  const buttonRef = useRef(null);
  const menuId = useId();
  const displayName = user?.user_metadata?.user_name ?? user?.email?.split("@")[0] ?? "Account";

  useEffect(() => {
    if (!open) return;
    function closeOutside(event) {
      if (!accountRef.current?.contains(event.target)) setOpen(false);
    }
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  async function handleAuth(action) {
    setBusy(true);
    setAuthError("");
    try {
      const { error } = await (action === "in" ? signIn() : signOut());
      if (error) throw error;
      if (action === "out") {
        setOpen(false);
        navigate("/");
      }
    } catch (error) {
      console.error(`Unable to sign ${action}:`, error);
      setAuthError(`We couldn't sign you ${action}. Please try again.`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-gray-900 border-b border-gray-700 font-sans">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 flex flex-wrap items-center gap-x-4 sm:gap-x-6 min-h-16">
        <Link to="/" aria-label="securecloudX home" className="inline-flex items-center gap-3 py-4 text-blue-400 font-semibold text-lg tracking-tight whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
          <Cloud size={25} strokeWidth={1.5} aria-hidden="true" />
          securecloudX
        </Link>
        <nav aria-label="Main navigation" className="order-3 md:order-2 w-full md:w-auto flex items-center gap-5 sm:gap-6">
          {LINKS.map((link) => {
            const active = link.path.includes("#") ? `${pathname}${hash}` === link.path : pathname === link.path;
            return (
              <Link key={link.path} to={link.path} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined} className={`py-3 md:py-5 text-xs sm:text-sm whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${active ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="order-2 md:order-3 ml-auto flex items-center gap-2">
          {actions}
          <ThemeToggle />
          {user ? (
            <div ref={accountRef} className="relative">
              <button ref={buttonRef} type="button" onClick={() => setOpen((value) => !value)} aria-label={`Account options for ${displayName}`} aria-expanded={open} aria-controls={menuId} className="inline-flex items-center gap-2 min-h-11 cursor-pointer text-sm text-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
                <Avatar key={user.id} url={user.user_metadata?.avatar_url} />
                <span className="hidden sm:inline-block max-w-28 truncate" title={displayName}>{displayName}</span>
                <ChevronDown size={14} className="text-gray-400" aria-hidden="true" />
              </button>
              {open && (
                <div id={menuId} role="group" aria-label="Account options" className="absolute right-0 top-full mt-2 w-52 border border-gray-700 rounded-lg bg-gray-900 shadow-lg p-2">
                  <Link to="/home" onClick={() => setOpen(false)} className="block px-3 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded">Learning dashboard</Link>
                  <Link to="/certificate" onClick={() => setOpen(false)} className="block px-3 py-3 text-sm text-gray-300 hover:bg-gray-800 rounded">My certificate</Link>
                  <button type="button" onClick={() => handleAuth("out")} disabled={busy} className="block w-full px-3 py-3 text-left text-sm text-red-400 hover:bg-gray-800 rounded cursor-pointer disabled:cursor-wait">{busy ? "Signing out..." : "Sign out"}</button>
                </div>
              )}
            </div>
          ) : (
            <button type="button" onClick={() => handleAuth("in")} disabled={busy} aria-busy={busy} aria-label="Sign in with GitHub" className="inline-flex items-center justify-center gap-2 min-w-11 min-h-11 text-xs sm:text-sm text-gray-300 hover:text-blue-400 cursor-pointer disabled:cursor-wait focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
              <LogIn size={16} aria-hidden="true" /> <span className="hidden min-[380px]:inline">{busy ? "Signing in..." : "Sign in with GitHub"}</span>
            </button>
          )}
        </div>
      </div>
      {authError && <p role="alert" className="max-w-4xl mx-auto px-5 sm:px-6 pb-3 text-sm text-red-400">{authError}</p>}
    </header>
  );
}
