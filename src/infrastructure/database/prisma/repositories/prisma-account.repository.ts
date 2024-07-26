import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AccountRepositoryInterface } from '@domain/interfaces/repositories/account.repository.interface';
import { Account } from '@domain/entities/account.entity';
import { createAccountFromPrisma } from '../factories/prisma-account.factory';

@Injectable()
export class PrismaAccountRepository implements AccountRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async findAccount(userId: number, id: number): Promise<Account | null> {
    const account = await this.prisma.account.findUnique({
      where: { userId, id },
    });

    return account ? createAccountFromPrisma(account) : null;
  }

  async listAccounts(userId: number): Promise<Account[]> {
    const users = await this.prisma.account.findMany({ where: { userId } });

    return users.map(createAccountFromPrisma);
  }

  async createAccount(account: Account): Promise<Account> {
    const createdAccount = await this.prisma.account.create({
      data: {
        userId: account.userId,
        name: account.name,
        type: account.type,
        balance: account.balance,
      },
    });

    return createAccountFromPrisma(createdAccount);
  }

  async updateAccount(account: Account): Promise<Account> {
    const updatedAccount = await this.prisma.account.update({
      where: { id: account.id },
      data: {
        userId: account.userId,
        name: account.name,
        type: account.type,
        balance: account.balance,
      },
    });

    return createAccountFromPrisma(updatedAccount);
  }

  async removeAccount(userId: number, id: number): Promise<void> {
    await this.prisma.account.delete({ where: { userId, id } });
  }
}
