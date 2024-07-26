import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepositoryInterface } from '@domain/interfaces/repositories/category.repository.interface';
import { Category } from '@domain/entities/category.entity';
import { CreateCategoryDto } from '@application/dtos/category/create-category.dto';
import { CategoryMapper } from '@application/mappers/category.mapper';

@Injectable()
export class CreateCategoryUseCase {
  @Inject(CategoryRepositoryInterface)
  private readonly categoryRepository: CategoryRepositoryInterface;

  async execute(
    userId: number,
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const category = CategoryMapper.fromCreateCategoryDto(
      userId,
      createCategoryDto,
    );

    return this.categoryRepository.createCategory(category);
  }
}
