import mongoose from "mongoose";

type ConversationTypes = {
  messages: string[];
  participants: string[];
};

const conversationSchema = new mongoose.Schema<ConversationTypes>(
  {
    messages: [
      {
        type: String,
        ref: "Message",
        default: [],
      },
    ],
    participants: [
      {
        type: String,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model<ConversationTypes>(
  "Conversation",
  conversationSchema
);
export default Conversation;
