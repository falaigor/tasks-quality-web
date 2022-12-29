import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { TasksPage } from "@/pages/Tasks";
import { LoginPage } from "@/pages/Login";

import { DefaultLayout } from "@/layouts/Default";
import { RestrictedRoute } from "./RestrictedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: (
          <RestrictedRoute>
            <HomePage />
          </RestrictedRoute>
        ),
      },
      {
        path: "/tasks",
        element: <TasksPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
