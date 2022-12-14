import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "../layouts/Default";
import { HomePage } from "@/pages/Home";
import { TasksPage } from "@/pages/Tasks";
import { LoginPage } from "@/pages/Login";

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
        element: <HomePage />,
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
