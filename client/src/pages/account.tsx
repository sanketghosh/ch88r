import * as logoutUser from "@/actions/auth-actions/logout-user";
import UpdateAccountDetails from "@/components/sheets/update-account-details";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/providers/auth-context-provider";
import { useMutation } from "@tanstack/react-query";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Account() {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logoutUser.logoutUser,
    onSuccess: async () => {
      toast.success("Succesfully logged out user");
      navigate("/auth");
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });

  function handleLogoutButton() {
    mutation.mutate();
  }

  return (
    <main className="h-screen w-full">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center space-y-7 border-l border-r px-4 py-4">
        <div className="flex size-52 items-center justify-center rounded-full bg-secondary">
          <img src="./profile-pic2.svg" className="size-full" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="text-center">
            <p className="text-lg font-semibold lg:text-xl">
              {user?.userUsername}
            </p>
            <p className="text-lg font-semibold lg:text-xl">
              {user?.userEmail}
            </p>
          </div>
          <UpdateAccountDetails />
          <Button
            variant={"destructive"}
            className="w-full"
            onClick={handleLogoutButton}
          >
            LogOut
            <LogOutIcon size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
