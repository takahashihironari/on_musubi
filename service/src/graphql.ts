/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginInput {
  email: string;
  password: string;
}

export class CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export abstract class IQuery {
  abstract hello(): Nullable<string> | Promise<Nullable<string>>;
}

export class LoginResponse {
  accessToken: string;
}

export abstract class IMutation {
  abstract login(
    loginInput: LoginInput,
  ): LoginResponse | Promise<LoginResponse>;

  abstract createUser(
    createUserInput: CreateUserInput,
  ): CreateUserResponse | Promise<CreateUserResponse>;
}

export class CreateUserResponse {
  status: number;
}

type Nullable<T> = T | null;
