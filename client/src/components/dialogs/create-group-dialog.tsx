import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import GroupAddIcon from "@/components/icons/add-group";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";

import useCreateGroupModal from "@/hooks/use-create-group-modal";
import { useState } from "react";

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
        <MultiSelectTest />
      </DialogWrapper>
    </>
  );
}

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

function MultiSelectTest() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <MultiSelector values={value} onValuesChange={setValue} loop={false}>
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select your framework" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {options.map((option, i) => (
            <MultiSelectorItem key={i} value={option.value}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
}
