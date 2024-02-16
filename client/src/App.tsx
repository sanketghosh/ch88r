import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth, ErrorPage, Home, SelectAvatar } from "./pages";
import { useAppContext } from "./contexts/app-context";

export default function App() {
  /* const { isLoggedIn } = useAppContext();

  console.log(isLoggedIn); */

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
