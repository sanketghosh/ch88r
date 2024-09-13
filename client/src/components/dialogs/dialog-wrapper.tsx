import {
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
};

export default function DialogWrapper({
  dialogTitle,
  dialogDescription,
  children,
}: DialogWrapperProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogDescription>{dialogDescription}</DialogDescription>
      </DialogHeader>
      {children}
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
}
