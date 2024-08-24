import { Button } from "@/components/ui/button";
import { PlusCircle, SendIcon } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex items-center gap-1 border-t bg-secondary/30 px-4 py-4">
      <Button size={"icon"} variant={"secondary"}>
        <PlusCircle size={20} />
      </Button>
      <input
        className="ml-2 w-full border-none bg-transparent px-2 py-2 outline-none placeholder:text-muted-foreground"
        placeholder="Write your message..."
      />
      <Button variant={"ghost"} size={"sm"}>
        <SendIcon size={20} />
      </Button>
    </div>
  );
}
