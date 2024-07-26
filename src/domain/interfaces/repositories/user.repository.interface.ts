import { User } from '@domain/entities/user.entity';

export abstract class UserRepositoryInterface {
  abstract findUser(id: number): Promise<User | null>;
  abstract findUserByLogin(usernameOrEmail: string): Promise<User | null>;
  abstract listUsers(): Promise<User[]>;
  abstract createUser(user: User): Promise<User>;
  abstract updateUser(user: User): Promise<User>;
  abstract removeUser(id: number): Promise<void>;
}
