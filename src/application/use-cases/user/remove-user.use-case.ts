import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '@domain/interfaces/repositories/user.repository.interface';

@Injectable()
export class RemoveUserUseCase {
  @Inject(UserRepositoryInterface)
  private readonly userRepository: UserRepositoryInterface;

  async execute(id: number): Promise<void> {
    await this.userRepository.removeUser(id);
  }
}
