import { Request, Response } from "express";
import { Topic } from "../entity/Topic";

export async function topicCreateAction(request: Request, response: Response) {
  const { name, description } = request.body;

  const newTopic = new Topic();
  newTopic.name = name;
  newTopic.description = description;

  const savedTopic = await newTopic.save();
  response.send(savedTopic);
}
