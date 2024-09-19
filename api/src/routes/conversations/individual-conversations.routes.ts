import express from "express";
import { startIndividualConversationHandler } from "../../controllers/conversations/individual-conversations.controllers";
import { verifyTokenHandler } from "../../middleware/verify-token.middleware";

const router = express.Router();
const individualConversationRouter = express.Router();

// start 1v1 conversations
individualConversationRouter.post(
  "/",
  verifyTokenHandler,
  startIndividualConversationHandler,
);

router.use("/individual-conversation", individualConversationRouter);

export default router;
