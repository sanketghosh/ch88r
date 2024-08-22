// COMPONENTS
import ChatSection from "@/components/chat/chat-section";
import ChatSidebar from "@/components/sidebar/chat-sidebar";
import ChattingWithPeersDetails from "@/components/sidebar/chatting-with-peers-details";
import SideNavbar from "@/components/sidebar/side-navbar";

export default function Home() {
  return (
    <main className="flex">
      <SideNavbar />
      <ChatSidebar />
      <ChatSection />
      <ChattingWithPeersDetails />
    </main>
  );
}
