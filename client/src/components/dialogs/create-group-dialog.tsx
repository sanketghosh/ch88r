import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import GroupAddIcon from "@/components/icons/add-group";
import { Button } from "@/components/ui/button";
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
      <Button
        size={"icon"}
        variant={"ghost"}
        className="size-12"
        onClick={onOpen}
      >
        <GroupAddIcon className="size-6" />
      </Button>

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
