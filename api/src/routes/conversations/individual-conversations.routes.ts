import express from "express";
import { startIndividualConversationHandler } from "../../controllers/conversations/individual-conversations.controllers";
import { verifyTokenHandler } from "../../middleware/verify-token.middleware";

const router = express.Router();

// start 1v1 conversations
router.post("/", verifyTokenHandler, startIndividualConversationHandler);

export default router;
