import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '@domain/interfaces/repositories/user.repository.interface';
import { User } from 'src/domain/entities/user.entity';
import { CreateUserDto } from 'src/application/dtos/user/create-user.dto';
import { UserMapper } from 'src/application/mappers/user.mapper';

@Injectable()
export class CreateUserUseCase {
  @Inject(UserRepositoryInterface)
  private readonly userRepository: UserRepositoryInterface;

  async execute(createUserDto: CreateUserDto): Promise<User> {
    const user = UserMapper.fromCreateUserDto(createUserDto);

    return this.userRepository.createUser(user);
  }
}
