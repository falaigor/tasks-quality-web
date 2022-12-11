import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "../layouts/Default";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
