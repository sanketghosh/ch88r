import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/providers/auth-context-provider";

export default function Account() {
  const { user } = useAuthContext();

  return (
    <main className="h-screen w-full">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center space-y-7 border-l border-r px-4 py-4">
        <div className="flex size-52 items-center justify-center rounded-full bg-secondary">
          <img src="./profile-pic2.svg" className="size-full" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-lg font-semibold lg:text-xl">
            {user?.userUsername}
          </p>
          <p className="text-lg font-semibold lg:text-xl">{user?.userEmail}</p>
          <Button size={"sm"}>Update Profile</Button>
        </div>
      </div>
    </main>
  );
}
