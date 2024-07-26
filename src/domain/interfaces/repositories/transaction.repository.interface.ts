import { Transaction } from '@domain/entities/transaction.entity';

export abstract class TransactionRepositoryInterface {
  abstract findTransaction(
    userId: number,
    id: number,
  ): Promise<Transaction | null>;
  abstract listTransactions(userId: number): Promise<Transaction[]>;
  abstract listAccountTransactions(
    userId: number,
    accountId: number,
  ): Promise<Transaction[]>;
  abstract listCategoryTransactions(
    userId: number,
    categoryId: number,
  ): Promise<Transaction[]>;
  abstract createTransaction(transaction: Transaction): Promise<Transaction>;
  abstract updateTransaction(transaction: Transaction): Promise<Transaction>;
  abstract removeTransaction(userId: number, id: number): Promise<void>;
}
