import { type Request, type Response } from "express";

export const startGroupConversationHandler = async (
  req: Request,
  res: Response,
) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

//

export const renameGroupHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

//
export const editGroupDescriptionHandler = async (
  req: Request,
  res: Response,
) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

//
export const addUserToGroupHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

//
export const leaveGroupHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};

//
export const kickUserHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong, internal server error.",
    });
  }
};
