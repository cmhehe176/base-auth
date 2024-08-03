import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login, Register } from './auth.dto';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  Login(@Request() data) {
    return this.authService.login(data.user);
  }

  @Post('/register')
  Register(@Body() data: Register) {
    return this.authService.register(data);
  }
}
