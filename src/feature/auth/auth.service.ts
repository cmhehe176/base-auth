import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from 'src/database/entities';
import { UserEntity } from 'src/database/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  private userEntity: Repository<UserEntity>;

  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleEntity: Repository<RoleEntity>,
    private dataSource: DataSource,
  ) {
    this.userEntity = this.dataSource.getRepository(UserEntity);
  }

  getRole = async () => {
    return await this.roleEntity.find();
  };

  async login(data: LoginDto) {
    return await this.userEntity.save(data);
  }
}
