import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import WelcomeModal, { hasSeenWelcome } from "./WelcomeModal";
import WelcomeBackToast from "./WelcomeBackToast";
import { useAuth } from "../contexts/AuthContext";

const AppShell = () => {
  const { user } = useAuth();
  const [showWelcome, setShowWelcome] = useState(false);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);

  useEffect(() => {
    if (!user) return;
    // Only greet on a fresh OAuth sign-in, not on every page refresh
    const isFreshSignIn = sessionStorage.getItem("scx_fresh_signin");
    if (!isFreshSignIn) return;
    sessionStorage.removeItem("scx_fresh_signin");

    if (!hasSeenWelcome(user.id)) {
      setShowWelcome(true);
    } else {
      setShowWelcomeBack(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const username =
    user?.user_metadata?.user_name ??
    user?.email?.split("@")[0] ??
    "there";

  return (
    <div className="flex h-screen bg-gray-900">
      {showWelcome && (
        <WelcomeModal user={user} onClose={() => setShowWelcome(false)} />
      )}
      {showWelcomeBack && (
        <WelcomeBackToast
          username={username}
          onClose={() => setShowWelcomeBack(false)}
        />
      )}
      <Sidebar />
      <div className="flex flex-1 flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto border-l border-gray-700 bg-gray-900 p-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AppShell;