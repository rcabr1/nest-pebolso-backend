import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaModule } from '@infrastructure/database/prisma/prisma.module';
import { CategorysController } from './category.controller';
import { CategoryRepositoryInterface } from '@domain/interfaces/repositories/category.repository.interface';
import { PrismaCategoryRepository } from '@infrastructure/database/prisma/repositories/prisma-category.repository';
import { FindCategoryUseCase } from '@application/use-cases/category/find-category.use-case';
import { ListCategoriesUseCase } from '@application/use-cases/category/list-categories.use-case';
import { CreateCategoryUseCase } from '@application/use-cases/category/create-category.use-case';
import { UpdateCategoryUseCase } from '@application/use-cases/category/update-category.use-case';
import { AuthMiddleware } from '@infrastructure/services/auth/auth.middleware';
import { AuthModule } from '@infrastructure/controllers/auth/auth.module';
import { RemoveCategoryUseCase } from '@application/use-cases/category/remove-category.use-case';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [CategorysController],
  providers: [
    {
      provide: CategoryRepositoryInterface,
      useClass: PrismaCategoryRepository,
    },
    FindCategoryUseCase,
    ListCategoriesUseCase,
    CreateCategoryUseCase,
    UpdateCategoryUseCase,
    RemoveCategoryUseCase,
  ],
})
export class CategoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(CategorysController);
  }
}
