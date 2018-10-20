import { EntitySubscriberInterface, EventSubscriber, UpdateEvent } from "typeorm";
import { Archive } from "../entity/Archive";
import { Article } from "../entity/Article";

@EventSubscriber()
export class ArticleSubscriber implements EntitySubscriberInterface<any> {

  public async  afterUpdate(event: UpdateEvent<Article>) {
  }
}
