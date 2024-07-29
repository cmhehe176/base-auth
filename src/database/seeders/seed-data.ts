import { DataSource } from 'typeorm';
import { RoleEntity } from 'src/database/entities/role.entity';
import { ROLE_LIST } from 'src/database/seeders/data';

export async function seedData(dataSource: DataSource): Promise<void> {
  const roleRepository = dataSource.getRepository(RoleEntity);

  const rolesList = ROLE_LIST;

  for (const item of rolesList) {
    let roles = {
      name: item.name,
      alias: item.alias,
    };

    await roleRepository.insert(roles);
  }
}
