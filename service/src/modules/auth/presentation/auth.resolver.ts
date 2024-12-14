import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { LoginInput, LoginResponse } from 'src/graphql';
import { AuthService } from '../domain/service/auth.service';
import { JwtStrategy } from '../jwt.strategy';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private JwtStrategy: JwtStrategy,
  ) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('loginInput') loginInput: LoginInput,
  ): Promise<LoginResponse> {
    const result = await this.authService.login(
      loginInput.email,
      loginInput.password,
    );
    const isPasswordValid = this.JwtStrategy.compareByBcrypt(
      loginInput.password,
      result.accessToken,
    );
    if (isPasswordValid) {
      return { accessToken: result.accessToken };
    } else {
      throw new Error('Invalid password');
    }
  }
}
