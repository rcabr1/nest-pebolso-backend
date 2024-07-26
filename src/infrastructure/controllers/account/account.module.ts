import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaModule } from '@infrastructure/database/prisma/prisma.module';
import { AccountsController } from './account.controller';
import { AccountRepositoryInterface } from '@domain/interfaces/repositories/account.repository.interface';
import { PrismaAccountRepository } from '@infrastructure/database/prisma/repositories/prisma-account.repository';
import { FindAccountUseCase } from '@application/use-cases/account/find-account.use-case';
import { ListAccountsUseCase } from '@application/use-cases/account/list-accounts.use-case';
import { CreateAccountUseCase } from '@application/use-cases/account/create-account.use-case';
import { UpdateAccountUseCase } from '@application/use-cases/account/update-account.use-case';
import { AuthMiddleware } from '@infrastructure/services/auth/auth.middleware';
import { AuthModule } from '@infrastructure/controllers/auth/auth.module';
import { RemoveAccountUseCase } from '@application/use-cases/account/remove-account.use-case';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AccountsController],
  providers: [
    {
      provide: AccountRepositoryInterface,
      useClass: PrismaAccountRepository,
    },
    FindAccountUseCase,
    ListAccountsUseCase,
    CreateAccountUseCase,
    UpdateAccountUseCase,
    RemoveAccountUseCase,
  ],
})
export class AccountModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(AccountsController);
  }
}
