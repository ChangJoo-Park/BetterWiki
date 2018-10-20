import { Request, Response } from "express";
import { Article } from "../entity/Article";

export async function articleDeleteAllAction(request: Request, response: Response) {
  await Article.clear();
  response.send();
}
