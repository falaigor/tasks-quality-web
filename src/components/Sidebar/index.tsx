import { Clipboard, HouseSimple } from "phosphor-react";

export function Sidebar() {
  return (
    <div className="w-32">
      <aside className="fixed w-32 p-8 bg-white rounded-2xl">
        <img src="/favicon.svg" width="60px" alt="" />
        <nav className="mt-4">
          <ul>
            <li className="p-4 my-2 text-zinc-50 bg-blue-500 rounded-xl flex justify-center items-center">
              <HouseSimple weight="bold" size={20} />
            </li>
            <li className="p-4 my-2 hover:text-zinc-800 hover:bg-blue-500 rounded-xl flex justify-center items-center">
              <Clipboard weight="bold" size={20} />
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
