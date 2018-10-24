import { Request, Response } from "express";
import { Article } from "../entity/Article";

export async function articleGetAllAction(request: Request, response: Response) {
  const articles = await Article.find({
    cache: {
      id: "get_all_articles",
      milliseconds: 5000,
    },
    loadEagerRelations: true,
    loadRelationIds: true,
    order: {
      createdAt: "DESC",
    },
    relations: ["user", "topic"],
    select: ["id", "title", "createdAt", "updatedAt", "user", "topic"],
  });
  response.send(articles);
}
