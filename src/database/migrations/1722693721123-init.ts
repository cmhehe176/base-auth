import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1722693721123 implements MigrationInterface {
    name = 'Init1722693721123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`telephone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`RoleId\` int NOT NULL, UNIQUE INDEX \`IDX_49568c2027c8bc1f33f7878e18\` (\`telephone\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`alias\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_7165de494fc9262f6c31965cca\` (\`alias\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_7165de494fc9262f6c31965cca\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_49568c2027c8bc1f33f7878e18\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
