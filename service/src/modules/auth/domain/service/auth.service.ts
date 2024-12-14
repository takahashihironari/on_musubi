import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserUseCase } from 'src/modules/user/domain/service/user.usecase';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserUseCase,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const payload = { username: user.username, sub: 2 };

    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
