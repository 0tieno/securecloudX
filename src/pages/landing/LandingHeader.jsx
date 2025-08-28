import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingHeader() {
  const navigate = useNavigate();
  const phrases = ["Cloud Security Engineering", "Cloud Pentesting"];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < phrases[phraseIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + phrases[phraseIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setCharIndex(0);
        setDisplayedText("");
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, phraseIndex, phrases]);

  return (
    <div className="flex flex-col items-center mb-12">
      <div className="mb-4">
        <img
          src="/images/securecloudX-logo.jpg"
          alt="SecureCloudX Logo"
          className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-gray-800 shadow-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">securecloudX</h1>
      <p className="text-lg text-gray-300 mb-4 text-center max-w-md">
        Learn cloud security by doing!
      </p>
      <div className="flex justify-center">
        <span className="text-yellow-400 text-lg md:text-xl font-bold tracking-wide h-7 min-w-[220px]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
      <button
        className="bg-yellow-400 text-black font-semibold px-6 py-2 mt-4 rounded-full shadow hover:bg-yellow-300 transition"
        onClick={() => navigate("/home")}
      >
        Get Started
      </button>
      <span className="text-xs text-gray-400 mt-2">No sign-up required</span>
    </div>
  );
}
