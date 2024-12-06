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

export abstract class IMutation {
  abstract createUser(
    createUserInput: CreateUserInput,
  ): number | Promise<number>;
}

type Nullable<T> = T | null;
