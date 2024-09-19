import express from "express";
import {
  addUserToGroupHandler,
  kickUserHandler,
  leaveGroupHandler,
  startGroupConversationHandler,
  updateGroupDetailsHandler,
} from "../../controllers/conversations/group-conversations.controllers";
import { verifyTokenHandler } from "../../middleware/verify-token.middleware";

const router = express.Router();
const groupConversationRouter = express.Router();

// start group conversation
groupConversationRouter.post(
  "/",
  verifyTokenHandler,
  startGroupConversationHandler,
);

// rename group
groupConversationRouter.put(
  "/update-group-details",
  verifyTokenHandler,
  updateGroupDetailsHandler,
);

// add user to group
groupConversationRouter.post(
  "/add-user",
  verifyTokenHandler,
  addUserToGroupHandler,
);

// leave group handler
groupConversationRouter.post(
  "/leave-group",
  verifyTokenHandler,
  leaveGroupHandler,
);

// kick user handler
groupConversationRouter.post("/kick-user", verifyTokenHandler, kickUserHandler);

router.use("/group-conversation", groupConversationRouter);

export default router;
