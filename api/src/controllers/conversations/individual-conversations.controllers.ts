import { type Request, type Response } from "express";
import { db } from "../../lib/prisma";

export const startIndividualConversationHandler = async (
  req: Request,
  res: Response
) => {
  const { participantId } = req.body;
  const userId = req.userId;
  try {
    if (!participantId || participantId === userId) {
      return res.status(400).json({
        message: "Invalid participant",
      });
    }

    // check if user exists
    const existingConversation = await db.conversation.findFirst({
      where: {
        isGroup: false,
        AND: [
          {
            users: {
              some: {
                id: userId,
              },
            },
          },
          {
            users: {
              some: {
                id: participantId,
              },
            },
          },
        ],
      },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            email: true,
            userAbout: true,
            avatar: true,
          },
        },
        latestMessage: {
          include: {
            sender: {
              select: {
                id: true,
                username: true,
                email: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    if (existingConversation) {
      return res.status(200).json({
        conversation: existingConversation,
        message: "ERROR! Conversation already exists.",
      });
    }

    // create a new 1v1 conversation if it doesn't exist
    const newConversation = await db.conversation.create({
      data: {
        isGroup: false,
        users: {
          connect: [{ id: userId }, { id: participantId }],
        },
      },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            email: true,
            avatar: true,
            userAbout: true,
          },
        },
        latestMessage: {
          include: {
            sender: {
              select: {
                id: true,
                username: true,
                userAbout: true,
                email: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json({
      conversation: newConversation,
      message: "SUCCESS! Conversation has been created.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};
