import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '@domain/interfaces/repositories/user.repository.interface';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class FindUserUseCase {
  @Inject(UserRepositoryInterface)
  private readonly userRepository: UserRepositoryInterface;

  async execute(id: number): Promise<User | null> {
    return this.userRepository.findUser(id);
  }
}
