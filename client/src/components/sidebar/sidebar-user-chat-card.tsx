type SidebarUserChatCardPropsTypes = {
  image?: string;
  lastMessage?: string;
  username?: string;
};

export default function SidebarUserChatCard({
  image,
  lastMessage,
  username,
}: SidebarUserChatCardPropsTypes) {
  return (
    <div className="flex cursor-pointer select-none items-center gap-2 border-b object-cover px-3 py-2 hover:bg-muted">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-foreground md:h-14 md:w-14">
        <img src={image} alt={username} className="" />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">@{username}</h2>
          <p className="text-xs text-muted-foreground">11/12/24</p>
        </div>
        <p className="line-clamp-1 text-sm text-muted-foreground">
          {lastMessage}
        </p>
      </div>
    </div>
  );
}
