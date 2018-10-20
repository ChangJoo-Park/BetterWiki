import { Request, Response } from "express";
import { Archive } from "../entity/Archive";
import { Article } from "../entity/Article";

export async function articleHistoryGetAllAction(request: Request, response: Response) {
  const archives = await Archive.findAndCount({
    order: {
      createdAt: "DESC",
    },
    where: {
      articleId: request.params.id,
    },
  });

  response.send(archives);
}
