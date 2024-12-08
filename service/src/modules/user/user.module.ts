import { Module } from '@nestjs/common';

import { UserUseCase } from '../user/domain/service/user.usecase';

import { UserResolver } from './presentation/user.resolver';
import { UserProjectionRepository } from './infrastructure/userProjection.repository';
import { PrismaModule } from 'src/db/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserUseCase, UserResolver, UserProjectionRepository],
  exports: [UserUseCase, UserProjectionRepository],
})
export class UserModule {}
