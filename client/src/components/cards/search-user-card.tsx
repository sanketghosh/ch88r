import { UserType } from "@/types";
import profilePicPlaceholder from "@/images/placeholder-user-dp.svg"

type SearchUserCardsProps = {
  user: UserType;
  buttonElement: React.ReactElement;
};

export default function SearchUserCards({
  user,
  buttonElement,
}: SearchUserCardsProps) {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-lg border bg-background px-3 py-2 hover:bg-secondary/30">
      <div className="flex items-center gap-4">
        <img
          src={profilePicPlaceholder}
          alt=""
          className="size-12 rounded-full bg-secondary"
        />
        <div className="text-sm">
          <h1 className="text-base font-semibold">@{user.username}</h1>
          <p className="text-foreground/70">{user.email}</p>
        </div>
      </div>
      {buttonElement}
    </div>
  );
}
