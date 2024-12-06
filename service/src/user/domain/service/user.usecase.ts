import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { UserProjectionRepository } from '../../infrastructure/userProjection.repository';
import { on_musubi_user_projection } from '@prisma/client';

@Injectable()
export class UserUseCase {
  constructor(
    private prisma: PrismaService,
    private userProjectionRepository: UserProjectionRepository,
  ) {}

  async createUser(name: string, email: string, password: string) {
    const a: on_musubi_user_projection =
      await this.userProjectionRepository.createUser(name, email, password);
    return a;
  }

  async findByEmail(email: string) {
    return await this.userProjectionRepository.findByEmail(email);
  }
}
