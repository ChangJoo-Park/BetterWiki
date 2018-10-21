import { Request, Response } from "express";
import { Service } from "../entity/Service";

export async function serviceGetAction(request: Request, response: Response) {
  const service = await Service.findOneWithDetails();
  response.status(200).json(service);
}
