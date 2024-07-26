import { Inject, Injectable } from '@nestjs/common';
import { TransactionRepositoryInterface } from '@domain/interfaces/repositories/transaction.repository.interface';

@Injectable()
export class RemoveTransactionUseCase {
  @Inject(TransactionRepositoryInterface)
  private readonly transactionRepository: TransactionRepositoryInterface;

  async execute(userId: number, id: number): Promise<void> {
    await this.transactionRepository.removeTransaction(userId, id);
  }
}
