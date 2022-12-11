import { Clipboard, HouseSimple } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className="w-24 sm:w-80 pl-8 pt-8">
      <img src="/logo-dark.svg" width="175px" alt="" />
      <nav className="mt-4">
        <ul>
          <li className="p-4 my-2 text-zinc-50 bg-blue-500 rounded-xl flex gap-2 items-center">
            <HouseSimple weight="bold" size={20} /> Dashboard
          </li>
          <li className="p-4 my-2 hover:text-zinc-50 hover:bg-blue-500 rounded-xl flex gap-2 items-center">
            <Clipboard weight="bold" size={20} /> Activity
          </li>
        </ul>
      </nav>
    </aside>
  );
}
