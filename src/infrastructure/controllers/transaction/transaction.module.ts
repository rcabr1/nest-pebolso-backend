import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaModule } from '@infrastructure/database/prisma/prisma.module';
import { TransactionsController } from '../transaction/transaction.controller';
import { TransactionRepositoryInterface } from '@domain/interfaces/repositories/transaction.repository.interface';
import { PrismaTransactionRepository } from '@infrastructure/database/prisma/repositories/prisma-transaction.repository';
import { FindTransactionUseCase } from '@application/use-cases/transaction/find-transaction.use-case';
import { AuthMiddleware } from '@infrastructure/services/auth/auth.middleware';
import { AuthModule } from '@infrastructure/controllers/auth/auth.module';
import { ListTransactionsUseCase } from '@application/use-cases/transaction/list-transactions.use-case copy';
import { ListAccountTransactionsUseCase } from '@application/use-cases/transaction/list-account-transactions.use-case';
import { ListCategoryTransactionsUseCase } from '@application/use-cases/transaction/list-category-transactions.use-case';
import { CreateTransactionUseCase } from '@application/use-cases/transaction/create-transaction.use-case';
import { UpdateTransactionUseCase } from '@application/use-cases/transaction/update-transaction.use-case';
import { RemoveTransactionUseCase } from '@application/use-cases/transaction/remove-transaction.use-case';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [TransactionsController],
  providers: [
    {
      provide: TransactionRepositoryInterface,
      useClass: PrismaTransactionRepository,
    },
    FindTransactionUseCase,
    ListTransactionsUseCase,
    ListAccountTransactionsUseCase,
    ListCategoryTransactionsUseCase,
    CreateTransactionUseCase,
    UpdateTransactionUseCase,
    RemoveTransactionUseCase,
  ],
})
export class TransactionModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(TransactionsController);
  }
}
