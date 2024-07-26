import { Transaction as PrismaTransaction } from '@prisma/client';
import { Transaction } from '@domain/entities/transaction.entity';

export function createTransactionFromPrisma(
  transaction: PrismaTransaction,
): Transaction {
  return new Transaction(
    transaction.id,
    transaction.userId,
    transaction.accountId,
    transaction.categoryId,
    transaction.amount,
    transaction.description,
    transaction.type,
    transaction.processedAt,
    transaction.createdAt,
    transaction.updatedAt,
  );
}
