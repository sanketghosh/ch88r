// COMPONENTS
import SidebarUserChatCard from "@/components/sidebar/sidebar-user-chat-card";
import ScrollToTopButton from "@/components/special-buttons/scroll-to-top";

import { PlusCircleIcon, SearchIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import AddUserDialog from "../dialogs/add-user-dialog";
import CreateGroupDialog from "../dialogs/create-group-dialog";
import { Button } from "../ui/button";

type DataType = {
  image: string;
  username: string;
  lastMessage: string;
};

const fakeSidebarUserChatData: DataType[] = [
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
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
  {
    image: "./profile-pic1.svg",
    username: "oliverevans",
    lastMessage: "Just finished that report. Phew!",
  },
];

export default function ChatSidebar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  // Use the original data for filtering
  const filteredItems = searchTerm
    ? fakeSidebarUserChatData.filter((item) =>
        item.username.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : fakeSidebarUserChatData;

  return (
    <div
      className="relative h-screen w-96 shrink-0 overflow-y-auto border-r xl:w-[27rem]"
      ref={sidebarRef}
    >
      <div className="">
        <div className="sticky top-0 flex items-center justify-between border-b bg-background px-3 py-5">
          <h1 className="text-2xl font-semibold">Chats</h1>
          <div>
            <AddConverstationDropdown />
          </div>
        </div>
        <div className="">
          <div className="w-full border-b px-3 py-3">
            <div className="mb-2 flex w-full items-center space-x-2 rounded-full border border-border/30 bg-secondary/30 px-3 py-2">
              <SearchIcon size={16} className="text-secondary" />
              <input
                type="text"
                className="w-full border-none bg-transparent outline-none placeholder:text-secondary"
                placeholder="Search"
                onChange={handleSearch}
              />
            </div>

            {filteredItems.map((chat, idx) => (
              <SidebarUserChatCard
                key={chat.username + idx}
                username={chat.username.toLowerCase()}
                lastMessage={chat.lastMessage}
                image={chat.image}
              />
            ))}
          </div>
        </div>

        <ScrollToTopButton targetRef={sidebarRef} />
      </div>
    </div>
  );
}

function AddConverstationDropdown() {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  function handleToggleDropdown() {
    setToggleDropdown(!toggleDropdown);
  }


  return (
    <div className="relative">


      <Button
        size={"icon"}
        variant={"secondary"}
        onClick={handleToggleDropdown}
      >
        {!toggleDropdown ? <PlusCircleIcon /> : <XIcon />}
      </Button>

      {toggleDropdown && (
        <div className="absolute right-3 top-12 z-20 w-40 rounded-md border bg-background p-1">
          <AddUserDialog />
          <CreateGroupDialog />
        </div>
      )}
    </div>
  );
}
