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
import { ERole, Roles } from 'src/common/decorators/role.decorator';
import { Public } from 'src/common/decorators/public.decorator';
import { IUser, User } from 'src/common/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  Login(@Request() data) {
    return this.authService.login(data.user);
  }

  @Public()
  @Post('/register')
  Register(@Body() data: Register) {
    return this.authService.register(data);
  }

  @Roles(ERole.ADMIN, ERole.SUPER_ADMIN)
  @Get()
  hello(@User() user: IUser) {
    return 'hello';
  }
}
