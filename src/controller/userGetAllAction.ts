import { Request, Response } from "express";
import { User } from "../entity/User";

export async function userGetAllAction(request: Request, response: Response) {
  const users = await User.find({
    select: ["id", "email", "username", "role", "about", "avatar", "createdAt", "updatedAt"],
  });

  return response.json(users);
}
