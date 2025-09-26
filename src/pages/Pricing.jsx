import { useNavigate, Link } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Navbar Header */}
      <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <Terminal className="w-8 h-8 text-red-400 mr-3" />
              <h1
                className="text-2xl font-bold text-gray-300 cursor-pointer"
                onClick={() => navigate("/")}
              >
                secure<span className="text-red-400">cloud</span>X
              </h1>
            </div>
            <div className="ml-11">
              <p className="text-gray-500 text-sm">
                // pricing: consultation services and support
              </p>
              <div className="text-xs text-gray-600 mt-1">
                root@securecloudx:~# ./pricing.sh
              </div>
            </div>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex items-center space-x-6">
            <button className="text-red-400 text-sm font-mono cursor-default">
              ./pricing
            </button>
            <button
              className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm font-mono"
              onClick={() => navigate("/changelog")}
            >
              ./changelog
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center px-4 py-12">
        {/* Back Navigation Button */}
        <div className="w-full max-w-4xl mb-8 flex justify-start">
          <button
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 font-mono hover:bg-gray-700 hover:border-gray-600 transition-colors group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            cd ../
          </button>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-center mb-2 w-64">
            <hr className="flex-grow border-t border-gray-700 mx-2" />
            <span className="text-2xl font-semibold text-center px-2">
              Pricing
            </span>
            <hr className="flex-grow border-t border-gray-700 mx-2" />
          </div>
          <p className="text-gray-300 text-center mb-8 mt-4 max-w-xl">
            This guide is free and open sourced. Only one-on-one consultation is charged to
            support commitment with additional benefits.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-8">
            {/* Students Plan */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-80 shadow flex flex-col items-center hover:border-gray-600 transition-colors">
              <h3 className="text-xl font-semibold mb-1">
                Students • Personal
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="line-through text-gray-400 text-sm">
                  Ksh. 250
                </span>
                <span className="text-yellow-400 text-lg font-bold">
                  Ksh. 200
                </span>
                <span className="text-gray-400 text-sm">/45 minutes</span>
              </div>
              <Link
                to="/consult"
                className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mb-4 hover:bg-yellow-300 transition text-center"
              >
                Get started
              </Link>
              <p className="text-gray-400 text-center mb-4 text-sm">
                Perfect for students needing guidance with cloud security. Azure
                • AWS
              </p>
              <ul className="text-gray-200 text-sm space-y-2 w-full">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span>Cloud security 1-1
                  training
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Portfolio Project
                  walkthrough assistance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Cloud security
                  concept explanation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Career guidance and
                  tips
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Portfolio
                  development advice
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Learning path
                  recommendations
                </li>
              </ul>
            </div>
            {/* Professional Plan */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-80 shadow flex flex-col items-center hover:border-gray-600 transition-colors">
              <h3 className="text-xl font-semibold mb-1">
                Professional • Business
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="line-through text-gray-400 text-sm">
                  Ksh. 4000
                </span>
                <span className="text-yellow-400 text-lg font-bold">
                  Ksh. 1,000
                </span>
                <span className="text-gray-400 text-sm">/60 minutes</span>
              </div>
              <Link
                to="/consult"
                className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mb-4 hover:bg-yellow-300 transition text-center"
              >
                Get started
              </Link>
              <p className="text-gray-400 text-center mb-4 text-sm">
                Comprehensive consultation for small businesses. Azure • AWS
              </p>
              <ul className="text-gray-200 text-sm space-y-2 w-full">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Security assessment
                  and penetration testing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Cloud infrastructure
                  security engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Cloud migration
                  strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Compliance
                  framework discussion
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Risk analysis and
                  mitigation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Implementation
                  roadmap
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span> Follow-up
                  recommendations
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Links */}
          <div className="flex flex-col items-center mt-4 mb-2">
            <div className="flex gap-6 text-gray-400 text-sm mb-2">
              <Link to="/terms-of-service" className="hover:text-yellow-400">
                Terms of Use
              </Link>
              <Link to="/refund-policy" className="hover:text-yellow-400">
                Refund Policy
              </Link>
            </div>
            <div className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} securecloudX.guide - Your
              ultimate cloud security guide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
