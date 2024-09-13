// COMPONENTS
import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import GroupAddIcon from "@/components/icons/add-group";
import CreateGroupForm from "@/components/forms/chat-forms/create-group-form";
import NavBaseButton from "@/components/buttons/nav-base-button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export default function CreateGroupDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <NavBaseButton>
          <GroupAddIcon className="size-5" />
        </NavBaseButton>
      </DialogTrigger>
      <DialogWrapper
        dialogTitle="Create new group."
        dialogDescription="Search users and add them one by one to form a group."
      >
        <CreateGroupForm />
      </DialogWrapper>
    </Dialog>
  );
}
