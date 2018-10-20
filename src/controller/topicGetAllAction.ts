import { Request, Response } from "express";
import { Topic } from "../entity/Topic";

export async function topicGetAllAction(request: Request, response: Response) {
  const topics = await Topic.find({
    loadRelationIds: true,
  });

  response.send(topics);
}
