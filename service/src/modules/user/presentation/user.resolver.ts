import { CreateUserInput, CreateUserResponse } from './../../../graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserUseCase } from '../domain/service/user.usecase';

@Resolver()
export class UserResolver {
  constructor(private userUseCase: UserUseCase) {}

  @Mutation(() => CreateUserResponse)
  async createUser(
    @Args('createUserInput') request: CreateUserInput,
  ): Promise<CreateUserResponse> {
    await this.userUseCase.createUser(
      request.name,
      request.email,
      request.password,
    );
    return { status: 200 };
  }
}
