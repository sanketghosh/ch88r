import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

import App from "@/App.tsx";
import "@/index.css";

// providers
import { AuthContextProvider } from "@/providers/auth-context-provider.tsx";
import { ThemeProvider } from "@/providers/theme-provider.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </AuthContextProvider>,
);
