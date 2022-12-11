import { Plus } from "phosphor-react";
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
          <button className="flex items-center gap-2 p-4 text-blue-500 hover:text-blue-900">
            <Plus weight="bold" /> Add new task
          </button>
        </div>

        <div className="bg-zinc-50 rounded-xl p-4">
          <span className="text-xl font-bold">Week Tasks</span>

          <div className="flex rounded-2xl my-3 border-2 border-gray-200 justify-between items-center hover:bg-gray-100">
            <div className="ml-4 m-4 px-2 border-l-4 border-green-500">
              <span className="text-gray-300 text-xs font-bold">Team</span>
              <p className="font-bold">Title</p>
            </div>
            <div className="p-4 mr-4 rounded-full bg-yellow-300 bg-opacity-40 ring-2 ring-white flex items-center justify-center font-extrabold">
              2 issues
            </div>
          </div>

          <div className="flex rounded-2xl my-3 border-2 border-gray-200 justify-between items-center hover:bg-gray-100">
            <div className="ml-4 m-4 px-2 border-l-4 border-yellow-500">
              <span className="text-gray-300 text-xs font-bold">Team</span>
              <p className="font-bold">Title</p>
            </div>
            <div className="p-4 mr-4 rounded-full bg-yellow-300 bg-opacity-40 ring-2 ring-white flex items-center justify-center font-extrabold">
              2 issues
            </div>
          </div>

          <div className="flex rounded-2xl my-3 border-2 border-gray-200 justify-between items-center hover:bg-gray-100">
            <div className="ml-4 m-4 px-2 border-l-4 border-blue-300">
              <span className="text-gray-300 text-xs font-bold">Team</span>
              <p className="font-bold">Title</p>
            </div>
            <div className="p-4 mr-4 rounded-full bg-yellow-300 bg-opacity-40 ring-2 ring-white flex items-center justify-center font-extrabold">
              2 issues
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
