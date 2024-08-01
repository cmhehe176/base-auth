import {
  AfterInsert,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as argon from 'argon2';
@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'int', unique: true })
  telephone: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar' })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.password = await argon.hash(this.password);
    }
  }
}
