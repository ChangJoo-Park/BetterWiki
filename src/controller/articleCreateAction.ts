import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Article } from "../entity/Article";

export async function articleCreateAction(request: Request, response: Response) {
  const { title, body } = request.body;

  const newArticle = new Article();
  newArticle.title = "New Article";
  newArticle.body = "Lorem Ipsum";

  const savedArticle = await newArticle.save();
  response.send(savedArticle);
}
