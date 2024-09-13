// PACKAGES
import { useQuery } from "@tanstack/react-query";
import { ArchiveIcon, SearchIcon } from "lucide-react";
import { useRef, useState } from "react";

// LOCAL MODULES
import * as getLoggedInUserChats from "@/actions/chat-actions/get-loggedin-user-chats";
import { useAuthContext } from "@/providers/auth-context-provider";
import { Conversation, UserType } from "@/types";

// COMPONENTS
import ScrollToTopButton from "@/components/special-buttons/scroll-to-top";
import NotificationsSheet from "@/components/sheets/notifications";
import { Button } from "@/components/ui/button";
import BottomBar from "@/components/bottombar/bottombar";
import ChatList from "@/components/chat/chat-list";

export default function ChatSidebar() {
  const { user } = useAuthContext();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetch-conversations"],
    queryFn: getLoggedInUserChats.getLoggedInUserChats,
    staleTime: 5000,
    // refetchOnWindowFocus: true,
  });

  console.log(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  // Filter data based on searchTerm, applying search on both username or group name
  const filteredConversations: Conversation[] = data?.filter(
    (conversation: Conversation) => {
      if (conversation.isGroup) {
        return conversation.group?.name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else {
        // Check if any user (except the logged-in user) matches the search
        return conversation.users.some(
          (u: UserType) =>
            u.id !== user?.userId &&
            u.username.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }
    },
  );

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
              <span className="absolute -right-1 -top-1 rounded-full bg-red-600 p-1 text-xs font-medium text-white">
                9+
              </span>
              <ArchiveIcon size={22} />
            </Button>
            {/* <AddConversationDropdown /> */}
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

            {/* {fakeSidebarUserChatData.map((chat, idx) => (
              <SidebarUserChatCard
                key={chat.username + idx}
                name={chat.username.toLowerCase()}
                lastMessage={chat.lastMessage}
                image={chat.image}
                lastMessageTime={new Date()}
              />
            ))} */}
            <ChatList
              filteredConversations={filteredConversations}
              isLoading={isLoading}
              user={user}
            />
          </div>
        </div>

        <ScrollToTopButton targetRef={sidebarRef} />
      </div>
      <BottomBar />
    </div>
  );
}
