import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Archive } from "./Archive";
import { Topic } from "./Topic";
import { User } from "./User";

@Entity()
export class Article extends BaseEntity {

  /**
   * Find One Article by article id.
   * It has all relations and all properties
   * @param {string} uuid Article Id
   * @returns  {Promise<Article>} Promise for fetching one Article
   */
  public static findOneWithDetails(uuid: string) {
    const select: any = ["title", "body", "createdAt", "updatedAt", "topic", "user"];
    const relations: any = ["topic", "user"];

    return this.findOne(uuid, {
      loadRelationIds: true,
      relations,
      select,
    });
  }

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public title: string;

  @Column("text", { select: false })
  public body: string;

  @ManyToOne((type) => Topic, (topic) => topic.articles)
  public topic: Topic;

  @ManyToOne((type) => User, (user) => user.articles)
  public user: User;

  @OneToMany((type) => Archive, (archive) => archive.article)
  public archives: Archive[];

  @CreateDateColumn({ name: "createdAt", precision: 3 })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updatedAt", precision: 3 })
  public readonly updatedAt?: Date;
}
