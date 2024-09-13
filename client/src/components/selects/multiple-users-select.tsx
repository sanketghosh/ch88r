// PACKAGES
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FrownIcon, Loader2Icon, PlusCircleIcon, XIcon } from "lucide-react";

// LOCAL MODULES
import { UserType } from "@/types";
import * as searchUsers from "@/actions/users-actions/search-users";

// COMPONENTS
import { Input } from "@/components/ui/input";
import ChatUserCardSkeleton from "@/components/skeletons/chat-user-card-skeleton";
import UsersNotFoundScreen from "@/components/messages/users-not-found-screen";
import SearchUserCards from "@/components/cards/search-user-card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type MultipleUsersSelectProps = {
  setSelectedUsers: (users: UserType[]) => void;
};

export default function MultipleUsersSelect({
  setSelectedUsers,
}: MultipleUsersSelectProps) {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query);
  const [selectedUsers, internalSetSelectedUsers] = useState<UserType[]>();

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

  /*  const handleSelectUser = (user: UserType) => {
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
  }; */
  const handleSelectUser = (user: UserType) => {
    internalSetSelectedUsers((prevUsers) => {
      let updatedUsers;
      if (!prevUsers) return [user];
      if (!prevUsers.includes(user)) {
        updatedUsers = [...prevUsers, user]; // Add new user to selected users
      } else {
        updatedUsers = prevUsers.filter((u) => u !== user); // Remove user if already selected
      }
      setSelectedUsers(updatedUsers); // Sync with parent component

      // Ensure state update is done asynchronously
      setTimeout(() => setSelectedUsers(updatedUsers), 0);
      return updatedUsers;
    });
  };

  const handleDeleteUser = (user: UserType) => {
    internalSetSelectedUsers((prevUsers) => {
      if (!prevUsers) return [];
      const updatedUsers = prevUsers.filter((u) => u !== user);
      setSelectedUsers(updatedUsers); // Sync with parent component

      // Ensure state update is done asynchronously
      setTimeout(() => setSelectedUsers(updatedUsers), 0);
      return updatedUsers;
    });
  };

  return (
    <div className="space-y-3">
      <Label htmlFor="searchUsers">Search Users</Label>
      <Input
        placeholder="Try email or username..."
        value={query}
        onChange={handleInputChange}
        id="searchUsers"
      />
      <div className="flex flex-wrap gap-2">
        {selectedUsers?.map((usr) => (
          <div
            key={usr.email}
            className="flex gap-2 rounded-sm bg-emerald-800 px-2 py-1 text-sm font-medium text-white"
          >
            <p>{usr.username}</p>
            <button
              className="rounded-sm bg-background p-1 hover:bg-background/30"
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
                buttonElement={
                  <AddUserButton
                    handleButtonClick={handleSelectUser}
                    user={user}
                  />
                }
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

type AddUserButtonProps = {
  user: UserType;
  handleButtonClick: (user: UserType) => void;
};

function AddUserButton({ handleButtonClick, user }: AddUserButtonProps) {
  return (
    <Button
      onClick={() => handleButtonClick(user)}
      variant={"secondary"}
      size={"icon"}
      type="button"
    >
      <PlusCircleIcon />
    </Button>
  );
}
