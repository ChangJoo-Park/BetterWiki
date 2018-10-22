import { Request, Response } from "express";
import { Topic } from "../entity/Topic";

/**
 * @param request
 * @param response
 */
export async function topicUpdateAction(request: Request, response: Response) {
  const { id } = request.params;
  const { name, description } = request.body;
  const topic = await Topic.findOne(id);

  await Topic.update(id, {
    description: description || topic.description,
    name: name || topic.name,
  });

  const updatedTopic = await Topic.findOne(id, {
    relations: ["articles"],
  });
  return response.json(updatedTopic);
}
