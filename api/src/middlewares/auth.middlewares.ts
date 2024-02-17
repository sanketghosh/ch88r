import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

/**
 * This declaration extends the Express.Request interface, adding a userId property to the Request object.
 * It essentially allows TypeScript to recognize and enforce that the Request object can have a userId property.
 */
declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["auth_token"];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized, no token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);

    if (!decoded) {
      res.status(401).json({
        message: "Unauthorized, invalid token",
      });
    }

    req.userId = (decoded as JwtPayload).userId;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};
