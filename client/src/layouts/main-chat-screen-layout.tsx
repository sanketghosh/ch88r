import ChatSidebar from "@/components/sidebar/chat-sidebar";
import SideNavbar from "@/components/sidebar/side-navbar";

export default function MainChatScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex max-w-[1450px] border-x">
      <SideNavbar />
      <ChatSidebar />
      {children}
    </main>
  );
}
