import { Request, Response } from "express";
import { User } from "../entity/User";

export async function setupCheckAction(request: Request, response: Response) {
  const users = await User.findAndCount();
  let message = "";
  let needSetup = false;

  if (users) {
    message = "You don't need any setup";
    needSetup = false;
  } else {
    message = "You need setup for use";
    needSetup = true;
  }

  return response.json({
    message,
    needSetup,
  });
}
