import { AuthProvider } from "./contexts/authContext";
import { AppRouter } from "./routes/AppRouter";

import "./styles/main.css";

export function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
