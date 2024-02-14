import {
  PlusIcon,
  HomeIcon,
  Settings2Icon,
  UserIcon,
  LogOutIcon,
} from "lucide-react";
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

export default function SideNavbar() {
  return (
    <nav className="flex h-screen items-center justify-center border-r">
      <div className="flex h-full w-full flex-col items-center justify-between px-3 py-6">
        <div className="flex w-full flex-col items-center space-y-6">
          {/* home icon */}
          <NavBaseBtn>
            <HomeIcon />
          </NavBaseBtn>

          {/* add/join with group/user */}
          <DropdownMenu>
            <DropdownMenuTrigger className="m-0 p-0">
              <NavBaseBtn>
                <PlusIcon />
              </NavBaseBtn>
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

          {/* user settings and user realed sheet open */}
          <Sheet>
            <NavBaseBtn>
              <SheetTrigger asChild>
                <UserIcon />
              </SheetTrigger>
            </NavBaseBtn>
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

        <div className="flex flex-col space-y-6">
          <button className="flex items-center justify-center rounded-lg p-3 transition-all hover:bg-destructive hover:text-background">
            <LogOutIcon />
          </button>
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
