import { useEffect } from "react";
import confetti from "canvas-confetti";
import AnnouncementBar from "../components/AnnouncementBar";
import LandingHeader from "./landing/LandingHeader";
import LandingCurriculum from "./landing/LandingCurriculum";
import Footer from "../components/Footer";

export default function LandingPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#facc15", "#f87171", "#4ade80", "#60a5fa", "#c084fc"],
      });
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-gray-300 relative bg-gray-900 font-mono">
      <AnnouncementBar />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex-1 py-12 mt-8">
        <LandingHeader />
        <LandingCurriculum />
      </div>

      <Footer />
    </div>
  );
}
