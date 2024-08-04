import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ERole } from 'src/common/constants/roles.constant';
import { ROLE_KEY } from 'src/common/decorators/role.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    //ở đây đơn giản là check ở jwt được verify trong đó có trường role , nếu match thì sẽ accept route đi qua
    //like this   @Roles(ERole.ADMIN, ERole.SUPER_ADMIN) , đây là các role được accept đi qua route , nếu muốn thì thêm một trường nữa trong enum và
    return requiredRoles.some((role) => user.role?.alias === role);
  }
}
