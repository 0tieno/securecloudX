const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-4 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} securecloudX. All rights reserved.
      </p>
      <p className="text-xs mt-1">
        Built by{" "}
        <a
          href="https://ronneyotieno.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Ronney Otieno
        </a>
      </p>
      <a
        href="mailto:securecloudx.learn@gmail.com"
        className="text-blue-400 text-xs mt-1 hover:underline"
      >
        📩 Report an Issue
      </a>
    </footer>
  );
};

export default Footer;
