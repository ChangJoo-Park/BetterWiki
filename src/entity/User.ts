import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../enum/UserRole";

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

  @CreateDateColumn({ name: "createdAt", precision: 3 })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updatedAt", precision: 3 })
  public readonly updatedAt?: Date;
}
