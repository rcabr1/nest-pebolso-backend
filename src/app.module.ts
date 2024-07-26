import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from '@infrastructure/database/prisma/prisma.module';
import { UserModule } from '@infrastructure/controllers/user/user.module';
import { AccountModule } from '@infrastructure/controllers/account/account.module';
import { AuthModule } from '@infrastructure/controllers/auth/auth.module';
import { AppService } from './app.service';
import { TransactionModule } from '@infrastructure/controllers/transaction/transaction.module';
import { CategoryModule } from '@infrastructure/controllers/category/category.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AccountModule,
    TransactionModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
