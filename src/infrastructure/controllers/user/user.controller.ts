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
import { FindUserUseCase } from '@application/use-cases/user/find-user.use-case';
import { ListUsersUseCase } from '@application/use-cases/user/list-users.use-case';
import { CreateUserUseCase } from '@application/use-cases/user/create-user.use-case';
import { UpdateUserUseCase } from '@application/use-cases/user/update-user.use-case';
import { RemoveUserUseCase } from '@application/use-cases/user/remove-user.use-case';
import { CreateUserDto } from '@application/dtos/user/create-user.dto';
import { UpdateUserDto } from '@application/dtos/user/update-user.dto';

@Controller('users')
export class UserController {
  @Inject(FindUserUseCase)
  private readonly findUserUseCase: FindUserUseCase;

  @Inject(ListUsersUseCase)
  private readonly listUsersUseCase: ListUsersUseCase;

  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;

  @Inject(UpdateUserUseCase)
  private readonly updateUserUseCase: UpdateUserUseCase;

  @Inject(RemoveUserUseCase)
  private readonly removeUserUseCase: RemoveUserUseCase;

  @Get(':id')
  async findUser(@Param('id', ParseIntPipe) id: number) {
    return this.findUserUseCase.execute(id);
  }

  @Get()
  async listUsers() {
    return this.listUsersUseCase.execute();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.updateUserUseCase.execute(id, updateUserDto);
  }

  @Delete(':id')
  async removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.removeUserUseCase.execute(id);
  }
}
