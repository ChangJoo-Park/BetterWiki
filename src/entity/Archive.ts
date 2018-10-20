import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Archive extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public title: string;

  @Column("text", {
    select: false,
  })
  public body: string;

  @Column()
  public whatChanged: string;

  @CreateDateColumn({ name: "createdAt", precision: 3 })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updatedAt", precision: 3 })
  public readonly updatedAt?: Date;
}
