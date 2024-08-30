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
        <Button size={"icon"} variant={"ghost"} className="size-12">
          <BellIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-full overflow-y-scroll md:min-w-[500px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1">
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
