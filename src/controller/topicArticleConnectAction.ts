import { Request, Response } from "express";
import { Article } from "../entity/Article";
import { Topic } from "../entity/Topic";

export async function topicArticleConnectAction(request: Request, response: Response) {
  const { articleId, topicId } = request.params;
  await Article.update(articleId, {
    topic: topicId,
  });

  const updatedArticle = await Article.findOneWithDetails(articleId);

  response.json(updatedArticle);
}
