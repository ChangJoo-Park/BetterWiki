import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddRelationBetweenArticleAndArchive1540036106690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.addColumn("archive", new TableColumn({
            isNullable: true,
            name: "articleId",
            type: "VARCHAR",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropColumn("archive", "articleId");
    }

}
