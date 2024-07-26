export class TransactionDto {
  id: number;
  userId: number;
  accountId: number;
  categoryId: number;
  amount: number;
  description: string;
  type: string;
  processedAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
