import express from "express";

import { sendMessageHandler } from "../controllers/message.controllers";
import { verifyTokenMiddleware } from "../middlewares/auth.middlewares";

const router = express.Router();

router.post("/send/:id", verifyTokenMiddleware, sendMessageHandler);

export default router;
