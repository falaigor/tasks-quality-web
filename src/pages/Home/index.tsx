import { useCallback, useRef } from "react";
import { Plus } from "phosphor-react";
import { Summary } from "./components/Summary";
import { TaskItem } from "@/components/TaskItem";
import { Modal } from "@/components/Modal";

interface IModal {
  onOpen(): void;
}

export function HomePage() {
  const modalRef = useRef<IModal>(null);
  const handleClickOpenModal = useCallback(
    () => modalRef?.current?.onOpen(),
    []
  );

  return (
    <div className="flex flex-col gap-10">
      <Modal ref={modalRef} />

      <Summary />

      <div className="bg-zinc-50 rounded-xl p-9">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">Week Tasks</span>
          <button
            onClick={() => handleClickOpenModal()}
            className="flex items-center p-4 text-blue-500 hover:text-blue-900"
          >
            <Plus weight="bold" /> Add new task
          </button>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-5 font-semibold justify-between items-center">
            <p className="ml-7 px-4 col-span-2">Tasks</p>
            <p className="text-center">Data de Inicio</p>
            <p className="text-center">Data Final</p>
            <p className="text-center mr-4 ">Issues</p>
          </div>
          <TaskItem status="in-progress" />
          <TaskItem status="waiting" />
          <TaskItem status="complete" />
        </div>
      </div>
    </div>
  );
}
