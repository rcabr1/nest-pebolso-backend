export class Category {
  constructor(
    public readonly id: number,
    public readonly userId: number,
    public readonly name: string,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
  ) {}
}
