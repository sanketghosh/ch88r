import { Request, Response } from "express";
import Conversation from "../models/conversation.model";

export const sendMessageHandler = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.userId;

    await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
