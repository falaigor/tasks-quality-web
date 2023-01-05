import { IssueProps } from "@/types/issue";
import { dateFormatter } from "@/utils/formatter";
import { CheckCircle, Circle, TrashSimple, XCircle } from "phosphor-react";

export function IssueCheck(issue: IssueProps) {
  return (
    <div className="w-full border-2 mt-1 rounded-xl p-2 border-gray-200 flex items-center justify-between">
      <div className="flex gap-4 ">
        {!!issue.finishedAt && (
          <button className="shrink-0 outline-0">
            <CheckCircle className="text-green-500" size={28} weight="fill" />
          </button>
        )}

        {!!issue.canceledAt && (
          <button className="shrink-0 outline-0">
            <XCircle className="text-red-500" size={28} weight="fill" />
          </button>
        )}

        {!issue.finishedAt && !issue.canceledAt && (
          <button className="shrink-0 outline-0">
            <Circle className="text-yellow-500" size={28} />
          </button>
        )}

        <div className="text-sm">
          <label className="text-xs">Description</label>
          <p>{issue.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-sm text-right">
          <label className="text-xs">Created</label>
          <p>{dateFormatter.format(new Date(issue.createdAt))}</p>
        </div>

        <button className="p-4 text-zinc-400 hover:text-zinc-800 transition-all">
          <TrashSimple weight="fill" />
        </button>
      </div>
    </div>
  );
}
