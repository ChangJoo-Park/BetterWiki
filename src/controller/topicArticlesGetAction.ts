import { Request, Response } from "express";
import { Topic } from "../entity/Topic";

export async function topicArticlesGetAction(request: Request, response: Response) {
  const topic = await Topic.findOne(request.params.id, {
    relations: ["articles"],
  });

  response.send(topic);
}
