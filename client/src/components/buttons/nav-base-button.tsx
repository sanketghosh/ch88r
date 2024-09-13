import { cn } from "@/lib/utils";

type NavBaseButtonProps = {
  children: React.ReactNode;
  onClickFn?: () => void;
} & React.ComponentPropsWithRef<"div">;

export default function NavBaseButton({
  children,
  onClickFn,
  className,
}: NavBaseButtonProps) {
  return (
    <div
      className={cn(
        "flex size-10 items-center justify-center rounded-md border transition-all hover:bg-secondary md:size-12",
        className,
      )}
      onClick={onClickFn}
    >
      {children}
    </div>
  );
}
