import { Plus } from "phosphor-react";

export function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: "O titulo maneiro de uma task",
      date: new Date().getDay(),
      issues: 0,
      status: "in-progress",
    },
    {
      id: 2,
      title: "O titulo maneiro de uma task",
      date: new Date().getDay(),
      issuesQuantity: 0,
      status: "waiting",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-zinc-50 rounded-xl p-9">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-extrabold pb-4">Tasks</span>
          <button className="flex items-center p-4 text-blue-500 hover:text-blue-900">
            <Plus weight="bold" /> Add new task
          </button>
        </div>

        <table className="w-full border-separate border-spacing-y-1">
          <thead>
            <tr>
              <th align="left">Task</th>
              <th align="center">Date Start</th>
              <th align="center">Date Finish</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="bg-zinc-200 p-4 rounded-tl-md rounded-bl-md">
                  {task.title}
                </td>
                <td align="center" className="bg-zinc-200 p-4">
                  {task.date}
                </td>
                <td align="center" className="bg-zinc-200 p-4">
                  {task.date}
                </td>
                <td
                  align="center"
                  className="bg-zinc-200 p-4 rounded-tr-md rounded-br-md"
                >
                  {task.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
