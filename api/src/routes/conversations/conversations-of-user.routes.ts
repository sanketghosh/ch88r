import express from "express";
import { getAllConversationsOfAUserHandler } from "../../controllers/conversations/conversations-of-user.controllers";
import { verifyTokenHandler } from "../../middleware/verify-token.middleware";

const router = express.Router();

router.get("/", verifyTokenHandler, getAllConversationsOfAUserHandler);

export default router;
