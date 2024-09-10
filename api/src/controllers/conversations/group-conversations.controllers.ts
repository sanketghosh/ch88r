import { type Request, type Response } from "express";
import { db } from "../../lib/prisma";
import { generateUniquePassKey } from "../../utils/unique-name-generator";

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
  const { groupName, groupDescription, participantsIds } = req.body;
  const adminId = req.userId;

  // ensure the admin ID is included in the group users
  const groupMemberIds = [...new Set([adminId, ...participantsIds])];

  if (!adminId) {
    return res.status(401).json({
      message: "ERROR! User not authenticated.",
    });
  }

  if (!groupName || !groupDescription || participantsIds.length > 2) {
    return res.status(400).json({
      message: "ERROR! Missing group name or users.",
    });
  }

  try {
    // transaction to create the group and conversation atomically
    const groupConversation = await db.$transaction(async (prisma) => {
      // create a new conversation marked as a group
      const conversation = await prisma.conversation.create({
        data: {
          isGroup: true,
          users: {
            connect: groupMemberIds.map((id: string) => ({ id })),
          },
        },
      });

      // create a new group linked to the conversation
      const group = await prisma.group.create({
        data: {
          name: groupName,
          passkey: generateUniquePassKey(),
          groupDescription: groupDescription || null,
          adminId: adminId,
          conversationId: conversation.id,
          users: {
            connect: groupMemberIds.map((id: string) => ({ id })),
          },
        },
        include: {
          users: true,
        },
      });

      // update the conversation to link it to the group and add users
      const updatedConversation = await prisma.conversation.update({
        where: {
          id: conversation.id,
        },
        data: {
          groupId: group.id,
        },
        include: {
          users: true,
        },
      });

      return {
        group,
        updatedConversation,
      };
    });

    res.status(201).json({
      group: groupConversation.group,
      conversation: groupConversation.updatedConversation,
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
 * @function updateGroupDetailsHandler
 * @async
 * @param {Request} req - The HTTP request object containing the group details such as group name, group description and group id.
 * @param {Response} res -
 * @returns
 * @description
 */

export const updateGroupDetailsHandler = async (
  req: Request,
  res: Response
) => {
  const { groupName, groupDescription, groupId } = req.body;
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({
      message: "ERROR! User not authenticated.",
    });
  }

  if (!groupName && !groupDescription) {
    return res.status(400).json({
      message:
        "ERROR! You must provide at least a group name or description to update.",
    });
  }

  try {
    const group = await db.group.findUnique({
      where: {
        id: groupId,
      },
    });

    if (!group) {
      return res.status(404).json({
        message: "ERROR! Group not found.",
      });
    }

    const updatedGroup = await db.group.update({
      where: {
        id: groupId,
      },
      data: {
        ...(groupName && { name: groupName }),
        ...(groupDescription && { groupDescription: groupDescription }),
      },
      include: {
        users: true,
      },
    });

    return res.status(200).json({
      message: "SUCCESS! Group updated successfully.",
      group: updatedGroup,
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
 * @function addUserToGroupHandler
 * @async
 * @param req
 * @param res
 * @returns
 * @description
 */
export const addUserToGroupHandler = async (req: Request, res: Response) => {
  const { groupName, groupDescription, groupId, userToAddId } = req.body;
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({
      message: "ERROR! User not authenticated.",
    });
  }

  if (!userToAddId) {
    return res.status(400).json({
      message:
        "ERROR! A valid user id of the user you want to add is required.",
    });
  }

  try {
    // check if the group exists and fetch admin's id to verify permissions

    const group = await db.group.findUnique({
      where: {
        id: groupId,
      },
      select: {
        id: true,
        adminId: true,
        users: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!group) {
      return res.status(404).json({
        message: "ERROR! Group not found.",
      });
    }

    // optional
    if (group.adminId !== userId) {
      return res.status(403).json({
        message: "ERROR! Only the group admin can add users.",
      });
    }

    // check if user is already a member of the group
    const isUserInGroup = group.users.some((user) => user.id === userToAddId);

    if (isUserInGroup) {
      return res.status(400).json({
        message: "ERROR! User is already a member of the group.",
      });
    }

    // add the user to the group
    await db.group.update({
      where: {
        id: groupId,
      },
      data: {
        users: {
          connect: {
            id: userToAddId,
          },
        },
      },
    });

    return res.status(200).json({
      message: "SUCCESS! User added to the group successfully..",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

/**
 * @function leaveGroupHandler
 * @param req
 * @param res
 * @returns
 * @description
 */
export const leaveGroupHandler = async (req: Request, res: Response) => {
  const { groupId } = req.body;
  const userId = req.userId;

  if (!groupId) {
    return res.status(400).json({
      message: "ERROR! Missing group ID.",
    });
  }

  try {
    // fetch the group to ensure the user is part of it
    const group = await db.group.findUnique({
      where: {
        id: groupId,
      },
      select: {
        adminId: true,
        users: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!group) {
      return res.status(404).json({
        message: "ERROR! Group not found.",
      });
    }

    // check if the user is the admin
    if (group.adminId === userId) {
      return res.status(403).json({
        message: "ERROR! Admin cannot leave the group.",
      });
    }

    // check if the user is part of the group
    const isMember = group.users.some((user) => user.id === userId);
    if (!isMember) {
      return res.status(403).json({
        message: "ERROR! You are not a member of this group.",
      });
    }

    // proceed to disconnect the user from the group
    await db.group.update({
      where: {
        id: groupId,
      },
      data: {
        users: {
          disconnect: {
            id: userId,
          },
        },
      },
    });

    res.status(200).json({
      message: "SUCCESS! You have successfully left the group",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

/**
 * @function kickUserHandler
 * @param req
 * @param res
 * @returns
 * @description
 */
export const kickUserHandler = async (req: Request, res: Response) => {
  const { groupId, userToKickId } = req.body;
  const adminId = req.userId;

  if (!groupId || !userToKickId) {
    return res.status(400).json({
      message: "ERROR! Missing group ID or user ID.",
    });
  }

  try {
    // fetch the group to ensure the requesting user is the admin
    const group = await db.group.findUnique({
      where: {
        id: groupId,
      },
      select: {
        adminId: true,
      },
    });

    if (!group) {
      return res.status(404).json({
        message: "ERROR! Group not found.",
      });
    }

    // check if the requesting user is the admin of the group
    if (group.adminId !== adminId) {
      return res.status(400).json({
        message: "ERROR! Only the group admin can remove users.",
      });
    }

    //proceed to disconnect the user from the group
    await db.group.update({
      where: {
        id: groupId,
      },
      data: {
        users: {
          disconnect: {
            id: userToKickId,
          },
        },
      },
    });

    res.status(200).json({
      message: "SUCCESS! User has been removed from the group.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};
