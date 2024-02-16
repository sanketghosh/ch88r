import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/user.model";
import jwt from "jsonwebtoken";

export const registerUserHandler = async (req: Request, res: Response) => {
  // for express validator
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ message: errors.array() });
  }

  // lets create a new user

  try {
    let { username, password } = req.body;

    // checking if the user already exists
    let ifUserExists = await User.findOne({
      username: username,
    });
    if (ifUserExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // otherwise create a new user
    let user = new User({
      username: username,
      password: password,
    });
    await user.save();

    // jwt token sign
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });

    return res.status(200).json({
      message: "Registered user OK",
      userID: user._id,
      username: user.username,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
