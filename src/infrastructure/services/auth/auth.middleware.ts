import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoggedUserUseCase } from '@application/use-cases/auth/logged-user.use-case';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Inject(LoggedUserUseCase)
  private readonly loggedUserUseCase: LoggedUserUseCase;

  async use(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    const userDto = await this.loggedUserUseCase.execute(request);
    this.authService.setUserDto(userDto);

    next();
  }
}
