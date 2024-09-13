// PACKAGES
import { MessageSquareIcon } from "lucide-react";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { UserType } from "@/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type ConfirmIndividualConversationDialogProps = {
  user: UserType;
  handleSelectUser: (user: UserType) => void;
  selectedUser: UserType | undefined;
};

export default function ConfirmIndividualConversationDialog({
  user,
  handleSelectUser,
  selectedUser,
}: ConfirmIndividualConversationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"icon"}
          variant={"secondary"}
          onClick={() => handleSelectUser(user)}
        >
          <MessageSquareIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Start Conversation with {selectedUser?.username}
          </DialogTitle>
          <DialogDescription>
            Click start conversation to start conversation with{" "}
            {selectedUser?.username} or click cancel to cancel.
          </DialogDescription>
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0 ">
            <Button size={"sm"}>Start Conversation</Button>
            <DialogClose asChild>
              <Button variant={"destructive"} size={"sm"}>
                Cancel
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
/*  <div>
      <Button onClick={onOpen} size={"icon"} variant={"secondary"}>
        <MessageSquareIcon />
      </Button>

      <DialogWrapper
        onModalClose={onClose}
        dialogTitle="Start conversation"
        dialogDescription="Click start conversation to start you conversation with the user you selected or cancel."
        isModalOpen={isOpen}
      >
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0 ">
          <Button size={"sm"}>Start Conversation</Button>
          <Button onClick={onClose} variant={"destructive"} size={"sm"}>
            Cancel
          </Button>
        </div>
      </DialogWrapper>
    </div> */
