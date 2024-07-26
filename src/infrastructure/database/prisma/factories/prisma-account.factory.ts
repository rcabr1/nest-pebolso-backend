import { Account as PrismaAccount } from '@prisma/client';
import { Account } from '@domain/entities/account.entity';

export function createAccountFromPrisma(account: PrismaAccount): Account {
  return new Account(
    account.id,
    account.userId,
    account.name,
    account.type,
    account.balance,
    account.createdAt,
    account.updatedAt,
  );
}
