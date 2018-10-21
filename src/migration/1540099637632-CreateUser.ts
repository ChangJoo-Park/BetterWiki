import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateUser1540099637632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.createTable(new Table({
            columns: [
                new TableColumn({
                    generationStrategy: "uuid",
                    name: "id",
                    type: "VARCHAR",
                }),

                new TableColumn({
                    isNullable: false,
                    name: "email",
                    type: "VARCHAR",
                }),

                new TableColumn({
                    isNullable: false,
                    name: "passwordDigest",
                    type: "TEXT",
                }),

                new TableColumn({
                    name: "createdAt",
                    type: "DATETIME",
                }),
                new TableColumn({
                    name: "updatedAt",
                    type: "DATETIME",
                }),
            ],
            name: "user",
        }), true, true, true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropTable("user");
    }

}
