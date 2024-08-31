import SearchUserCards from "@/components/cards/search-user-card";
import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import { Input } from "@/components/ui/input";

import * as fetchAllUsers from "@/actions/users-actions/fetch-all-users";
import useAddUserModal from "@/hooks/use-add-user-modal";
import { useQuery } from "@tanstack/react-query";
import { FrownIcon, Loader2Icon, UserPlusIcon } from "lucide-react";

type UserType = {
  image: string;
  username: string;
  email: string;
};

export default function AddUserDialog() {
  const { isOpen, onOpen, onClose } = useAddUserModal();

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchedUsersData"],
    queryFn: fetchAllUsers.fetchAllUsers,
  });

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
        <Input placeholder="Enter username you wanna chat with." />
        <div className="max-h-72 min-h-72 overflow-y-scroll rounded-md border bg-secondary/30 p-4">
          {isLoading && (
            <NotUsersScreen
              icon={<Loader2Icon size={30} className="animate-spin" />}
              text="Loading..."
            />
          )}
          {error && (
            <NotUsersScreen
              icon={<FrownIcon size={30} />}
              text={error.message}
            />
          )}

          {data?.users && data.users.length > 0 ? (
            <div className="space-y-2">
              {data.users.map((user: UserType) => (
                <SearchUserCards
                  key={user.email + user.username}
                  email={user.email}
                  username={user.username}
                />
              ))}
            </div>
          ) : (
            <NotUsersScreen icon={<FrownIcon />} text="No users found." />
          )}
        </div>
      </DialogWrapper>
    </>
  );
}

type NotUserScreenProps = {
  icon: React.ReactElement;
  text?: string;
};

function NotUsersScreen({ icon, text }: NotUserScreenProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      {icon}
      <p>{text}</p>
    </div>
  );
}
