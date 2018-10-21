import { Request, Response } from "express";

/**
 * Setup 조건
 * User가 한명도 없어야함.
 * @param request
 * @param response
 */
export async function setupAction(request: Request, response: Response) {
  return response.json([]);
}
