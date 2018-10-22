import { Request, Response } from "express";
import { Article } from "../entity/Article";

export async function topicArticleDisconnectAction(request: Request, response: Response) {
  const { articleId } = request.params;
  await Article.update(articleId, {
    topic: null,
  });

  const updatedArticle = await Article.findOneWithDetails(articleId);

  response.json(updatedArticle);

  response.send();
}
