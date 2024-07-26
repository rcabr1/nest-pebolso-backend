import { Inject, Injectable } from '@nestjs/common';
import { TransactionRepositoryInterface } from '@domain/interfaces/repositories/transaction.repository.interface';
import { Transaction } from '@domain/entities/transaction.entity';

@Injectable()
export class FindTransactionUseCase {
  @Inject(TransactionRepositoryInterface)
  private readonly transactionRepository: TransactionRepositoryInterface;

  async execute(userId: number, id: number): Promise<Transaction | null> {
    return this.transactionRepository.findTransaction(userId, id);
  }
}
