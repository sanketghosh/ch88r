import { Button } from "@/components/ui/button";

type NavBaseButtonProps = {
  children: React.ReactNode;
  onClickFn?: () => void;
};

export default function NavBaseButton({
  children,
  onClickFn,
}: NavBaseButtonProps) {
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className="size-10 md:size-12"
      onClick={onClickFn}
    >
      {children}
    </Button>
  );
}
