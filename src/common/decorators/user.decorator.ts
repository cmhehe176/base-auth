import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

export interface IUser {
  id: number;
  name: string;
  address: string;
  telephone: string;
  email: string;
  role: {
    id: number;
    name: string;
    alias: string;
  };
}
