import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type ChatDetailsProps = {
  triggerComponent: React.ReactElement;
};

export default function ChatDetails({ triggerComponent }: ChatDetailsProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{triggerComponent}</SheetTrigger>
      <SheetContent>
        <SheetTitle>Chat Details</SheetTitle>
      </SheetContent>
    </Sheet>
  );
}
