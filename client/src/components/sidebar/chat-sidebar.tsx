import { ArrowDownUp, SearchIcon } from "lucide-react";
import SidebarUserChatCard from "./sidebar-user-chat-card";

export default function ChatSidebar() {
  const fakeSidebarUserChatData = [
    {
      image: "./profile-pic1.svg",
      username: "craigsmith",
      lastMessage: "Hey there! How was your weekend?",
    },
    {
      image: "./profile-pic2.svg",
      username: "alexjohnson",
      lastMessage: "Finally back home after a long day.",
    },
    {
      image: "./profile-pic1.svg",
      username: "matthewjames",
      lastMessage:
        "Let's discuss the plan later. It's nothing serious, don't worry.",
    },
    {
      image: "./profile-pic2.svg",
      username: "lucaswilson",
      lastMessage: "Let's aim to finish the task tonight. We've got this!",
    },
    {
      image: "./profile-pic1.svg",
      username: "gordonbrown",
      lastMessage: "We'll be there to support you, no matter what.",
    },
    {
      image: "./profile-pic2.svg",
      username: "danielsmith",
      lastMessage: "Hey, what's up buddy?",
    },
    {
      image: "./profile-pic2.svg",
      username: "michaelwilliams",
      lastMessage: "Hey, how's it going?",
    },
    {
      image: "./profile-pic1.svg",
      username: "alexdavis",
      lastMessage: "Let's catch up soon!",
    },
    {
      image: "./profile-pic2.svg",
      username: "edertaylor",
      lastMessage: "Do you have any plans for the weekend?",
    },
    {
      image: "./profile-pic1.svg",
      username: "christophermartin",
      lastMessage: "Looking forward to the meeting tomorrow.",
    },
    {
      image: "./profile-pic2.svg",
      username: "ryananderson",
      lastMessage: "Got any updates on the project?",
    },
    {
      image: "./profile-pic1.svg",
      username: "williamthompson",
      lastMessage: "Let's grab lunch together sometime.",
    },
    {
      image: "./profile-pic2.svg",
      username: "loganbaker",
      lastMessage: "Can you help me with this task?",
    },
    {
      image: "./profile-pic1.svg",
      username: "oliverevans",
      lastMessage: "Just finished that report. Phew!",
    },
  ];

  return (
    <aside className="h-screen w-96 shrink-0 overflow-y-auto border-r xl:w-[27rem]">
      <div className="">
        <div className="sticky top-0 flex items-center justify-between border-b bg-background px-3 py-5">
          <h1 className="text-2xl font-semibold">Gossips</h1>
          <button className="text-muted-foreground">
            <ArrowDownUp size={18} />
          </button>
        </div>
        <div className="">
          <div className="w-full border-b px-3 py-3">
            <div className="flex w-full items-center space-x-2 rounded-full border border-border/30 bg-secondary/30 px-3 py-2">
              <SearchIcon size={16} className="text-secondary" />
              <input
                type="text"
                className="w-full border-none bg-transparent outline-none placeholder:text-secondary"
                placeholder="Search"
              />
            </div>
          </div>

          {fakeSidebarUserChatData.map((chat) => (
            <SidebarUserChatCard
              key={chat.username}
              username={chat.username}
              lastMessage={chat.lastMessage}
              image={chat.image}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
