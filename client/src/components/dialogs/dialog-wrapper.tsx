import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DialogWrapperProps = {
  dialogTitle?: string;
  dialogDescription?: string;
  children: React.ReactNode;
  isModalOpen?: boolean;
  onModalClose: () => void;
};

export default function DialogWrapper({
  dialogTitle,
  dialogDescription,
  children,
  isModalOpen,
  onModalClose,
}: DialogWrapperProps) {
  return (
    <Dialog open={isModalOpen}>
      <DialogContent closeDialog={onModalClose}>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {children}

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
