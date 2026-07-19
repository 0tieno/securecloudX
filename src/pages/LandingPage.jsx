import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnnouncementBar from "../components/AnnouncementBar";
import LandingHeader from "./landing/LandingHeader";
import LandingCurriculum from "./landing/LandingCurriculum";
import Footer from "../components/Footer";
import AuthToast from "../components/AuthToast";
import { useAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const { signIn } = useAuth();
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (location.state?.authRedirect) {
      setShowToast(true);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col text-gray-300 relative bg-gray-900 font-mono">
      {/* <AnnouncementBar /> */}

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex-1 py-12 pt-20">
        <LandingHeader />
        <LandingCurriculum />
      </div>

      <Footer />

      {showToast && (
        <AuthToast
          onClose={() => setShowToast(false)}
          onSignIn={() => { setShowToast(false); signIn(); }}
        />
      )}
    </div>
  );
}
