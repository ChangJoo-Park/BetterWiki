import { Request, Response } from "express";
import { Article } from "../entity/Article";
import { Topic } from "../entity/Topic";

export async function articleCreateAction(request: Request, response: Response) {

    const { title, body, topic } = request.body;

    const newArticle = new Article();
    newArticle.title = title;
    newArticle.body = body;

    const existsTopic = await Topic.findOne({ where: { name: topic } })
    if (existsTopic) {
        newArticle.topic = existsTopic
    } else {
        const newTopic = await Topic.create({ name: topic })
        const savedTopic = await Topic.save(newTopic)
        newArticle.topic = savedTopic
    }

    newArticle.user = request.user;

    const savedArticle = await newArticle.save();

    const reloadArticle = await Article.findOneWithDetails(savedArticle.id);
    response.send(reloadArticle);
}
