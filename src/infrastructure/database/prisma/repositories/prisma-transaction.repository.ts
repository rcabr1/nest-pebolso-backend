import { TransactionRepositoryInterface } from '@domain/interfaces/repositories/transaction.repository.interface';
import { PrismaService } from '../prisma.service';
import { Transaction } from '@domain/entities/transaction.entity';
import { Inject, Injectable } from '@nestjs/common';
import { createTransactionFromPrisma } from '../factories/prisma-transaction.factory';

@Injectable()
export class PrismaTransactionRepository
  implements TransactionRepositoryInterface
{
  @Inject(PrismaService)
  private readonly prisma: PrismaService;

  async findTransaction(id: number): Promise<Transaction | null> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
    });

    return transaction ? createTransactionFromPrisma(transaction) : null;
  }

  async listTransactions(userId: number): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany({
      where: { userId },
    });

    return transactions.map(createTransactionFromPrisma);
  }

  async listAccountTransactions(
    userId: number,
    accountId: number,
  ): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany({
      where: { userId, accountId },
    });

    return transactions.map(createTransactionFromPrisma);
  }

  async listCategoryTransactions(
    userId: number,
    categoryId: number,
  ): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany({
      where: { userId, categoryId },
    });

    return transactions.map(createTransactionFromPrisma);
  }

  async createTransaction(transaction: Transaction): Promise<Transaction> {
    const createdTransaction = await this.prisma.transaction.create({
      data: {
        userId: transaction.userId,
        accountId: transaction.accountId,
        categoryId: transaction.categoryId,
        amount: transaction.amount,
        description: transaction.description,
        type: transaction.type,
        processedAt: transaction.processedAt,
      },
    });

    return createTransactionFromPrisma(createdTransaction);
  }

  async updateTransaction(transaction: Transaction): Promise<Transaction> {
    const createdTransaction = await this.prisma.transaction.update({
      where: { id: transaction.id },
      data: {
        userId: transaction.userId,
        accountId: transaction.accountId,
        categoryId: transaction.categoryId,
        amount: transaction.amount,
        description: transaction.description,
        type: transaction.type,
        processedAt: transaction.processedAt,
      },
    });

    return createTransactionFromPrisma(createdTransaction);
  }

  async removeTransaction(id: number): Promise<void> {
    await this.prisma.transaction.delete({ where: { id } });
  }
}
