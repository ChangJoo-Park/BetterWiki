import { Request, Response } from "express";
import { Transaction } from "typeorm";
import { Archive } from "../entity/Archive";
import { Article } from "../entity/Article";

export async function articleUpdateAction(request: Request, response: Response) {
  const { id } = request.params;
  const { title, body, whatChanged = "" } = request.body;

  const oldArticle = await Article.findOne(id, {
    select: ["id", "body", "title"],
  });

  const updated = await Article.update(id, {
    body,
    title,
  });

  // FIXME: 아래의 Archive를 만드는 내용은 여기서 하지 말아야함. Subscriber 오류 수정 후 변경할 것
  // issue : https://github.com/typeorm/typeorm/issues/2809
  if (oldArticle.title !== title || oldArticle.body !== body) {
    let message = "";
    message += oldArticle.title !== title ? "- Title changed\n" : "";
    message += oldArticle.body !== body ? "- Body changed\n" : "";

    await Archive
      .create({
        article: oldArticle,
        body: oldArticle.body,
        title: oldArticle.title,
        whatChanged: message,
      })
      .save();
  }

  const updatedArticle = await Article.findOneWithDetails(id);

  response.send(updatedArticle);
}
