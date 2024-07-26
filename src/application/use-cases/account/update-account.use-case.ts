import { Inject, Injectable } from '@nestjs/common';
import { AccountRepositoryInterface } from '@domain/interfaces/repositories/account.repository.interface';
import { Account } from '@domain/entities/account.entity';
import { UpdateAccountDto } from '@application/dtos/account/update-account.dto';
import { AccountMapper } from '@application/mappers/account.mapper';

@Injectable()
export class UpdateAccountUseCase {
  @Inject(AccountRepositoryInterface)
  private readonly accountRepository: AccountRepositoryInterface;

  async execute(
    userId: number,
    id: number,
    updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    const account = AccountMapper.fromUpdateAccountDto(
      userId,
      id,
      updateAccountDto,
    );

    return this.accountRepository.updateAccount(account);
  }
}
