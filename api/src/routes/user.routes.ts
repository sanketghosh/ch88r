import express from "express";
import { getAllUsersHandlers } from "../controllers/user.controllers";
import { verifyTokenHandler } from "../middleware/verify-token.middleware";

const router = express.Router();

router.get("/", verifyTokenHandler, getAllUsersHandlers);

export default router;
