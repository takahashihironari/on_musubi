import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from 'src/prisma.module';
import { UserModule } from '../user/user.module';
import { UserUseCase } from '../user/domain/service/user.usecase';
import { AuthService } from './domain/service/auth.service';
import { AuthResolver } from './presentation/auth.resolver';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
    PrismaModule,
  ],
  providers: [AuthService, UserUseCase, AuthResolver, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
