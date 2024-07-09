import { Injectable } from '@nestjs/common';
import { Login } from './auth.dto';
import { DataSource, Repository } from 'typeorm';
import { AdminEntity, UserEntity } from 'src/database/entities';

@Injectable()
export class AuthService {
  private userEntity: Repository<UserEntity>;
  private adminEntity: Repository<AdminEntity>;

  constructor(private dataSource: DataSource) {
    this.userEntity = this.dataSource.getRepository(UserEntity);
    this.adminEntity = this.dataSource.getRepository(AdminEntity);
  }

  login(role_id: number, data: Login) {}
  compare(role_id: number, data: Login) {}
}
