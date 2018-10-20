import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateArchive1540035676153 implements MigrationInterface {

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
                    name: "title",
                    type: "VARCHAR",
                }),

                new TableColumn({
                    isNullable: false,
                    name: "body",
                    type: "TEXT",
                }),

                new TableColumn({
                    isNullable: true,
                    name: "whatChanged",
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
            name: "archive",
        }), true, true, true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropTable("archive");
    }

}
