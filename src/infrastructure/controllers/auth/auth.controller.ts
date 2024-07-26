import {
  Controller,
  Post,
  Body,
  Inject,
  HttpStatus,
  HttpCode,
  Res,
  Get,
} from '@nestjs/common';
import { SignInUserUseCase } from '@application/use-cases/auth/sign-in-user.use-case';
import { SignInUserDto } from '@application/dtos/auth/sign-in-user.dto';
import { Response } from 'express';
import { LoggedUserUseCase } from '@application/use-cases/auth/logged-user.use-case';
import { AuthService } from '@infrastructure/services/auth/auth.service';

@Controller()
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Inject(SignInUserUseCase)
  private readonly signInUserUseCase: SignInUserUseCase;

  @Inject(LoggedUserUseCase)
  private readonly loggedUserUseCase: LoggedUserUseCase;

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() signInUserDto: SignInUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.signInUserUseCase.execute(signInUserDto, response);

    return { access_token: token };
  }

  @Get('user')
  async getUser() {
    return this.authService.getUserDto();
  }
}
