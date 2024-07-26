import { Inject, Injectable } from '@nestjs/common';
import { TransactionRepositoryInterface } from '@domain/interfaces/repositories/transaction.repository.interface';
import { Transaction } from '@domain/entities/transaction.entity';
import { CreateTransactionDto } from '@application/dtos/transaction/create-transaction.dto';
import { TransactionMapper } from '@application/mappers/transaction.mapper';

@Injectable()
export class CreateTransactionUseCase {
  @Inject(TransactionRepositoryInterface)
  private readonly transactionRepository: TransactionRepositoryInterface;

  async execute(
    userId: number,
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const transaction = TransactionMapper.fromCreateTransactionDto(
      userId,
      createTransactionDto,
    );

    return this.transactionRepository.createTransaction(transaction);
  }
}
