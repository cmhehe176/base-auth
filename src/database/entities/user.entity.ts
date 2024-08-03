import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', unique: true })
  telephone: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'int' })
  RoleId: number;
}
