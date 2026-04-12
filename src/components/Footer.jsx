const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-4 mt-8">
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
        href="https://github.com/0tieno/securecloudX/issues/new?title=Bug%20Report%3A%20&labels=bug"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 text-xs mt-1 hover:underline"
      >
        Report an Issue
      </a>
    </footer>
  );
};

export default Footer;
