import { useState, useEffect } from "react";
import { CHALLENGE_START_DATE } from "../constants/challengeConfig";


const useChallengeUnlock = () => {
  const [unlockedDays, setUnlockedDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const timeDiff = today - CHALLENGE_START_DATE;

    const weeksSinceStart = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
    const unlocked = [];

    for (let i = 1; i <= weeksSinceStart + 1 && i <= 7; i++) {
      unlocked.push(i);
    }

    setUnlockedDays(unlocked);
  }, []);

  return unlockedDays;
};

export default useChallengeUnlock;
