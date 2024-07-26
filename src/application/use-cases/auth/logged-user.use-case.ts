import { AuthMapper } from '@application/mappers/auth.mapper';
import { ACCESS_TOKEN_KEY } from '@domain/constants';
import { JwtServiceInterface } from '@domain/interfaces/services/jwt.service.interface';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LoggedUserUseCase {
  @Inject(JwtServiceInterface)
  private readonly jwtService: JwtServiceInterface;

  async execute(request: Request) {
    try {
      const token = request.cookies[ACCESS_TOKEN_KEY];
      const loggedUserDto = await this.jwtService.verifyToken(token);

      if (!loggedUserDto) {
        throw new UnauthorizedException();
      }

      return AuthMapper.fromLoggedUserDtoToUserDto(loggedUserDto);
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
