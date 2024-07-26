import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepositoryInterface } from '@domain/interfaces/repositories/category.repository.interface';
import { Category } from '@domain/entities/category.entity';
import { UpdateCategoryDto } from '@application/dtos/category/update-category.dto';
import { CategoryMapper } from '@application/mappers/category.mapper';

@Injectable()
export class UpdateCategoryUseCase {
  @Inject(CategoryRepositoryInterface)
  private readonly categoryRepository: CategoryRepositoryInterface;

  async execute(
    userId: number,
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = CategoryMapper.fromUpdateCategoryDto(
      userId,
      id,
      updateCategoryDto,
    );

    return this.categoryRepository.updateCategory(category);
  }
}
