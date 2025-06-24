import { Navigate, useLocation } from "react-router-dom";
import { CHALLENGE_START_DATE } from "../constants/challengeConfig";

const isDayUnlocked = (day) => {
  const today = new Date();
  const diffInDays = Math.floor((today - CHALLENGE_START_DATE) / (1000 * 60 * 60 * 24));
  const unlockDay = (day - 1) * 7;
  return diffInDays >= unlockDay;
};

const ProtectedDayRoute = ({ day, children }) => {
  const location = useLocation();
  return isDayUnlocked(day) ? children : <Navigate to="/" state={{ from: location }} replace />;
};

export default ProtectedDayRoute;
// This component checks if the specified day is unlocked based on the challenge start date.
// If the day is unlocked, it renders the children components; otherwise, it redirects to the home page.
// The `isDayUnlocked` function calculates whether the current date is past the unlock date for the specified day.
// The `ProtectedDayRoute` component uses React Router's `Navigate` to redirect users if they try to access a locked day.
// The `useLocation` hook is used to preserve the current location in the state, allowing users to return to their previous page after unlocking the day