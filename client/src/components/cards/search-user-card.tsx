import { MessageCircleIcon, PlusSquareIcon } from "lucide-react";
import { Button } from "../ui/button";
import { UserType } from "@/types";

type SearchUserCardsProps = {
  forGroupSearch?: boolean;
  handleButtonClick: (user: UserType) => void;
  user: UserType;
};

export default function SearchUserCards({
  user,
  forGroupSearch,
  handleButtonClick,
}: SearchUserCardsProps) {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-lg border bg-background px-3 py-2 hover:bg-secondary/30">
      <div className="flex items-center gap-4">
        <img
          src="./profile-pic1.svg"
          alt=""
          className="size-12 rounded-full bg-secondary"
        />
        <div className="text-sm">
          <h1 className="text-base font-semibold">@{user.username}</h1>
          <p className="text-foreground/70">{user.email}</p>
        </div>
      </div>
      <Button
        size={"icon"}
        variant={"secondary"}
        onClick={() => handleButtonClick(user)}
      >
        {forGroupSearch ? <PlusSquareIcon /> : <MessageCircleIcon />}
      </Button>
    </div>
  );
}
