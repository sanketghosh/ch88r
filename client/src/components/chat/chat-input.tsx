import { Button } from "@/components/ui/button";
import { CalendarIcon, FilePlusIcon, PlusIcon, SendIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ChatInput() {
  const [openAddOptions, setOpenAddOptions]=useState<boolean>(false)

  const toggleOptionsMenu= () =>{
    setOpenAddOptions(!openAddOptions)
  }


  return (
    <div className="flex items-center gap-1 border-t bg-secondary/30 px-4 py-4 relative">
      <Button size={"icon"} variant={"ghost"} onClick={toggleOptionsMenu}>
        {
        openAddOptions ? <XIcon size={18}/>: <PlusIcon size={18}/>
      }
    </Button>
      {
      openAddOptions && <AddOptions/>

    }


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

function AddOptions(){
  return(
    <div className="flex flex-col absolute bottom-16 bg-background border rounded-md p-1 w-32 z-50 space-y-1">
      <Dialog>
    <DialogTrigger asChild>
      <button className="text-sm font-medium flex items-center py-2 px-2 hover:bg-secondary/30 rounded-md">
          <CalendarIcon  size={16} className="mr-2"/>
         Schedule
      </button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
          <DialogTitle>Schedule a message</DialogTitle>
      <DialogDescription>You can schedule a message, including media or files.</DialogDescription>
      </DialogHeader>
        <div className="space-y-2">
          <Label htmlFor="messageBox">Enter your message</Label>
        <Textarea placeholder="Hi, this is a scheduled message I am sending for future." id="messageBox" rows={3}/>
      </div>
    </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm font-medium flex items-center py-2 px-2 hover:bg-secondary/30 rounded-md">
            <FilePlusIcon  size={16} className="mr-2"/>
           Media
        </button>
    </DialogTrigger>
      <DialogContent>
    <input type="file" />
    </DialogContent>
    </Dialog>
    </div>
  )
}
