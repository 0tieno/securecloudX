import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import LandingHeader from "./landing/LandingHeader";
import FeatureGrid from "./landing/FeatureGrid";
import PricingSection from "./landing/PricingSection";
import Changelog from "./landing/Changelog";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white py-12 relative bg-gray-900"
      style={{
        backgroundImage: "url('/security-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AnnouncementBar />
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none z-0" />
      <div
        className="w-full max-w-2xl mx-auto px-2 sm:px-0 relative z-10"
        style={{ marginTop: "32px" }}
      >
        <LandingHeader />
        <FeatureGrid />
        <Changelog />
        <PricingSection />
      </div>
    </div>
  );
}
