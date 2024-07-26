import { Account } from '@domain/entities/account.entity';
import { CreateAccountDto } from '@application/dtos/account/create-account.dto';
import { AccountDto } from '@application/dtos/account/account.dto';
import { UpdateAccountDto } from '@application/dtos/account/update-account.dto';

export class AccountMapper {
  static fromCreateAccountDto(
    userId: number,
    createAccountDto: CreateAccountDto,
  ): Account {
    return new Account(
      0,
      userId,
      createAccountDto.name,
      createAccountDto.type,
      createAccountDto.balance,
    );
  }

  static fromUpdateAccountDto(
    userId: number,
    id: number,
    updateAccountDto: UpdateAccountDto,
  ): Account {
    return new Account(
      id,
      userId,
      updateAccountDto.name,
      updateAccountDto.type,
      updateAccountDto.balance,
    );
  }

  static toAccountDto(account: Account): AccountDto {
    return {
      id: account.id,
      userId: account.userId,
      name: account.name,
      type: account.type,
      balance: account.balance,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
    };
  }
}
