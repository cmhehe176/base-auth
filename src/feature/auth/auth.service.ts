import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleEntity: Repository<RoleEntity>,
  ) {}
  getRole = async() => {
		return await this.roleEntity.find()
	};
}
