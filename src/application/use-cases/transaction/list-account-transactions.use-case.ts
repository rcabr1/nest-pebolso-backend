import { Inject, Injectable } from '@nestjs/common';
import { TransactionRepositoryInterface } from '@domain/interfaces/repositories/transaction.repository.interface';
import { Transaction } from '@domain/entities/transaction.entity';

@Injectable()
export class ListAccountTransactionsUseCase {
  @Inject(TransactionRepositoryInterface)
  private readonly transactionRepository: TransactionRepositoryInterface;

  async execute(userId: number, accountId: number): Promise<Transaction[]> {
    return this.transactionRepository.listAccountTransactions(
      userId,
      accountId,
    );
  }
}
