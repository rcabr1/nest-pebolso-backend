import { User as PrismaUser } from '@prisma/client';
import { User } from '@domain/entities/user.entity';

export function createUserFromPrisma(user: PrismaUser): User {
  return new User(
    user.id,
    user.username,
    user.email,
    user.password,
    user.createdAt,
    user.updatedAt,
  );
}
