import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddRelationBetweenUserAndArticle1540130269938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.addColumn("article",
            new TableColumn({
                isNullable: false,
                name: "userId",
                type: "varchar",
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropColumn("article", "userid");
    }

}
