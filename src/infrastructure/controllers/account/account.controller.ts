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
import { FindAccountUseCase } from '@application/use-cases/account/find-account.use-case';
import { ListAccountsUseCase } from '@application/use-cases/account/list-accounts.use-case';
import { CreateAccountUseCase } from '@application/use-cases/account/create-account.use-case';
import { UpdateAccountUseCase } from '@application/use-cases/account/update-account.use-case';
import { RemoveAccountUseCase } from '@application/use-cases/account/remove-account.use-case';
import { CreateAccountDto } from '@application/dtos/account/create-account.dto';
import { UpdateAccountDto } from '@application/dtos/account/update-account.dto';
import { AuthService } from '@infrastructure/services/auth/auth.service';

@Controller('accounts')
export class AccountsController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Inject(FindAccountUseCase)
  private readonly findAccountUseCase: FindAccountUseCase;

  @Inject(ListAccountsUseCase)
  private readonly listAccountsUseCase: ListAccountsUseCase;

  @Inject(CreateAccountUseCase)
  private readonly createAccountUseCase: CreateAccountUseCase;

  @Inject(UpdateAccountUseCase)
  private readonly updateAccountUseCase: UpdateAccountUseCase;

  @Inject(RemoveAccountUseCase)
  private readonly removeAccountUseCase: RemoveAccountUseCase;

  @Get(':id')
  async findAccount(@Param('id', ParseIntPipe) id: number) {
    const userDto = this.authService.getUserDto();
    return this.findAccountUseCase.execute(userDto.id, id);
  }

  @Get()
  async listAccounts() {
    const userDto = this.authService.getUserDto();
    return this.listAccountsUseCase.execute(userDto.id);
  }

  @Post()
  async createAccount(@Body() createAccountDto: CreateAccountDto) {
    const userDto = this.authService.getUserDto();
    return this.createAccountUseCase.execute(userDto.id, createAccountDto);
  }

  @Put(':id')
  async updateAccount(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    const userDto = this.authService.getUserDto();
    return this.updateAccountUseCase.execute(userDto.id, id, updateAccountDto);
  }

  @Delete(':id')
  async removeAccount(@Param('id', ParseIntPipe) id: number) {
    const userDto = this.authService.getUserDto();
    return this.removeAccountUseCase.execute(userDto.id, id);
  }
}
