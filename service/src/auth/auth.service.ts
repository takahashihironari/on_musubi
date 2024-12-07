import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserUseCase } from '../user/domain/service/user.usecase';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserUseCase,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const payload = { username: user.username, sub: 2 };

    const accessToken = this.jwtService.sign(payload);
    console.log(accessToken);
    return { accessToken };
  }
}
