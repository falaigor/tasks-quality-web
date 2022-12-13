import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function DefaultLayout() {
  return (
    <section className="max-w-6xl m-auto flex fle-col gap-8 pt-8">
      <Sidebar />

      <div className="flex-1">
        <Outlet />
      </div>
    </section>
  );
}
