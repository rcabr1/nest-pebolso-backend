import { Category } from '@domain/entities/category.entity';
import { CreateCategoryDto } from '@application/dtos/category/create-category.dto';
import { CategoryDto } from '@application/dtos/category/category.dto';
import { UpdateCategoryDto } from '@application/dtos/category/update-category.dto';

export class CategoryMapper {
  static fromCreateCategoryDto(
    userId: number,
    createCategoryDto: CreateCategoryDto,
  ): Category {
    return new Category(0, userId, createCategoryDto.name);
  }

  static fromUpdateCategoryDto(
    userId: number,
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Category {
    return new Category(id, userId, updateCategoryDto.name);
  }

  static toCategoryDto(category: Category): CategoryDto {
    return {
      id: category.id,
      userId: category.userId,
      name: category.name,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }
}
