import { Request, Response } from "express";

export async function setupAction(request: Request, response: Response) {
  return response.json([]);
}
