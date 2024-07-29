import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1722240083574 implements MigrationInterface {
    name = 'Test1722240083574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`alias\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_7165de494fc9262f6c31965cca\` (\`alias\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_7165de494fc9262f6c31965cca\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
    }

}
