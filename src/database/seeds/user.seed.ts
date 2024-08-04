import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { UserEntity } from '../entities';
import * as argon from 'argon2';

export default class InitUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const hashPassword = await argon.hash(process.env.SEED_PASSWORD);
    const randomPhone = () => {
      const phone =
        Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
      return 0 + phone.toString();
    };

    await connection.getRepository(UserEntity).insert([
      {
        name: 'Super Admin',
        telephone: randomPhone(),
        email: 'super_admin@hehe.com',
        address: 'Ha Noi',
        password: hashPassword,
        roleId: 1,
      },
      {
        name: 'Admin',
        telephone: randomPhone(),
        email: 'admin@hehe.com',
        address: 'Sai Gon',
        password: hashPassword,
        roleId: 2,
      },
      {
        name: 'User',
        telephone: randomPhone(),
        email: 'user@hehe.com',
        address: 'Ha Phong',
        password: hashPassword,
        roleId: 3,
      },
    ]);
  }
}
