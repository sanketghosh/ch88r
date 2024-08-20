import express from "express";
import {
  loginUserHandler,
  logoutUserHandler,
  registerUserHandler,
} from "../controllers/auth.controller";

const router = express.Router();

// POST api/v1/auth/register --> REGISTER
router.post("/register", registerUserHandler);

// POST api/v1/auth/login --> LOGIN
router.post("/login", loginUserHandler);

// POST api/v1/auth/logout --> LOGOUT
router.post("/logout", logoutUserHandler);

export default router;
