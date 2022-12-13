import { Plus } from "phosphor-react";
import { TaskItem } from "../../components/TaskItem";
import { Resume } from "./components/Resume";

export function Home() {
  return (
    <div className=" flex flex-col gap-10">
      <Resume />

      <div className="bg-zinc-50 rounded-xl p-4">
        <div className="flex justify-between">
          <span className="text-xl font-bold">Week Tasks</span>
          <button className="flex items-center gap-2 p-4 text-blue-500 hover:text-blue-900">
            <Plus weight="bold" /> Add new task
          </button>
        </div>

        <TaskItem status="in-progress" />
      </div>
    </div>
  );
}
