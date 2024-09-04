import { formatDate } from "@/helpers/format-date";

type SidebarUserChatCardPropsTypes = {
  image?: string;
  lastMessage?: string;
  username?: string;
  lastMessageTime: Date;
};

export default function SidebarUserChatCard({
  image,
  lastMessage,
  username,
  lastMessageTime,
}: SidebarUserChatCardPropsTypes) {
  return (
    <div className="flex cursor-pointer select-none items-center gap-2 border-b object-cover px-3 py-2 hover:bg-secondary/30">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary/30 md:h-14 md:w-14">
        <img src={image} alt={username} className="" />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">@{username}</h2>
          <p className="text-xs capitalize text-muted-foreground">
            {formatDate(lastMessageTime)}
          </p>
        </div>
        <p className="line-clamp-1 text-sm text-muted-foreground">
          {lastMessage}
        </p>
      </div>
    </div>
  );
}
