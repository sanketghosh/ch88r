// auth routes
import authRoutes from "./auth.routes";

// user routes
import userRotes from "./user.routes";

// conversations
import conversationOfUserRoutes from "./conversations/conversations-of-user.routes";
import groupConversationRoutes from "./conversations/group-conversations.routes";
import individualConversationRoutes from "./conversations/individual-conversations.routes";


export {
    authRoutes,
    conversationOfUserRoutes,
    groupConversationRoutes,
    individualConversationRoutes,
    userRotes
};

