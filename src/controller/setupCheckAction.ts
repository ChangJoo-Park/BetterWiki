import { Request, Response } from "express";
import { Service } from "../entity/Service";
import { User } from "../entity/User";
import { UserRole } from "../enum/UserRole";

export async function setupCheckAction(request: Request, response: Response) {
  const admin = await User.findOne({ role: UserRole.Admin });
  const service = await Service.findOneWithDetails();

  const needSetup = !admin || !service;
  const message = needSetup ? "You need setup to use" : "You don't need any setup";

  return response.json({
    message,
    needSetup,
  });
}
