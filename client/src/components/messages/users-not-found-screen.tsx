import { cn } from "@/lib/utils";

type NotUserScreenProps = {
  icon: React.ReactElement;
  text?: string;
} & React.ComponentPropsWithRef<"div">;
export default function UsersNotFoundScreen({
  icon,
  text,
  className,
}: NotUserScreenProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-center gap-2",
        className,
      )}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
}
