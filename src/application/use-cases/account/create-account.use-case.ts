import { Inject, Injectable } from '@nestjs/common';
import { AccountRepositoryInterface } from '@domain/interfaces/repositories/account.repository.interface';
import { Account } from '@domain/entities/account.entity';
import { CreateAccountDto } from '@application/dtos/account/create-account.dto';
import { AccountMapper } from '@application/mappers/account.mapper';

@Injectable()
export class CreateAccountUseCase {
  @Inject(AccountRepositoryInterface)
  private readonly accountRepository: AccountRepositoryInterface;

  async execute(
    userId: number,
    createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    const account = AccountMapper.fromCreateAccountDto(
      userId,
      createAccountDto,
    );

    return this.accountRepository.createAccount(account);
  }
}
