import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  CalendarIcon,
  FilePlusIcon,
  PlusIcon,
  SendIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

export default function ChatInput() {
  const [openAddOptions, setOpenAddOptions] = useState<boolean>(false);

  const toggleOptionsMenu = () => {
    setOpenAddOptions(!openAddOptions);
  };

  return (
    <div className="relative flex items-center gap-1 border-t bg-secondary/30 px-4 py-4">
      <Button size={"icon"} variant={"ghost"} onClick={toggleOptionsMenu}>
        {openAddOptions ? <XIcon size={18} /> : <PlusIcon size={18} />}
      </Button>
      {openAddOptions && <AddOptions />}

      <input
        className="ml-2 w-full border-none bg-transparent px-2 py-2 outline-none placeholder:text-muted-foreground"
        placeholder="Write your message..."
      />

      <Button variant={"outline"} size={"icon"}>
        <SendIcon size={20} />
      </Button>
    </div>
  );
}

function AddOptions() {
  return (
    <div className="absolute bottom-16 z-50 flex w-32 flex-col space-y-1 rounded-md border bg-background p-1">
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-secondary/30">
            <CalendarIcon size={16} className="mr-2" />
            Schedule
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule a message</DialogTitle>
            <DialogDescription>
              You can schedule a message, including media or files.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="messageBox">Enter your message</Label>
            <Textarea
              placeholder="Hi, this is a scheduled message I am sending for future."
              id="messageBox"
              rows={3}
            />
          </div>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-secondary/30">
            <FilePlusIcon size={16} className="mr-2" />
            Media
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send any media /files</DialogTitle>
            <DialogDescription>
              Select media to send to your peer.
            </DialogDescription>
          </DialogHeader>
          <input type="file" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
