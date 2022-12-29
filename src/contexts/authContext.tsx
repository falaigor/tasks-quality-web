import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "@/services/api";
import { UserType } from "@/types/user";

interface AuthContextData {
  user: UserType | null;
  token: string | null;
  isUserLogger: boolean;
  signInGithubUrl: string;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
}

export function AuthProvider({ children }: AuthProviderProps) {
  const existsUserToken = !!localStorage.getItem("@tasksQuality:token");
  const token = localStorage.getItem("@tasksQuality:token");

  const [user, setUser] = useState<UserType | null>(null);
  const [isUserLogger, setIsUserLogger] = useState(existsUserToken);
  const signInGithubUrl = `http://github.com/login/oauth/authorize?scope=user&client_id=${process.env.VITE_GITHUB_API_CLIENT_ID}`;

  async function signInGithub(githubCode: string) {
    const response = await api.post<AuthResponse>("auth/session/github", {
      code: githubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem("@tasksQuality:token", token);
    setIsUserLogger(true);
    setUser(user);
  }

  function signOut() {
    setUser(null);
    setIsUserLogger(false);
    localStorage.removeItem("@tasksQuality:token");
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split("?code=");

      window.history.pushState({}, "", urlWithoutCode);

      signInGithub(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signOut, signInGithubUrl, user, token, isUserLogger }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
