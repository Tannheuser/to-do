import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTables1694256048074 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE tasks (
        id int NOT NULL AUTO_INCREMENT,
        title varchar(255) NOT NULL,
     )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE tasks');
    }
}
