import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaUserRepository } from '@infrastructure/database/prisma/repositories/prisma-user.repository';
import { PrismaModule } from '@infrastructure/database/prisma/prisma.module';
import { UserRepositoryInterface } from '@domain/interfaces/repositories/user.repository.interface';
import { FindUserUseCase } from '@application/use-cases/user/find-user.use-case';
import { ListUsersUseCase } from '@application/use-cases/user/list-users.use-case';
import { CreateUserUseCase } from '@application/use-cases/user/create-user.use-case';
import { UpdateUserUseCase } from '@application/use-cases/user/update-user.use-case';
import { RemoveUserUseCase } from '@application/use-cases/user/remove-user.use-case';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepositoryInterface,
      useClass: PrismaUserRepository,
    },
    FindUserUseCase,
    ListUsersUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    RemoveUserUseCase,
  ],
})
export class UserModule {}
