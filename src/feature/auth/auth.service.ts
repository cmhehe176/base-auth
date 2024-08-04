import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entities';
import { Repository } from 'typeorm';
import { Register } from './auth.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async login(user: UserEntity) {
    const payload = {
      name: user.name,
      email: user.email,
      telephone: user.telephone,
      roleId: user.roleId,
      address: user.address,
    };

    return { accessToken: await this.jwtService.sign(payload) };
  }

  async register(data: Register) {
    const checkUser = await this.userEntity.exists({
      where: { email: data.email },
    });

    if (checkUser) throw new BadRequestException('User already exist');

    data.password = await argon.hash(data.password);

    await this.userEntity.insert(data);

    return { message: 'success' };
  }

  async verify(username: string, password: string) {
    const user = await this.userEntity
      .createQueryBuilder('user')
      .where('user.email = :username', { username })
      .orWhere('user.telephone = :username', { username })
      .getOne();

    if (!user) throw new BadRequestException(' No match User');

    const checkPassword = await argon.verify(user.password, password);

    if (!checkPassword) throw new BadRequestException('No match Password');

    return user;
  }
}
