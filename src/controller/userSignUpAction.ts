import { Request, Response } from "express";
import { User } from "../entity/User";

export async function userSignUpAction(request: Request, response: Response) {
  const { email, password, username = "" } = request.body;
  const user: User = User.create({
    email,
    passwordDigest: password,
    username,
  });
  const savedUser = await user.save();

  response.send(savedUser);
}
