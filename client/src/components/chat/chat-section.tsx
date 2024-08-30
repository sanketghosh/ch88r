// components
import ChatInput from "@/components/chat/chat-input";
import ChatSectionTopbar from "@/components/chat/chat-section-topbar";
import { useGetRandomHexColor } from "@/hooks/use-random-hex-color";
import { cn } from "@/lib/utils";
import LIcon from "../icons/L-icon";

const fake_msg_array = [
  {
    msg: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, `,
    sender: true,
  },
  {
    msg: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, porro numquam inventore praesentium possimus eos pariatur voluptatum quasi repudiandae quis consectetur quisquam ut aspernatur harum quas officia alias nulla hic reprehenderit, at, assumenda error molestias corrupti. Dolor exercitationem sit corporis error mollitia, quisquam blanditiis laborum recusandae molestias pariatur possimus adipisci incidunt ea deserunt consequuntur, nostrum suscipit. Corrupti voluptates debitis cupiditate laudantium exercitationem odio nesciunt? Deleniti aliquam qui ab maiores error voluptatibus in quisquam magni exercitationem voluptate consequatur dolores pariatur officia fugit optio, excepturi quidem tempora quasi cum aperiam ducimus! Sunt doloremque ducimus nihil omnis ab vitae praesentium, laudantium voluptatibus esse?`,
    sender: false,
  },
  {
    msg: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, porro numquam inventore praesentium possimus eos pariatur voluptatum quasi repudiandae quis consectetur quisquam ut aspernatur harum quas officia alias nulla hic reprehenderit, at, assumenda error molestias corrupti. Dolor exercitationem sit corporis error mollitia, quisquam blanditiis laborum recusandae molestias pariatur possimus adipisci incidunt ea deserunt consequuntur, nostrum suscipit. Corrupti voluptates debitis cupiditate laudantium exercitationem odio nesciunt? Deleniti aliquam qui ab maiores error voluptatibus in quisquam magni exercitationem voluptate consequatur dolores pariatur officia fugit optio, excepturi quidem tempora quasi cum aperiam ducimus! Sunt doloremque ducimus nihil omnis ab vitae praesentium, laudantium voluptatibus esse?`,
    sender: true,
  },
  {
    msg: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, porro numquam inventore praesentium possimus eos pariatur voluptatum quasi repudiandae quis consectetur quisquam ut aspernatur harum quas officia alias nulla hic reprehenderit, at, assumenda error molestias corrupti. Dolor exercitationem sit corporis error mollitia, quisquam blanditiis laborum recusandae molestias pariatur possimus adipisci incidunt ea deserunt consequuntur, nostrum suscipit. Corrupti voluptates debitis cupiditate laudantium exercitationem odio nesciunt? Deleniti aliquam qui ab maiores error voluptatibus in quisquam magni exercitationem voluptate consequatur dolores pariatur officia fugit optio, excepturi quidem tempora quasi cum aperiam ducimus! Sunt doloremque ducimus nihil omnis ab vitae praesentium, laudantium voluptatibus esse?`,
    sender: false,
  },
  {
    msg: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, porro numquam inventore praesentium possimus eos pariatur voluptatum quasi repudiandae quis consectetur quisquam ut aspernatur harum quas officia alias nulla hic reprehenderit, at, assumenda error molestias corrupti. Dolor exercitationem sit corporis error mollitia, quisquam blanditiis laborum recusandae molestias pariatur possimus adipisci incidunt ea deserunt consequuntur, nostrum suscipit. Corrupti voluptates debitis cupiditate laudantium exercitationem odio nesciunt? Deleniti aliquam qui ab maiores error voluptatibus in quisquam magni exercitationem voluptate consequatur dolores pariatur officia fugit optio, excepturi quidem tempora quasi cum aperiam ducimus! Sunt doloremque ducimus nihil omnis ab vitae praesentium, laudantium voluptatibus esse?`,
    sender: true,
  },
  {
    msg: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, porro numquam inventore praesentium possimus eos pariatur voluptatum quasi repudiandae quis consectetur quisquam ut aspernatur harum quas officia alias nulla hic reprehenderit, at, assumenda error molestias corrupti. Dolor exercitationem sit corporis error mollitia, quisquam blanditiis laborum recusandae molestias pariatur possimus adipisci incidunt ea deserunt consequuntur, nostrum suscipit. Corrupti voluptates debitis cupiditate laudantium exercitationem odio nesciunt? Deleniti aliquam qui ab maiores error voluptatibus in quisquam magni exercitationem voluptate consequatur dolores pariatur officia fugit optio, excepturi quidem tempora quasi cum aperiam ducimus! Sunt doloremque ducimus nihil omnis ab vitae praesentium, laudantium voluptatibus esse?`,
    sender: false,
  },
  {
    msg: `hi`,
    sender: false,
  },
];

export default function ChatSection() {
  const { getRandomColor } = useGetRandomHexColor();

  return (
    <section className="h-screen w-full">
      <div className=" flex h-full w-full flex-col justify-between">
        <ChatSectionTopbar />
        <div className="h-full w-full space-y-3 overflow-y-scroll p-4 lg:space-y-5">
          {fake_msg_array.map((item, idx) => (
            <div key={item.msg + idx} className="relative flex gap-2">
              <img
                src="./profile-pic1.svg"
                alt=""
                className="size-10 rounded-full bg-secondary"
              />
              <div className="flex flex-col">
                <p
                  className={`text-[15px] font-extrabold text-[${getRandomColor()}]`}
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
