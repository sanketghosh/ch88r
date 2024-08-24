import { create } from "zustand";

type CreateGroupModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useCreateGroupModal = create<CreateGroupModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateGroupModal;
