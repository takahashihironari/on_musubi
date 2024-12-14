import { Injectable } from '@nestjs/common';
import { UserProjectionRepository } from '../../infrastructure/userProjection.repository';
import { User } from '../model/user';
import { on_musubi_user_projection } from '@prisma/client';

@Injectable()
export class UserUseCase {
  constructor(private userProjectionRepository: UserProjectionRepository) {}

  async createUser(name: string, email: string, password: string) {
    const user = new User(name, email, password);
    await this.userProjectionRepository.createUser(user);
  }

  async findUserByEmail(email: string): Promise<on_musubi_user_projection> {
    return await this.userProjectionRepository.findByEmail(email);
  }
}
