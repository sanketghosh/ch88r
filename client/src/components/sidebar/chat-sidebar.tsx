// PACKAGES
import { useQuery } from "@tanstack/react-query";
import {
  ArchiveIcon,
  Loader2Icon,
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

// IMAGES
import placeholderUserDp from "../../images/placeholder-user-dp.svg";
import placeholderGroupDp from "../../images/placeholder-group-dp.svg";
import { Skeleton } from "../ui/skeleton";

// TYPES
type Conversation = {
  id: string;
  lastMessage: string;
  updatedAt: Date;
  users: User[];
  isGroup: boolean;
  group?: {
    name: string;
    groupDescription?: string;
  };
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

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetch-chats-with-logged-user"],
    queryFn: getLoggedInUserChats.getLoggedInUserChats,
    staleTime: 5000,
  });

  console.log(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  // Use the original data for filtering
  /*  const filteredItems = searchTerm
    ? fakeSidebarUserChatData.filter((item) =>
        item.username.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : fakeSidebarUserChatData; */

  // Filter data based on searchTerm, applying search on both username or group name
  const filteredConversations = data?.filter((conversation: Conversation) => {
    if (conversation.isGroup) {
      return conversation.group?.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
    } else {
      // Check if any user (except the logged-in user) matches the search
      return conversation.users.some(
        (u: User) =>
          u.id !== user?.userId &&
          u.username.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
  });

  // Error state
  if (error) {
    return <p>Failed to load chats.</p>;
  }

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
            <AddConversationDropdown />
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
              {isLoading ? (
                <div className="my-3 w-full space-y-5 p-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                    <div className="flex w-full items-center space-x-4" key={i}>
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[300px]" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {filteredConversations?.map((conversation: Conversation) => (
                    <div key={conversation.id} className="fill-foreground">
                      {/* Render either group or individual chat */}
                      {conversation.isGroup ? (
                        <SidebarUserChatCard
                          key={conversation.id}
                          username={conversation.group?.name || "Group Chat"}
                          lastMessage={
                            conversation.lastMessage || "No messages yet."
                          }
                          image={placeholderGroupDp} // Placeholder for group avatar
                          lastMessageTime={conversation.updatedAt}
                        />
                      ) : (
                        conversation.users
                          .filter((u: User) => u.id !== user?.userId)
                          .map((u: User) => (
                            <SidebarUserChatCard
                              key={u.id}
                              username={u.username}
                              lastMessage={
                                conversation.lastMessage || "No messages yet."
                              }
                              image={u.avatar || placeholderUserDp}
                              lastMessageTime={conversation.updatedAt}
                            />
                          ))
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        <ScrollToTopButton targetRef={sidebarRef} />
      </div>
    </div>
  );
}

function AddConversationDropdown() {
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

/**
 * 
 *  <div className="my-5 flex select-none items-center justify-center gap-1 font-medium text-muted-foreground">
                  <Loader2Icon className="size-5 animate-spin" />
                  <p>Loading...</p>
                </div>
 */
