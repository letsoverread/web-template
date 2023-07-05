import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestDatabaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;
}
