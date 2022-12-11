import { Outlet } from "react-router-dom";
import { Resume } from "../components/Resume";
import { Sidebar } from "../components/Sidebar";

export function DefaultLayout() {
  return (
    <section className="flex fle-col gap-8">
      <Sidebar />

      <div className="flex-1 pt-8">
        <Outlet />
      </div>

      <Resume />
    </section>
  );
}
