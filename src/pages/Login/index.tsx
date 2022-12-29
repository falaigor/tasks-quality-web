import { useAuth } from "@/contexts/authContext";

export function LoginPage() {
  const { signInGithubUrl, user } = useAuth();
  console.log(user);

  return (
    <section className="max-w-4xl m-auto h-screen flex justify-center items-center">
      <div className="flex flex-col bg-zinc-50 rounded-xl p-9">
        <img src="/logo-dark.svg" className="mb-4" width="150px" alt="" />
        <span className="text-3xl my-1 font-extrabold text-gray-500">
          Welcome
        </span>
        <p className="text-gray-500">Continue with Github account</p>

        <div className="flex flex-col items-center justify-center mt-6 gap-2">
          <a
            href={signInGithubUrl}
            className="w-full border rounded-xl text-gray-500 bg-zinc-50 hover:bg-zinc-100 p-3 flex justify-center items-center gap-2 font-semibold transition-all"
          >
            <img src="/github-logo.svg" width="30px" alt="" /> Log in with
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
