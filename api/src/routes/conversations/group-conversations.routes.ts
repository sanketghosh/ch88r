import express from "express";
import {
  addUserToGroupHandler,
  editGroupDescriptionHandler,
  kickUserHandler,
  leaveGroupHandler,
  renameGroupHandler,
  startGroupConversationHandler,
} from "../../controllers/conversations/group-conversations.controllers";
import { verifyTokenHandler } from "../../middleware/verify-token.middleware";

const router = express.Router();

// start group convo
router.post("/", verifyTokenHandler, startGroupConversationHandler);

// rename group
router.put("/rename-group", verifyTokenHandler, renameGroupHandler);

// edit group about
router.put(
  "/edit-group-description",
  verifyTokenHandler,
  editGroupDescriptionHandler
);

// add user to group
router.post("/add-user", verifyTokenHandler, addUserToGroupHandler);

// leave group handler
router.post("/leave-group", verifyTokenHandler, leaveGroupHandler);

// kick user handler
router.post("/kick-user", verifyTokenHandler, kickUserHandler);

export default router;
