import { useRoutes } from "react-router-dom";
import { AuthConsumer, AuthProvider } from "./contexts/auth-context";
import { privateRoutes, authRoutes } from "./routes";

export const App = () => {
  const privatePages = useRoutes(privateRoutes);
  const publicPages = useRoutes(authRoutes);

  return (
    <AuthProvider>
      <AuthConsumer>
        {(auth) => (auth.isAuthenticated ? privatePages : publicPages)}
      </AuthConsumer>
    </AuthProvider>
  );
};
