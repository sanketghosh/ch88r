import { type Request, type Response } from "express";
import { db } from "../../lib/prisma";

/**
 * @function startGroupConversationHandler
 * @async
 * @param {Request} req - The HTTP request object containing the group details such as groupName. groupDescription, userIds and user IDs
 * @param res - The HTTP response object used to send back the desired HTTP response
 * @returns {Promise<void>} A promise that resolves when the group conversation is created or rejects with an error.
 * @description
 * This handler is responsible for initiating a group conversation in the application.
 * It validates the input data, ensures the admin user is included in the group,
 * and creates both a new group and a conversation atomically using a database transaction
 *
 * The following validations are performed:
 * - The admin user must be authenticated
 * - The group name and description must be provided
 * - The number of user IDs must not exceed two (including the admin)
 *
 *
 * On successful creation, it responds with a status code of 201 and includes the created group and conversation details in the response body. In case of any errors during the process it responds with appropriate error messages and status codes.
 *
 * @throws {Error} Throws an error if the database transaction fails or if input validation fails.
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
