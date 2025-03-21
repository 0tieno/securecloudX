import React from 'react';
import Content from '../components/Content';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <Content>
      <div className="max-w-4xl mx-auto p-6">
        {/* Page Header */}
        <h2 className="text-3xl font-bold text-gray mb-4">Explore More Azure Cloud Security Topics</h2>
        <p className="text-gray-300 mb-6">
          In this section, you'll find additional learning materials, articles, certifications, projects, and resources to continue your journey in Azure Cloud Security. Explore various topics in-depth to enhance your skills and understanding.
        </p>

        {/* Explore Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category 1 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Azure Security Best Practices</h3>
            <p className="text-gray-300 mb-4">
              Learn about best practices to enhance security across Azure environments, from secure network design to identity management.
            </p>
            <Link to="/best-practices" className="text-blue-400 hover:underline">
              Learn More
            </Link>
          </div>

          {/* Category 2 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Azure Identity & Access Management</h3>
            <p className="text-gray-300 mb-4">
              Explore advanced concepts in identity management, including role-based access control (RBAC) and multi-factor authentication (MFA).
            </p>
            <Link to="/iam" className="text-blue-400 hover:underline">
              Learn More
            </Link>
          </div>

          {/* Category 3 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Network Security in Azure</h3>
            <p className="text-gray-300 mb-4">
              Understand how to secure your Azure network with tools like Azure Firewall, VPNs, and NSGs. 
            </p>
            <Link to="/network-security" className="text-blue-400 hover:underline">
              Learn More
            </Link>
          </div>

          {/* Category 4 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Data Protection and Encryption</h3>
            <p className="text-gray-300 mb-4">
              Explore strategies for data encryption at rest and in transit within Azure environments.
            </p>
            <Link to="/data-protection" className="text-blue-400 hover:underline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray mb-4">Featured Resources</h3>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-semibold text-blue-400">Microsoft Azure Security Blog</h4>
            <p className="text-gray-300 mb-4">
              Stay up-to-date with the latest trends, news, and updates in Azure security by following the official blog.
            </p>
            <a href="https://techcommunity.microsoft.com/t5/security-compliance-and-identity/bd-p/security-compliance-identity" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Visit Blog
            </a>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-semibold text-blue-400">Azure Security Best Practices Documentation</h4>
            <p className="text-gray-300 mb-4">
              Access comprehensive security best practices for securing workloads and environments on Azure.
            </p>
            <a href="https://learn.microsoft.com/en-us/security/benchmark/azure/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Explore Best Practices
            </a>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray mb-4">Certifications to Pursue</h3>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-semibold text-blue-400">Microsoft Certified: Azure Security Engineer Associate</h4>
            <p className="text-gray-300 mb-4">
              The Azure Security Engineer Associate certification validates your ability to implement security controls and threat protection, manage identity and access, and protect data and applications.
            </p>
            <a href="https://learn.microsoft.com/en-us/certifications/azure-security-engineer/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Explore Certification
            </a>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-semibold text-blue-400">Microsoft Certified: Azure Solutions Architect Expert</h4>
            <p className="text-gray-300 mb-4">
              The Azure Solutions Architect Expert certification is aimed at professionals who want to validate their ability to design cloud solutions, including aspects of security, networking, and storage.
            </p>
            <a href="https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Explore Certification
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray mb-4">Projects to Build</h3>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-semibold text-blue-400">Deploy a Secure Azure Web Application</h4>
            <p className="text-gray-300 mb-4">
              Design and implement a web application in Azure, securing it using best practices such as RBAC, Azure Firewall, and DDoS protection.
            </p>
            <Link to="/project/secure-web-app" className="text-blue-400 hover:underline">
              Start Project
            </Link>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-semibold text-blue-400">Build an Azure Security Dashboard with Sentinel</h4>
            <p className="text-gray-300 mb-4">
              Create a security monitoring dashboard using Azure Sentinel to visualize security incidents and configure threat detection rules.
            </p>
            <Link to="/project/security-dashboard" className="text-blue-400 hover:underline">
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Explore;
