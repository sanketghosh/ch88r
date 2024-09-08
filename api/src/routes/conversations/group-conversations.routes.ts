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

// start group convo
router.post("/", verifyTokenHandler, startGroupConversationHandler);

// rename group
router.put(
  "/update-group-details",
  verifyTokenHandler,
  updateGroupDetailsHandler
);

// add user to group
router.post("/add-user", verifyTokenHandler, addUserToGroupHandler);

// leave group handler
router.post("/leave-group", verifyTokenHandler, leaveGroupHandler);

// kick user handler
router.post("/kick-user", verifyTokenHandler, kickUserHandler);

export default router;
