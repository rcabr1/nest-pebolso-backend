import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CategoryRepositoryInterface } from '@domain/interfaces/repositories/category.repository.interface';
import { Category } from '@domain/entities/category.entity';
import { createCategoryFromPrisma } from '../factories/prisma-category.factory';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async findCategory(userId: number, id: number): Promise<Category | null> {
    const category = await this.prisma.category.findUnique({
      where: { userId, id },
    });

    return category ? createCategoryFromPrisma(category) : null;
  }

  async listCategories(userId: number): Promise<Category[]> {
    const users = await this.prisma.category.findMany({ where: { userId } });

    return users.map(createCategoryFromPrisma);
  }

  async createCategory(category: Category): Promise<Category> {
    const createdCategory = await this.prisma.category.create({
      data: {
        userId: category.userId,
        name: category.name,
      },
    });

    return createCategoryFromPrisma(createdCategory);
  }

  async updateCategory(category: Category): Promise<Category> {
    const updatedCategory = await this.prisma.category.update({
      where: { id: category.id },
      data: {
        userId: category.userId,
        name: category.name,
      },
    });

    return createCategoryFromPrisma(updatedCategory);
  }

  async removeCategory(userId: number, id: number): Promise<void> {
    await this.prisma.category.delete({ where: { userId, id } });
  }
}
