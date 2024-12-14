import { CreateUserInput, CreateUserResponse, User } from './../../../graphql';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserUseCase } from '../domain/service/user.usecase';
import { JwtStrategy } from 'src/modules/auth/jwt.strategy';

@Resolver()
export class UserResolver {
  constructor(
    private userUseCase: UserUseCase,
    private JwtStrategy: JwtStrategy,
  ) {}

  @Mutation(() => CreateUserResponse)
  async createUser(
    @Args('createUserInput') request: CreateUserInput,
  ): Promise<CreateUserResponse> {
    console.log(request);
    await this.userUseCase.createUser(
      request.name,
      request.email,
      request.password,
    );
    return { status: 200 };
  }

  @Query(() => User)
  async findUserByEmail(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    const user = await this.userUseCase.findUserByEmail(email);
    const isPasswordValid = await this.JwtStrategy.compareByBcrypt(
      password,
      user.password,
    );
    if (isPasswordValid) {
      return { name: user.username, email: email, password: password };
    } else {
      throw new Error('Invalid password');
    }
  }
}
