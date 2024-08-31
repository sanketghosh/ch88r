import express from "express";
import { getAllUsersHandlers } from "../controllers/user.controllers";

const router = express.Router();

router.get("/", getAllUsersHandlers);

export default router;
