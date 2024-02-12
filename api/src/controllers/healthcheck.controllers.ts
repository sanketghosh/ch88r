import { Request, Response } from "express";

export const healthcheckHandler = (req: Request, res: Response) => {
  return res.status(200).json({
    message: "HEALTHCHECK: everything is fine",
  });
};
