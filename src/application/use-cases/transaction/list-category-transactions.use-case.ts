import { Inject, Injectable } from '@nestjs/common';
import { TransactionRepositoryInterface } from '@domain/interfaces/repositories/transaction.repository.interface';
import { Transaction } from '@domain/entities/transaction.entity';

@Injectable()
export class ListCategoryTransactionsUseCase {
  @Inject(TransactionRepositoryInterface)
  private readonly transactionRepository: TransactionRepositoryInterface;

  async execute(userId: number, categoryId: number): Promise<Transaction[]> {
    return this.transactionRepository.listCategoryTransactions(
      userId,
      categoryId,
    );
  }
}
