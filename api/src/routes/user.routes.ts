import express from "express";
import {
  getAllUsersHandlers,
  searchUsersHandler,
} from "../controllers/user.controllers";
import { verifyTokenHandler } from "../middleware/verify-token.middleware";

const router = express.Router();

const userRouter = express.Router();

userRouter.get("/", verifyTokenHandler, getAllUsersHandlers);
userRouter.get("/search", verifyTokenHandler, searchUsersHandler);

router.use("/users", userRouter);

export default router;
