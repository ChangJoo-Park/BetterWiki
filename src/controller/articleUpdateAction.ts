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

  // FIXME: 아래의 Archive를 만드는 내용은 여기서 하지 말아야함. Subscriber 오류 수정 후 변경할 것
  // issue : https://github.com/typeorm/typeorm/issues/2809
  const newArchive = Archive.create({
    article: oldArticle,
    body: oldArticle.body,
    title: oldArticle.title,
    whatChanged: "이 내용은.. 자동으로 만들어줘야함",
  });

  const updated = await Article.update(id, {
    body,
    title,
  });

  await newArchive.save();

  const updatedArticle = await Article.findOneWithDetails(id);

  response.send(updatedArticle);
}
