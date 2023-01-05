import {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TaskProps } from "@/types/task";
import { IssueCheck } from "./components/IssueItem";
import { IssueProps } from "@/types/issue";
import { useAuth } from "@/contexts/authContext";
import { api } from "@/services/api";
import { PlusCircle } from "phosphor-react";
import { useForm } from "react-hook-form";

interface IssuesResponse {
  issues: IssueProps[];
}

interface NewIssueFormInput {
  description: string;
}

export const TaskDetailsModal = forwardRef((props: TaskProps, ref) => {
  const { token } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [issues, setIssues] = useState<IssueProps[]>([]);
  const [showAddIssueForm, setShowAddIssueForm] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useImperativeHandle(
    ref,
    () => ({
      onOpen,
      onClose,
      isOpen,
    }),
    [isOpen]
  );

  async function fetchIssues() {
    try {
      const { data } = await api.get<IssuesResponse>(
        `/issues/from/${props.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { issues } = data;

      setIssues(issues);
    } catch (err) {}
  }

  async function handleNewIssue(data: NewIssueFormInput) {
    try {
      const { description } = data;
      const response = await api.post<IssuesResponse>(
        `issues`,
        { taskId: props.id, description },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response;
    } catch (err) {
      console.log(err);
    } finally {
      reset();
      fetchIssues();
    }
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold leading-6 text-gray-900"
                >
                  {props.title}{" "}
                  <span className="text-xs"> - {props.status}</span>
                </Dialog.Title>

                <div className="mt-2 flex flex-col">
                  <p className="text-sm">{props.description}</p>
                </div>

                <div className="my-4">
                  <label className=" text-lg font-medium">Issues</label>
                  <div>
                    {issues.map((issue) => (
                      <IssueCheck key={issue.id} {...issue} />
                    ))}

                    {showAddIssueForm ? (
                      <form onSubmit={handleSubmit(handleNewIssue)}>
                        <div className="w-full mt-4 flex flex-col">
                          <label className="mb-1 text-xs font-medium">
                            Description
                          </label>
                          <textarea
                            className="border p-2 rounded-lg text-sm text-gray-500"
                            {...register("description")}
                          />
                        </div>

                        <div className="mt-4 gap-2 flex">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md cursor-pointer border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          >
                            Register issue
                          </button>

                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() =>
                              setShowAddIssueForm(!showAddIssueForm)
                            }
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="w-full border-2 mt-4 rounded-xl p-2 border-gray-200 flex flex-col items-center justify-between hover:bg-zinc-100 transition-all">
                        <button
                          type="button"
                          onClick={() => setShowAddIssueForm(!showAddIssueForm)}
                          className="w-full flex gap-4 items-center"
                        >
                          <div className="shrink-0">
                            <PlusCircle className="text-yellow-500" size={28} />
                          </div>

                          <div className="text-sm">
                            <label>Add new issue</label>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});
