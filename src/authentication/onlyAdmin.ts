import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { UserRole } from "../enum/UserRole";

export async function onlyAdmin(request: Request, response: Response, next: NextFunction) {
  if (request.user.role !== UserRole.Admin) {
    return response.status(403).json({
      message: "You are not admin.",
    });
  }

  next();
}
