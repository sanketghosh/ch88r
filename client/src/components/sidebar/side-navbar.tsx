import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { HomeIcon, PlusIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";

export default function SideNavbar() {


  return (
    <nav className="flex h-screen items-center justify-center border-r">
      <div className="flex h-full w-full flex-col items-center justify-between px-2 py-6">
        <div className="flex w-full flex-col items-center space-y-4">
          {/* home icon */}
          <Button size={"icon"} variant={"outline"} className="size-12">
            <HomeIcon />
          </Button>

          {/* add/join with group/user */}
          <DropdownMenu>
            <DropdownMenuTrigger className="m-0 p-0">
              <Button size={"icon"} variant={"outline"} className="size-12">
                <PlusIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-10 space-y-1 px-2 py-2">
              <DropdownMenuItem className="cursor-pointer p-2">
                Add User
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2">
                Add Group
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-col space-y-6">
          {/* user settings and user realed sheet open */}
          <Sheet>
            <SheetTrigger>
              <Link
                to={"/account"}
                className={cn(
                  buttonVariants({ size: "icon", variant: "ghost" }),
                  "size-12",
                )}
              >
                <UserIcon />
              </Link>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Account Settings</SheetTitle>
                <SheetDescription>
                  You can change settings and cutsomize bunch of other stuffs
                  for your convenience.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

function NavBaseBtn({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex cursor-pointer items-center justify-center rounded-lg bg-muted p-3 transition-all hover:bg-foreground hover:text-background">
      {children}
    </span>
  );
}
