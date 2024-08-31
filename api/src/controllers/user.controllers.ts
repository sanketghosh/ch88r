import { Request, Response } from "express";
import { db } from "../lib/prisma";

export const getAllUsersHandlers = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const users = await db.user.findMany({
      where: {
        id: {
          not: userId,
        },
      },
    });

    if (users) {
      res.status(200).json({
        users,
        message: "SUCCESS! All users have been fetched.",
      });
    } else {
      res.status(404).json({
        users: [],
        message: "No users found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      users: [], // Return an empty array on error
      message: "ERROR! Internal server error.",
    });
    console.error("Error fetching users:", error);
  }
};
