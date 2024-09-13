// components
import ChatInput from "@/components/chat/chat-input";
import ChatSectionTopbar from "@/components/chat/chat-section-topbar";
import { fake_msg_array } from "@/data";
import { useGetRandomHexColor } from "@/hooks/use-random-hex-color";
import { cn } from "@/lib/utils";
import LIcon from "../icons/L-icon";

import placeholderUserDp from "@/images/placeholder-user-dp.svg";
import { useLocation } from "react-router-dom";

export default function ChatSection() {
  const { getRandomColor } = useGetRandomHexColor();
  const location = useLocation();
  const { data } = location.state || {}; // Access the passed user data

  return (
    <section className="h-screen w-full">
      <div className=" flex h-full w-full flex-col justify-between">
        <ChatSectionTopbar
          name={data?.name}
          image={data.image}
          isGroup={data.isGroup}
        />
        <div className="h-full w-full space-y-3 overflow-y-scroll p-4 lg:space-y-5">
          {fake_msg_array.map((item, idx) => (
            <div key={item.msg + idx} className="relative flex gap-2">
              <img
                src={placeholderUserDp}
                alt=""
                className="size-8 rounded-full border border-foreground/30 md:size-10"
              />
              <div className="flex flex-col">
                <p
                  className={`text-[15px] font-medium text-[${getRandomColor()}]`}
                  style={{ color: `${getRandomColor()}` }}
                >
                  @username
                </p>
                <p className="mt-0.5 text-xs font-medium text-foreground/60">
                  On Thursday, at 9:32PM
                </p>
                <p
                  className={cn(
                    "mt-3 w-fit rounded-md px-2 py-3 text-[15px] text-foreground/95",
                    !item.sender
                      ? "bg-secondary/30"
                      : "border border-border/50",
                  )}
                >
                  {item.msg}
                </p>
              </div>
              <LIcon />
            </div>
          ))}
        </div>
        <ChatInput />
      </div>
    </section>
  );
}
{
  /*  {fake_msg_array.map((msg, idx) => (
   <div
     key={idx}
     className={cn(
       msg.sender ? "justify-start " : "justify-end",
       "flex p-2 text-[13px] leading-5 md:text-sm xl:text-base",
     )}
   >
     <p
       className={cn(
         msg.sender
           ? "rounded-sm rounded-bl-none rounded-tr-md bg-secondary/30 text-left lg:rounded-md lg:rounded-bl-none lg:rounded-tr-xl"
           : "rounded-sm rounded-br-none rounded-tl-md bg-blue-800 text-left text-white dark:bg-blue-900 lg:rounded-md lg:rounded-br-none lg:rounded-tl-xl",
         "w-fit max-w-[95%] p-3 md:max-w-[90%]",
       )}
     >
       {msg.msg}
     </p>
   </div>
 ))}*/
}
