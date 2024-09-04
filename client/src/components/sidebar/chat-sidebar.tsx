// PACKAGES
import { fakeSidebarUserChatData } from "@/data";
import { useQuery } from "@tanstack/react-query";
import {
  ArchiveIcon,
  MessageCirclePlusIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import * as getLoggedInUserChats from "@/actions/chat-actions/get-loggedin-user-chats";

// COMPONENTS
import SidebarUserChatCard from "@/components/sidebar/sidebar-user-chat-card";
import ScrollToTopButton from "@/components/special-buttons/scroll-to-top";
import CreateGroupDialog from "@/components/dialogs/create-group-dialog";
import SearchUsers from "@/components/dialogs/search-users";
import NotificationsSheet from "@/components/sheets/notifications";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/providers/auth-context-provider";

type Conversation = {
  id: string;
  lastMessage: string;
  updatedAt: Date;
  users: User[];
};

type User = {
  id: string;
  username: string;
  avatar: string;
};

export default function ChatSidebar() {
  const { user } = useAuthContext();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { data } = useQuery({
    queryKey: ["fetch-chats-with-logged-user"],
    queryFn: getLoggedInUserChats.getLoggedInUserChats,
    staleTime: 5000,
  });

  console.log(data);

  // data?.map((d) => {
  //   /* return d.users.filter((u) => {
  //     if (u.username !== user?.userUsername) {
  //       console.log(u.username);
  //     }
  //   }); */
  //   console.log(d);
  // });

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
      className="relative h-screen w-full shrink-0 overflow-y-auto border-r md:w-96 xl:w-[27rem]"
      ref={sidebarRef}
    >
      <div className="">
        <div className="sticky top-0 flex items-center justify-between bg-background px-3 py-5">
          <h1 className="text-2xl font-semibold">Chats</h1>
          <div className="flex items-center gap-4">
            <NotificationsSheet />
            <Button size={"icon"} variant={"ghost"} className="relative">
              <span className="absolute -right-1 -top-1 rounded-full bg-red-600 p-1 text-xs font-medium">
                9+
              </span>
              <ArchiveIcon size={22} />
            </Button>
            <AddConverstationDropdown />
          </div>
        </div>
        <div className="">
          <div className="w-full py-4">
            <div className="px-3 pb-3">
              <div className="flex w-full items-center space-x-2 rounded-full border border-border/30 bg-secondary/30 px-3 py-2">
                <SearchIcon size={16} className="text-secondary" />
                <input
                  type="text"
                  className="w-full border-none bg-transparent outline-none placeholder:text-secondary"
                  placeholder="Search"
                  onChange={handleSearch}
                />
              </div>
            </div>

            {/*  {filteredItems.map((chat, idx) => (
              <SidebarUserChatCard
                key={chat.username + idx}
                username={chat.username.toLowerCase()}
                lastMessage={chat.lastMessage}
                image={chat.image}
                lastMessageTime=""
              />
            ))} */}
            <div className="border-t">
              {data?.map((conversation: Conversation) => (
                <div key={conversation.id}>
                  <div>
                    {conversation.users.map((u: User) =>
                      u.id !== user?.userId ? (
                        <SidebarUserChatCard
                          key={u.username + u.id}
                          username={u.username.toLowerCase()}
                          lastMessage={
                            conversation.lastMessage ||
                            "This is just a placeholder for last message. Will add real one after real-time feature is done."
                          }
                          lastMessageTime={conversation.updatedAt}
                          image={u.avatar || "profile-pic1.svg"}
                        />
                      ) : null,
                    )}
                  </div>
                  {/*   <p>{conversation.latestMessage}</p>
                <p>{new Date(conversation.updatedAt).toLocaleString()}</p> */}
                </div>
              ))}
            </div>
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
    <>
      <div className="relative">
        <Button onClick={handleToggleDropdown} size={"icon"} variant={"ghost"}>
          {!toggleDropdown ? (
            <MessageCirclePlusIcon size={22} />
          ) : (
            <XIcon size={22} />
          )}
        </Button>
        {toggleDropdown && (
          <div className="absolute right-1 top-12 z-20 w-40 rounded-md border bg-background p-1">
            <SearchUsers />
            <CreateGroupDialog />
          </div>
        )}
      </div>
    </>
  );
}

// <AddUserDialog />
