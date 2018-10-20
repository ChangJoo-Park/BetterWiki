import { Request, Response } from "express";
import { Article } from "../entity/Article";

export async function articleGetAllAction(request: Request, response: Response) {
  const articles = await Article.find({
    loadRelationIds: true,
  });

  response.send(articles);
}
