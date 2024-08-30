import UpdateBio from "@/components/forms/user-form/update-bio";
import UpdateDetailsForm from "@/components/forms/user-form/update-details-form";
import UpdatePasswordForm from "@/components/forms/user-form/update-password-form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PenBoxIcon, UserIcon } from "lucide-react";

export default function UpdateAccountDetails() {
  return (
    <Sheet>
      <SheetTrigger asChild className="mt-5">
        <Button className="w-full rounded-full">
          Update Profile
          <PenBoxIcon size={18} className="ml-2" />
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-full overflow-y-scroll md:min-w-[500px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1">
            <UserIcon size={20} className="fill-foreground" />
            Update Profile
          </SheetTitle>
          <SheetDescription>
            You can change or update your username, email and password here.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-10 space-y-5">
          <UpdateDetailsForm />
          <div className="h-[1px] bg-muted" />
          <UpdatePasswordForm />
          <div className="h-[1px] bg-muted" />
          <UpdateBio />
        </div>
      </SheetContent>
    </Sheet>
  );
}
