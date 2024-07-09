import { BaseEntity } from '../base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { RoleEntity } from './role.entity';

@Entity({ name: 'admins' })
export class AdminEntity extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @ManyToOne('RoleEntity')
  @JoinColumn({ name: 'role_id' })
  roleId?: RoleEntity;
}
