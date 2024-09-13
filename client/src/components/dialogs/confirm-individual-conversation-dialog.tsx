// PACKAGES
import { MessageSquareIcon } from "lucide-react";

// LOCAL MODULES
import useConfirmIndividualConversation from "@/hooks/use-confirmation-individual-conversation-modal";

// COMPONENTS
import { Button } from "@/components/ui/button";
import DialogWrapper from "@/components/dialogs/dialog-wrapper";

export default function ConfirmIndividualConversationDialog() {
  const { isOpen, onClose, onOpen } = useConfirmIndividualConversation();

  return (
    <div>
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
    </div>
  );
}
