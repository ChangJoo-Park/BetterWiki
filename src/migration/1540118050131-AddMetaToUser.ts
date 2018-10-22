import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";
import { UserRole } from "../enum/UserRole";

export class AddMetaToUser1540118050131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.addColumns("user", [
            new TableColumn({
                isUnique: true,
                name: "username",
                type: "VARCHAR",
            }),
            new TableColumn({
                name: "about",
                type: "VARCHAR",
            }),
            new TableColumn({
                default: "''",
                name: "avatar",
                type: "VARCHAR",
            }),
            new TableColumn({
                default: "'n/a'",
                name: "role",
                type: "VARCHAR",
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropColumns("user", [
            new TableColumn({
                name: "username",
                type: "VARCHAR",
            }),
            new TableColumn({
                name: "about",
                type: "VARCHAR",
            }),
            new TableColumn({
                default: "''",
                name: "avatar",
                type: "VARCHAR",
            }),
            new TableColumn({
                default: "n/a",
                name: "role",
                type: "VARCHAR",
            }),
        ]);
    }

}
