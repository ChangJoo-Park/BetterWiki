import { Request, Response } from "express";
import { Topic } from "../entity/Topic";

export async function topicDeleteAction(request: Request, response: Response) {
  await Topic.clear();
  response.send();
}
