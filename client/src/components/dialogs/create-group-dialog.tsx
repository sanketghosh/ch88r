// PACKAGES
import useCreateGroupModal from "@/hooks/use-create-group-modal";

// COMPONENTS
import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import GroupAddIcon from "@/components/icons/add-group";
import CreateGroupForm from "@/components/forms/chat-forms/create-group-form";
import NavBaseButton from "../buttons/nav-base-button";

export default function CreateGroupDialog() {
  const { isOpen, onOpen, onClose } = useCreateGroupModal();

  return (
    <>
      <NavBaseButton onClickFn={onOpen}>
        <GroupAddIcon className="size-5" />
      </NavBaseButton>

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
