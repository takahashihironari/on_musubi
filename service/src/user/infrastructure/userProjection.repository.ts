import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { on_musubi_user_projection } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserProjectionRepository {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(
    username: string,
    email: string,
    password: string,
  ): Promise<on_musubi_user_projection> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.prisma.on_musubi_user_projection.create({
      data: {
        username: username,
        password: hashedPassword,
        email: email,
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
