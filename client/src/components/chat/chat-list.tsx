// LOCAL MODULES
import { AuthenticatedUserType, Conversation, UserType } from "@/types";

import placeholderUserDp from "@/images/placeholder-user-dp.svg";
import placeholderGroupDp from "@/images/placeholder-group-dp.svg";

// COMPONENTS
import ChatUserCardSkeleton from "@/components/skeletons/chat-user-card-skeleton";
import ChatPreviewCard from "@/components/chat/chat-preview-card";

type ChatListProps = {
  isLoading: boolean;
  user: AuthenticatedUserType | null;
  filteredConversations: Conversation[] | any;
};

export default function ChatList({
  isLoading,
  filteredConversations,
  user,
}: ChatListProps) {
  return (
    <div className="border-t">
      {isLoading ? (
        <div className="my-3 w-full space-y-5 p-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <ChatUserCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          {filteredConversations?.map((conversation: Conversation) => (
            <div key={conversation.id} className="fill-foreground">
              {/* Render either group or individual chat */}
              {conversation.isGroup ? (
                <ChatPreviewCard
                  key={conversation.id}
                  conversationId={conversation.id}
                  name={conversation.group?.name || "Group Chat"}
                  lastMessage={conversation.lastMessage || "No messages yet."}
                  image={placeholderGroupDp} // Placeholder for group avatar
                  lastMessageTime={conversation.updatedAt}
                  isGroup
                />
              ) : (
                conversation.users
                  .filter((u: UserType) => u.id !== user?.userId)
                  .map((u: UserType) => (
                    <ChatPreviewCard
                      key={u.id}
                      conversationId={u.id}
                      name={u.username}
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
  );
}
