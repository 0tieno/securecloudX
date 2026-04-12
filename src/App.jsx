import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import AppShell from "./components/AppShell";
import ProtectedDayRoute from "./routes/ProtectedDayRoute";
import { shellRoutes, standaloneRoutes } from "./routes/routeConfig";

const App = () => {
  const renderRouteElement = (route) => {
    const element = <route.Component />;

    if (!route.protectedDay) {
      return element;
    }

    return <ProtectedDayRoute day={route.protectedDay}>{element}</ProtectedDayRoute>;
  };

  return (
    <Router>
      <Routes>
        {standaloneRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        ))}

        <Route element={<AppShell />}>
          {shellRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={renderRouteElement(route)}
            />
          ))}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
