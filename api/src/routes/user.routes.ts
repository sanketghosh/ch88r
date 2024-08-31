import express from "express";
import {
  getAllUsersHandlers,
  searchUsersHandler,
} from "../controllers/user.controllers";
import { verifyTokenHandler } from "../middleware/verify-token.middleware";

const router = express.Router();

router.get("/", verifyTokenHandler, getAllUsersHandlers);
router.get("/search", verifyTokenHandler, searchUsersHandler);

export default router;
