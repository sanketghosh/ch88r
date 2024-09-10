// PACKAGES
import { useEffect, useState } from "react";
import * as searchUsers from "@/actions/users-actions/search-users";
import useAddUserModal from "@/hooks/use-add-user-modal";
import { useQuery } from "@tanstack/react-query";
import { FrownIcon, Loader2Icon, SearchIcon, UserPlusIcon } from "lucide-react";

// COMPONENTS
import SearchUserCards from "@/components/cards/search-user-card";
import { Input } from "@/components/ui/input";
import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import UsersNotFoundScreen from "@/components/messages/users-not-found-screen";
import { UserType } from "@/types";

export default function SearchUsers() {
  const { isOpen, onOpen, onClose } = useAddUserModal();
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query);

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

  return (
    <>
      <button
        className="flex w-full items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-secondary/30"
        onClick={onOpen}
      >
        <UserPlusIcon size={16} className="mr-2" />
        Add User
      </button>

      <DialogWrapper
        onModalClose={onClose}
        isModalOpen={isOpen}
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
                  handleButtonClick={() => {}}
                />
              ))}
            </div>
          ) : (
            <UsersNotFoundScreen icon={<SearchIcon />} text="Start searching" />
          )}
        </div>
      </DialogWrapper>
    </>
  );
}
