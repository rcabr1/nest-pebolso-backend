import { Inject, Injectable } from '@nestjs/common';
import { AccountRepositoryInterface } from '@domain/interfaces/repositories/account.repository.interface';
import { Account } from '@domain/entities/account.entity';

@Injectable()
export class FindAccountUseCase {
  @Inject(AccountRepositoryInterface)
  private readonly accountRepository: AccountRepositoryInterface;

  async execute(userId: number, id: number): Promise<Account | null> {
    return this.accountRepository.findAccount(userId, id);
  }
}
