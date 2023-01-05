import { TaskProps } from "@/types/task";
import { useCallback, useRef } from "react";
import { dateFormatter } from "@/utils/formatter";
import { TaskDetailsModal } from "@/components/ApplicationModal/TaskDetails";

interface IModal {
  onOpen(): void;
}

export const TaskItem = (task: TaskProps) => {
  const modalRef = useRef<IModal>(null);
  const handleClickOpenModal = useCallback(
    () => modalRef?.current?.onOpen(),
    []
  );

  const statusColor = {
    "in-progress": "border-blue-300",
    waiting: "border-yellow-500",
    complete: "border-green-500",
  };

  return (
    <>
      <TaskDetailsModal ref={modalRef} {...task} />

      <div
        onClick={() => handleClickOpenModal()}
        className="grid grid-cols-5 rounded-2xl my-3 border-2 border-gray-200 justify-between items-center hover:bg-gray-100 cursor-pointer"
      >
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
    </>
  );
};
