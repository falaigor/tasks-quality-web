import { ReactNode } from "react";
import { Resume } from "../components/Resume";
import { Sidebar } from "../components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <section className="flex fle-col gap-8">
      <Sidebar />

      <div className="flex-1 pt-8">{children}</div>

      <Resume />
    </section>
  );
}
