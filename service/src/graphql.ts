/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export abstract class IQuery {
  abstract hello(): Nullable<string> | Promise<Nullable<string>>;
}

export class CreateUserResponse {
  status: number;
}

export abstract class IMutation {
  abstract createUser(
    createUserInput: CreateUserInput,
  ): CreateUserResponse | Promise<CreateUserResponse>;
}

type Nullable<T> = T | null;
