import {
  BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,
} from "typeorm";
import { Topic } from "./Topic";

@Entity()
export class Article extends BaseEntity {

  public static findOneWithDetails(id) {
    return this.findOne(id, {
      loadRelationIds: true,
      relations: ["topic"],
      select: ["title", "body", "createdAt", "updatedAt", "topic"],
    });
  }

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public title: string;

  @Column("text", {
    select: false,
  })
  public body: string;

  @ManyToOne((type) => Topic, (topic) => topic.articles)
  public topic: Topic;

  @CreateDateColumn({ name: "createdAt", precision: 3 })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updatedAt", precision: 3 })
  public readonly updatedAt?: Date;
}
