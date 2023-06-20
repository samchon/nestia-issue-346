/**
 * @packageDocumentation
 * @module api.functional.app
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { User } from "./../../structures/app/User";

/**
 * Maximum call stack size exceeded
 * 
 * @controller AppController.users()
 * @path GET /app/users
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function users(
    connection: IConnection,
): Promise<users.Output> {
    return !!connection.simulate
        ? users.simulate(
              connection,
          )
        : Fetcher.fetch(
              connection,
              users.ENCRYPTED,
              users.METHOD,
              users.path(),
          );
}
export namespace users {
    export type Output = Array<User>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/app/users";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/app/users`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
    ): Promise<Output> => {
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}