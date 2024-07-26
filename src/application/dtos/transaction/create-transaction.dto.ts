export class CreateTransactionDto {
  accountId: number;
  categoryId: number;
  amount: number;
  description: string;
  type: string;
  processedAt: Date;
}
