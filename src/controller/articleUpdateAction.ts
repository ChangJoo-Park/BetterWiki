import { Request, Response } from "express";
import { Article } from "../entity/Article";

export async function articleUpdateAction(request: Request, response: Response) {
  const { id } = request.params;
  const { title, body } = request.body;
  const targetArticle = await Article.findOne(id);
  console.log(title, body);
  response.send(targetArticle);
}
