import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from 'src/database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
