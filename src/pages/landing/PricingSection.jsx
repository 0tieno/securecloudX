export default function PricingSection() {
  return (
    <div className="w-full flex flex-col items-center mt-16">
      <h2 className="text-2xl font-semibold text-center mb-2 border-b border-gray-700 pb-1 w-64">
        Pricing
      </h2>
      <p className="text-gray-300 text-center mb-8 max-w-xl">
        Keep using the guide for free. Only consultation is charged to support
        commitment with additional benefits.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-8">
        {/* Students Plan */}
        <div className="bg-gray-900 rounded-xl p-8 w-80 shadow flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-1">Students • Personal</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="line-through text-gray-400 text-sm">Ksh. 250</span>
            <span className="text-yellow-400 text-lg font-bold">Ksh. 200</span>
            <span className="text-gray-400 text-sm">/45 minutes</span>
          </div>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mb-4 hover:bg-yellow-300 transition">
            Get started
          </button>
          <p className="text-gray-400 text-center mb-4 text-sm">
            Perfect for students needing guidance with cloud security.
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
              <span className="text-green-400">✔️</span> Cloud security concept
              explanation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> Career guidance and
              tips
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> Portfolio development
              advice
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> Learning path
              recommendations
            </li>
          </ul>
        </div>
        {/* Professional Plan */}
        <div className="bg-gray-900 rounded-xl p-8 w-80 shadow flex flex-col items-center">
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
          <button className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mb-4 hover:bg-yellow-300 transition">
            Get started
          </button>
          <p className="text-gray-400 text-center mb-4 text-sm">
            Comprehensive consultation for small businesses
          </p>
          <ul className="text-gray-200 text-sm space-y-2 w-full">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> Security assessment
              guidance
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> Cloud migration
              strategy
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> Compliance framework
              discussion
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> Risk analysis and
              mitigation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔️</span> Implementation roadmap
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
          <a href="#" className="hover:text-yellow-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-yellow-400">
            Privacy Policy
          </a>
          <a href="/refund-policy" className="hover:text-yellow-400">
            Refund Policy
          </a>
        </div>
        <div className="text-gray-500 text-xs">
          © 2025 securecloudX.guide - Your ultimate cloud security guide
        </div>
      </div>
    </div>
  );
}
