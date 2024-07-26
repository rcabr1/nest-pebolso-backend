import { SignInUserDto } from '@application/dtos/auth/sign-in-user.dto';
import { AuthMapper } from '@application/mappers/auth.mapper';
import { ACCESS_TOKEN_KEY } from '@domain/constants';
import { UserRepositoryInterface } from '@domain/interfaces/repositories/user.repository.interface';
import { JwtServiceInterface } from '@domain/interfaces/services/jwt.service.interface';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class SignInUserUseCase {
  @Inject(UserRepositoryInterface)
  private readonly userRepository: UserRepositoryInterface;

  @Inject(JwtServiceInterface)
  private readonly jwtService: JwtServiceInterface;

  async execute(
    signInUserDto: SignInUserDto,
    response: Response,
  ): Promise<string> {
    const user = await this.userRepository.findUserByLogin(
      signInUserDto.usernameOrEmail,
    );

    if (user?.password !== signInUserDto.password) {
      throw new UnauthorizedException();
    }

    const loggedUserDto = AuthMapper.fromUserToLoggedUserDto(user);
    const token = await this.jwtService.createToken(loggedUserDto);

    response.cookie(ACCESS_TOKEN_KEY, token);

    return token;
  }
}
