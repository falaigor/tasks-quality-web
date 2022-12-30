import { TaskProps } from "@/types/task";

export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const TaskItem = (task: TaskProps) => {
  const statusColor = {
    "in-progress": "border-blue-300",
    waiting: "border-yellow-500",
    complete: "border-green-500",
  };

  {
    dateFormatter.format(new Date(task.startedAt));
  }

  return (
    <div className="grid grid-cols-5 rounded-2xl my-3 border-2 border-gray-200 justify-between items-center hover:bg-gray-100">
      <div
        className={`ml-6 m-4 px-4 col-span-2 border-l-[5px] ${
          statusColor[task.status]
        }`}
      >
        <p className="font-medium py-4">{task.title}</p>
      </div>

      <p className="text-center">
        {dateFormatter.format(new Date(task.startedAt))}
      </p>
      <p className="text-center">
        {dateFormatter.format(new Date(task.dueDateAt))}
      </p>

      <div className="p-4 mr-4 rounded-full bg-yellow-300 bg-opacity-40 ring-2 ring-white flex items-center justify-center font-semibold">
        {task._count.issues}
      </div>
    </div>
  );
};
