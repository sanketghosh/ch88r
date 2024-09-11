// PACKAGES
import useCreateGroupModal from "@/hooks/use-create-group-modal";

// COMPONENTS
import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import GroupAddIcon from "@/components/icons/add-group";
import CreateGroupForm from "@/components/forms/chat-forms/create-group-form";

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
        <CreateGroupForm />
      </DialogWrapper>
    </>
  );
}
