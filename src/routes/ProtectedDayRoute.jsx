// src/routes/ProtectedDayRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

const CHALLENGE_START_DATE = new Date("2025-06-21T00:00:00Z");

const isDayUnlocked = (day) => {
  const today = new Date();
  const diffInDays = Math.floor((today - CHALLENGE_START_DATE) / (1000 * 60 * 60 * 24));
  return diffInDays >= (day - 1);
};

const ProtectedDayRoute = ({ day, children }) => {
  const location = useLocation();
  return isDayUnlocked(day) ? children : <Navigate to="/" state={{ from: location }} replace />;
};

export default ProtectedDayRoute;
