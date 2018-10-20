import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddRelationBetweenArticleAndTopic1540018973441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.addColumn("article", new TableColumn({
            isNullable: true,
            name: "topic_id",
            type: "VARCHAR",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropColumn("article", "topic_id");
    }

}
