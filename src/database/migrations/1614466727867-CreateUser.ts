import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1614466727867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                }, {
                    name: 'sub',
                    type: 'integer'
                }, {
                    name: 'name',
                    type: 'varchar'
                }, {
                    name: 'image',
                    type: 'varchar'
                }, {
                    name: 'level',
                    type: 'integer'
                }, {
                    name: 'completedChallanges',
                    type: 'integer'
                }, {
                    name: 'experience',
                    type: 'integer'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
