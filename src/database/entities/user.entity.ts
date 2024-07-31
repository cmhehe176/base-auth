import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'int', unique: true })
  telePhone: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar', unique: true })
  password: string;

  @BeforeUpdate()
  @BeforeInsert()
  Password() {
    this.password = 'sadfasdjf';
  }
}
