import { Resume } from "./components/Resume";
import { Sidebar } from "./components/Sidebar";
import { DefaultLayout } from "./layouts/Default";
import "./styles/main.css";

export function App() {
  return (
    <DefaultLayout>
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">Welcome back Igor</h1>
          <button>Add new task</button>
        </div>

        <div className="bg-zinc-50 rounded-xl p-4">
          <span className="text-xl font-bold">Content</span>
        </div>
      </div>
    </DefaultLayout>
  );
}
