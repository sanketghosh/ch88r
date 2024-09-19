import express from "express";
import { getAllConversationsOfAUserHandler } from "../../controllers/conversations/conversations-of-user.controllers";
import { verifyTokenHandler } from "../../middleware/verify-token.middleware";

const router = express.Router();
const conversationsRouter = express.Router();

conversationsRouter.get(
  "/",
  verifyTokenHandler,
  getAllConversationsOfAUserHandler,
);

router.use("/conversations", conversationsRouter);

export default router;
