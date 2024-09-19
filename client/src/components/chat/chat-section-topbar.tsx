// COMPONENTS
import placeholderGroupDp from "@/images/placeholder-group-dp.svg";
import { InfoIcon } from "lucide-react";
import ChatDetails from "../sheets/chat-details";
import { Button } from "../ui/button";

type ChatSectionTopbarProps = {
  name: string;
  image: string;
  isGroup: boolean;
};

export default function ChatSectionTopbar({
  name,
  image,
  isGroup,
}: ChatSectionTopbarProps) {
  // const { user } = useAuthContext();

  return (
    <div className="border-b px-3 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border">
            <img src={image || placeholderGroupDp} alt={name} className="" />
          </div>
          <div>
            <h1 className="text-base font-bold lg:text-lg">
              {!isGroup ? "@" : ""}
              {name}
            </h1>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-xs text-muted-foreground md:text-sm">
                Active now
              </p>
            </div>
          </div>
        </div>
        <ChatDetails
          triggerComponent={
            <Button size={"icon"} variant={"secondary"}>
              <InfoIcon />
            </Button>
          }
        ></ChatDetails>
      </div>
    </div>
  );
}
