import { UserDto } from '@application/dtos/user/user.dto';
import { LoggedUserDto } from '@application/dtos/auth/logged-user.dto';
import { User } from '@domain/entities/user.entity';
import { UserMapper } from './user.mapper';

export class AuthMapper {
  static fromLoggedUserDtoToUserDto(loggedUserDto: LoggedUserDto): UserDto {
    return {
      id: loggedUserDto.sub,
      username: loggedUserDto.username,
      email: loggedUserDto.email,
    };
  }

  static fromUserDtoToLoggedUserDto(userDto: UserDto): LoggedUserDto {
    return {
      sub: userDto.id,
      username: userDto.username,
      email: userDto.email,
    };
  }

  static fromUserToLoggedUserDto(user: User): LoggedUserDto {
    const userDto = UserMapper.toUserDto(user);
    return this.fromUserDtoToLoggedUserDto(userDto);
  }
}
