import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CHALLENGE_START_DATE } from "../constants/challengeConfig";

const getUnlockDate = (day) => {
  const unlockDayOffset = (day - 1) * 7;
  const unlockDate = new Date(CHALLENGE_START_DATE);
  unlockDate.setDate(unlockDate.getDate() + unlockDayOffset);
  return unlockDate;
};

const getTimeLeft = (unlockDate) => {
  const now = new Date();
  const diff = unlockDate - now;

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const getCurrentUnlockedDay = () => {
  const now = new Date();
  const diffInDays = Math.floor((now - CHALLENGE_START_DATE) / (1000 * 60 * 60 * 24));
  return Math.min(7, Math.floor(diffInDays / 7) + 1); // Max day is 7
};

const ProtectedDayRoute = ({ day, children }) => {
  const unlockDate = getUnlockDate(day);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(unlockDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(unlockDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [unlockDate]);

  const isUnlocked = !timeLeft;
  const currentDay = getCurrentUnlockedDay();

  if (isUnlocked) return children;

  return (
    <div className="p-6 text-center bg-gray-900 text-gray-300 h-full">
      <div className="max-w-xl mx-auto mt-20 p-6 border-l-4 border-yellow-400 bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">🔐 Hold On!</h2>
        <p className="text-base sm:text-lg mb-1">Day {day} is still locked.</p>
        <p className="text-base sm:text-lg">It will unlock in:</p>

        {timeLeft && (
          <p className="text-yellow-400 font-mono text-xl mt-3">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        )}

        <p className="text-sm mt-4 text-gray-400">
          Meanwhile, continue learning with the current challenge:
        </p>

        <Link
  to={`/day${currentDay}`}
  className="inline-block mt-3 bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
>
  🔓 Continue Now
</Link>

      </div>
    </div>
  );
};

export default ProtectedDayRoute;
