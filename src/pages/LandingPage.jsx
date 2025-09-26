import AnnouncementBar from "../components/AnnouncementBar";
import LandingHeader from "./landing/LandingHeader";
// import FeatureGrid from "./landing/FeatureGrid";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-300 py-12 relative bg-gray-900 font-mono">
      <AnnouncementBar />
      {/* Background grid pattern for security aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,40,49,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(34,40,49,0.4)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10"
        style={{ marginTop: "32px" }}
      >
        <LandingHeader />
        {/* <FeatureGrid /> */}
      </div>
    </div>
  );
}
