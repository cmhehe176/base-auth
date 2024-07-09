import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'create_at', type: 'timestamp' })
  createAt: Date;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: Date;

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt: Date;

  @Column({ name: 'create_id', type: 'int', nullable: true, select: false })
  createId: number | null;

  @Column({ type: 'int', name: 'deleted_id', nullable: true, select: false })
  deletedId: number | null;

  // @ManyToOne(() => AdminEntity, (admin) => admin.id)
  // @JoinColumn({ name: 'create_id' })
  // createdBy?: AdminEntity

  // @ManyToOne(()=>AdminEntity, (admin)=>admin.id)
}
