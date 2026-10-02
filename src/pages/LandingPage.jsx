import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LandingHeader from "./landing/LandingHeader";
import Footer from "../components/Footer";
import AuthToast from "../components/AuthToast";
import { useAuth } from "../contexts/AuthContext";
import PageNav from "../components/PageNav";
import AvailablePaths from "./landing/AvailablePaths";

export default function LandingPage() {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (location.hash === "#community") {
      navigate("/community", { replace: true });
      return;
    }
    if (location.state?.authRedirect) {
      setShowToast(true);
    }
  }, [location.hash, location.state, navigate]);

  return (
    <div className="min-h-screen flex flex-col text-gray-300 relative bg-gray-900 font-mono">
      <PageNav compact />

      <main className="w-full max-w-4xl mx-auto px-5 sm:px-6 relative z-10 flex-1 py-12 sm:py-16">
        <LandingHeader />
        <AvailablePaths />
      </main>

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
