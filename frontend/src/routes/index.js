import { lazy } from "react";
import { paths } from "../paths";

const Home = lazy(() => import("../pages/index"));
const LogInPage = lazy(() => import("../pages/logIn"));

export const publicRoutes = [
  {
    index: true,
    path: paths.index,
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const privateRoutes = [
  ...[
    // {
    //   path: paths.dashboard,
    //   element: <DashBoard />,
    // },
  ],
  ...publicRoutes,
];

export const authRoutes = [
  {
    path: paths.login,
    element: <LogInPage />,
  },
];
