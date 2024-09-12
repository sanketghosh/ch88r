import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { HeartIcon, MessageSquareIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SearchUsers from "../dialogs/search-users";
import CreateGroupDialog from "../dialogs/create-group-dialog";
import NavBaseButton from "../buttons/nav-base-button";

export default function SideNavbar() {
  return (
    <nav className="hidden h-screen items-center justify-center border-r md:flex">
      <div className="flex h-full w-full flex-col items-center justify-between px-2 py-6">
        <div className="flex w-full flex-col items-center gap-3">
          {/* home icon */}

          <Link to={"/"}>
            <NavBaseButton>
              <MessageSquareIcon className="size-5" />
            </NavBaseButton>
          </Link>
          <SearchUsers />
          <CreateGroupDialog />
          <Link to={"/"}>
            <NavBaseButton>
              <HeartIcon className="size-5" />
            </NavBaseButton>
          </Link>
        </div>

        <div className="flex flex-col">
          {/* user settings and user realed sheet open */}
          <Link
            to={"/account"}
            className={cn(
              buttonVariants({ size: "icon", variant: "default" }),
              "size-12",
            )}
          >
            <UserIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
}

/*
function NavBaseBtn({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex cursor-pointer items-center justify-center rounded-lg bg-muted p-3 transition-all hover:bg-foreground hover:text-background">
      {children}
    </span>
  );
}
*/
