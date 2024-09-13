import ProtectedRoute from "@/components/protected/protected-route";
import { Account, Auth, ChatScreen, ErrorPage, Home } from "@/pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainChatScreenLayout from "./layouts/main-chat-screen-layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainChatScreenLayout>
                <Home />
              </MainChatScreenLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat/:id"
          element={
            <ProtectedRoute>
              <MainChatScreenLayout>
                <ChatScreen />
              </MainChatScreenLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
