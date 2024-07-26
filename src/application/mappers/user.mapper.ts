import { User } from '@domain/entities/user.entity';
import { CreateUserDto } from '@application/dtos/user/create-user.dto';
import { UpdateUserDto } from '@application/dtos/user/update-user.dto';
import { UserDto } from '@application/dtos/user/user.dto';

export class UserMapper {
  static fromCreateUserDto(createUserDto: CreateUserDto): User {
    return new User(
      0,
      createUserDto.username,
      createUserDto.email,
      createUserDto.password,
    );
  }

  static fromUpdateUserDto(id: number, updateUserDto: UpdateUserDto): User {
    return new User(
      id,
      updateUserDto.username,
      updateUserDto.email,
      updateUserDto.password,
    );
  }

  static toUserDto(user: User): UserDto {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
