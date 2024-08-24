import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import useAddUserModal from "@/hooks/use-add-user-modal";
import { SearchIcon, UserPlusIcon } from "lucide-react";

export default function AddUserDialog() {
  const { isOpen, onOpen, onClose } = useAddUserModal();

  return (
    <>
      <Button
        size={"icon"}
        variant={"ghost"}
        className="size-12"
        onClick={onOpen}
      >
        <UserPlusIcon />
      </Button>

      <DialogWrapper
        onModalClose={onClose}
        isModalOpen={isOpen}
        dialogTitle="Add a new user to chat."
        dialogDescription="Search user by username or email and add one."
      >
        <Input placeholder="Enter username you wanna chat with." />
        <div className="min-h-72 rounded-md border p-4">
          <div className="flex h-full w-full flex-col items-center justify-center space-y-5 text-center text-muted-foreground/50">
            <SearchIcon size={50} />
            <p className="text-sm">
              All the users who have created an account on ch88r is available
              here. Try to find them with username.
            </p>
          </div>
        </div>
      </DialogWrapper>
    </>
  );
}
