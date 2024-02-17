import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { PlusCircle, SendIcon } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex items-center gap-1 border-t bg-muted px-4 py-4">
      <Button className="p-2" variant={"outline"}>
        <PlusCircle size={20} />
      </Button>
      <Input
        className="placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0"
        placeholder="Write your message..."
      />
      <Button variant={"default"} className="p-2">
        <SendIcon size={20} />
      </Button>
    </div>
  );
}
