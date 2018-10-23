import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { UserRole } from "../enum/UserRole";
import { encryptPassword } from "../utils/password";
import { Article } from "./Article";

@Entity()
@Unique("UNIQUE_ACCOUNT", ["email", "username"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ unique: true })
  public email: string;

  @Column({ select: false })
  public passwordDigest: string;

  @Column({ unique: true })
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
  @BeforeUpdate()
  public encrypt() {
    this.passwordDigest = encryptPassword(this.passwordDigest);
  }

}
