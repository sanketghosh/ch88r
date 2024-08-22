import { cn } from "@/lib/utils";
import ChatInput from "./chat-input";
import ChatSectionTopbar from "./chat-section-topbar";

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
];

export default function ChatSection() {
  return (
    <section className="h-screen w-full">
      <div className=" flex h-full w-full flex-col justify-between">
        <ChatSectionTopbar />
        <div className="h-full w-full space-y-2 overflow-y-scroll p-3 lg:space-y-3">
          {fake_msg_array.map((msg, idx) => (
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
                    ? "rounded-lg rounded-bl-none bg-secondary/30 text-left lg:rounded-xl lg:rounded-bl-none"
                    : "rounded-lg rounded-br-none bg-emerald-950 text-left text-foreground lg:rounded-xl lg:rounded-br-lg",
                  "w-fit max-w-[95%] p-3 md:max-w-[90%]",
                )}
              >
                {msg.msg}
              </p>
            </div>
          ))}
        </div>
        <ChatInput />
      </div>
    </section>
  );
}
