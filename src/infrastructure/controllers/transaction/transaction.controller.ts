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
import { FindTransactionUseCase } from '@application/use-cases/transaction/find-transaction.use-case';
import { AuthService } from '@infrastructure/services/auth/auth.service';
import { ListTransactionsUseCase } from '@application/use-cases/transaction/list-transactions.use-case copy';
import { ListAccountTransactionsUseCase } from '@application/use-cases/transaction/list-account-transactions.use-case';
import { ListCategoryTransactionsUseCase } from '@application/use-cases/transaction/list-category-transactions.use-case';
import { CreateTransactionUseCase } from '@application/use-cases/transaction/create-transaction.use-case';
import { UpdateTransactionUseCase } from '@application/use-cases/transaction/update-transaction.use-case';
import { RemoveTransactionUseCase } from '@application/use-cases/transaction/remove-transaction.use-case';
import { CreateTransactionDto } from '@application/dtos/transaction/create-transaction.dto';
import { UpdateTransactionDto } from '@application/dtos/transaction/update-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Inject(FindTransactionUseCase)
  private readonly findTransactionUseCase: FindTransactionUseCase;

  @Inject(ListTransactionsUseCase)
  private readonly listTransactionsUseCase: ListTransactionsUseCase;

  @Inject(ListAccountTransactionsUseCase)
  private readonly listAccountTransactionsUseCase: ListAccountTransactionsUseCase;

  @Inject(ListCategoryTransactionsUseCase)
  private readonly listCategoryTransactionsUseCase: ListCategoryTransactionsUseCase;

  @Inject(CreateTransactionUseCase)
  private readonly createTransactionUseCase: CreateTransactionUseCase;

  @Inject(UpdateTransactionUseCase)
  private readonly updateTransactionUseCase: UpdateTransactionUseCase;

  @Inject(RemoveTransactionUseCase)
  private readonly removeTransactionUseCase: RemoveTransactionUseCase;

  @Get(':id')
  async findTransaction(@Param('id', ParseIntPipe) id: number) {
    const userDto = this.authService.getUserDto();
    return this.findTransactionUseCase.execute(userDto.id, id);
  }

  @Get()
  async listTransactions() {
    const userDto = this.authService.getUserDto();
    return this.listTransactionsUseCase.execute(userDto.id);
  }

  @Get('transaction/:transactionId')
  async listAccountTransactions(
    @Param('accountId', ParseIntPipe) accountId: number,
  ) {
    const userDto = this.authService.getUserDto();
    return this.listAccountTransactionsUseCase.execute(userDto.id, accountId);
  }

  @Get('category/:categoryId')
  async listCategoryTransactions(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    const userDto = this.authService.getUserDto();
    return this.listCategoryTransactionsUseCase.execute(userDto.id, categoryId);
  }

  @Post()
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    const userDto = this.authService.getUserDto();
    return this.createTransactionUseCase.execute(
      userDto.id,
      createTransactionDto,
    );
  }
  @Put(':id')
  async updateTransaction(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    const userDto = this.authService.getUserDto();
    return this.updateTransactionUseCase.execute(
      userDto.id,
      id,
      updateTransactionDto,
    );
  }

  @Delete(':id')
  async removeTransaction(@Param('id', ParseIntPipe) id: number) {
    const userDto = this.authService.getUserDto();
    return this.removeTransactionUseCase.execute(userDto.id, id);
  }
}
