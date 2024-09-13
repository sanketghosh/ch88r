import ChatSidebar from "@/components/sidebar/chat-sidebar";
import SideNavbar from "@/components/sidebar/side-navbar";

export default function MainChatScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <SideNavbar />
      <ChatSidebar />
      {children}
    </main>
  );
}
