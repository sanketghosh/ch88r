import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import GroupAddIcon from "@/components/icons/add-group";

import useCreateGroupModal from "@/hooks/use-create-group-modal";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import * as searchUsers from "@/actions/users-actions/search-users";

import { Input } from "../ui/input";
import { FrownIcon, Loader2Icon, XIcon } from "lucide-react";
import SearchUserCards from "../cards/search-user-card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import ChatUserCardSkeleton from "../skeletons/chat-user-card-skeleton";
import UsersNotFoundScreen from "../messages/users-not-found-screen";
import { UserType } from "@/types";

export default function CreateGroupDialog() {
  const { isOpen, onOpen, onClose } = useCreateGroupModal();

  return (
    <>
      <button
        className="flex w-full items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-secondary/30"
        onClick={onOpen}
      >
        <GroupAddIcon className="mr-2 size-4" />
        Create Group
      </button>

      <DialogWrapper
        onModalClose={onClose}
        isModalOpen={isOpen}
        dialogTitle="Create new group."
        dialogDescription="Search users and add them one by one to form a group."
      >
        <Input placeholder="Enter group name" />
        <Textarea placeholder="Write a short group description" />
        <MultiSelectTest />
        <Button>Submit</Button>
      </DialogWrapper>
    </>
  );
}

function MultiSelectTest() {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query);
  const [selectedUsers, setSelectedUsers] = useState<UserType[]>();

  // Debouncing the query to avoid sending too many requests
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["searchedUserData", debouncedQuery],
    queryFn: () => searchUsers.searchUsers(debouncedQuery),
    enabled: !!debouncedQuery,
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setDebouncedQuery("");
    }
  };

  const handleSelectUser = (user: UserType) => {
    setSelectedUsers((prevUsers) => {
      if (!prevUsers) return [user]; // If prevUsers is undefined, return a new array with the user
      if (prevUsers.includes(user)) {
        return prevUsers.filter((u) => u !== user); // User is already selected, remove them from the list
      } else {
        return [...prevUsers, user]; // User is not selected, add them to the list
      }
    });
  };

  const handleDeleteUser = (user: UserType) => {
    setSelectedUsers((prevUsers) => {
      if (!prevUsers) return []; // Return an empty array if prevUsers is undefined
      return prevUsers.filter((u) => u !== user);
    });
  };

  return (
    <div className="space-y-3">
      <Input
        placeholder="Search user by username or email."
        value={query}
        onChange={handleInputChange}
      />
      <div className="flex flex-wrap gap-2">
        {selectedUsers?.map((usr) => (
          <div
            key={usr.email}
            className="flex gap-2 rounded-sm border bg-secondary/30 px-2 py-1 text-sm"
          >
            <p>{usr.username}</p>
            <button
              className="rounded-sm border bg-background p-1"
              onClick={() => handleDeleteUser(usr)}
            >
              <XIcon size={13} />
            </button>
          </div>
        ))}
      </div>
      {query.length > 0 ? (
        <div>
          <div className="max-h-48 min-h-48 space-y-2 overflow-y-scroll rounded-md border p-2">
            {isLoading && (
              <div className="flex min-h-full w-full flex-col items-center justify-center gap-2 space-y-3 px-2 py-4">
                <ChatUserCardSkeleton />
                <ChatUserCardSkeleton />
                <Loader2Icon className="animate-spin stroke-muted-foreground" />
              </div>
            )}
            {error && <p>{error.message}</p>}
            {data?.users?.length <= 0 && (
              <UsersNotFoundScreen
                icon={<FrownIcon />}
                text="Users not found."
                className="flex h-40 items-center justify-center"
              />
            )}

            {data?.users.map((user: UserType) => (
              <SearchUserCards
                key={user.email + user.username}
                user={user}
                forGroupSearch
                handleButtonClick={handleSelectUser}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
