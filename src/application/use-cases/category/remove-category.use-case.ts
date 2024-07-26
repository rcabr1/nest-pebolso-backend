import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepositoryInterface } from '@domain/interfaces/repositories/category.repository.interface';

@Injectable()
export class RemoveCategoryUseCase {
  @Inject(CategoryRepositoryInterface)
  private readonly categoryRepository: CategoryRepositoryInterface;

  async execute(userId: number, id: number): Promise<void> {
    await this.categoryRepository.removeCategory(userId, id);
  }
}
