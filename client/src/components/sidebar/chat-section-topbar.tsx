export default function ChatSectionTopbar() {
  return (
    <div className="border-b px-3 py-3">
      <div className="flex items-center gap-2">
        <div className="h-12 w-12 rounded-full bg-foreground">
          <img src="./profile-pic1.svg" alt="username" className="" />
        </div>
        <div>
          <h1 className="text-lg font-medium lg:text-xl">@jhonnywalker</h1>
          <p className="text-xs text-muted-foreground md:text-sm">
            Activated 5h ago.
          </p>
        </div>
      </div>
    </div>
  );
}
