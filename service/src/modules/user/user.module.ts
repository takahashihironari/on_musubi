import { Module, forwardRef } from '@nestjs/common';
import { UserUseCase } from '../user/domain/service/user.usecase';
import { UserResolver } from './presentation/user.resolver';
import { UserProjectionRepository } from './infrastructure/userProjection.repository';
import { PrismaModule } from 'src/db/prisma.module';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  providers: [
    UserUseCase,
    UserResolver,
    UserProjectionRepository,
    JwtStrategy,
    JwtService,
  ],
  exports: [UserUseCase, UserProjectionRepository],
})
export class UserModule {}
