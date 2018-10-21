import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export async function userGetAction(request: Request, response: Response) {
  const user = await User.findOne(request.params.id, {
    select: ["id", "email", "username", "role", "about", "avatar", "createdAt", "updatedAt"],
  });

  if (!user) {
    return response.status(404).json({
      message: "User not found.",
    });
  }

  return response.json(user);
}
