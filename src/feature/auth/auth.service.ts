import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from 'src/database/entities';
import { UserEntity } from 'src/database/entities/user.entity';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { LoginDto } from './auth.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    let user: UserEntity;

    const whereCondition: FindOptionsWhere<UserEntity> = {};

    if (data.telephone) whereCondition.telephone = data.telephone;
    if (data.email) whereCondition.email = data.email;

    user = await this.userEntity.findOne({
      where: whereCondition,
    });

    if (!user) throw new BadRequestException(' No match User');

    const checkPassword = await argon.verify(user.password, data.password);

    if (!checkPassword) throw new BadRequestException('No match Password');

    const payload = {
      name: user.name,
      email: user.email,
      telephone: user.telephone,
      roleId: user.roleId,
      address: user.address,
    };

    return { accessToken: await this.jwtService.sign(payload) };
  }
}
