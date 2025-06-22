// src/routes/ProtectedDayResources.jsx
import { useParams } from "react-router-dom";
import ProtectedDayRoute from "./ProtectedDayRoute";
import Resources from "../pages/Resources";

const ProtectedDayResources = () => {
  const { day } = useParams();
  const parsedDay = parseInt(day, 10);

  return (
    <ProtectedDayRoute day={parsedDay}>
      <Resources />
    </ProtectedDayRoute>
  );
};

export default ProtectedDayResources;
