import React from 'react';
import Content from '../components/Content';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6"; // If you need the new X (Twitter) logo


const Explore = () => {
  return (
    <Content>
      <div className="max-w-4xl mx-auto p-6">
        {/* Page Header */}
        <h2 className="text-3xl font-bold text-gray mb-4">Don't stop pushing</h2>
        {/* <p className="text-gray-300 mb-6">
          Continue your learning journey with the following certifications, projects, and resources.
        </p> */}
        <p className="text-gray-300 mb-6">
  Keep building! Experiment, break things, and rebuild—learning happens in the process. 🚀
</p>


        {/* Next Steps Section */}
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Next Steps 🚀</h3>
          <p className="text-gray-300 mb-4">Advance your skills with these certifications and projects:</p>
          
          {/* Certifications */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-blue-400">📜 Certifications</h4>
            <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
              <li>
                <a href="https://learn.microsoft.com/en-us/certifications/azure-security-engineer/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Microsoft Certified: Azure Security Engineer Associate
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Microsoft Certified: Azure Solutions Architect Expert
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-xl font-semibold text-blue-400">💻 Projects</h4>
            <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
              <li>
                <Link to="/project/secure-web-app" className="text-blue-400 hover:underline">
                  Deploy a Secure Azure Web Application
                </Link>
              </li>
              <li>
                <Link to="/project/security-dashboard" className="text-blue-400 hover:underline">
                  Build an Azure Security Dashboard with Sentinel
                </Link>
              </li>
            </ul>
          </div>
          
        </div>

        {/* DevSecOps Coming Soon */}
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-yellow-500 text-center">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">DevSecOps – Coming Soon 🔐</h3>
          <p className="text-gray-300">
            Stay tuned for hands-on labs and resources on integrating security into DevOps workflows.
          </p>
        </div>

        {/* Social Media Reminder */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-lg flex items-center justify-center">
            Share your progress on <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 ml-2 hover:underline">X (Twitter)</a> <FaXTwitter className="ml-2 text-blue-400" />
          </p>
        </div>
      </div>
    </Content>
  );
};

export default Explore;