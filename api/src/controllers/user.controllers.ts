import { Request, Response } from "express";
import { validationResult } from "express-validator";

import User from "../models/user.model";
import { generateJWT } from "../utils/generate-jwt-token";

/**
 *
 * @description REGISTER USER
 * @route POST api/v1/register
 * @access PUBLIC
 *
 */
export const registerUserHandler = async (req: Request, res: Response) => {
  // for express validator
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ message: errors.array() });
  }

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

    if (user) {
      await user.save();

      generateJWT(user._id, res);

      return res.status(200).json({
        message: "Registered user OK",
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
