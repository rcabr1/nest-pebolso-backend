import { Account } from '@domain/entities/account.entity';

export abstract class AccountRepositoryInterface {
  abstract findAccount(userId: number, id: number): Promise<Account | null>;
  abstract listAccounts(userId: number): Promise<Account[]>;
  abstract createAccount(account: Account): Promise<Account>;
  abstract updateAccount(account: Account): Promise<Account>;
  abstract removeAccount(userId: number, id: number): Promise<void>;
}
