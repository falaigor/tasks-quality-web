import { Plus } from "phosphor-react";
import { Resume } from "./components/Resume";
import { Sidebar } from "./components/Sidebar";
import { DefaultLayout } from "./layouts/Default";
import "./styles/main.css";
import { TaskItem } from "./components/TaskItem/index";

export function App() {
  return (
    <DefaultLayout>
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">Welcome back Igor</h1>
          <button className="flex items-center gap-2 p-4 text-blue-500 hover:text-blue-900">
            <Plus weight="bold" /> Add new task
          </button>
        </div>

        <div className="bg-zinc-50 rounded-xl p-4">
          <span className="text-xl font-bold">Week Tasks</span>

          <TaskItem />
        </div>
      </div>
    </DefaultLayout>
  );
}
