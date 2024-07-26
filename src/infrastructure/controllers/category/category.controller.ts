import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { FindCategoryUseCase } from '@application/use-cases/category/find-category.use-case';
import { ListCategoriesUseCase } from '@application/use-cases/category/list-categories.use-case';
import { CreateCategoryUseCase } from '@application/use-cases/category/create-category.use-case';
import { UpdateCategoryUseCase } from '@application/use-cases/category/update-category.use-case';
import { RemoveCategoryUseCase } from '@application/use-cases/category/remove-category.use-case';
import { CreateCategoryDto } from '@application/dtos/category/create-category.dto';
import { UpdateCategoryDto } from '@application/dtos/category/update-category.dto';
import { AuthService } from '@infrastructure/services/auth/auth.service';

@Controller('categories')
export class CategorysController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Inject(FindCategoryUseCase)
  private readonly findCategoryUseCase: FindCategoryUseCase;

  @Inject(ListCategoriesUseCase)
  private readonly listCategorysUseCase: ListCategoriesUseCase;

  @Inject(CreateCategoryUseCase)
  private readonly createCategoryUseCase: CreateCategoryUseCase;

  @Inject(UpdateCategoryUseCase)
  private readonly updateCategoryUseCase: UpdateCategoryUseCase;

  @Inject(RemoveCategoryUseCase)
  private readonly removeCategoryUseCase: RemoveCategoryUseCase;

  @Get(':id')
  async findCategory(@Param('id', ParseIntPipe) id: number) {
    const userDto = this.authService.getUserDto();
    return this.findCategoryUseCase.execute(userDto.id, id);
  }

  @Get()
  async listCategorys() {
    const userDto = this.authService.getUserDto();
    return this.listCategorysUseCase.execute(userDto.id);
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    const userDto = this.authService.getUserDto();
    return this.createCategoryUseCase.execute(userDto.id, createCategoryDto);
  }

  @Put(':id')
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const userDto = this.authService.getUserDto();
    return this.updateCategoryUseCase.execute(
      userDto.id,
      id,
      updateCategoryDto,
    );
  }

  @Delete(':id')
  async removeCategory(@Param('id', ParseIntPipe) id: number) {
    const userDto = this.authService.getUserDto();
    return this.removeCategoryUseCase.execute(userDto.id, id);
  }
}
