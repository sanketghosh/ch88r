import { create } from "zustand";

type ConfirmIndividualConversation = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useConfirmIndividualConversation = create<ConfirmIndividualConversation>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }),
);

export default useConfirmIndividualConversation;
