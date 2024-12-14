import { Module, forwardRef } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from 'src/db/prisma.module';
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
    forwardRef(() => UserModule),
    PrismaModule,
  ],
  providers: [AuthService, UserUseCase, AuthResolver, JwtStrategy, JwtService],
  exports: [AuthService, JwtStrategy], // JwtServiceとJwtStrategyをエクスポート
})
export class AuthModule {}
