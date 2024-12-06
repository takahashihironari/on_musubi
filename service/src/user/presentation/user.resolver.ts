import { CreateUserInput } from './../../graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserUseCase } from '../domain/service/user.usecase';

@Resolver()
export class UserResolver {
  constructor(private UserUseCase: UserUseCase) {}

  @Mutation(() => Number)
  async createUser(@Args('createUserInput') request: CreateUserInput) {
    await this.UserUseCase.createUser(
      request.name,
      request.email,
      request.password,
    );
    return {
      status: 200,
    };
  }
}
