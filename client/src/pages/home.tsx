import ChatSection from "@/components/chat/chat-section";
import ChatSidebar from "@/components/sidebar/chat-sidebar";
import SideNavbar from "@/components/sidebar/side-navbar";

export default function Home() {
  return (
    <main className="flex">
      <SideNavbar />
      <ChatSidebar />
      <ChatSection />
    </main>
  );
}
