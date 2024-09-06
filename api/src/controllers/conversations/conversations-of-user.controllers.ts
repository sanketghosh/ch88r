import { type Request, type Response } from "express";
import { db } from "../../lib/prisma";

export const getAllConversationsOfAUserHandler = async (
  req: Request,
  res: Response
) => {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({
      message: "ERROR! User not authenticated.",
    });
  }

  try {
    /*  const conversations = await db.conversation.findMany({
      where: {
        users: {
          some: {
            id: userId,
          },
        },
      },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            userAbout: true,
            email: true,
            avatar: true,
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
    }); */

    // get group conversation and individual conversations together
    const conversations = await db.conversation.findMany({
      where: {
        OR: [
          {
            isGroup: false,
            users: {
              some: {
                id: userId,
              },
            },
          },
          {
            isGroup: true,
            group: {
              users: {
                some: {
                  id: userId,
                },
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
            userAbout: true,
            email: true,
            avatar: true,
          },
        },

        group: {
          select: {
            id: true,
            name: true,
            groupDescription: true,
            users: {
              select: {
                id: true,
                username: true,
                email: true,
                avatar: true,
              },
            },
            admin: {
              select: {
                id: true,
                username: true,
              },
            },
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
      orderBy: {
        updatedAt: "desc",
      },
    });

    res.status(200).json({
      conversations: conversations,
      message: "SUCCESS! Fetched all conversations.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};
