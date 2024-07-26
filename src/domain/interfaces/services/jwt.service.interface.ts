export abstract class JwtServiceInterface {
  abstract createToken(payload: any): Promise<string>;
  abstract verifyToken(token: string): Promise<any>;
}
