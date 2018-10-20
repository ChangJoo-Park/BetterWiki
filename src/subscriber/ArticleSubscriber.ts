import { EntitySubscriberInterface, EventSubscriber, UpdateEvent } from "typeorm";
import { Archive } from "../entity/Archive";
import { Article } from "../entity/Article";

@EventSubscriber()
export class ArticleSubscriber implements EntitySubscriberInterface<any> {

  public async  afterUpdate(event: UpdateEvent<Article>) {
    try {
      console.log(event);
      // const titleChanged = updated.title !== origin.title;
      // const bodyChanged = updated.body !== origin.body;
      // const isUpdated = titleChanged || bodyChanged;

      // if (isUpdated) {
      //   let message: string = "";

      //   if (titleChanged) {
      //     message += "- title changed.\n";
      //   }

      //   if (bodyChanged) {
      //     message += "- body changed.\n";
      //   }

      //   const newArchive = Archive.create({
      //     article: updated,
      //     body: updated.body,
      //     title: updated.title,
      //     whatChanged: message,
      //   });

      //   await newArchive.save();

      //   console.log("new archive created");
      // }

    } catch (error) {
      console.log(error);
    }
  }
}
