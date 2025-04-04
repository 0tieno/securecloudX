const Header = () => {
  return (
    <header className="w-full bg-gray-800 p-4 text-gray-300 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">SecureCloudX</h1>
        <p className="text-sm text-gray-400">Master cloud security. Build secure systems.</p>
      </div>

      <div className="flex items-center space-x-3">
        {/* GitHub Icon */}
        <a href="https://github.com/0tieno/securecloudx-tips" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.583 0-.287-.012-1.237-.017-2.245-3.338.725-4.042-1.613-4.042-1.613-.547-1.387-1.337-1.755-1.337-1.755-1.09-.745.083-.73.083-.73 1.205.087 1.84 1.24 1.84 1.24 1.07 1.833 2.805 1.304 3.49.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.383 1.236-3.223-.125-.303-.536-1.523.116-3.176 0 0 1.007-.323 3.3 1.23.96-.267 1.987-.4 3.008-.405 1.02.005 2.048.138 3.008.405 2.293-1.553 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.913 1.235 3.223 0 4.61-2.805 5.622-5.476 5.92.43.37.813 1.098.813 2.213 0 1.598-.015 2.888-.015 3.282 0 .324.19.7.8.58C20.565 21.797 24 17.295 24 12c0-6.63-5.37-12-12-12Z"/>
          </svg>
        </a>

        {/* LinkedIn Icon */}
        {/* <a href="https://www.linkedin.com/in/ronney-otieno/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M4.98 3.5a2.48 2.48 0 0 1 2.52 2.5c0 1.38-1.1 2.5-2.48 2.5H4.96C3.58 8.5 2.48 7.38 2.48 6a2.48 2.48 0 0 1 2.5-2.5h.02ZM3 9.5h4v11H3v-11ZM9 9.5h3.7v1.5h.1c.5-.9 1.6-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.5v6h-4v-5.4c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9v5.5H9v-11Z"/>
          </svg>
        </a> */}

        {/* X (Twitter) Icon */}
        <a href="https://x.com/securecloudX" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.3 2H22L14.8 10.6 23 22h-5l-5.7-7.9L6.3 22H2l8.7-9.6L2.3 2h5.2l5.2 7.5L18.3 2ZM17.2 20h1.6l-9.7-14h-1.7l9.8 14Z"/>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
