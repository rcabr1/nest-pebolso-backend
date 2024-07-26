import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '@domain/interfaces/repositories/user.repository.interface';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class ListUsersUseCase {
  @Inject(UserRepositoryInterface)
  private readonly userRepository: UserRepositoryInterface;

  async execute(): Promise<User[]> {
    return this.userRepository.listUsers();
  }
}
