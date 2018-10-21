import { Request, Response } from "express";
import { Service } from "../entity/Service";
import { User } from "../entity/User";
import { UserRole } from "../enum/UserRole";

/**
 * Setup 조건
 * User가 한명도 없어야함.
 * @param request
 * @param response
 */
export async function setupAction(request: Request, response: Response) {
  const { user, service } = request.body;

  const { email, password, username } = user;
  const newUser = User.create({
    email,
    passwordDigest: password,
    role: UserRole.Admin,
    username,
  });

  const savedUser = await newUser.save();

  const { name, description } = service;

  const newService = Service.create({
    description,
    name,
  });

  const savedService = await newService.save();

  return response.json({
    admin: savedUser,
  });
}
