import { Inject, Injectable } from '@nestjs/common';
import { AccountRepositoryInterface } from '@domain/interfaces/repositories/account.repository.interface';
import { Account } from '@domain/entities/account.entity';

@Injectable()
export class ListAccountsUseCase {
  @Inject(AccountRepositoryInterface)
  private readonly accountRepository: AccountRepositoryInterface;

  async execute(userId: number): Promise<Account[]> {
    return this.accountRepository.listAccounts(userId);
  }
}
