import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntity1722273750771 implements MigrationInterface {
    name = 'UserEntity1722273750771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`telePhone\` int NOT NULL, \`address\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_b6d5d194061d1e62a001cb288a\` (\`telePhone\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b6d5d194061d1e62a001cb288a\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
