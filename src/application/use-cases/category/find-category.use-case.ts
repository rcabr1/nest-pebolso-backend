import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepositoryInterface } from '@domain/interfaces/repositories/category.repository.interface';
import { Category } from '@domain/entities/category.entity';

@Injectable()
export class FindCategoryUseCase {
  @Inject(CategoryRepositoryInterface)
  private readonly categoryRepository: CategoryRepositoryInterface;

  async execute(userId: number, id: number): Promise<Category | null> {
    return this.categoryRepository.findCategory(userId, id);
  }
}
