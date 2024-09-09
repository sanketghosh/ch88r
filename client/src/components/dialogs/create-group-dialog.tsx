import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import GroupAddIcon from "@/components/icons/add-group";

import useCreateGroupModal from "@/hooks/use-create-group-modal";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import * as searchUsers from "@/actions/users-actions/search-users";

import Select from "react-select";
import { Input } from "../ui/input";
import { Loader2Icon } from "lucide-react";
import SearchUserCards from "../cards/search-user-card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

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

  type UserType = {
    image: string;
    username: string;
    email: string;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setDebouncedQuery("");
    }
  };

  const load = true;
  return (
    <div className="space-y-3">
      <Input
        placeholder="Search user by username or email."
        value={query}
        onChange={handleInputChange}
      />
      {query.length > 0 ? (
        <div>
          <div className="min-h-48 space-y-2 rounded-md border p-2">
            {load && <Loader2Icon className="animate-spin" />}
            {error && <p>{error.message}</p>}
            {data?.users.map((user: UserType) => (
              <SearchUserCards
                key={user.email + user.username}
                email={user.email}
                username={user.username}
                forGroupSearch
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
