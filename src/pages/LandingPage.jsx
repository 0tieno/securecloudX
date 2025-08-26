import React from "react";
import LandingHeader from "./landing/LandingHeader";
import FeatureGrid from "./landing/FeatureGrid";
import PricingSection from "./landing/PricingSection";
import Changelog from "./landing/Changelog";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white py-12">
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
        <LandingHeader />
        <FeatureGrid />
        <Changelog />
        <PricingSection />
      </div>
    </div>
  );
}
