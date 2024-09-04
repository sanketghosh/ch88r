import express from "express";
import { startOneToOneConversationHandler } from "../../controllers/conversations/one-to-one-conversations.controllers";
import { verifyTokenHandler } from "../../middleware/verify-token.middleware";

const router = express.Router();

// start 1v1 conversations
router.post("/", verifyTokenHandler, startOneToOneConversationHandler);

export default router;
