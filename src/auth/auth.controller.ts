import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post(':roleId')
  login(@Param('roleId', ParseIntPipe) roleId: number, @Body() data: Login) {
    return this.authService.login(roleId, data);
  }
}
