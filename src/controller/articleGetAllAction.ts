import { Request, Response } from "express";
import { FindManyOptions } from "typeorm";
import { Article } from "../entity/Article";

export async function articleGetAllAction(request: Request, response: Response) {
  const { topic = "" } = request.query;

  const where = { topic: "" };

  if (topic) {
    where.topic = topic;
  }

  Object.keys(where).forEach((key) => {
    if (!where[key]) {
      delete where[key];
    }
  });

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
    where,
  });
  response.send(articles);
}
