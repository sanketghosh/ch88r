import { type Request, type Response } from "express";
import { db } from "../lib/prisma";

export const getAllUsersHandlers = async (req: Request, res: Response) => {
  try {
    const users = db.user.findMany();
    res.status(200).json({
      users: users,
      message: "SUCCESS! All users have been fetched.",
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR! Internal server error.",
    });
    console.log(error);
  }
};
