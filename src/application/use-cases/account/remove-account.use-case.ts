import { Inject, Injectable } from '@nestjs/common';
import { AccountRepositoryInterface } from '@domain/interfaces/repositories/account.repository.interface';

@Injectable()
export class RemoveAccountUseCase {
  @Inject(AccountRepositoryInterface)
  private readonly accountRepository: AccountRepositoryInterface;

  async execute(userId: number, id: number): Promise<void> {
    await this.accountRepository.removeAccount(userId, id);
  }
}
