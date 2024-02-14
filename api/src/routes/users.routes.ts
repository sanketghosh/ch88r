import express from "express";
import { registerUserHandler } from "../controllers/user.controllers";
import { check } from "express-validator";

const router = express.Router();

router.post(
  "/register",
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
  registerUserHandler
);

export default router;
