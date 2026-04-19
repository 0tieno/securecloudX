import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="w-full bg-gray-800 p-4 text-gray-300 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">securecloudX<span className="text-xs bg-gray-600 text-white px-2 py-0.5 rounded ml-2 md:hidden">SCX</span></h1>
        <p className="text-sm text-gray-400">Master cloud security. Build secure systems.</p>
      </div>

      <div className="flex items-center space-x-3">
        {/* GitHub Icon */}
        <a href="https://github.com/securecloudx/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.583 0-.287-.012-1.237-.017-2.245-3.338.725-4.042-1.613-4.042-1.613-.547-1.387-1.337-1.755-1.337-1.755-1.09-.745.083-.73.083-.73 1.205.087 1.84 1.24 1.84 1.24 1.07 1.833 2.805 1.304 3.49.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.383 1.236-3.223-.125-.303-.536-1.523.116-3.176 0 0 1.007-.323 3.3 1.23.96-.267 1.987-.4 3.008-.405 1.02.005 2.048.138 3.008.405 2.293-1.553 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.913 1.235 3.223 0 4.61-2.805 5.622-5.476 5.92.43.37.813 1.098.813 2.213 0 1.598-.015 2.888-.015 3.282 0 .324.19.7.8.58C20.565 21.797 24 17.295 24 12c0-6.63-5.37-12-12-12Z"/>
          </svg>
        </a>

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
  );
};

export default Header;
