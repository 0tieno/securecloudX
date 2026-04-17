import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import AppShell from "./components/AppShell";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { shellRoutes, standaloneRoutes } from "./routes/routeConfig";

const App = () => {
  return (
    <AuthProvider>
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
              element={
                <ProtectedRoute>
                  <route.Component />
                </ProtectedRoute>
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
