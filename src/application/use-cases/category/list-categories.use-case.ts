import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepositoryInterface } from '@domain/interfaces/repositories/category.repository.interface';
import { Category } from '@domain/entities/category.entity';

@Injectable()
export class ListCategoriesUseCase {
  @Inject(CategoryRepositoryInterface)
  private readonly categoryRepository: CategoryRepositoryInterface;

  async execute(userId: number): Promise<Category[]> {
    return this.categoryRepository.listCategories(userId);
  }
}
