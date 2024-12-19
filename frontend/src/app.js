import { useRoutes } from "react-router-dom";
import { AuthConsumer, AuthProvider } from "./contexts/auth-context";
import { appConfig } from "./config";
import { privateRoutes, publicRoutes, authRoutes } from "./routes";

LicenseInfo.setLicenseKey(appConfig.muiLicenseKey);

export const App = () => {

  const privatePages = useRoutes(privateRoutes);
  const publicPages = useRoutes([...authRoutes, ...publicRoutes]);

  return (
    <AuthProvider>
      <AuthConsumer>
        {(auth) => {
          auth.isAuthenticated ? { privatePages } : { publicPages };
        }}
      </AuthConsumer>
    </AuthProvider>
  );
};
