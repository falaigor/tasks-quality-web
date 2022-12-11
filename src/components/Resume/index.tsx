export const Resume = () => {
  return (
    <div className="max-w-lg w-full h-screen bg-zinc-50 p-8 flex flex-col">
      <span className="text-xl font-bold pb-4">Resume</span>
      <div className="flex gap-8">
        <div className="bg-zinc-100 drop-shadow-xl w-1/2 h-40 bg-[url('/chart-up.svg')] bg-cover bg-no-repeat bg-center rounded-3xl p-8 text-center">
          <span className="text-xl font-bold">42 tasks</span>
        </div>
        <div className="bg-zinc-100 drop-shadow-xl w-1/2 h-40 bg-[url('/chart-down.svg')] bg-cover bg-no-repeat bg-center rounded-3xl p-8 text-center">
          <span className="text-xl font-bold">9 issues</span>
        </div>
      </div>
    </div>
  );
};
