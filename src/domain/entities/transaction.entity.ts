export class Transaction {
  constructor(
    public readonly id: number,
    public readonly userId: number,
    public readonly accountId: number,
    public readonly categoryId: number,
    public readonly amount: number,
    public readonly description: string,
    public readonly type: string,
    public readonly processedAt: Date,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
  ) {}
}
