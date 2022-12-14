interface TaskItemProps {
  status: "in-progress" | "waiting" | "complete";
}

export const TaskItem = ({ status }: TaskItemProps) => {
  const statusColor = {
    "in-progress": "border-blue-300",
    waiting: "border-yellow-500",
    complete: "border-green-500",
  };

  return (
    <div className="grid grid-cols-5 rounded-2xl my-3 border-2 border-gray-200 justify-between items-center hover:bg-gray-100">
      <div
        className={`ml-6 m-4 px-4 col-span-2 border-l-[5px] ${statusColor[status]}`}
      >
        <span className="text-gray-300 text-xs font-bold">Team</span>
        <p className="font-medium">Um Titulo bem grande pra ver como fica </p>
      </div>
      <p className="text-center">12/02/2020</p>
      <p className="text-center">12/02/2020</p>
      <div className="p-4 mr-4 rounded-full bg-yellow-300 bg-opacity-40 ring-2 ring-white flex items-center justify-center font-semibold">
        2
      </div>
    </div>
  );
};
