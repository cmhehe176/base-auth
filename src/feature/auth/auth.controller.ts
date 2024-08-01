import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  getRole() {
    return this.authService.getRole();
  }
  
  @Post()
  Login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }
}
