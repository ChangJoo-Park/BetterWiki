import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../enum/UserRole";
import { encryptPassword } from "../utils/password";
import { Article } from "./Article";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public email: string;

  @Column({ select: false })
  public passwordDigest: string;

  @Column()
  public username: string;

  @Column({ select: false, default: "" })
  public about: string;

  @Column({ select: false, default: "" })
  public avatar: string;

  @Column({ enum: UserRole, default: UserRole.NotAMember })
  public role: UserRole;

  @OneToMany((type) => Article, (article) => article.user)
  public articles: Article[];

  @CreateDateColumn({ name: "createdAt", precision: 3 })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updatedAt", precision: 3 })
  public readonly updatedAt?: Date;

  @BeforeInsert()
  public encrypt() {
    this.passwordDigest = encryptPassword(this.passwordDigest);
  }
}
