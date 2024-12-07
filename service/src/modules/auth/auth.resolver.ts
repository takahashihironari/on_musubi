import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput, LoginResponse } from 'src/graphql';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('loginInput') loginInput: LoginInput,
  ): Promise<LoginResponse> {
    const result = await this.authService.login(
      loginInput.email,
      loginInput.password,
    );
    return { accessToken: result.accessToken };
  }
}
