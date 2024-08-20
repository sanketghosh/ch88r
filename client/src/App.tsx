import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protected/protected-route";
import { useAppContext } from "./contexts/app-context";
import { Auth, ErrorPage, Home } from "./pages";

export default function App() {
  const { isLoggedIn } = useAppContext();

  console.log(isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
