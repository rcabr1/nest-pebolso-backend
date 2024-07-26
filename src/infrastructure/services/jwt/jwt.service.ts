import { Inject, Injectable } from '@nestjs/common';
import { JwtServiceInterface } from '@domain/interfaces/services/jwt.service.interface';
import { JwtService as NestJwtService } from '@nestjs/jwt';

@Injectable()
export class JwtService implements JwtServiceInterface {
  @Inject(NestJwtService)
  private readonly jwtService: NestJwtService;

  async createToken(payload: any): Promise<string> {
    return this.jwtService.signAsync(payload);
  }

  async verifyToken(token: string): Promise<any> {
    return this.jwtService.verifyAsync(token);
  }
}
