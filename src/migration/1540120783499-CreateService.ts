import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateService1540120783499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.createTable(new Table({
            columns: [
                new TableColumn({
                    generationStrategy: "uuid",
                    name: "id",
                    type: "VARCHAR",
                }),

                new TableColumn({
                    default: "'BetterWiki'",
                    isNullable: false,
                    name: "name",
                    type: "VARCHAR",
                }),

                new TableColumn({
                    default: "''",
                    name: "description",
                    type: "VARCHAR",
                }),

                new TableColumn({
                    default: "''",
                    name: "logo",
                    type: "VARCHAR",
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
            name: "service",
        }), true, true, true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropTable("service");
    }

}
