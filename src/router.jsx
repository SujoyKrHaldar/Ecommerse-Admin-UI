import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoutes, PrivateRoutes } from "./routes";
import { Login, PageNotFound, Dashboard } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PrivateRoutes />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "",
        element: <AuthRoutes />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
