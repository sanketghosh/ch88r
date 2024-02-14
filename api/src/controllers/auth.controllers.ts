import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

    // jwt token sign
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });

    return res.status(200).json({ userID: user._id });
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
  res.cookie("auth_token", "", {
    expires: new Date(0),
  });

  res.send();
};

/**
 * @description LOGOUT USER
 * @route POST /api/v1/validate-token
 * @access PUBLIC
 */

export const validateTokenHandler = (req: Request, res: Response) => {
  res.status(200).send({
    userId: req.userId,
  });
};
