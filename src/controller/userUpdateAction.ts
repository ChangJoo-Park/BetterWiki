import { Request, Response } from "express";
import { User } from "../entity/User";

export async function userUpdateAction(request: Request, response: Response) {
  const body = request.body;
  delete body.email;
  delete body.username;

  if (request.user.role !== "admin") {
    delete body.role;
  }

  await User.update(request.params.id, body);

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
