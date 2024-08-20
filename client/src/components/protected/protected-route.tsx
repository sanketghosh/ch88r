import { useAuthContext } from "@/providers/auth-context-provider";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRoutePropsType = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRoutePropsType) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth", { replace: true });
    }
  }, [user, navigate]);

  return children;
}
