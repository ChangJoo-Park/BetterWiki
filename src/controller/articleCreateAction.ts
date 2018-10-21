import { Request, Response } from "express";
import { Article } from "../entity/Article";

export async function articleCreateAction(request: Request, response: Response) {

  const { title, body, topicId } = request.body;

  const newArticle = new Article();
  newArticle.title = title;
  newArticle.body = body;
  newArticle.topic = topicId;
  newArticle.user = request.user;

  const savedArticle = await newArticle.save();

  const reloadArticle = await Article.findOneWithDetails(savedArticle.id);
  response.send(reloadArticle);
}
