import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

import User from "../models/user.model";
import { generateJWT } from "../utils/generate-jwt-token";

/**
 * @description LOGIN USER
 * @route POST /api/v1/login
 * @access PUBLIC
 */

export const loginUserHandler = async (req: Request, res: Response) => {
  // express validator checker
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array(),
    });
  }

  try {
    let { username, password } = req.body;

    const user = await User.findOne({
      username: username,
    });

    // if user already exists
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user?.password);

    // if password doesn't match
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    if (user && isMatch) {
      generateJWT(user._id, res);
      return res.status(200).json({
        message: "Login user OK",
        userID: user._id,
        username: user.username,
      });
    } else {
      res
        .status(400)
        .json({ message: "ERROR! Internal error, something went wrong." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

/**
 * @description LOGOUT USER
 * @route POST /api/v1/logout
 * @access PUBLIC
 */

export const logoutUserHandler = async (req: Request, res: Response) => {
  try {
    res.cookie("auth_token", "", {
      expires: new Date(0),
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400).json({
      message: "Internal server error, log out failed.",
    });
  }
};

/**
 * @description VALIDATE TOKEN
 * @route POST /api/v1/validate-token
 * @access PUBLIC
 */

export const validateTokenHandler = (req: Request, res: Response) => {
  res.status(200).send({
    userId: req.userId,
  });
};
