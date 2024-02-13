import { ArrowDownUp } from "lucide-react";
import SidebarUserChatCard from "./sidebar-user-chat-card";

export default function ChatSidebar() {
  const fakeSidebarUserChatData = [
    {
      image: "./profile-pic1.svg",
      username: "johndoe",
      lastMessage: "Hello there!",
    },
    {
      image: "./profile-pic2.svg",
      username: "jakealdo",
      lastMessage: "Just reached home.",
    },
    {
      image: "./profile-pic1.svg",
      username: "mathewrobtaylor",
      lastMessage:
        "Will talk to you about the matter later. Dont worry nothing serious.",
    },
    {
      image: "./profile-pic2.svg",
      username: "jhonnywalker",
      lastMessage: "Lets get the work done by this night. We will get it done.",
    },
    {
      image: "./profile-pic1.svg",
      username: "karlross",
      lastMessage: "We will be there no matter what",
    },
    {
      image: "./profile-pic2.svg",
      username: "stephanjones",
      lastMessage: "Whatsup buddy?",
    },
    {
      image: "./profile-pic2.svg",
      username: "jhonny55walker",
      lastMessage: "Lets get the work done by this night. We will get it done.",
    },
    {
      image: "./profile-pic1.svg",
      username: "jhonny15walker",
      lastMessage: "Lets get the work done by this night. We will get it done.",
    },
    {
      image: "./profile-pic2.svg",
      username: "jhonny85walker",
      lastMessage: "Lets get the work done by this night. We will get it done.",
    },
    {
      image: "./profile-pic1.svg",
      username: "jhonny775walker",
      lastMessage: "Lets get the work done by this night. We will get it done.",
    },
    {
      image: "./profile-pic2.svg",
      username: "jhonny47walker",
      lastMessage: "Lets get the work done by this night. We will get it done.",
    },
    {
      image: "./profile-pic1.svg",
      username: "jhonny01walker",
      lastMessage: "Lets get the work done by this night. We will get it done.",
    },
    {
      image: "./profile-pic2.svg",
      username: "jhonny13walker",
      lastMessage: "Lets get the work done by this night. We will get it done.",
    },
    {
      image: "./profile-pic1.svg",
      username: "jhonny18walker",
      lastMessage: "Lets get the work done by this night. We will get it done.",
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
