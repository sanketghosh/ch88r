import { Button } from "@/components/ui/button";
import {
  BanIcon,
  HeartIcon,
  MessageSquareXIcon,
  TrashIcon,
} from "lucide-react";

const isActive = {
  active: false,
};

export default function ChattingWithPeersDetails() {
  return (
    <div className="min-h-screen w-96 shrink-0 border-l">
      <div className="flex h-full w-full flex-col items-center justify-between space-y-6 px-6 py-12">
        <div className="space-y-3">
          <div className="h-36 w-36 rounded-full border">
            <img src="./profile-pic1.svg" alt="" />
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {isActive.active ? "Active Now" : "Offline"}
            </p>
            <h1 className="text-lg md:text-xl">@johndoe</h1>
            <p>johndoe@mail.com</p>
          </div>
        </div>

        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          dolor assumenda omnis pariatur totam aut incidunt facilis at minus
          temporibus.
        </p>

        <div className="flex w-full flex-col space-y-3">
          <Button className="rounded-full">
            Add To Favorites
            <HeartIcon className="ml-2 size-4" />
          </Button>
          <Button className="rounded-full" variant={"outline"}>
            Clear Chats
            <MessageSquareXIcon className="ml-2 size-4" />
          </Button>
          <Button className="rounded-full" variant={"secondary"}>
            Block User
            <BanIcon className="ml-2 size-4" />
          </Button>
          <Button className="rounded-full" variant={"destructive"}>
            Delete User
            <TrashIcon className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
