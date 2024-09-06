import { type Request, type Response } from "express";
import { db } from "../../lib/prisma";

/**
 *
 * @param req
 * @param res
 * @returns
 * @description
 */
export const startGroupConversationHandler = async (
  req: Request,
  res: Response
) => {
  const { groupName, groupDescription, userIds } = req.body;
  const adminId = req.userId;

  // ensure the admin ID is included in the group users
  const groupUserIds = [...new Set([adminId, ...userIds])];

  if (!adminId) {
    return res.status(401).json({
      message: "ERROR! User not authenticated.",
    });
  }

  if (!groupName || !groupDescription || userIds.length > 2) {
    return res.status(400).json({
      message: "ERROR! Missing group name or users.",
    });
  }

  try {
    // transaction to create the group and conversation atomically
    const groupConversation = await db.$transaction(async (prisma) => {
      // create a new convo marked as a group
      const conversation = await prisma.conversation.create({
        data: {
          isGroup: true,
        },
      });

      // create a new group linked to the conversation
      const group = await prisma.group.create({
        data: {
          name: groupName,
          passkey: "",
          groupDescription: groupDescription || null,
          adminId: adminId,
          conversationId: conversation.id,
          users: {
            connect: groupUserIds.map((id: string) => ({ id })),
          },
        },
        include: {
          users: true,
        },
      });

      // update the conversation to link it to the group and add users
      await prisma.conversation.update({
        where: {
          id: conversation.id,
        },
        data: {
          groupId: group.id,
          users: {
            connect: groupUserIds.map((id: string) => ({ id })),
          },
        },
      });

      return {
        group,
        conversation,
      };
    });

    res.status(201).json({
      group: groupConversation.group,
      conversation: groupConversation.conversation,
      message: "SUCCESS! Group conversation has been created.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns
 * @description
 */

export const renameGroupHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns
 * @description
 */
export const editGroupDescriptionHandler = async (
  req: Request,
  res: Response
) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns
 * @description
 */
export const addUserToGroupHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns
 * @description
 */
export const leaveGroupHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns
 * @description
 */
export const kickUserHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};
