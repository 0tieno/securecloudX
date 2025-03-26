const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 text-center p-4 mt-8">
      <p className="text-sm">&copy; {new Date().getFullYear()} secureCloudX. All rights reserved.</p>
      <a 
        href="mailto:ronney.onyango.otieno@gmail.com" 
        className="text-blue-400 text-xs mt-1 hover:underline"
      >
        📩 Report an Issue
      </a>
    </footer>
    
    );
  };
  
  export default Footer;
  