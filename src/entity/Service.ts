import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Service extends BaseEntity {

  /**
   * Find Service Object.
   * @returns  {Promise<Service>} Promise of Service Entity
   */
  public static findOneWithDetails() {
    return Service.findOne({
      select: ["id", "name", "description", "logo", "createdAt", "updatedAt"],
    });
  }

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ default: "BetterWiki" })
  public name: string;

  @Column({ select: false, default: "" })
  public description: string;

  @Column({ select: false, default: "" })
  public logo: string;

  @CreateDateColumn({ name: "createdAt", precision: 3 })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updatedAt", precision: 3 })
  public readonly updatedAt?: Date;
}
