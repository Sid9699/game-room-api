import { Request, Response, NextFunction } from "express";
import { infoLogger } from "../config/logger.config";

export const logInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  infoLogger.info({
    message: req.url,
    label: req.method,
  });
  next();
};
