import AnnouncementBar from "../components/AnnouncementBar";
import LandingHeader from "./landing/LandingHeader";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-300 py-12 relative bg-gray-900 font-mono">
      <AnnouncementBar />

      <div
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10"
        style={{ marginTop: "32px" }}
      >
        <LandingHeader />
      </div>
    </div>
  );
}
