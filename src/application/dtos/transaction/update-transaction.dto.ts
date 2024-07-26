export class UpdateTransactionDto {
  accountId?: number;
  categoryId?: number;
  amount?: number;
  description?: string;
  type?: string;
  processedAt?: Date;
}
