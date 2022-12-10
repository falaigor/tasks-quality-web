import "./styles/main.css";

export function App() {
  return (
    <section className="flex fle-col gap-8">
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
      <div className="flex-1 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">Welcome back Igor</h1>
          <button>Add new task</button>
        </div>
        <div className="bg-zinc-50 rounded-xl p-4">
          <span className="text-xl font-bold">Content</span>
        </div>
      </div>
      <div className="max-w-lg w-full h-screen bg-zinc-50 p-8">ResultBar</div>
    </section>
  );
}
