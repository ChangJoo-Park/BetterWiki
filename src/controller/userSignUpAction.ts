import { Request, Response } from "express";
import { User } from "../entity/User";

export async function userSignUpAction(request: Request, response: Response) {
  const { email, password } = request.body;
  const user = User.create({
    email,
    passwordDigest: password,
  });
  const savedUser = await user.save();

  response.send(savedUser);
}
