import { Request, Response } from "express";
import { FindManyOptions, FindOneOptions } from "typeorm";
import { Archive } from "../entity/Archive";
import { Article } from "../entity/Article";

export async function meGetAction(request: Request, response: Response) {
  const where: FindManyOptions = {
    loadRelationIds: true,
    where: {
      user: request.user,
    },
  };

  const archives = Archive.find(where);
  const articles = Article.find(where);
  const results = await Promise.all([archives, articles]);

  return response.send({
    archives: results[0],
    articles: results[1],
    user: request.user,
  });
}
