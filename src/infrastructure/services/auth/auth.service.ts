import { UserDto } from '@application/dtos/user/user.dto';
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  private userDto: UserDto;

  setUserDto(userDto: UserDto) {
    this.userDto = userDto;
  }

  getUserDto() {
    return this.userDto;
  }
}
