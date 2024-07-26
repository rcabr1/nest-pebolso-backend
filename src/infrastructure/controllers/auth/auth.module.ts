import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserRepositoryInterface } from '@domain/interfaces/repositories/user.repository.interface';
import { PrismaUserRepository } from '@infrastructure/database/prisma/repositories/prisma-user.repository';
import { SignInUserUseCase } from '@application/use-cases/auth/sign-in-user.use-case';
import { PrismaModule } from '@infrastructure/database/prisma/prisma.module';
import { JwtServiceInterface } from '@domain/interfaces/services/jwt.service.interface';
import { JwtService } from '@infrastructure/services/jwt/jwt.service';
import { LoggedUserUseCase } from '@application/use-cases/auth/logged-user.use-case';
import { AuthMiddleware } from '@infrastructure/services/auth/auth.middleware';
import { AuthService } from '@infrastructure/services/auth/auth.service';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env['JWT_SECRET'],
      signOptions: { expiresIn: process.env['JWT_EXPIRES_IN'] },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthMiddleware,
    {
      provide: UserRepositoryInterface,
      useClass: PrismaUserRepository,
    },
    {
      provide: JwtServiceInterface,
      useClass: JwtService,
    },
    SignInUserUseCase,
    LoggedUserUseCase,
  ],
  exports: [AuthService, AuthMiddleware, LoggedUserUseCase],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '/user', method: RequestMethod.GET });
  }
}
