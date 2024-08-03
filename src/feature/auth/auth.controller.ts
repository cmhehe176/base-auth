import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login, Register } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  Login(@Body() data: Login){
    return this.authService.login(data)
  }

  @Post('/register')
  Register(@Body() data: Register){
    return this.authService.register(data)
  }

}
