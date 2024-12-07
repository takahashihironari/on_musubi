import { Injectable } from '@nestjs/common';
import { UserProjectionRepository } from '../../infrastructure/userProjection.repository';
import { User } from '../model/user';

@Injectable()
export class UserUseCase {
  constructor(private userProjectionRepository: UserProjectionRepository) {}

  async createUser(name: string, email: string, password: string) {
    const user = new User(name, email, password);
    await this.userProjectionRepository.createUser(user);
  }

  async findByEmail(email: string) {
    return await this.userProjectionRepository.findByEmail(email);
  }
}
