import { lazy } from "react";
import { paths } from "../paths";

const Home = lazy(() => import("../pages/index"));
const LogInPage = lazy(() => import("../pages/logIn"));

export const privateRoutes = [
  {
    index: true,
    path: paths.index,
    element: <Home />,
  }
];

export const authRoutes = [
  {
    index: true,
    path: paths.index,
    element: <LogInPage />,
  },
];
