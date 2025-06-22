import { useState, useEffect } from "react";

const CHALLENGE_START_DATE = new Date("2025-06-15T00:00:00Z");

const useChallengeUnlock = () => {
  const [unlockedDays, setUnlockedDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const timeDiff = today - CHALLENGE_START_DATE;

    // How many full 7-day windows have passed since challenge began
    const weeksSinceStart = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
    const unlocked = [];

    // Unlock all days from Day 1 up to the current week number
    for (let i = 1; i <= weeksSinceStart + 1 && i <= 7; i++) {
      unlocked.push(i); // Day 1 to Day 7
    }

    setUnlockedDays(unlocked);
  }, []);

  return unlockedDays; // Example: [1, 2, 3]
};

export default useChallengeUnlock;
