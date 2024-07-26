import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserRepositoryInterface } from '@domain/interfaces/repositories/user.repository.interface';
import { User } from '@domain/entities/user.entity';
import { createUserFromPrisma } from '../factories/prisma-user.factory';

@Injectable()
export class PrismaUserRepository implements UserRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async findUser(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    return user ? createUserFromPrisma(user) : null;
  }

  async findUserByLogin(usernameOrEmail: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      },
    });

    return user ? createUserFromPrisma(user) : null;
  }

  async listUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users.map(createUserFromPrisma);
  }

  async createUser(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: {
        username: user.username,
        password: user.password,
        email: user.email,
      },
    });

    return createUserFromPrisma(createdUser);
  }

  async updateUser(user: User): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: {
        username: user.username,
        password: user.password,
        email: user.email,
      },
    });

    return createUserFromPrisma(updatedUser);
  }

  async removeUser(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
