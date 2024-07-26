import { Category } from '@domain/entities/category.entity';

export abstract class CategoryRepositoryInterface {
  abstract findCategory(userId: number, id: number): Promise<Category | null>;
  abstract listCategories(userId: number): Promise<Category[]>;
  abstract createCategory(category: Category): Promise<Category>;
  abstract updateCategory(category: Category): Promise<Category>;
  abstract removeCategory(userId: number, id: number): Promise<void>;
}
