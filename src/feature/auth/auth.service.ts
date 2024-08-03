import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from 'src/database/entities';
import { UserEntity } from 'src/database/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { LoginDto } from './auth.dto';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {}

  async login(data: LoginDto) {
    let user: UserEntity;
    let checkUser: boolean;

    if (data.telephone) {
      checkUser = await this.userEntity.exists({
        where: { telephone: data.telephone },
      });
    }

    if (data.email) {
      checkUser = await this.userEntity.exists({
        where: { email: data.email },
      });
    }

    if (!checkUser) throw new BadRequestException(' No match User');
    
  }
}
