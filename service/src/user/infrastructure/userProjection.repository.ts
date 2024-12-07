import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { on_musubi_user_projection } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { User } from '../domain/model/user';

@Injectable()
export class UserProjectionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: User): Promise<on_musubi_user_projection> {
    const hashedPassword = await bcrypt.hash(user.getPassword(), 10);
    return await this.prisma.on_musubi_user_projection.create({
      data: {
        username: user.getUserName(),
        password: hashedPassword,
        email: user.getEmail(),
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.on_musubi_user_projection.findFirst({
      where: {
        email: email,
      },
    });
  }
}
