import { Request, Response } from "express";
import { Service } from "../entity/Service";
import { Topic } from "../entity/Topic";
import { User } from "../entity/User";
import { UserRole } from "../enum/UserRole";

/**
 * Setup 조건
 * User가 한명도 없어야함.
 * @param request
 * @param response
 */
export async function setupAction(request: Request, response: Response) {
  const { admin: requestedAdmin, service: requestedService } = request.body;

  const { email, password, username } = requestedAdmin;
  const newUser = User.create({
    email,
    passwordDigest: password,
    role: UserRole.Admin,
    username,
  });

  const { name, description } = requestedService;

  const newService = Service.create({
    description,
    name,
  });

  const newTopic = Topic.create({
    description: "knowledge for everyone",
    name: "general",
  });

  const [admin, service, topic] = await Promise.all([newUser.save(), newService.save(), newTopic.save()]);

  return response.json({
    admin,
    service,
    topic,
  });
}
