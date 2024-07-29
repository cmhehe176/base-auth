import { RoleEntity } from 'src/database/entities/role.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class InitRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.getRepository(RoleEntity).insert([
      { name: 'Super Admin', alias: 'super_admin' },
      { name: 'Admin', alias: 'admin' },
      { name: 'User', alias: 'user' },
    ]);
  }
}
