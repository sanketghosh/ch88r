import * as logoutUser from "@/actions/auth-actions/logout-user";
import UpdateAccountDetails from "@/components/sheets/update-account-details";
import { ModeToggle } from "@/components/special-buttons/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuthContext } from "@/providers/auth-context-provider";
import { useMutation } from "@tanstack/react-query";
import { LogOutIcon, MoveLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Account() {
  const { user, updateUser } = useAuthContext();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logoutUser.logoutUser,
    onSuccess: async () => {
      toast.success("Succesfully logged out user");
      navigate("/auth");
      updateUser(null);
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });

  function handleLogoutButton() {
    mutation.mutate();
  }

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="mx-auto flex max-w-[400px] flex-col items-center space-y-6 p-4">
        <div className="flex size-48 items-center justify-center rounded-full bg-secondary">
          <img src="./profile-pic2.svg" className="size-full" />
        </div>

        <div className="space-y-1 text-center">
          <p className="text-2xl font-bold md:text-3xl lg:text-4xl">
            {user?.userUsername}
          </p>
          <p className="text-lg text-secondary-foreground md:text-xl">
            {user?.userEmail}
          </p>
        </div>

        <p className="text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dignissimos sunt, laborum dolor quo, amet non vero placeat deleniti
          possimus exercitationem aperiam doloremque voluptas saepe! Harum, quas
          unde! Quod, dicta?
        </p>

        <div className="flex w-full flex-col items-center space-y-3">
          <UpdateAccountDetails />
          <Button
            variant={"destructive"}
            className="w-full rounded-full"
            onClick={handleLogoutButton}
          >
            LogOut
            <LogOutIcon size={18} className="ml-2" />
          </Button>
          <Link
            to={"/"}
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-full rounded-full",
            )}
          >
            Go back
            <MoveLeftIcon size={18} className="ml-2" />
          </Link>



          <ModeToggle/>

          </div>
      </div>
    </main>
  );
}
