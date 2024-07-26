import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '@domain/interfaces/repositories/user.repository.interface';
import { User } from 'src/domain/entities/user.entity';
import { UpdateUserDto } from 'src/application/dtos/user/update-user.dto';
import { UserMapper } from 'src/application/mappers/user.mapper';

@Injectable()
export class UpdateUserUseCase {
  @Inject(UserRepositoryInterface)
  private readonly userRepository: UserRepositoryInterface;

  async execute(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = UserMapper.fromUpdateUserDto(id, updateUserDto);

    return this.userRepository.updateUser(user);
  }
}
