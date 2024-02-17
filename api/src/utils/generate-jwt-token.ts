import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const generateJWT = (
  userId: string,
  res: Response<any, Record<string, any>>
) => {
  // jwt token sign
  const token = jwt.sign(
    {
      userId: userId,
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
};
