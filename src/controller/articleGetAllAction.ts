import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Article } from "../entity/Article";

export async function articleGetAllAction(request: Request, response: Response) {
  const articles = await Article.find({
    loadRelationIds: true,
  });

  response.send(articles);
}
