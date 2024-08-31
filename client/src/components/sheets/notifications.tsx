import { BellIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NotificationsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"ghost"} className="relative">
          <span className="absolute -right-1 -top-1 rounded-full bg-red-600 p-1 text-xs font-medium">
            9+
          </span>
          <BellIcon size={22} />
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-full overflow-y-scroll md:min-w-[500px]">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center gap-1 md:justify-start">
            <BellIcon size={20} className="fill-foreground" />
            Notifications
          </SheetTitle>
          <SheetDescription>
            You can check all your notifications here.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
