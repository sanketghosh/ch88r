import { create } from "zustand";

type AddUserModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useAddUserModal = create<AddUserModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddUserModal;
