// PACKAGES
import { useEffect, useState } from "react";
import * as searchUsers from "@/actions/users-actions/search-users";
import { useQuery } from "@tanstack/react-query";
import { FrownIcon, Loader2Icon, SearchIcon, UserPlusIcon } from "lucide-react";

// COMPONENTS
import SearchUserCards from "@/components/cards/search-user-card";
import { Input } from "@/components/ui/input";
import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import UsersNotFoundScreen from "@/components/messages/users-not-found-screen";
import { UserType } from "@/types";
import NavBaseButton from "../buttons/nav-base-button";
import ConfirmIndividualConversationDialog from "./confirm-individual-conversation-dialog";
import { Dialog, DialogTrigger } from "../ui/dialog";

export default function SearchUsers() {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query);

  const [selectUser, setSelectUser] = useState<UserType>();

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
    setSelectUser(user);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <NavBaseButton>
          <UserPlusIcon className="size-5" />
        </NavBaseButton>
      </DialogTrigger>
      <DialogWrapper
        dialogTitle="Add a new user to chat."
        dialogDescription="Search user by username or email and add one."
      >
        <Input
          placeholder="Enter username you wanna chat with."
          value={query}
          onChange={handleInputChange}
        />
        <div className="max-h-72 min-h-72 overflow-y-scroll rounded-md border bg-secondary/30 p-4">
          {isLoading && (
            <UsersNotFoundScreen
              icon={<Loader2Icon size={30} className="animate-spin" />}
              text="Loading..."
            />
          )}
          {error && (
            <UsersNotFoundScreen
              icon={<FrownIcon size={30} />}
              text={error.message}
            />
          )}

          {data?.users.length > 0 ? (
            <div className="space-y-2">
              {data.users.map((user: UserType) => (
                <SearchUserCards
                  key={user.email + user.username}
                  user={user}
                  buttonElement={
                    <ConfirmIndividualConversationDialog
                      handleSelectUser={handleSelectUser}
                      selectedUser={selectUser}
                      user={user}
                    />
                  }
                />
              ))}
            </div>
          ) : (
            <UsersNotFoundScreen icon={<SearchIcon />} text="Start searching" />
          )}
        </div>
      </DialogWrapper>
    </Dialog>
  );
}
