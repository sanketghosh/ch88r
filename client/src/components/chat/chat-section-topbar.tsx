import { useAuthContext } from "@/providers/auth-context-provider";

export default function ChatSectionTopbar() {
  const { user } = useAuthContext();

  return (
    <div className="border-b px-3 py-3">
      <div className="flex items-center gap-2">
        <div className="h-12 w-12 rounded-full bg-foreground">
          <img src="./profile-pic1.svg" alt="username" className="" />
        </div>
        <div>
          <h1 className="text-lg font-medium lg:text-xl">
            @{user?.userUsername}
          </h1>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <p className="text-xs text-muted-foreground md:text-sm">
              Active now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
