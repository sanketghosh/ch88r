import {
  Users2Icon,
  PlusIcon,
  HomeIcon,
  Settings2Icon,
  User2Icon,
  LogOutIcon,
} from "lucide-react";

export default function Home() {
  const navIcons = [
    {
      id: 1,
      icon: <HomeIcon />,
    },
    {
      id: 2,
      icon: <PlusIcon />,
    },
    {
      id: 3,
      icon: <Users2Icon />,
    },
    {
      id: 4,
      icon: <Settings2Icon />,
    },
  ];

  return (
    <main className="flex">
      <nav className="h-screen w-20 border-r">
        <div className="flex h-full w-full flex-col items-center justify-between px-3 py-6">
          <div className="w-full space-y-6">
            {navIcons.map((item) => (
              <button
                key={item.id}
                className="flex items-center justify-center rounded-full p-3 transition-all hover:bg-secondary hover:text-foreground"
              >
                {item.icon}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-6">
            <button className="flex items-center justify-center rounded-full p-3 transition-all hover:bg-secondary hover:text-foreground">
              <User2Icon />
            </button>
            <button className="flex items-center justify-center rounded-full p-3 transition-all hover:bg-secondary hover:text-foreground">
              <LogOutIcon />
            </button>
          </div>
        </div>
      </nav>
      <aside className="h-screen w-96 bg-muted">
        <div className="px-3 py-6">
          <h1 className="text-2xl font-semibold">Your Chats</h1>
          <div></div>
        </div>
      </aside>
    </main>
  );
}
