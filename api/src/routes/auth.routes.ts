import express from "express";
import {
  loginUserHandler,
  logoutUserHandler,
  validateTokenHandler,
} from "../controllers/auth.controllers";
import { check } from "express-validator";

const router = express.Router();

// POST api/v1/login --> LOGIN
router.post(
  "/login",
  [
    check(
      "username",
      "Username is required and must be atleast 5 characters and atmost 15 characters"
    )
      .isString()
      .isLength({
        min: 5,
        max: 15,
      }),
    check("password", "Password must be of at least 6 characters").isLength({
      min: 6,
    }),
  ],
  loginUserHandler
);

// POST api/v1/login --> LOGOUT
router.post("/logout", logoutUserHandler);

// GET api/v1/validate-token
router.get("/validate-token", validateTokenHandler, validateTokenHandler);

export default router;
