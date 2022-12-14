export function LoginPage() {
  return (
    <section className="max-w-4xl m-auto h-screen flex justify-center items-center">
      <div className="flex flex-col bg-zinc-50 rounded-xl p-9">
        <img src="/logo-dark.svg" className="mb-4" width="150px" alt="" />
        <span className="text-3xl font-extrabold">Login</span>
        <p>Faca o seu login com uma das redes sociais</p>

        <div className="flex flex-col items-center justify-center mt-4 gap-2">
          <button className="w-full border rounded-xl bg-zinc-100 p-3">
            Google
          </button>

          <button className="w-full border rounded-xl bg-zinc-100 p-3">
            Github
          </button>
        </div>
      </div>
    </section>
  );
}
