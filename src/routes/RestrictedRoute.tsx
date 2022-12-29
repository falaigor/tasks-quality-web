import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/authContext";

interface RestrictedRouteProps {
  children: ReactNode;
}

export function RestrictedRoute({ children }: RestrictedRouteProps) {
  const { isUserLogger } = useAuth();

  return !isUserLogger ? (
    <>
      <Navigate to="/login" replace />
    </>
  ) : (
    <>{children}</>
  );
}
