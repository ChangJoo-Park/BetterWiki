import {
  BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,
} from "typeorm";
import { Topic } from "./Topic";

@Entity()
export class Article extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public title: string;

  @Column("text")
  public body: string;

  @Column("uuid")
  public topicId: string;

  @ManyToOne((type) => Topic, (topic) => topic.articles)
  public topic: Topic;

  @CreateDateColumn({ name: "createdAt", precision: 3 })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updatedAt", precision: 3 })
  public readonly updatedAt?: Date;
}
