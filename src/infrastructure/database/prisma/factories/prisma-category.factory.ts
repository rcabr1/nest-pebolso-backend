import { Category as PrismaCategory } from '@prisma/client';
import { Category } from '@domain/entities/category.entity';

export function createCategoryFromPrisma(category: PrismaCategory): Category {
  return new Category(
    category.id,
    category.userId,
    category.name,
    category.createdAt,
    category.updatedAt,
  );
}
