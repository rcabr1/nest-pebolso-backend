export class AccountDto {
  id: number;
  userId: number;
  name: string;
  type: string;
  balance: number;
  createdAt?: Date;
  updatedAt?: Date;
}
