import ChatSidebar from "@/components/sidebar/chat-sidebar";
import SideNavbar from "@/components/sidebar/side-navbar";

export default function MainChatScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-[1450px] mx-auto flex border-x">
      <SideNavbar />
      <ChatSidebar />
      {children}
    </main>
  );
}
