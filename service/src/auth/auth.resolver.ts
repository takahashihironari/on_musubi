import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async login(
    @Args('email') username: string,
    @Args('password') password: string,
  ) {
    const result = await this.authService.login(username, password);
    return result.accessToken;
  }
}
