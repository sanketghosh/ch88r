// user/auth
import authRoutes from "./auth.routes";
import userRotes from "./user.routes";

// conversations
import conversationOfUserRoutes from "./conversations/conversations-of-user.routes";
import groupConversationRoutes from "./conversations/group-conversations.routes";
import oneToOneConversationRoutes from "./conversations/one-to-one-conversations.routes";

export {
  authRoutes,
  conversationOfUserRoutes,
  groupConversationRoutes,
  oneToOneConversationRoutes,
  userRotes,
};
