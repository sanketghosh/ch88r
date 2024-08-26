import { Button } from "@/components/ui/button";
import { CalendarIcon, ImageIcon, MonitorPlayIcon, SendIcon } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex items-center gap-1 border-t bg-secondary/30 px-4 py-4 relative">

     <div className="absolute bottom-0">
       <Button>
     <CalendarIcon  size={20}/>
     </Button>

       <Button>
     <ImageIcon size={20}/>
     </Button>
       <Button>
   <MonitorPlayIcon size={20}/>
   </Button>
    </div>
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
