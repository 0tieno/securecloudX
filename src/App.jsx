import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import AppShell from "./components/AppShell";
import { shellRoutes, standaloneRoutes } from "./routes/routeConfig";

const App = () => {
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
              element={<route.Component />}
            />
          ))}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
