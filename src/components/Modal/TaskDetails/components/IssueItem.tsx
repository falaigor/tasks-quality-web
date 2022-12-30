import { IssueProps } from "@/types/issue";
import { CheckCircle, Circle, TrashSimple, XCircle } from "phosphor-react";

export function IssueCheck(issue: IssueProps) {
  return (
    <div className="w-full border-2 mt-1 rounded-xl p-2 border-gray-200 flex items-center justify-between">
      <div className="flex gap-4 ">
        <button className="shrink-0">
          {!!issue.finishedAt && (
            <CheckCircle className="text-green-500" size={28} weight="fill" />
          )}

          {!!issue.canceledAt && (
            <XCircle className="text-red-500" size={28} weight="fill" />
          )}

          {!issue.finishedAt && !issue.canceledAt && (
            <Circle className="text-yellow-500" size={28} />
          )}
        </button>

        <div className="text-sm">
          <label>{issue.description}</label>
          <p>Descricao</p>
        </div>
      </div>

      <button className="p-4 text-zinc-400 hover:text-zinc-800 transition-all">
        <TrashSimple weight="fill" />
      </button>
    </div>
  );
}
