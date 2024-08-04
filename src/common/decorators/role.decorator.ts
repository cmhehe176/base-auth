import { SetMetadata } from '@nestjs/common';
import { ERole } from 'src/common/constants/roles.constant';

export const ROLE_KEY = 'role';
export const Roles = (...roles: ERole[]) => SetMetadata(ROLE_KEY, roles);
export { ERole };
