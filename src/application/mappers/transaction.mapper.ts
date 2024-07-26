import { Transaction } from '@domain/entities/transaction.entity';
import { CreateTransactionDto } from '@application/dtos/transaction/create-transaction.dto';
import { UpdateTransactionDto } from '@application/dtos/transaction/update-transaction.dto';
import { TransactionDto } from '@application/dtos/transaction/transaction.dto';

export class TransactionMapper {
  static fromCreateTransactionDto(
    userId: number,
    createTransactionDto: CreateTransactionDto,
  ): Transaction {
    return new Transaction(
      0,
      userId,
      createTransactionDto.accountId,
      createTransactionDto.categoryId,
      createTransactionDto.amount,
      createTransactionDto.description,
      createTransactionDto.type,
      createTransactionDto.processedAt,
    );
  }

  static fromUpdateTransactionDto(
    userId: number,
    id: number,
    updateTransactionDto: UpdateTransactionDto,
  ): Transaction {
    return new Transaction(
      id,
      userId,
      updateTransactionDto.accountId,
      updateTransactionDto.categoryId,
      updateTransactionDto.amount,
      updateTransactionDto.description,
      updateTransactionDto.type,
      updateTransactionDto.processedAt,
    );
  }

  static toTransactionDto(transaction: Transaction): TransactionDto {
    return {
      id: transaction.id,
      userId: transaction.userId,
      accountId: transaction.accountId,
      categoryId: transaction.categoryId,
      amount: transaction.amount,
      description: transaction.description,
      type: transaction.type,
      processedAt: transaction.processedAt,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
    };
  }
}
