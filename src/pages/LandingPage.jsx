import AnnouncementBar from "../components/AnnouncementBar";
import LandingHeader from "./landing/LandingHeader";
import LandingCurriculum from "./landing/LandingCurriculum";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col text-gray-300 relative bg-gray-900 font-mono">
      {/* <AnnouncementBar /> */}

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex-1 py-12 pt-20">
        <LandingHeader />
        <LandingCurriculum />
      </div>

      <Footer />
    </div>
  );
}
