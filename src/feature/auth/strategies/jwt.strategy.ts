import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
// import { AuthPayload } from '../interfaces/auth.interface';
import { DataSource } from 'typeorm';
import { UserEntity } from 'src/database/entities';

interface AuthPayload {
  id: number | string;
  name: string;
  address: string;
  telephone: number | string;
  email: string;
  role: {
    id: number;
    name: string;
    alias: string;
  };
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private readonly dataSource: DataSource,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET_KEY'),
    });
  }

  async validate(payload: AuthPayload) {
    const user = await this.dataSource.manager.findOne(UserEntity, {
      where: { email: payload.email },
      relations: { role: true },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      telephone: user.telephone,
      role: user.role,
    };
  }
}
