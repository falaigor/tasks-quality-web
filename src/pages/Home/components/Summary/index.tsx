export function Summary() {
  return (
    <div className="w-full bg-zinc-50 p-9 rounded-2xl flex flex-col drop-shadow-sm">
      <span className="text-3xl font-extrabold pb-4">Resume</span>

      <div className="flex gap-8">
        <div className="bg-primary text-zinc-100 w-1/3 h-44 rounded-2xl p-8 flex items-center justify-center  flex-col">
          <span className="text-6xl font-bold">42</span>
          <p className="text-xl">Total tasks</p>
        </div>

        <div className="bg-primary text-zinc-100 w-1/3 h-44 rounded-2xl p-8 flex items-center justify-center flex-col">
          <span className="text-6xl font-bold">9</span>
          <p className="text-xl">Total issues</p>
        </div>

        <div className="bg-primary text-zinc-100 w-1/3 h-44 rounded-2xl p-8 flex items-center justify-center flex-col">
          <span className="text-6xl font-bold">4.6</span>
          <p className="text-xl">Issue average by tasks</p>
        </div>
      </div>
    </div>
  );
}
