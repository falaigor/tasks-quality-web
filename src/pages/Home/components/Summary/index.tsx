interface SummaryProps {
  quantityTasks: number;
  quantityIssues: number;
}

export function Summary({ quantityTasks, quantityIssues }: SummaryProps) {
  const averageIssues = (quantityTasks / quantityIssues).toFixed(2);

  return (
    <div className="w-full bg-zinc-50 p-9 rounded-2xl flex flex-col drop-shadow-sm">
      <span className="text-3xl font-extrabold pb-4">Resume</span>

      <div className="flex gap-8">
        <div className="bg-primary text-zinc-100 w-1/3 h-44 rounded-2xl p-8 flex items-center justify-center sm:justify-between  flex-col">
          <span className="text-6xl font-bold">{quantityTasks}</span>
          <p className="text-lg">Total tasks</p>
        </div>

        <div className="bg-primary text-zinc-100 w-1/3 h-44 rounded-2xl p-8 flex items-center justify-center sm:justify-between flex-col">
          <span className="text-6xl font-bold">{quantityIssues}</span>
          <p className="text-lg">Total issues</p>
        </div>

        <div className="bg-primary text-zinc-100 w-1/3 h-44 rounded-2xl p-8 flex items-center justify-center sm:justify-between flex-col">
          <span className="text-6xl font-bold">{averageIssues}</span>
          <p className="text-lg">Issue average by tasks</p>
        </div>
      </div>
    </div>
  );
}
