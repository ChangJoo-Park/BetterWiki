import { Request, Response } from "express";
import { Article } from "../entity/Article";

export async function articleGetAction(request: Request, response: Response) {
  const article = await Article.findOne(request.params.id);

  response.send(article);
}
