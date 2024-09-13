// COMPONENTS

import ChatBubbles from "@/components/icons/chat-bubbles";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <ChatBubbles />
          <h1 className="max-w-xl text-center">
            Select a chat to start conversation or create an individual or group
            chat to get started in your journey.
          </h1>
        </div>
      </div>
    </div>
  );
}
