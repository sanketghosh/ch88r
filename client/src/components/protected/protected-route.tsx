import { useAppContext } from "@/contexts/app-context";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRoutePropsType = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRoutePropsType) {
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/auth", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return children;
}
