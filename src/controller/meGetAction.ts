import { Request, Response } from "express";

export async function meGetAction(request: Request, response: Response) {
  return response.send(request.user);
}
