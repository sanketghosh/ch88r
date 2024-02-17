import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth, Home } from "./pages";
import ProtectedRoute from "./components/protected/protected-route";
import { useAppContext } from "./contexts/app-context";

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
      </Routes>
    </Router>
  );
}
