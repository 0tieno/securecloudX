import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import { pricingTiers } from "../data/pricingData";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <PageNav
        subtitle="// pricing: consultation services and support"
        command="root@securecloudx:~# ./pricing.sh"
        links={[
          { label: "./terms-of-use", path: "/terms-of-service" },
          { label: "./pricing", active: true },
          { label: "./changelog", path: "/changelog" },
        ]}
      />

      <div className="flex-1 flex flex-col items-center px-4 py-12">

        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-center mb-2 w-64">
            <hr className="flex-grow border-t border-gray-700 mx-2" />
            <span className="text-2xl font-semibold text-center px-2">
              Pricing
            </span>
            <hr className="flex-grow border-t border-gray-700 mx-2" />
          </div>
          <p className="text-gray-300 text-center mb-8 mt-4 max-w-xl">
            This guide is free and open sourced. Only one-on-one consultation is
            charged to support commitment with additional benefits.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-80 shadow flex flex-col items-center hover:border-gray-600 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="line-through text-gray-400 text-sm">
                    {tier.originalPrice}
                  </span>
                  <span className="text-yellow-400 text-lg font-bold">
                    {tier.price}
                  </span>
                  <span className="text-gray-400 text-sm">{tier.duration}</span>
                </div>
                <a
                  href={tier.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mb-4 hover:bg-yellow-300 transition text-center"
                >
                  Get started
                </a>
                <p className="text-gray-400 text-center mb-4 text-sm">
                  {tier.description}
                </p>
                <ul className="text-gray-200 text-sm space-y-2 w-full">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-400">✔️</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
