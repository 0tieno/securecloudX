import React from "react";
import LandingHeader from "./landing/LandingHeader";
import FeatureGrid from "./landing/FeatureGrid";
import PricingSection from "./landing/PricingSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <LandingHeader />
      <FeatureGrid />
      <PricingSection />
    </div>
  );
}
