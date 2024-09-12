import { Link } from "react-router-dom";
import NavBaseButton from "../buttons/nav-base-button";
import { HeartIcon, MessageSquareIcon, UserIcon } from "lucide-react";
import SearchUsers from "../dialogs/search-users";
import CreateGroupDialog from "../dialogs/create-group-dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function BottomBar() {
  return (
    <nav className="absolute bottom-0 left-0 right-0 w-full border-t bg-background px-5 py-3 md:hidden">
      {/* home icon */}
      <div className="flex items-center justify-evenly">
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

        <Link
          to={"/account"}
          className={cn(
            buttonVariants({ size: "icon", variant: "default" }),
            "size-10 md:size-12",
          )}
        >
          <UserIcon />
        </Link>
      </div>
    </nav>
  );
}
