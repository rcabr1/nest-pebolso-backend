export class Account {
  constructor(
    public readonly id: number,
    public readonly userId: number,
    public readonly name: string,
    public readonly type: string,
    public readonly balance: number,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
  ) {}
}
