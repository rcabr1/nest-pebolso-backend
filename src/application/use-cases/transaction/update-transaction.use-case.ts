import { Inject, Injectable } from '@nestjs/common';
import { TransactionRepositoryInterface } from '@domain/interfaces/repositories/transaction.repository.interface';
import { Transaction } from '@domain/entities/transaction.entity';
import { UpdateTransactionDto } from '@application/dtos/transaction/update-transaction.dto';
import { TransactionMapper } from '@application/mappers/transaction.mapper';

@Injectable()
export class UpdateTransactionUseCase {
  @Inject(TransactionRepositoryInterface)
  private readonly transactionRepository: TransactionRepositoryInterface;

  async execute(
    userId: number,
    id: number,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<Transaction> {
    const transaction = TransactionMapper.fromUpdateTransactionDto(
      userId,
      id,
      updateTransactionDto,
    );

    return this.transactionRepository.updateTransaction(transaction);
  }
}
