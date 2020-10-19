import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createImages1603115461282 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true, //positive number
            isPrimary: true, //primary key
            isGenerated: true, //automatically generated
            generationStrategy: 'increment', //auto increment
          },
          { 
            name: 'path', 
            type: 'varchar' 
          },
          {
            name: 'orphanage_id',
            type: 'integer'
          }
        ],
        foreignKeys: [
          {
            name: 'imageOrphanage',
            columnNames: ['orphanage_id'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropTable('images');
  }
}
