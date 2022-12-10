export function Sidebar() {
  return (
    <aside className="w-80 pl-8 pt-8">
      <img src="/logo-dark.svg" width="175px" alt="" />
      <nav className="mt-4">
        <ul>
          <li className="p-4 my-2 text-zinc-50 bg-blue-500 rounded-xl">
            Dashboard
          </li>
          <li className="p-4 my-2 hover:text-zinc-50 hover:bg-blue-500 rounded-xl">
            Activity
          </li>
        </ul>
      </nav>
    </aside>
  );
}
