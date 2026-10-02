import { BrowserRouter as Router, Navigate, Route, Routes, matchPath, useLocation } from "react-router-dom";

import AppShell from "./components/AppShell";
import ProtectedRoute from "./components/ProtectedRoute";
import RouterProgress from "./components/RouterProgress";
import RouteScroll from "./components/RouteScroll";
import ThemeToggle from "./components/ThemeToggle";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { shellRoutes, standaloneRoutes } from "./routes/routeConfig";

function FloatingThemeToggle() {
  const { pathname } = useLocation();
  if ([
    "/",
    "/get-started",
    "/hacktivities",
    "/community",
    "/research",
    "/research/charter",
    "/opensource-blog",
    "/ctf/safaricom-2025",
    "/ctf/safaricom-2025/real-ip-heist",
    "/pricing",
    "/terms-of-service",
    "/changelog",
    "/forgotten-secret-lab",
  ].some((path) => matchPath(path, pathname)) || shellRoutes.some(({ path }) => matchPath(path, pathname))) return null;
  return <ThemeToggle floating />;
}

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <RouterProgress />
          <RouteScroll />
          <FloatingThemeToggle />
          <Routes>
            {standaloneRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.protected ? (
                    <ProtectedRoute>
                      <route.Component />
                    </ProtectedRoute>
                  ) : <route.Component />
                }
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
    </ThemeProvider>
  );
};

export default App;
