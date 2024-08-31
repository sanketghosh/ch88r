import { Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { MessageSquareIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideNavbar() {
  return (
    <nav className="hidden h-screen items-center justify-center border-r md:flex">
      <div className="flex h-full w-full flex-col items-center justify-between px-2 py-6">
        <div className="flex w-full flex-col items-center gap-3">
          {/* home icon */}
          <Button size={"icon"} variant={"secondary"} className="size-12">
            <MessageSquareIcon className="size-5" />
          </Button>
        </div>

        <div className="flex flex-col">
          {/* user settings and user realed sheet open */}
          <Link
            to={"/account"}
            className={cn(
              buttonVariants({ size: "icon", variant: "outline" }),
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
