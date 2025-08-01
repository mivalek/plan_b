
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MyBoulder
 * 
 */
export type MyBoulder = $Result.DefaultSelection<Prisma.$MyBoulderPayload>
/**
 * Model Attempt
 * 
 */
export type Attempt = $Result.DefaultSelection<Prisma.$AttemptPayload>
/**
 * Model Setter
 * 
 */
export type Setter = $Result.DefaultSelection<Prisma.$SetterPayload>
/**
 * Model Boulder
 * 
 */
export type Boulder = $Result.DefaultSelection<Prisma.$BoulderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.myBoulder`: Exposes CRUD operations for the **MyBoulder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyBoulders
    * const myBoulders = await prisma.myBoulder.findMany()
    * ```
    */
  get myBoulder(): Prisma.MyBoulderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attempt`: Exposes CRUD operations for the **Attempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attempts
    * const attempts = await prisma.attempt.findMany()
    * ```
    */
  get attempt(): Prisma.AttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setter`: Exposes CRUD operations for the **Setter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setters
    * const setters = await prisma.setter.findMany()
    * ```
    */
  get setter(): Prisma.SetterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boulder`: Exposes CRUD operations for the **Boulder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boulders
    * const boulders = await prisma.boulder.findMany()
    * ```
    */
  get boulder(): Prisma.BoulderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MyBoulder: 'MyBoulder',
    Attempt: 'Attempt',
    Setter: 'Setter',
    Boulder: 'Boulder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "myBoulder" | "attempt" | "setter" | "boulder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MyBoulder: {
        payload: Prisma.$MyBoulderPayload<ExtArgs>
        fields: Prisma.MyBoulderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyBoulderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyBoulderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload>
          }
          findFirst: {
            args: Prisma.MyBoulderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyBoulderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload>
          }
          findMany: {
            args: Prisma.MyBoulderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload>[]
          }
          create: {
            args: Prisma.MyBoulderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload>
          }
          createMany: {
            args: Prisma.MyBoulderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MyBoulderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload>[]
          }
          delete: {
            args: Prisma.MyBoulderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload>
          }
          update: {
            args: Prisma.MyBoulderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload>
          }
          deleteMany: {
            args: Prisma.MyBoulderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyBoulderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MyBoulderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload>[]
          }
          upsert: {
            args: Prisma.MyBoulderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyBoulderPayload>
          }
          aggregate: {
            args: Prisma.MyBoulderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyBoulder>
          }
          groupBy: {
            args: Prisma.MyBoulderGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyBoulderGroupByOutputType>[]
          }
          count: {
            args: Prisma.MyBoulderCountArgs<ExtArgs>
            result: $Utils.Optional<MyBoulderCountAggregateOutputType> | number
          }
        }
      }
      Attempt: {
        payload: Prisma.$AttemptPayload<ExtArgs>
        fields: Prisma.AttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findFirst: {
            args: Prisma.AttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findMany: {
            args: Prisma.AttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          create: {
            args: Prisma.AttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          createMany: {
            args: Prisma.AttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          delete: {
            args: Prisma.AttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          update: {
            args: Prisma.AttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          deleteMany: {
            args: Prisma.AttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          upsert: {
            args: Prisma.AttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          aggregate: {
            args: Prisma.AttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttempt>
          }
          groupBy: {
            args: Prisma.AttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttemptCountArgs<ExtArgs>
            result: $Utils.Optional<AttemptCountAggregateOutputType> | number
          }
        }
      }
      Setter: {
        payload: Prisma.$SetterPayload<ExtArgs>
        fields: Prisma.SetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload>
          }
          findFirst: {
            args: Prisma.SetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload>
          }
          findMany: {
            args: Prisma.SetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload>[]
          }
          create: {
            args: Prisma.SetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload>
          }
          createMany: {
            args: Prisma.SetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload>[]
          }
          delete: {
            args: Prisma.SetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload>
          }
          update: {
            args: Prisma.SetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload>
          }
          deleteMany: {
            args: Prisma.SetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload>[]
          }
          upsert: {
            args: Prisma.SetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetterPayload>
          }
          aggregate: {
            args: Prisma.SetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetter>
          }
          groupBy: {
            args: Prisma.SetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetterCountArgs<ExtArgs>
            result: $Utils.Optional<SetterCountAggregateOutputType> | number
          }
        }
      }
      Boulder: {
        payload: Prisma.$BoulderPayload<ExtArgs>
        fields: Prisma.BoulderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoulderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoulderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload>
          }
          findFirst: {
            args: Prisma.BoulderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoulderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload>
          }
          findMany: {
            args: Prisma.BoulderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload>[]
          }
          create: {
            args: Prisma.BoulderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload>
          }
          createMany: {
            args: Prisma.BoulderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoulderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload>[]
          }
          delete: {
            args: Prisma.BoulderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload>
          }
          update: {
            args: Prisma.BoulderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload>
          }
          deleteMany: {
            args: Prisma.BoulderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoulderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoulderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload>[]
          }
          upsert: {
            args: Prisma.BoulderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoulderPayload>
          }
          aggregate: {
            args: Prisma.BoulderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoulder>
          }
          groupBy: {
            args: Prisma.BoulderGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoulderGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoulderCountArgs<ExtArgs>
            result: $Utils.Optional<BoulderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    myBoulder?: MyBoulderOmit
    attempt?: AttemptOmit
    setter?: SetterOmit
    boulder?: BoulderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    myBoulders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    myBoulders?: boolean | UserCountOutputTypeCountMyBouldersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMyBouldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyBoulderWhereInput
  }


  /**
   * Count Type MyBoulderCountOutputType
   */

  export type MyBoulderCountOutputType = {
    attempts: number
  }

  export type MyBoulderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | MyBoulderCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * MyBoulderCountOutputType without action
   */
  export type MyBoulderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulderCountOutputType
     */
    select?: MyBoulderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MyBoulderCountOutputType without action
   */
  export type MyBoulderCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
  }


  /**
   * Count Type SetterCountOutputType
   */

  export type SetterCountOutputType = {
    boulders: number
  }

  export type SetterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boulders?: boolean | SetterCountOutputTypeCountBouldersArgs
  }

  // Custom InputTypes
  /**
   * SetterCountOutputType without action
   */
  export type SetterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetterCountOutputType
     */
    select?: SetterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SetterCountOutputType without action
   */
  export type SetterCountOutputTypeCountBouldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoulderWhereInput
  }


  /**
   * Count Type BoulderCountOutputType
   */

  export type BoulderCountOutputType = {
    climbers: number
  }

  export type BoulderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    climbers?: boolean | BoulderCountOutputTypeCountClimbersArgs
  }

  // Custom InputTypes
  /**
   * BoulderCountOutputType without action
   */
  export type BoulderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoulderCountOutputType
     */
    select?: BoulderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoulderCountOutputType without action
   */
  export type BoulderCountOutputTypeCountClimbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyBoulderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    isAdmin: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isAdmin?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    isAdmin: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    myBoulders?: boolean | User$myBouldersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "isAdmin" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    myBoulders?: boolean | User$myBouldersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      myBoulders: Prisma.$MyBoulderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      isAdmin: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    myBoulders<T extends User$myBouldersArgs<ExtArgs> = {}>(args?: Subset<T, User$myBouldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.myBoulders
   */
  export type User$myBouldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    where?: MyBoulderWhereInput
    orderBy?: MyBoulderOrderByWithRelationInput | MyBoulderOrderByWithRelationInput[]
    cursor?: MyBoulderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyBoulderScalarFieldEnum | MyBoulderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MyBoulder
   */

  export type AggregateMyBoulder = {
    _count: MyBoulderCountAggregateOutputType | null
    _avg: MyBoulderAvgAggregateOutputType | null
    _sum: MyBoulderSumAggregateOutputType | null
    _min: MyBoulderMinAggregateOutputType | null
    _max: MyBoulderMaxAggregateOutputType | null
  }

  export type MyBoulderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    repeats: number | null
    difficulty: number | null
    rating: number | null
  }

  export type MyBoulderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    repeats: number | null
    difficulty: number | null
    rating: number | null
  }

  export type MyBoulderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    boulderId: string | null
    repeats: number | null
    done: boolean | null
    difficulty: number | null
    rating: number | null
  }

  export type MyBoulderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    boulderId: string | null
    repeats: number | null
    done: boolean | null
    difficulty: number | null
    rating: number | null
  }

  export type MyBoulderCountAggregateOutputType = {
    id: number
    userId: number
    boulderId: number
    repeats: number
    done: number
    difficulty: number
    rating: number
    _all: number
  }


  export type MyBoulderAvgAggregateInputType = {
    id?: true
    userId?: true
    repeats?: true
    difficulty?: true
    rating?: true
  }

  export type MyBoulderSumAggregateInputType = {
    id?: true
    userId?: true
    repeats?: true
    difficulty?: true
    rating?: true
  }

  export type MyBoulderMinAggregateInputType = {
    id?: true
    userId?: true
    boulderId?: true
    repeats?: true
    done?: true
    difficulty?: true
    rating?: true
  }

  export type MyBoulderMaxAggregateInputType = {
    id?: true
    userId?: true
    boulderId?: true
    repeats?: true
    done?: true
    difficulty?: true
    rating?: true
  }

  export type MyBoulderCountAggregateInputType = {
    id?: true
    userId?: true
    boulderId?: true
    repeats?: true
    done?: true
    difficulty?: true
    rating?: true
    _all?: true
  }

  export type MyBoulderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyBoulder to aggregate.
     */
    where?: MyBoulderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyBoulders to fetch.
     */
    orderBy?: MyBoulderOrderByWithRelationInput | MyBoulderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyBoulderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyBoulders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyBoulders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyBoulders
    **/
    _count?: true | MyBoulderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MyBoulderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MyBoulderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyBoulderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyBoulderMaxAggregateInputType
  }

  export type GetMyBoulderAggregateType<T extends MyBoulderAggregateArgs> = {
        [P in keyof T & keyof AggregateMyBoulder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyBoulder[P]>
      : GetScalarType<T[P], AggregateMyBoulder[P]>
  }




  export type MyBoulderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyBoulderWhereInput
    orderBy?: MyBoulderOrderByWithAggregationInput | MyBoulderOrderByWithAggregationInput[]
    by: MyBoulderScalarFieldEnum[] | MyBoulderScalarFieldEnum
    having?: MyBoulderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyBoulderCountAggregateInputType | true
    _avg?: MyBoulderAvgAggregateInputType
    _sum?: MyBoulderSumAggregateInputType
    _min?: MyBoulderMinAggregateInputType
    _max?: MyBoulderMaxAggregateInputType
  }

  export type MyBoulderGroupByOutputType = {
    id: number
    userId: number
    boulderId: string
    repeats: number
    done: boolean
    difficulty: number
    rating: number
    _count: MyBoulderCountAggregateOutputType | null
    _avg: MyBoulderAvgAggregateOutputType | null
    _sum: MyBoulderSumAggregateOutputType | null
    _min: MyBoulderMinAggregateOutputType | null
    _max: MyBoulderMaxAggregateOutputType | null
  }

  type GetMyBoulderGroupByPayload<T extends MyBoulderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyBoulderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyBoulderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyBoulderGroupByOutputType[P]>
            : GetScalarType<T[P], MyBoulderGroupByOutputType[P]>
        }
      >
    >


  export type MyBoulderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    boulderId?: boolean
    repeats?: boolean
    done?: boolean
    difficulty?: boolean
    rating?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    boulder?: boolean | BoulderDefaultArgs<ExtArgs>
    attempts?: boolean | MyBoulder$attemptsArgs<ExtArgs>
    _count?: boolean | MyBoulderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myBoulder"]>

  export type MyBoulderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    boulderId?: boolean
    repeats?: boolean
    done?: boolean
    difficulty?: boolean
    rating?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    boulder?: boolean | BoulderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myBoulder"]>

  export type MyBoulderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    boulderId?: boolean
    repeats?: boolean
    done?: boolean
    difficulty?: boolean
    rating?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    boulder?: boolean | BoulderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myBoulder"]>

  export type MyBoulderSelectScalar = {
    id?: boolean
    userId?: boolean
    boulderId?: boolean
    repeats?: boolean
    done?: boolean
    difficulty?: boolean
    rating?: boolean
  }

  export type MyBoulderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "boulderId" | "repeats" | "done" | "difficulty" | "rating", ExtArgs["result"]["myBoulder"]>
  export type MyBoulderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    boulder?: boolean | BoulderDefaultArgs<ExtArgs>
    attempts?: boolean | MyBoulder$attemptsArgs<ExtArgs>
    _count?: boolean | MyBoulderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MyBoulderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    boulder?: boolean | BoulderDefaultArgs<ExtArgs>
  }
  export type MyBoulderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    boulder?: boolean | BoulderDefaultArgs<ExtArgs>
  }

  export type $MyBoulderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyBoulder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      boulder: Prisma.$BoulderPayload<ExtArgs>
      attempts: Prisma.$AttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      boulderId: string
      repeats: number
      done: boolean
      difficulty: number
      rating: number
    }, ExtArgs["result"]["myBoulder"]>
    composites: {}
  }

  type MyBoulderGetPayload<S extends boolean | null | undefined | MyBoulderDefaultArgs> = $Result.GetResult<Prisma.$MyBoulderPayload, S>

  type MyBoulderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MyBoulderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyBoulderCountAggregateInputType | true
    }

  export interface MyBoulderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyBoulder'], meta: { name: 'MyBoulder' } }
    /**
     * Find zero or one MyBoulder that matches the filter.
     * @param {MyBoulderFindUniqueArgs} args - Arguments to find a MyBoulder
     * @example
     * // Get one MyBoulder
     * const myBoulder = await prisma.myBoulder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyBoulderFindUniqueArgs>(args: SelectSubset<T, MyBoulderFindUniqueArgs<ExtArgs>>): Prisma__MyBoulderClient<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MyBoulder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MyBoulderFindUniqueOrThrowArgs} args - Arguments to find a MyBoulder
     * @example
     * // Get one MyBoulder
     * const myBoulder = await prisma.myBoulder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyBoulderFindUniqueOrThrowArgs>(args: SelectSubset<T, MyBoulderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyBoulderClient<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyBoulder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyBoulderFindFirstArgs} args - Arguments to find a MyBoulder
     * @example
     * // Get one MyBoulder
     * const myBoulder = await prisma.myBoulder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyBoulderFindFirstArgs>(args?: SelectSubset<T, MyBoulderFindFirstArgs<ExtArgs>>): Prisma__MyBoulderClient<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyBoulder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyBoulderFindFirstOrThrowArgs} args - Arguments to find a MyBoulder
     * @example
     * // Get one MyBoulder
     * const myBoulder = await prisma.myBoulder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyBoulderFindFirstOrThrowArgs>(args?: SelectSubset<T, MyBoulderFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyBoulderClient<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyBoulders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyBoulderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyBoulders
     * const myBoulders = await prisma.myBoulder.findMany()
     * 
     * // Get first 10 MyBoulders
     * const myBoulders = await prisma.myBoulder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const myBoulderWithIdOnly = await prisma.myBoulder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MyBoulderFindManyArgs>(args?: SelectSubset<T, MyBoulderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MyBoulder.
     * @param {MyBoulderCreateArgs} args - Arguments to create a MyBoulder.
     * @example
     * // Create one MyBoulder
     * const MyBoulder = await prisma.myBoulder.create({
     *   data: {
     *     // ... data to create a MyBoulder
     *   }
     * })
     * 
     */
    create<T extends MyBoulderCreateArgs>(args: SelectSubset<T, MyBoulderCreateArgs<ExtArgs>>): Prisma__MyBoulderClient<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MyBoulders.
     * @param {MyBoulderCreateManyArgs} args - Arguments to create many MyBoulders.
     * @example
     * // Create many MyBoulders
     * const myBoulder = await prisma.myBoulder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyBoulderCreateManyArgs>(args?: SelectSubset<T, MyBoulderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MyBoulders and returns the data saved in the database.
     * @param {MyBoulderCreateManyAndReturnArgs} args - Arguments to create many MyBoulders.
     * @example
     * // Create many MyBoulders
     * const myBoulder = await prisma.myBoulder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MyBoulders and only return the `id`
     * const myBoulderWithIdOnly = await prisma.myBoulder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MyBoulderCreateManyAndReturnArgs>(args?: SelectSubset<T, MyBoulderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MyBoulder.
     * @param {MyBoulderDeleteArgs} args - Arguments to delete one MyBoulder.
     * @example
     * // Delete one MyBoulder
     * const MyBoulder = await prisma.myBoulder.delete({
     *   where: {
     *     // ... filter to delete one MyBoulder
     *   }
     * })
     * 
     */
    delete<T extends MyBoulderDeleteArgs>(args: SelectSubset<T, MyBoulderDeleteArgs<ExtArgs>>): Prisma__MyBoulderClient<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MyBoulder.
     * @param {MyBoulderUpdateArgs} args - Arguments to update one MyBoulder.
     * @example
     * // Update one MyBoulder
     * const myBoulder = await prisma.myBoulder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyBoulderUpdateArgs>(args: SelectSubset<T, MyBoulderUpdateArgs<ExtArgs>>): Prisma__MyBoulderClient<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MyBoulders.
     * @param {MyBoulderDeleteManyArgs} args - Arguments to filter MyBoulders to delete.
     * @example
     * // Delete a few MyBoulders
     * const { count } = await prisma.myBoulder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyBoulderDeleteManyArgs>(args?: SelectSubset<T, MyBoulderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyBoulders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyBoulderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyBoulders
     * const myBoulder = await prisma.myBoulder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyBoulderUpdateManyArgs>(args: SelectSubset<T, MyBoulderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyBoulders and returns the data updated in the database.
     * @param {MyBoulderUpdateManyAndReturnArgs} args - Arguments to update many MyBoulders.
     * @example
     * // Update many MyBoulders
     * const myBoulder = await prisma.myBoulder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MyBoulders and only return the `id`
     * const myBoulderWithIdOnly = await prisma.myBoulder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MyBoulderUpdateManyAndReturnArgs>(args: SelectSubset<T, MyBoulderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MyBoulder.
     * @param {MyBoulderUpsertArgs} args - Arguments to update or create a MyBoulder.
     * @example
     * // Update or create a MyBoulder
     * const myBoulder = await prisma.myBoulder.upsert({
     *   create: {
     *     // ... data to create a MyBoulder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyBoulder we want to update
     *   }
     * })
     */
    upsert<T extends MyBoulderUpsertArgs>(args: SelectSubset<T, MyBoulderUpsertArgs<ExtArgs>>): Prisma__MyBoulderClient<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MyBoulders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyBoulderCountArgs} args - Arguments to filter MyBoulders to count.
     * @example
     * // Count the number of MyBoulders
     * const count = await prisma.myBoulder.count({
     *   where: {
     *     // ... the filter for the MyBoulders we want to count
     *   }
     * })
    **/
    count<T extends MyBoulderCountArgs>(
      args?: Subset<T, MyBoulderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyBoulderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyBoulder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyBoulderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyBoulderAggregateArgs>(args: Subset<T, MyBoulderAggregateArgs>): Prisma.PrismaPromise<GetMyBoulderAggregateType<T>>

    /**
     * Group by MyBoulder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyBoulderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MyBoulderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyBoulderGroupByArgs['orderBy'] }
        : { orderBy?: MyBoulderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MyBoulderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyBoulderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyBoulder model
   */
  readonly fields: MyBoulderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyBoulder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyBoulderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    boulder<T extends BoulderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoulderDefaultArgs<ExtArgs>>): Prisma__BoulderClient<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends MyBoulder$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, MyBoulder$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MyBoulder model
   */
  interface MyBoulderFieldRefs {
    readonly id: FieldRef<"MyBoulder", 'Int'>
    readonly userId: FieldRef<"MyBoulder", 'Int'>
    readonly boulderId: FieldRef<"MyBoulder", 'String'>
    readonly repeats: FieldRef<"MyBoulder", 'Int'>
    readonly done: FieldRef<"MyBoulder", 'Boolean'>
    readonly difficulty: FieldRef<"MyBoulder", 'Int'>
    readonly rating: FieldRef<"MyBoulder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MyBoulder findUnique
   */
  export type MyBoulderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    /**
     * Filter, which MyBoulder to fetch.
     */
    where: MyBoulderWhereUniqueInput
  }

  /**
   * MyBoulder findUniqueOrThrow
   */
  export type MyBoulderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    /**
     * Filter, which MyBoulder to fetch.
     */
    where: MyBoulderWhereUniqueInput
  }

  /**
   * MyBoulder findFirst
   */
  export type MyBoulderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    /**
     * Filter, which MyBoulder to fetch.
     */
    where?: MyBoulderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyBoulders to fetch.
     */
    orderBy?: MyBoulderOrderByWithRelationInput | MyBoulderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyBoulders.
     */
    cursor?: MyBoulderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyBoulders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyBoulders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyBoulders.
     */
    distinct?: MyBoulderScalarFieldEnum | MyBoulderScalarFieldEnum[]
  }

  /**
   * MyBoulder findFirstOrThrow
   */
  export type MyBoulderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    /**
     * Filter, which MyBoulder to fetch.
     */
    where?: MyBoulderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyBoulders to fetch.
     */
    orderBy?: MyBoulderOrderByWithRelationInput | MyBoulderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyBoulders.
     */
    cursor?: MyBoulderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyBoulders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyBoulders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyBoulders.
     */
    distinct?: MyBoulderScalarFieldEnum | MyBoulderScalarFieldEnum[]
  }

  /**
   * MyBoulder findMany
   */
  export type MyBoulderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    /**
     * Filter, which MyBoulders to fetch.
     */
    where?: MyBoulderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyBoulders to fetch.
     */
    orderBy?: MyBoulderOrderByWithRelationInput | MyBoulderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyBoulders.
     */
    cursor?: MyBoulderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyBoulders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyBoulders.
     */
    skip?: number
    distinct?: MyBoulderScalarFieldEnum | MyBoulderScalarFieldEnum[]
  }

  /**
   * MyBoulder create
   */
  export type MyBoulderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    /**
     * The data needed to create a MyBoulder.
     */
    data: XOR<MyBoulderCreateInput, MyBoulderUncheckedCreateInput>
  }

  /**
   * MyBoulder createMany
   */
  export type MyBoulderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyBoulders.
     */
    data: MyBoulderCreateManyInput | MyBoulderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MyBoulder createManyAndReturn
   */
  export type MyBoulderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * The data used to create many MyBoulders.
     */
    data: MyBoulderCreateManyInput | MyBoulderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MyBoulder update
   */
  export type MyBoulderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    /**
     * The data needed to update a MyBoulder.
     */
    data: XOR<MyBoulderUpdateInput, MyBoulderUncheckedUpdateInput>
    /**
     * Choose, which MyBoulder to update.
     */
    where: MyBoulderWhereUniqueInput
  }

  /**
   * MyBoulder updateMany
   */
  export type MyBoulderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyBoulders.
     */
    data: XOR<MyBoulderUpdateManyMutationInput, MyBoulderUncheckedUpdateManyInput>
    /**
     * Filter which MyBoulders to update
     */
    where?: MyBoulderWhereInput
    /**
     * Limit how many MyBoulders to update.
     */
    limit?: number
  }

  /**
   * MyBoulder updateManyAndReturn
   */
  export type MyBoulderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * The data used to update MyBoulders.
     */
    data: XOR<MyBoulderUpdateManyMutationInput, MyBoulderUncheckedUpdateManyInput>
    /**
     * Filter which MyBoulders to update
     */
    where?: MyBoulderWhereInput
    /**
     * Limit how many MyBoulders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MyBoulder upsert
   */
  export type MyBoulderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    /**
     * The filter to search for the MyBoulder to update in case it exists.
     */
    where: MyBoulderWhereUniqueInput
    /**
     * In case the MyBoulder found by the `where` argument doesn't exist, create a new MyBoulder with this data.
     */
    create: XOR<MyBoulderCreateInput, MyBoulderUncheckedCreateInput>
    /**
     * In case the MyBoulder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyBoulderUpdateInput, MyBoulderUncheckedUpdateInput>
  }

  /**
   * MyBoulder delete
   */
  export type MyBoulderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    /**
     * Filter which MyBoulder to delete.
     */
    where: MyBoulderWhereUniqueInput
  }

  /**
   * MyBoulder deleteMany
   */
  export type MyBoulderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyBoulders to delete
     */
    where?: MyBoulderWhereInput
    /**
     * Limit how many MyBoulders to delete.
     */
    limit?: number
  }

  /**
   * MyBoulder.attempts
   */
  export type MyBoulder$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    cursor?: AttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * MyBoulder without action
   */
  export type MyBoulderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
  }


  /**
   * Model Attempt
   */

  export type AggregateAttempt = {
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  export type AttemptAvgAggregateOutputType = {
    id: number | null
    boulderId: number | null
  }

  export type AttemptSumAggregateOutputType = {
    id: number | null
    boulderId: number | null
  }

  export type AttemptMinAggregateOutputType = {
    id: number | null
    boulderId: number | null
    success: boolean | null
    createdAt: Date | null
  }

  export type AttemptMaxAggregateOutputType = {
    id: number | null
    boulderId: number | null
    success: boolean | null
    createdAt: Date | null
  }

  export type AttemptCountAggregateOutputType = {
    id: number
    boulderId: number
    success: number
    createdAt: number
    _all: number
  }


  export type AttemptAvgAggregateInputType = {
    id?: true
    boulderId?: true
  }

  export type AttemptSumAggregateInputType = {
    id?: true
    boulderId?: true
  }

  export type AttemptMinAggregateInputType = {
    id?: true
    boulderId?: true
    success?: true
    createdAt?: true
  }

  export type AttemptMaxAggregateInputType = {
    id?: true
    boulderId?: true
    success?: true
    createdAt?: true
  }

  export type AttemptCountAggregateInputType = {
    id?: true
    boulderId?: true
    success?: true
    createdAt?: true
    _all?: true
  }

  export type AttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempt to aggregate.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attempts
    **/
    _count?: true | AttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttemptMaxAggregateInputType
  }

  export type GetAttemptAggregateType<T extends AttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttempt[P]>
      : GetScalarType<T[P], AggregateAttempt[P]>
  }




  export type AttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithAggregationInput | AttemptOrderByWithAggregationInput[]
    by: AttemptScalarFieldEnum[] | AttemptScalarFieldEnum
    having?: AttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttemptCountAggregateInputType | true
    _avg?: AttemptAvgAggregateInputType
    _sum?: AttemptSumAggregateInputType
    _min?: AttemptMinAggregateInputType
    _max?: AttemptMaxAggregateInputType
  }

  export type AttemptGroupByOutputType = {
    id: number
    boulderId: number
    success: boolean
    createdAt: Date
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  type GetAttemptGroupByPayload<T extends AttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttemptGroupByOutputType[P]>
            : GetScalarType<T[P], AttemptGroupByOutputType[P]>
        }
      >
    >


  export type AttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boulderId?: boolean
    success?: boolean
    createdAt?: boolean
    boulder?: boolean | MyBoulderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boulderId?: boolean
    success?: boolean
    createdAt?: boolean
    boulder?: boolean | MyBoulderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boulderId?: boolean
    success?: boolean
    createdAt?: boolean
    boulder?: boolean | MyBoulderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectScalar = {
    id?: boolean
    boulderId?: boolean
    success?: boolean
    createdAt?: boolean
  }

  export type AttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "boulderId" | "success" | "createdAt", ExtArgs["result"]["attempt"]>
  export type AttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boulder?: boolean | MyBoulderDefaultArgs<ExtArgs>
  }
  export type AttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boulder?: boolean | MyBoulderDefaultArgs<ExtArgs>
  }
  export type AttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boulder?: boolean | MyBoulderDefaultArgs<ExtArgs>
  }

  export type $AttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attempt"
    objects: {
      boulder: Prisma.$MyBoulderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      boulderId: number
      success: boolean
      createdAt: Date
    }, ExtArgs["result"]["attempt"]>
    composites: {}
  }

  type AttemptGetPayload<S extends boolean | null | undefined | AttemptDefaultArgs> = $Result.GetResult<Prisma.$AttemptPayload, S>

  type AttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttemptCountAggregateInputType | true
    }

  export interface AttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attempt'], meta: { name: 'Attempt' } }
    /**
     * Find zero or one Attempt that matches the filter.
     * @param {AttemptFindUniqueArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttemptFindUniqueArgs>(args: SelectSubset<T, AttemptFindUniqueArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttemptFindUniqueOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, AttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttemptFindFirstArgs>(args?: SelectSubset<T, AttemptFindFirstArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, AttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attempts
     * const attempts = await prisma.attempt.findMany()
     * 
     * // Get first 10 Attempts
     * const attempts = await prisma.attempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attemptWithIdOnly = await prisma.attempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttemptFindManyArgs>(args?: SelectSubset<T, AttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attempt.
     * @param {AttemptCreateArgs} args - Arguments to create a Attempt.
     * @example
     * // Create one Attempt
     * const Attempt = await prisma.attempt.create({
     *   data: {
     *     // ... data to create a Attempt
     *   }
     * })
     * 
     */
    create<T extends AttemptCreateArgs>(args: SelectSubset<T, AttemptCreateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attempts.
     * @param {AttemptCreateManyArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttemptCreateManyArgs>(args?: SelectSubset<T, AttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attempts and returns the data saved in the database.
     * @param {AttemptCreateManyAndReturnArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, AttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attempt.
     * @param {AttemptDeleteArgs} args - Arguments to delete one Attempt.
     * @example
     * // Delete one Attempt
     * const Attempt = await prisma.attempt.delete({
     *   where: {
     *     // ... filter to delete one Attempt
     *   }
     * })
     * 
     */
    delete<T extends AttemptDeleteArgs>(args: SelectSubset<T, AttemptDeleteArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attempt.
     * @param {AttemptUpdateArgs} args - Arguments to update one Attempt.
     * @example
     * // Update one Attempt
     * const attempt = await prisma.attempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttemptUpdateArgs>(args: SelectSubset<T, AttemptUpdateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attempts.
     * @param {AttemptDeleteManyArgs} args - Arguments to filter Attempts to delete.
     * @example
     * // Delete a few Attempts
     * const { count } = await prisma.attempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttemptDeleteManyArgs>(args?: SelectSubset<T, AttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttemptUpdateManyArgs>(args: SelectSubset<T, AttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts and returns the data updated in the database.
     * @param {AttemptUpdateManyAndReturnArgs} args - Arguments to update many Attempts.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, AttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attempt.
     * @param {AttemptUpsertArgs} args - Arguments to update or create a Attempt.
     * @example
     * // Update or create a Attempt
     * const attempt = await prisma.attempt.upsert({
     *   create: {
     *     // ... data to create a Attempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attempt we want to update
     *   }
     * })
     */
    upsert<T extends AttemptUpsertArgs>(args: SelectSubset<T, AttemptUpsertArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptCountArgs} args - Arguments to filter Attempts to count.
     * @example
     * // Count the number of Attempts
     * const count = await prisma.attempt.count({
     *   where: {
     *     // ... the filter for the Attempts we want to count
     *   }
     * })
    **/
    count<T extends AttemptCountArgs>(
      args?: Subset<T, AttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttemptAggregateArgs>(args: Subset<T, AttemptAggregateArgs>): Prisma.PrismaPromise<GetAttemptAggregateType<T>>

    /**
     * Group by Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttemptGroupByArgs['orderBy'] }
        : { orderBy?: AttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attempt model
   */
  readonly fields: AttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boulder<T extends MyBoulderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MyBoulderDefaultArgs<ExtArgs>>): Prisma__MyBoulderClient<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attempt model
   */
  interface AttemptFieldRefs {
    readonly id: FieldRef<"Attempt", 'Int'>
    readonly boulderId: FieldRef<"Attempt", 'Int'>
    readonly success: FieldRef<"Attempt", 'Boolean'>
    readonly createdAt: FieldRef<"Attempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attempt findUnique
   */
  export type AttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findUniqueOrThrow
   */
  export type AttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findFirst
   */
  export type AttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findFirstOrThrow
   */
  export type AttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findMany
   */
  export type AttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempts to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt create
   */
  export type AttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a Attempt.
     */
    data: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
  }

  /**
   * Attempt createMany
   */
  export type AttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attempt createManyAndReturn
   */
  export type AttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt update
   */
  export type AttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a Attempt.
     */
    data: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
    /**
     * Choose, which Attempt to update.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt updateMany
   */
  export type AttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
  }

  /**
   * Attempt updateManyAndReturn
   */
  export type AttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt upsert
   */
  export type AttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the Attempt to update in case it exists.
     */
    where: AttemptWhereUniqueInput
    /**
     * In case the Attempt found by the `where` argument doesn't exist, create a new Attempt with this data.
     */
    create: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
    /**
     * In case the Attempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
  }

  /**
   * Attempt delete
   */
  export type AttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter which Attempt to delete.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt deleteMany
   */
  export type AttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempts to delete
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to delete.
     */
    limit?: number
  }

  /**
   * Attempt without action
   */
  export type AttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
  }


  /**
   * Model Setter
   */

  export type AggregateSetter = {
    _count: SetterCountAggregateOutputType | null
    _avg: SetterAvgAggregateOutputType | null
    _sum: SetterSumAggregateOutputType | null
    _min: SetterMinAggregateOutputType | null
    _max: SetterMaxAggregateOutputType | null
  }

  export type SetterAvgAggregateOutputType = {
    id: number | null
  }

  export type SetterSumAggregateOutputType = {
    id: number | null
  }

  export type SetterMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SetterMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SetterCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    _all: number
  }


  export type SetterAvgAggregateInputType = {
    id?: true
  }

  export type SetterSumAggregateInputType = {
    id?: true
  }

  export type SetterMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type SetterMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type SetterCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type SetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setter to aggregate.
     */
    where?: SetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setters to fetch.
     */
    orderBy?: SetterOrderByWithRelationInput | SetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Setters
    **/
    _count?: true | SetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetterMaxAggregateInputType
  }

  export type GetSetterAggregateType<T extends SetterAggregateArgs> = {
        [P in keyof T & keyof AggregateSetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetter[P]>
      : GetScalarType<T[P], AggregateSetter[P]>
  }




  export type SetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetterWhereInput
    orderBy?: SetterOrderByWithAggregationInput | SetterOrderByWithAggregationInput[]
    by: SetterScalarFieldEnum[] | SetterScalarFieldEnum
    having?: SetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetterCountAggregateInputType | true
    _avg?: SetterAvgAggregateInputType
    _sum?: SetterSumAggregateInputType
    _min?: SetterMinAggregateInputType
    _max?: SetterMaxAggregateInputType
  }

  export type SetterGroupByOutputType = {
    id: number
    email: string
    name: string
    createdAt: Date
    _count: SetterCountAggregateOutputType | null
    _avg: SetterAvgAggregateOutputType | null
    _sum: SetterSumAggregateOutputType | null
    _min: SetterMinAggregateOutputType | null
    _max: SetterMaxAggregateOutputType | null
  }

  type GetSetterGroupByPayload<T extends SetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetterGroupByOutputType[P]>
            : GetScalarType<T[P], SetterGroupByOutputType[P]>
        }
      >
    >


  export type SetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    boulders?: boolean | Setter$bouldersArgs<ExtArgs>
    _count?: boolean | SetterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setter"]>

  export type SetterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["setter"]>

  export type SetterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["setter"]>

  export type SetterSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type SetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt", ExtArgs["result"]["setter"]>
  export type SetterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boulders?: boolean | Setter$bouldersArgs<ExtArgs>
    _count?: boolean | SetterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SetterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SetterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setter"
    objects: {
      boulders: Prisma.$BoulderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["setter"]>
    composites: {}
  }

  type SetterGetPayload<S extends boolean | null | undefined | SetterDefaultArgs> = $Result.GetResult<Prisma.$SetterPayload, S>

  type SetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetterCountAggregateInputType | true
    }

  export interface SetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setter'], meta: { name: 'Setter' } }
    /**
     * Find zero or one Setter that matches the filter.
     * @param {SetterFindUniqueArgs} args - Arguments to find a Setter
     * @example
     * // Get one Setter
     * const setter = await prisma.setter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetterFindUniqueArgs>(args: SelectSubset<T, SetterFindUniqueArgs<ExtArgs>>): Prisma__SetterClient<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetterFindUniqueOrThrowArgs} args - Arguments to find a Setter
     * @example
     * // Get one Setter
     * const setter = await prisma.setter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetterFindUniqueOrThrowArgs>(args: SelectSubset<T, SetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetterClient<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetterFindFirstArgs} args - Arguments to find a Setter
     * @example
     * // Get one Setter
     * const setter = await prisma.setter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetterFindFirstArgs>(args?: SelectSubset<T, SetterFindFirstArgs<ExtArgs>>): Prisma__SetterClient<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetterFindFirstOrThrowArgs} args - Arguments to find a Setter
     * @example
     * // Get one Setter
     * const setter = await prisma.setter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetterFindFirstOrThrowArgs>(args?: SelectSubset<T, SetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetterClient<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setters
     * const setters = await prisma.setter.findMany()
     * 
     * // Get first 10 Setters
     * const setters = await prisma.setter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setterWithIdOnly = await prisma.setter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetterFindManyArgs>(args?: SelectSubset<T, SetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setter.
     * @param {SetterCreateArgs} args - Arguments to create a Setter.
     * @example
     * // Create one Setter
     * const Setter = await prisma.setter.create({
     *   data: {
     *     // ... data to create a Setter
     *   }
     * })
     * 
     */
    create<T extends SetterCreateArgs>(args: SelectSubset<T, SetterCreateArgs<ExtArgs>>): Prisma__SetterClient<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setters.
     * @param {SetterCreateManyArgs} args - Arguments to create many Setters.
     * @example
     * // Create many Setters
     * const setter = await prisma.setter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetterCreateManyArgs>(args?: SelectSubset<T, SetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Setters and returns the data saved in the database.
     * @param {SetterCreateManyAndReturnArgs} args - Arguments to create many Setters.
     * @example
     * // Create many Setters
     * const setter = await prisma.setter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Setters and only return the `id`
     * const setterWithIdOnly = await prisma.setter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetterCreateManyAndReturnArgs>(args?: SelectSubset<T, SetterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setter.
     * @param {SetterDeleteArgs} args - Arguments to delete one Setter.
     * @example
     * // Delete one Setter
     * const Setter = await prisma.setter.delete({
     *   where: {
     *     // ... filter to delete one Setter
     *   }
     * })
     * 
     */
    delete<T extends SetterDeleteArgs>(args: SelectSubset<T, SetterDeleteArgs<ExtArgs>>): Prisma__SetterClient<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setter.
     * @param {SetterUpdateArgs} args - Arguments to update one Setter.
     * @example
     * // Update one Setter
     * const setter = await prisma.setter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetterUpdateArgs>(args: SelectSubset<T, SetterUpdateArgs<ExtArgs>>): Prisma__SetterClient<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setters.
     * @param {SetterDeleteManyArgs} args - Arguments to filter Setters to delete.
     * @example
     * // Delete a few Setters
     * const { count } = await prisma.setter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetterDeleteManyArgs>(args?: SelectSubset<T, SetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setters
     * const setter = await prisma.setter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetterUpdateManyArgs>(args: SelectSubset<T, SetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setters and returns the data updated in the database.
     * @param {SetterUpdateManyAndReturnArgs} args - Arguments to update many Setters.
     * @example
     * // Update many Setters
     * const setter = await prisma.setter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Setters and only return the `id`
     * const setterWithIdOnly = await prisma.setter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SetterUpdateManyAndReturnArgs>(args: SelectSubset<T, SetterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setter.
     * @param {SetterUpsertArgs} args - Arguments to update or create a Setter.
     * @example
     * // Update or create a Setter
     * const setter = await prisma.setter.upsert({
     *   create: {
     *     // ... data to create a Setter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setter we want to update
     *   }
     * })
     */
    upsert<T extends SetterUpsertArgs>(args: SelectSubset<T, SetterUpsertArgs<ExtArgs>>): Prisma__SetterClient<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetterCountArgs} args - Arguments to filter Setters to count.
     * @example
     * // Count the number of Setters
     * const count = await prisma.setter.count({
     *   where: {
     *     // ... the filter for the Setters we want to count
     *   }
     * })
    **/
    count<T extends SetterCountArgs>(
      args?: Subset<T, SetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SetterAggregateArgs>(args: Subset<T, SetterAggregateArgs>): Prisma.PrismaPromise<GetSetterAggregateType<T>>

    /**
     * Group by Setter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetterGroupByArgs['orderBy'] }
        : { orderBy?: SetterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setter model
   */
  readonly fields: SetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boulders<T extends Setter$bouldersArgs<ExtArgs> = {}>(args?: Subset<T, Setter$bouldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setter model
   */
  interface SetterFieldRefs {
    readonly id: FieldRef<"Setter", 'Int'>
    readonly email: FieldRef<"Setter", 'String'>
    readonly name: FieldRef<"Setter", 'String'>
    readonly createdAt: FieldRef<"Setter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setter findUnique
   */
  export type SetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
    /**
     * Filter, which Setter to fetch.
     */
    where: SetterWhereUniqueInput
  }

  /**
   * Setter findUniqueOrThrow
   */
  export type SetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
    /**
     * Filter, which Setter to fetch.
     */
    where: SetterWhereUniqueInput
  }

  /**
   * Setter findFirst
   */
  export type SetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
    /**
     * Filter, which Setter to fetch.
     */
    where?: SetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setters to fetch.
     */
    orderBy?: SetterOrderByWithRelationInput | SetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setters.
     */
    cursor?: SetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setters.
     */
    distinct?: SetterScalarFieldEnum | SetterScalarFieldEnum[]
  }

  /**
   * Setter findFirstOrThrow
   */
  export type SetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
    /**
     * Filter, which Setter to fetch.
     */
    where?: SetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setters to fetch.
     */
    orderBy?: SetterOrderByWithRelationInput | SetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setters.
     */
    cursor?: SetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setters.
     */
    distinct?: SetterScalarFieldEnum | SetterScalarFieldEnum[]
  }

  /**
   * Setter findMany
   */
  export type SetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
    /**
     * Filter, which Setters to fetch.
     */
    where?: SetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setters to fetch.
     */
    orderBy?: SetterOrderByWithRelationInput | SetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Setters.
     */
    cursor?: SetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setters.
     */
    skip?: number
    distinct?: SetterScalarFieldEnum | SetterScalarFieldEnum[]
  }

  /**
   * Setter create
   */
  export type SetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
    /**
     * The data needed to create a Setter.
     */
    data: XOR<SetterCreateInput, SetterUncheckedCreateInput>
  }

  /**
   * Setter createMany
   */
  export type SetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Setters.
     */
    data: SetterCreateManyInput | SetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setter createManyAndReturn
   */
  export type SetterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * The data used to create many Setters.
     */
    data: SetterCreateManyInput | SetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setter update
   */
  export type SetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
    /**
     * The data needed to update a Setter.
     */
    data: XOR<SetterUpdateInput, SetterUncheckedUpdateInput>
    /**
     * Choose, which Setter to update.
     */
    where: SetterWhereUniqueInput
  }

  /**
   * Setter updateMany
   */
  export type SetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Setters.
     */
    data: XOR<SetterUpdateManyMutationInput, SetterUncheckedUpdateManyInput>
    /**
     * Filter which Setters to update
     */
    where?: SetterWhereInput
    /**
     * Limit how many Setters to update.
     */
    limit?: number
  }

  /**
   * Setter updateManyAndReturn
   */
  export type SetterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * The data used to update Setters.
     */
    data: XOR<SetterUpdateManyMutationInput, SetterUncheckedUpdateManyInput>
    /**
     * Filter which Setters to update
     */
    where?: SetterWhereInput
    /**
     * Limit how many Setters to update.
     */
    limit?: number
  }

  /**
   * Setter upsert
   */
  export type SetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
    /**
     * The filter to search for the Setter to update in case it exists.
     */
    where: SetterWhereUniqueInput
    /**
     * In case the Setter found by the `where` argument doesn't exist, create a new Setter with this data.
     */
    create: XOR<SetterCreateInput, SetterUncheckedCreateInput>
    /**
     * In case the Setter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetterUpdateInput, SetterUncheckedUpdateInput>
  }

  /**
   * Setter delete
   */
  export type SetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
    /**
     * Filter which Setter to delete.
     */
    where: SetterWhereUniqueInput
  }

  /**
   * Setter deleteMany
   */
  export type SetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setters to delete
     */
    where?: SetterWhereInput
    /**
     * Limit how many Setters to delete.
     */
    limit?: number
  }

  /**
   * Setter.boulders
   */
  export type Setter$bouldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    where?: BoulderWhereInput
    orderBy?: BoulderOrderByWithRelationInput | BoulderOrderByWithRelationInput[]
    cursor?: BoulderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoulderScalarFieldEnum | BoulderScalarFieldEnum[]
  }

  /**
   * Setter without action
   */
  export type SetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setter
     */
    select?: SetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setter
     */
    omit?: SetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetterInclude<ExtArgs> | null
  }


  /**
   * Model Boulder
   */

  export type AggregateBoulder = {
    _count: BoulderCountAggregateOutputType | null
    _avg: BoulderAvgAggregateOutputType | null
    _sum: BoulderSumAggregateOutputType | null
    _min: BoulderMinAggregateOutputType | null
    _max: BoulderMaxAggregateOutputType | null
  }

  export type BoulderAvgAggregateOutputType = {
    setterId: number | null
    position: number | null
    difficulty: number | null
  }

  export type BoulderSumAggregateOutputType = {
    setterId: number | null
    position: number[]
    difficulty: number | null
  }

  export type BoulderMinAggregateOutputType = {
    id: string | null
    name: string | null
    setterId: number | null
    location: string | null
    room: string | null
    difficulty: number | null
    createdAt: Date | null
  }

  export type BoulderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    setterId: number | null
    location: string | null
    room: string | null
    difficulty: number | null
    createdAt: Date | null
  }

  export type BoulderCountAggregateOutputType = {
    id: number
    name: number
    setterId: number
    position: number
    location: number
    room: number
    difficulty: number
    holdColors: number
    tags: number
    createdAt: number
    _all: number
  }


  export type BoulderAvgAggregateInputType = {
    setterId?: true
    position?: true
    difficulty?: true
  }

  export type BoulderSumAggregateInputType = {
    setterId?: true
    position?: true
    difficulty?: true
  }

  export type BoulderMinAggregateInputType = {
    id?: true
    name?: true
    setterId?: true
    location?: true
    room?: true
    difficulty?: true
    createdAt?: true
  }

  export type BoulderMaxAggregateInputType = {
    id?: true
    name?: true
    setterId?: true
    location?: true
    room?: true
    difficulty?: true
    createdAt?: true
  }

  export type BoulderCountAggregateInputType = {
    id?: true
    name?: true
    setterId?: true
    position?: true
    location?: true
    room?: true
    difficulty?: true
    holdColors?: true
    tags?: true
    createdAt?: true
    _all?: true
  }

  export type BoulderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boulder to aggregate.
     */
    where?: BoulderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boulders to fetch.
     */
    orderBy?: BoulderOrderByWithRelationInput | BoulderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoulderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boulders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boulders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boulders
    **/
    _count?: true | BoulderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoulderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoulderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoulderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoulderMaxAggregateInputType
  }

  export type GetBoulderAggregateType<T extends BoulderAggregateArgs> = {
        [P in keyof T & keyof AggregateBoulder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoulder[P]>
      : GetScalarType<T[P], AggregateBoulder[P]>
  }




  export type BoulderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoulderWhereInput
    orderBy?: BoulderOrderByWithAggregationInput | BoulderOrderByWithAggregationInput[]
    by: BoulderScalarFieldEnum[] | BoulderScalarFieldEnum
    having?: BoulderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoulderCountAggregateInputType | true
    _avg?: BoulderAvgAggregateInputType
    _sum?: BoulderSumAggregateInputType
    _min?: BoulderMinAggregateInputType
    _max?: BoulderMaxAggregateInputType
  }

  export type BoulderGroupByOutputType = {
    id: string
    name: string | null
    setterId: number
    position: number[]
    location: string
    room: string
    difficulty: number
    holdColors: string[]
    tags: string[]
    createdAt: Date
    _count: BoulderCountAggregateOutputType | null
    _avg: BoulderAvgAggregateOutputType | null
    _sum: BoulderSumAggregateOutputType | null
    _min: BoulderMinAggregateOutputType | null
    _max: BoulderMaxAggregateOutputType | null
  }

  type GetBoulderGroupByPayload<T extends BoulderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoulderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoulderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoulderGroupByOutputType[P]>
            : GetScalarType<T[P], BoulderGroupByOutputType[P]>
        }
      >
    >


  export type BoulderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    setterId?: boolean
    position?: boolean
    location?: boolean
    room?: boolean
    difficulty?: boolean
    holdColors?: boolean
    tags?: boolean
    createdAt?: boolean
    setter?: boolean | SetterDefaultArgs<ExtArgs>
    climbers?: boolean | Boulder$climbersArgs<ExtArgs>
    _count?: boolean | BoulderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boulder"]>

  export type BoulderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    setterId?: boolean
    position?: boolean
    location?: boolean
    room?: boolean
    difficulty?: boolean
    holdColors?: boolean
    tags?: boolean
    createdAt?: boolean
    setter?: boolean | SetterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boulder"]>

  export type BoulderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    setterId?: boolean
    position?: boolean
    location?: boolean
    room?: boolean
    difficulty?: boolean
    holdColors?: boolean
    tags?: boolean
    createdAt?: boolean
    setter?: boolean | SetterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boulder"]>

  export type BoulderSelectScalar = {
    id?: boolean
    name?: boolean
    setterId?: boolean
    position?: boolean
    location?: boolean
    room?: boolean
    difficulty?: boolean
    holdColors?: boolean
    tags?: boolean
    createdAt?: boolean
  }

  export type BoulderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "setterId" | "position" | "location" | "room" | "difficulty" | "holdColors" | "tags" | "createdAt", ExtArgs["result"]["boulder"]>
  export type BoulderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setter?: boolean | SetterDefaultArgs<ExtArgs>
    climbers?: boolean | Boulder$climbersArgs<ExtArgs>
    _count?: boolean | BoulderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoulderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setter?: boolean | SetterDefaultArgs<ExtArgs>
  }
  export type BoulderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setter?: boolean | SetterDefaultArgs<ExtArgs>
  }

  export type $BoulderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Boulder"
    objects: {
      setter: Prisma.$SetterPayload<ExtArgs>
      climbers: Prisma.$MyBoulderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      setterId: number
      position: number[]
      location: string
      room: string
      difficulty: number
      holdColors: string[]
      tags: string[]
      createdAt: Date
    }, ExtArgs["result"]["boulder"]>
    composites: {}
  }

  type BoulderGetPayload<S extends boolean | null | undefined | BoulderDefaultArgs> = $Result.GetResult<Prisma.$BoulderPayload, S>

  type BoulderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoulderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoulderCountAggregateInputType | true
    }

  export interface BoulderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Boulder'], meta: { name: 'Boulder' } }
    /**
     * Find zero or one Boulder that matches the filter.
     * @param {BoulderFindUniqueArgs} args - Arguments to find a Boulder
     * @example
     * // Get one Boulder
     * const boulder = await prisma.boulder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoulderFindUniqueArgs>(args: SelectSubset<T, BoulderFindUniqueArgs<ExtArgs>>): Prisma__BoulderClient<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Boulder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoulderFindUniqueOrThrowArgs} args - Arguments to find a Boulder
     * @example
     * // Get one Boulder
     * const boulder = await prisma.boulder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoulderFindUniqueOrThrowArgs>(args: SelectSubset<T, BoulderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoulderClient<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boulder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoulderFindFirstArgs} args - Arguments to find a Boulder
     * @example
     * // Get one Boulder
     * const boulder = await prisma.boulder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoulderFindFirstArgs>(args?: SelectSubset<T, BoulderFindFirstArgs<ExtArgs>>): Prisma__BoulderClient<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boulder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoulderFindFirstOrThrowArgs} args - Arguments to find a Boulder
     * @example
     * // Get one Boulder
     * const boulder = await prisma.boulder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoulderFindFirstOrThrowArgs>(args?: SelectSubset<T, BoulderFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoulderClient<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boulders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoulderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boulders
     * const boulders = await prisma.boulder.findMany()
     * 
     * // Get first 10 Boulders
     * const boulders = await prisma.boulder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boulderWithIdOnly = await prisma.boulder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoulderFindManyArgs>(args?: SelectSubset<T, BoulderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Boulder.
     * @param {BoulderCreateArgs} args - Arguments to create a Boulder.
     * @example
     * // Create one Boulder
     * const Boulder = await prisma.boulder.create({
     *   data: {
     *     // ... data to create a Boulder
     *   }
     * })
     * 
     */
    create<T extends BoulderCreateArgs>(args: SelectSubset<T, BoulderCreateArgs<ExtArgs>>): Prisma__BoulderClient<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boulders.
     * @param {BoulderCreateManyArgs} args - Arguments to create many Boulders.
     * @example
     * // Create many Boulders
     * const boulder = await prisma.boulder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoulderCreateManyArgs>(args?: SelectSubset<T, BoulderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boulders and returns the data saved in the database.
     * @param {BoulderCreateManyAndReturnArgs} args - Arguments to create many Boulders.
     * @example
     * // Create many Boulders
     * const boulder = await prisma.boulder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boulders and only return the `id`
     * const boulderWithIdOnly = await prisma.boulder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoulderCreateManyAndReturnArgs>(args?: SelectSubset<T, BoulderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Boulder.
     * @param {BoulderDeleteArgs} args - Arguments to delete one Boulder.
     * @example
     * // Delete one Boulder
     * const Boulder = await prisma.boulder.delete({
     *   where: {
     *     // ... filter to delete one Boulder
     *   }
     * })
     * 
     */
    delete<T extends BoulderDeleteArgs>(args: SelectSubset<T, BoulderDeleteArgs<ExtArgs>>): Prisma__BoulderClient<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Boulder.
     * @param {BoulderUpdateArgs} args - Arguments to update one Boulder.
     * @example
     * // Update one Boulder
     * const boulder = await prisma.boulder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoulderUpdateArgs>(args: SelectSubset<T, BoulderUpdateArgs<ExtArgs>>): Prisma__BoulderClient<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boulders.
     * @param {BoulderDeleteManyArgs} args - Arguments to filter Boulders to delete.
     * @example
     * // Delete a few Boulders
     * const { count } = await prisma.boulder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoulderDeleteManyArgs>(args?: SelectSubset<T, BoulderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boulders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoulderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boulders
     * const boulder = await prisma.boulder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoulderUpdateManyArgs>(args: SelectSubset<T, BoulderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boulders and returns the data updated in the database.
     * @param {BoulderUpdateManyAndReturnArgs} args - Arguments to update many Boulders.
     * @example
     * // Update many Boulders
     * const boulder = await prisma.boulder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boulders and only return the `id`
     * const boulderWithIdOnly = await prisma.boulder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoulderUpdateManyAndReturnArgs>(args: SelectSubset<T, BoulderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Boulder.
     * @param {BoulderUpsertArgs} args - Arguments to update or create a Boulder.
     * @example
     * // Update or create a Boulder
     * const boulder = await prisma.boulder.upsert({
     *   create: {
     *     // ... data to create a Boulder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boulder we want to update
     *   }
     * })
     */
    upsert<T extends BoulderUpsertArgs>(args: SelectSubset<T, BoulderUpsertArgs<ExtArgs>>): Prisma__BoulderClient<$Result.GetResult<Prisma.$BoulderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boulders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoulderCountArgs} args - Arguments to filter Boulders to count.
     * @example
     * // Count the number of Boulders
     * const count = await prisma.boulder.count({
     *   where: {
     *     // ... the filter for the Boulders we want to count
     *   }
     * })
    **/
    count<T extends BoulderCountArgs>(
      args?: Subset<T, BoulderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoulderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boulder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoulderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoulderAggregateArgs>(args: Subset<T, BoulderAggregateArgs>): Prisma.PrismaPromise<GetBoulderAggregateType<T>>

    /**
     * Group by Boulder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoulderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoulderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoulderGroupByArgs['orderBy'] }
        : { orderBy?: BoulderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoulderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoulderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Boulder model
   */
  readonly fields: BoulderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Boulder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoulderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setter<T extends SetterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SetterDefaultArgs<ExtArgs>>): Prisma__SetterClient<$Result.GetResult<Prisma.$SetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    climbers<T extends Boulder$climbersArgs<ExtArgs> = {}>(args?: Subset<T, Boulder$climbersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyBoulderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Boulder model
   */
  interface BoulderFieldRefs {
    readonly id: FieldRef<"Boulder", 'String'>
    readonly name: FieldRef<"Boulder", 'String'>
    readonly setterId: FieldRef<"Boulder", 'Int'>
    readonly position: FieldRef<"Boulder", 'Int[]'>
    readonly location: FieldRef<"Boulder", 'String'>
    readonly room: FieldRef<"Boulder", 'String'>
    readonly difficulty: FieldRef<"Boulder", 'Int'>
    readonly holdColors: FieldRef<"Boulder", 'String[]'>
    readonly tags: FieldRef<"Boulder", 'String[]'>
    readonly createdAt: FieldRef<"Boulder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Boulder findUnique
   */
  export type BoulderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    /**
     * Filter, which Boulder to fetch.
     */
    where: BoulderWhereUniqueInput
  }

  /**
   * Boulder findUniqueOrThrow
   */
  export type BoulderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    /**
     * Filter, which Boulder to fetch.
     */
    where: BoulderWhereUniqueInput
  }

  /**
   * Boulder findFirst
   */
  export type BoulderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    /**
     * Filter, which Boulder to fetch.
     */
    where?: BoulderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boulders to fetch.
     */
    orderBy?: BoulderOrderByWithRelationInput | BoulderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boulders.
     */
    cursor?: BoulderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boulders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boulders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boulders.
     */
    distinct?: BoulderScalarFieldEnum | BoulderScalarFieldEnum[]
  }

  /**
   * Boulder findFirstOrThrow
   */
  export type BoulderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    /**
     * Filter, which Boulder to fetch.
     */
    where?: BoulderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boulders to fetch.
     */
    orderBy?: BoulderOrderByWithRelationInput | BoulderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boulders.
     */
    cursor?: BoulderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boulders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boulders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boulders.
     */
    distinct?: BoulderScalarFieldEnum | BoulderScalarFieldEnum[]
  }

  /**
   * Boulder findMany
   */
  export type BoulderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    /**
     * Filter, which Boulders to fetch.
     */
    where?: BoulderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boulders to fetch.
     */
    orderBy?: BoulderOrderByWithRelationInput | BoulderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boulders.
     */
    cursor?: BoulderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boulders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boulders.
     */
    skip?: number
    distinct?: BoulderScalarFieldEnum | BoulderScalarFieldEnum[]
  }

  /**
   * Boulder create
   */
  export type BoulderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    /**
     * The data needed to create a Boulder.
     */
    data: XOR<BoulderCreateInput, BoulderUncheckedCreateInput>
  }

  /**
   * Boulder createMany
   */
  export type BoulderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boulders.
     */
    data: BoulderCreateManyInput | BoulderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boulder createManyAndReturn
   */
  export type BoulderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * The data used to create many Boulders.
     */
    data: BoulderCreateManyInput | BoulderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Boulder update
   */
  export type BoulderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    /**
     * The data needed to update a Boulder.
     */
    data: XOR<BoulderUpdateInput, BoulderUncheckedUpdateInput>
    /**
     * Choose, which Boulder to update.
     */
    where: BoulderWhereUniqueInput
  }

  /**
   * Boulder updateMany
   */
  export type BoulderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boulders.
     */
    data: XOR<BoulderUpdateManyMutationInput, BoulderUncheckedUpdateManyInput>
    /**
     * Filter which Boulders to update
     */
    where?: BoulderWhereInput
    /**
     * Limit how many Boulders to update.
     */
    limit?: number
  }

  /**
   * Boulder updateManyAndReturn
   */
  export type BoulderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * The data used to update Boulders.
     */
    data: XOR<BoulderUpdateManyMutationInput, BoulderUncheckedUpdateManyInput>
    /**
     * Filter which Boulders to update
     */
    where?: BoulderWhereInput
    /**
     * Limit how many Boulders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Boulder upsert
   */
  export type BoulderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    /**
     * The filter to search for the Boulder to update in case it exists.
     */
    where: BoulderWhereUniqueInput
    /**
     * In case the Boulder found by the `where` argument doesn't exist, create a new Boulder with this data.
     */
    create: XOR<BoulderCreateInput, BoulderUncheckedCreateInput>
    /**
     * In case the Boulder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoulderUpdateInput, BoulderUncheckedUpdateInput>
  }

  /**
   * Boulder delete
   */
  export type BoulderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
    /**
     * Filter which Boulder to delete.
     */
    where: BoulderWhereUniqueInput
  }

  /**
   * Boulder deleteMany
   */
  export type BoulderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boulders to delete
     */
    where?: BoulderWhereInput
    /**
     * Limit how many Boulders to delete.
     */
    limit?: number
  }

  /**
   * Boulder.climbers
   */
  export type Boulder$climbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyBoulder
     */
    select?: MyBoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyBoulder
     */
    omit?: MyBoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyBoulderInclude<ExtArgs> | null
    where?: MyBoulderWhereInput
    orderBy?: MyBoulderOrderByWithRelationInput | MyBoulderOrderByWithRelationInput[]
    cursor?: MyBoulderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyBoulderScalarFieldEnum | MyBoulderScalarFieldEnum[]
  }

  /**
   * Boulder without action
   */
  export type BoulderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boulder
     */
    select?: BoulderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boulder
     */
    omit?: BoulderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoulderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MyBoulderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    boulderId: 'boulderId',
    repeats: 'repeats',
    done: 'done',
    difficulty: 'difficulty',
    rating: 'rating'
  };

  export type MyBoulderScalarFieldEnum = (typeof MyBoulderScalarFieldEnum)[keyof typeof MyBoulderScalarFieldEnum]


  export const AttemptScalarFieldEnum: {
    id: 'id',
    boulderId: 'boulderId',
    success: 'success',
    createdAt: 'createdAt'
  };

  export type AttemptScalarFieldEnum = (typeof AttemptScalarFieldEnum)[keyof typeof AttemptScalarFieldEnum]


  export const SetterScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type SetterScalarFieldEnum = (typeof SetterScalarFieldEnum)[keyof typeof SetterScalarFieldEnum]


  export const BoulderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    setterId: 'setterId',
    position: 'position',
    location: 'location',
    room: 'room',
    difficulty: 'difficulty',
    holdColors: 'holdColors',
    tags: 'tags',
    createdAt: 'createdAt'
  };

  export type BoulderScalarFieldEnum = (typeof BoulderScalarFieldEnum)[keyof typeof BoulderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    myBoulders?: MyBoulderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    myBoulders?: MyBoulderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    myBoulders?: MyBoulderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MyBoulderWhereInput = {
    AND?: MyBoulderWhereInput | MyBoulderWhereInput[]
    OR?: MyBoulderWhereInput[]
    NOT?: MyBoulderWhereInput | MyBoulderWhereInput[]
    id?: IntFilter<"MyBoulder"> | number
    userId?: IntFilter<"MyBoulder"> | number
    boulderId?: StringFilter<"MyBoulder"> | string
    repeats?: IntFilter<"MyBoulder"> | number
    done?: BoolFilter<"MyBoulder"> | boolean
    difficulty?: IntFilter<"MyBoulder"> | number
    rating?: IntFilter<"MyBoulder"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    boulder?: XOR<BoulderScalarRelationFilter, BoulderWhereInput>
    attempts?: AttemptListRelationFilter
  }

  export type MyBoulderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    boulderId?: SortOrder
    repeats?: SortOrder
    done?: SortOrder
    difficulty?: SortOrder
    rating?: SortOrder
    user?: UserOrderByWithRelationInput
    boulder?: BoulderOrderByWithRelationInput
    attempts?: AttemptOrderByRelationAggregateInput
  }

  export type MyBoulderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MyBoulderWhereInput | MyBoulderWhereInput[]
    OR?: MyBoulderWhereInput[]
    NOT?: MyBoulderWhereInput | MyBoulderWhereInput[]
    userId?: IntFilter<"MyBoulder"> | number
    boulderId?: StringFilter<"MyBoulder"> | string
    repeats?: IntFilter<"MyBoulder"> | number
    done?: BoolFilter<"MyBoulder"> | boolean
    difficulty?: IntFilter<"MyBoulder"> | number
    rating?: IntFilter<"MyBoulder"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    boulder?: XOR<BoulderScalarRelationFilter, BoulderWhereInput>
    attempts?: AttemptListRelationFilter
  }, "id">

  export type MyBoulderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    boulderId?: SortOrder
    repeats?: SortOrder
    done?: SortOrder
    difficulty?: SortOrder
    rating?: SortOrder
    _count?: MyBoulderCountOrderByAggregateInput
    _avg?: MyBoulderAvgOrderByAggregateInput
    _max?: MyBoulderMaxOrderByAggregateInput
    _min?: MyBoulderMinOrderByAggregateInput
    _sum?: MyBoulderSumOrderByAggregateInput
  }

  export type MyBoulderScalarWhereWithAggregatesInput = {
    AND?: MyBoulderScalarWhereWithAggregatesInput | MyBoulderScalarWhereWithAggregatesInput[]
    OR?: MyBoulderScalarWhereWithAggregatesInput[]
    NOT?: MyBoulderScalarWhereWithAggregatesInput | MyBoulderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MyBoulder"> | number
    userId?: IntWithAggregatesFilter<"MyBoulder"> | number
    boulderId?: StringWithAggregatesFilter<"MyBoulder"> | string
    repeats?: IntWithAggregatesFilter<"MyBoulder"> | number
    done?: BoolWithAggregatesFilter<"MyBoulder"> | boolean
    difficulty?: IntWithAggregatesFilter<"MyBoulder"> | number
    rating?: IntWithAggregatesFilter<"MyBoulder"> | number
  }

  export type AttemptWhereInput = {
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    id?: IntFilter<"Attempt"> | number
    boulderId?: IntFilter<"Attempt"> | number
    success?: BoolFilter<"Attempt"> | boolean
    createdAt?: DateTimeFilter<"Attempt"> | Date | string
    boulder?: XOR<MyBoulderScalarRelationFilter, MyBoulderWhereInput>
  }

  export type AttemptOrderByWithRelationInput = {
    id?: SortOrder
    boulderId?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    boulder?: MyBoulderOrderByWithRelationInput
  }

  export type AttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    boulderId?: IntFilter<"Attempt"> | number
    success?: BoolFilter<"Attempt"> | boolean
    createdAt?: DateTimeFilter<"Attempt"> | Date | string
    boulder?: XOR<MyBoulderScalarRelationFilter, MyBoulderWhereInput>
  }, "id">

  export type AttemptOrderByWithAggregationInput = {
    id?: SortOrder
    boulderId?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    _count?: AttemptCountOrderByAggregateInput
    _avg?: AttemptAvgOrderByAggregateInput
    _max?: AttemptMaxOrderByAggregateInput
    _min?: AttemptMinOrderByAggregateInput
    _sum?: AttemptSumOrderByAggregateInput
  }

  export type AttemptScalarWhereWithAggregatesInput = {
    AND?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    OR?: AttemptScalarWhereWithAggregatesInput[]
    NOT?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attempt"> | number
    boulderId?: IntWithAggregatesFilter<"Attempt"> | number
    success?: BoolWithAggregatesFilter<"Attempt"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Attempt"> | Date | string
  }

  export type SetterWhereInput = {
    AND?: SetterWhereInput | SetterWhereInput[]
    OR?: SetterWhereInput[]
    NOT?: SetterWhereInput | SetterWhereInput[]
    id?: IntFilter<"Setter"> | number
    email?: StringFilter<"Setter"> | string
    name?: StringFilter<"Setter"> | string
    createdAt?: DateTimeFilter<"Setter"> | Date | string
    boulders?: BoulderListRelationFilter
  }

  export type SetterOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    boulders?: BoulderOrderByRelationAggregateInput
  }

  export type SetterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: SetterWhereInput | SetterWhereInput[]
    OR?: SetterWhereInput[]
    NOT?: SetterWhereInput | SetterWhereInput[]
    name?: StringFilter<"Setter"> | string
    createdAt?: DateTimeFilter<"Setter"> | Date | string
    boulders?: BoulderListRelationFilter
  }, "id" | "email">

  export type SetterOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: SetterCountOrderByAggregateInput
    _avg?: SetterAvgOrderByAggregateInput
    _max?: SetterMaxOrderByAggregateInput
    _min?: SetterMinOrderByAggregateInput
    _sum?: SetterSumOrderByAggregateInput
  }

  export type SetterScalarWhereWithAggregatesInput = {
    AND?: SetterScalarWhereWithAggregatesInput | SetterScalarWhereWithAggregatesInput[]
    OR?: SetterScalarWhereWithAggregatesInput[]
    NOT?: SetterScalarWhereWithAggregatesInput | SetterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Setter"> | number
    email?: StringWithAggregatesFilter<"Setter"> | string
    name?: StringWithAggregatesFilter<"Setter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Setter"> | Date | string
  }

  export type BoulderWhereInput = {
    AND?: BoulderWhereInput | BoulderWhereInput[]
    OR?: BoulderWhereInput[]
    NOT?: BoulderWhereInput | BoulderWhereInput[]
    id?: StringFilter<"Boulder"> | string
    name?: StringNullableFilter<"Boulder"> | string | null
    setterId?: IntFilter<"Boulder"> | number
    position?: IntNullableListFilter<"Boulder">
    location?: StringFilter<"Boulder"> | string
    room?: StringFilter<"Boulder"> | string
    difficulty?: IntFilter<"Boulder"> | number
    holdColors?: StringNullableListFilter<"Boulder">
    tags?: StringNullableListFilter<"Boulder">
    createdAt?: DateTimeFilter<"Boulder"> | Date | string
    setter?: XOR<SetterScalarRelationFilter, SetterWhereInput>
    climbers?: MyBoulderListRelationFilter
  }

  export type BoulderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    setterId?: SortOrder
    position?: SortOrder
    location?: SortOrder
    room?: SortOrder
    difficulty?: SortOrder
    holdColors?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    setter?: SetterOrderByWithRelationInput
    climbers?: MyBoulderOrderByRelationAggregateInput
  }

  export type BoulderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoulderWhereInput | BoulderWhereInput[]
    OR?: BoulderWhereInput[]
    NOT?: BoulderWhereInput | BoulderWhereInput[]
    name?: StringNullableFilter<"Boulder"> | string | null
    setterId?: IntFilter<"Boulder"> | number
    position?: IntNullableListFilter<"Boulder">
    location?: StringFilter<"Boulder"> | string
    room?: StringFilter<"Boulder"> | string
    difficulty?: IntFilter<"Boulder"> | number
    holdColors?: StringNullableListFilter<"Boulder">
    tags?: StringNullableListFilter<"Boulder">
    createdAt?: DateTimeFilter<"Boulder"> | Date | string
    setter?: XOR<SetterScalarRelationFilter, SetterWhereInput>
    climbers?: MyBoulderListRelationFilter
  }, "id">

  export type BoulderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    setterId?: SortOrder
    position?: SortOrder
    location?: SortOrder
    room?: SortOrder
    difficulty?: SortOrder
    holdColors?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    _count?: BoulderCountOrderByAggregateInput
    _avg?: BoulderAvgOrderByAggregateInput
    _max?: BoulderMaxOrderByAggregateInput
    _min?: BoulderMinOrderByAggregateInput
    _sum?: BoulderSumOrderByAggregateInput
  }

  export type BoulderScalarWhereWithAggregatesInput = {
    AND?: BoulderScalarWhereWithAggregatesInput | BoulderScalarWhereWithAggregatesInput[]
    OR?: BoulderScalarWhereWithAggregatesInput[]
    NOT?: BoulderScalarWhereWithAggregatesInput | BoulderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Boulder"> | string
    name?: StringNullableWithAggregatesFilter<"Boulder"> | string | null
    setterId?: IntWithAggregatesFilter<"Boulder"> | number
    position?: IntNullableListFilter<"Boulder">
    location?: StringWithAggregatesFilter<"Boulder"> | string
    room?: StringWithAggregatesFilter<"Boulder"> | string
    difficulty?: IntWithAggregatesFilter<"Boulder"> | number
    holdColors?: StringNullableListFilter<"Boulder">
    tags?: StringNullableListFilter<"Boulder">
    createdAt?: DateTimeWithAggregatesFilter<"Boulder"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    isAdmin?: boolean
    createdAt?: Date | string
    myBoulders?: MyBoulderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    isAdmin?: boolean
    createdAt?: Date | string
    myBoulders?: MyBoulderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myBoulders?: MyBoulderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myBoulders?: MyBoulderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyBoulderCreateInput = {
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
    user: UserCreateNestedOneWithoutMyBouldersInput
    boulder: BoulderCreateNestedOneWithoutClimbersInput
    attempts?: AttemptCreateNestedManyWithoutBoulderInput
  }

  export type MyBoulderUncheckedCreateInput = {
    id?: number
    userId: number
    boulderId: string
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
    attempts?: AttemptUncheckedCreateNestedManyWithoutBoulderInput
  }

  export type MyBoulderUpdateInput = {
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMyBouldersNestedInput
    boulder?: BoulderUpdateOneRequiredWithoutClimbersNestedInput
    attempts?: AttemptUpdateManyWithoutBoulderNestedInput
  }

  export type MyBoulderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    boulderId?: StringFieldUpdateOperationsInput | string
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    attempts?: AttemptUncheckedUpdateManyWithoutBoulderNestedInput
  }

  export type MyBoulderCreateManyInput = {
    id?: number
    userId: number
    boulderId: string
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
  }

  export type MyBoulderUpdateManyMutationInput = {
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type MyBoulderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    boulderId?: StringFieldUpdateOperationsInput | string
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type AttemptCreateInput = {
    success: boolean
    createdAt?: Date | string
    boulder: MyBoulderCreateNestedOneWithoutAttemptsInput
  }

  export type AttemptUncheckedCreateInput = {
    id?: number
    boulderId: number
    success: boolean
    createdAt?: Date | string
  }

  export type AttemptUpdateInput = {
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boulder?: MyBoulderUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AttemptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    boulderId?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateManyInput = {
    id?: number
    boulderId: number
    success: boolean
    createdAt?: Date | string
  }

  export type AttemptUpdateManyMutationInput = {
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    boulderId?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetterCreateInput = {
    email: string
    name: string
    createdAt?: Date | string
    boulders?: BoulderCreateNestedManyWithoutSetterInput
  }

  export type SetterUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    createdAt?: Date | string
    boulders?: BoulderUncheckedCreateNestedManyWithoutSetterInput
  }

  export type SetterUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boulders?: BoulderUpdateManyWithoutSetterNestedInput
  }

  export type SetterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boulders?: BoulderUncheckedUpdateManyWithoutSetterNestedInput
  }

  export type SetterCreateManyInput = {
    id?: number
    email: string
    name: string
    createdAt?: Date | string
  }

  export type SetterUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoulderCreateInput = {
    id: string
    name?: string | null
    position?: BoulderCreatepositionInput | number[]
    location: string
    room: string
    difficulty: number
    holdColors?: BoulderCreateholdColorsInput | string[]
    tags?: BoulderCreatetagsInput | string[]
    createdAt?: Date | string
    setter: SetterCreateNestedOneWithoutBouldersInput
    climbers?: MyBoulderCreateNestedManyWithoutBoulderInput
  }

  export type BoulderUncheckedCreateInput = {
    id: string
    name?: string | null
    setterId: number
    position?: BoulderCreatepositionInput | number[]
    location: string
    room: string
    difficulty: number
    holdColors?: BoulderCreateholdColorsInput | string[]
    tags?: BoulderCreatetagsInput | string[]
    createdAt?: Date | string
    climbers?: MyBoulderUncheckedCreateNestedManyWithoutBoulderInput
  }

  export type BoulderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: BoulderUpdatepositionInput | number[]
    location?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    holdColors?: BoulderUpdateholdColorsInput | string[]
    tags?: BoulderUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setter?: SetterUpdateOneRequiredWithoutBouldersNestedInput
    climbers?: MyBoulderUpdateManyWithoutBoulderNestedInput
  }

  export type BoulderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    setterId?: IntFieldUpdateOperationsInput | number
    position?: BoulderUpdatepositionInput | number[]
    location?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    holdColors?: BoulderUpdateholdColorsInput | string[]
    tags?: BoulderUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climbers?: MyBoulderUncheckedUpdateManyWithoutBoulderNestedInput
  }

  export type BoulderCreateManyInput = {
    id: string
    name?: string | null
    setterId: number
    position?: BoulderCreatepositionInput | number[]
    location: string
    room: string
    difficulty: number
    holdColors?: BoulderCreateholdColorsInput | string[]
    tags?: BoulderCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type BoulderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: BoulderUpdatepositionInput | number[]
    location?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    holdColors?: BoulderUpdateholdColorsInput | string[]
    tags?: BoulderUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoulderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    setterId?: IntFieldUpdateOperationsInput | number
    position?: BoulderUpdatepositionInput | number[]
    location?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    holdColors?: BoulderUpdateholdColorsInput | string[]
    tags?: BoulderUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MyBoulderListRelationFilter = {
    every?: MyBoulderWhereInput
    some?: MyBoulderWhereInput
    none?: MyBoulderWhereInput
  }

  export type MyBoulderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BoulderScalarRelationFilter = {
    is?: BoulderWhereInput
    isNot?: BoulderWhereInput
  }

  export type AttemptListRelationFilter = {
    every?: AttemptWhereInput
    some?: AttemptWhereInput
    none?: AttemptWhereInput
  }

  export type AttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MyBoulderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boulderId?: SortOrder
    repeats?: SortOrder
    done?: SortOrder
    difficulty?: SortOrder
    rating?: SortOrder
  }

  export type MyBoulderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repeats?: SortOrder
    difficulty?: SortOrder
    rating?: SortOrder
  }

  export type MyBoulderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boulderId?: SortOrder
    repeats?: SortOrder
    done?: SortOrder
    difficulty?: SortOrder
    rating?: SortOrder
  }

  export type MyBoulderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boulderId?: SortOrder
    repeats?: SortOrder
    done?: SortOrder
    difficulty?: SortOrder
    rating?: SortOrder
  }

  export type MyBoulderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repeats?: SortOrder
    difficulty?: SortOrder
    rating?: SortOrder
  }

  export type MyBoulderScalarRelationFilter = {
    is?: MyBoulderWhereInput
    isNot?: MyBoulderWhereInput
  }

  export type AttemptCountOrderByAggregateInput = {
    id?: SortOrder
    boulderId?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type AttemptAvgOrderByAggregateInput = {
    id?: SortOrder
    boulderId?: SortOrder
  }

  export type AttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    boulderId?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type AttemptMinOrderByAggregateInput = {
    id?: SortOrder
    boulderId?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type AttemptSumOrderByAggregateInput = {
    id?: SortOrder
    boulderId?: SortOrder
  }

  export type BoulderListRelationFilter = {
    every?: BoulderWhereInput
    some?: BoulderWhereInput
    none?: BoulderWhereInput
  }

  export type BoulderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SetterCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SetterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SetterMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SetterMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SetterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SetterScalarRelationFilter = {
    is?: SetterWhereInput
    isNot?: SetterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BoulderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    setterId?: SortOrder
    position?: SortOrder
    location?: SortOrder
    room?: SortOrder
    difficulty?: SortOrder
    holdColors?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
  }

  export type BoulderAvgOrderByAggregateInput = {
    setterId?: SortOrder
    position?: SortOrder
    difficulty?: SortOrder
  }

  export type BoulderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    setterId?: SortOrder
    location?: SortOrder
    room?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type BoulderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    setterId?: SortOrder
    location?: SortOrder
    room?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type BoulderSumOrderByAggregateInput = {
    setterId?: SortOrder
    position?: SortOrder
    difficulty?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MyBoulderCreateNestedManyWithoutUserInput = {
    create?: XOR<MyBoulderCreateWithoutUserInput, MyBoulderUncheckedCreateWithoutUserInput> | MyBoulderCreateWithoutUserInput[] | MyBoulderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyBoulderCreateOrConnectWithoutUserInput | MyBoulderCreateOrConnectWithoutUserInput[]
    createMany?: MyBoulderCreateManyUserInputEnvelope
    connect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
  }

  export type MyBoulderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MyBoulderCreateWithoutUserInput, MyBoulderUncheckedCreateWithoutUserInput> | MyBoulderCreateWithoutUserInput[] | MyBoulderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyBoulderCreateOrConnectWithoutUserInput | MyBoulderCreateOrConnectWithoutUserInput[]
    createMany?: MyBoulderCreateManyUserInputEnvelope
    connect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MyBoulderUpdateManyWithoutUserNestedInput = {
    create?: XOR<MyBoulderCreateWithoutUserInput, MyBoulderUncheckedCreateWithoutUserInput> | MyBoulderCreateWithoutUserInput[] | MyBoulderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyBoulderCreateOrConnectWithoutUserInput | MyBoulderCreateOrConnectWithoutUserInput[]
    upsert?: MyBoulderUpsertWithWhereUniqueWithoutUserInput | MyBoulderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MyBoulderCreateManyUserInputEnvelope
    set?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    disconnect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    delete?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    connect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    update?: MyBoulderUpdateWithWhereUniqueWithoutUserInput | MyBoulderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MyBoulderUpdateManyWithWhereWithoutUserInput | MyBoulderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MyBoulderScalarWhereInput | MyBoulderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MyBoulderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MyBoulderCreateWithoutUserInput, MyBoulderUncheckedCreateWithoutUserInput> | MyBoulderCreateWithoutUserInput[] | MyBoulderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyBoulderCreateOrConnectWithoutUserInput | MyBoulderCreateOrConnectWithoutUserInput[]
    upsert?: MyBoulderUpsertWithWhereUniqueWithoutUserInput | MyBoulderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MyBoulderCreateManyUserInputEnvelope
    set?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    disconnect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    delete?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    connect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    update?: MyBoulderUpdateWithWhereUniqueWithoutUserInput | MyBoulderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MyBoulderUpdateManyWithWhereWithoutUserInput | MyBoulderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MyBoulderScalarWhereInput | MyBoulderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMyBouldersInput = {
    create?: XOR<UserCreateWithoutMyBouldersInput, UserUncheckedCreateWithoutMyBouldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyBouldersInput
    connect?: UserWhereUniqueInput
  }

  export type BoulderCreateNestedOneWithoutClimbersInput = {
    create?: XOR<BoulderCreateWithoutClimbersInput, BoulderUncheckedCreateWithoutClimbersInput>
    connectOrCreate?: BoulderCreateOrConnectWithoutClimbersInput
    connect?: BoulderWhereUniqueInput
  }

  export type AttemptCreateNestedManyWithoutBoulderInput = {
    create?: XOR<AttemptCreateWithoutBoulderInput, AttemptUncheckedCreateWithoutBoulderInput> | AttemptCreateWithoutBoulderInput[] | AttemptUncheckedCreateWithoutBoulderInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutBoulderInput | AttemptCreateOrConnectWithoutBoulderInput[]
    createMany?: AttemptCreateManyBoulderInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type AttemptUncheckedCreateNestedManyWithoutBoulderInput = {
    create?: XOR<AttemptCreateWithoutBoulderInput, AttemptUncheckedCreateWithoutBoulderInput> | AttemptCreateWithoutBoulderInput[] | AttemptUncheckedCreateWithoutBoulderInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutBoulderInput | AttemptCreateOrConnectWithoutBoulderInput[]
    createMany?: AttemptCreateManyBoulderInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMyBouldersNestedInput = {
    create?: XOR<UserCreateWithoutMyBouldersInput, UserUncheckedCreateWithoutMyBouldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyBouldersInput
    upsert?: UserUpsertWithoutMyBouldersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMyBouldersInput, UserUpdateWithoutMyBouldersInput>, UserUncheckedUpdateWithoutMyBouldersInput>
  }

  export type BoulderUpdateOneRequiredWithoutClimbersNestedInput = {
    create?: XOR<BoulderCreateWithoutClimbersInput, BoulderUncheckedCreateWithoutClimbersInput>
    connectOrCreate?: BoulderCreateOrConnectWithoutClimbersInput
    upsert?: BoulderUpsertWithoutClimbersInput
    connect?: BoulderWhereUniqueInput
    update?: XOR<XOR<BoulderUpdateToOneWithWhereWithoutClimbersInput, BoulderUpdateWithoutClimbersInput>, BoulderUncheckedUpdateWithoutClimbersInput>
  }

  export type AttemptUpdateManyWithoutBoulderNestedInput = {
    create?: XOR<AttemptCreateWithoutBoulderInput, AttemptUncheckedCreateWithoutBoulderInput> | AttemptCreateWithoutBoulderInput[] | AttemptUncheckedCreateWithoutBoulderInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutBoulderInput | AttemptCreateOrConnectWithoutBoulderInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutBoulderInput | AttemptUpsertWithWhereUniqueWithoutBoulderInput[]
    createMany?: AttemptCreateManyBoulderInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutBoulderInput | AttemptUpdateWithWhereUniqueWithoutBoulderInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutBoulderInput | AttemptUpdateManyWithWhereWithoutBoulderInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type AttemptUncheckedUpdateManyWithoutBoulderNestedInput = {
    create?: XOR<AttemptCreateWithoutBoulderInput, AttemptUncheckedCreateWithoutBoulderInput> | AttemptCreateWithoutBoulderInput[] | AttemptUncheckedCreateWithoutBoulderInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutBoulderInput | AttemptCreateOrConnectWithoutBoulderInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutBoulderInput | AttemptUpsertWithWhereUniqueWithoutBoulderInput[]
    createMany?: AttemptCreateManyBoulderInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutBoulderInput | AttemptUpdateWithWhereUniqueWithoutBoulderInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutBoulderInput | AttemptUpdateManyWithWhereWithoutBoulderInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type MyBoulderCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<MyBoulderCreateWithoutAttemptsInput, MyBoulderUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: MyBoulderCreateOrConnectWithoutAttemptsInput
    connect?: MyBoulderWhereUniqueInput
  }

  export type MyBoulderUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<MyBoulderCreateWithoutAttemptsInput, MyBoulderUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: MyBoulderCreateOrConnectWithoutAttemptsInput
    upsert?: MyBoulderUpsertWithoutAttemptsInput
    connect?: MyBoulderWhereUniqueInput
    update?: XOR<XOR<MyBoulderUpdateToOneWithWhereWithoutAttemptsInput, MyBoulderUpdateWithoutAttemptsInput>, MyBoulderUncheckedUpdateWithoutAttemptsInput>
  }

  export type BoulderCreateNestedManyWithoutSetterInput = {
    create?: XOR<BoulderCreateWithoutSetterInput, BoulderUncheckedCreateWithoutSetterInput> | BoulderCreateWithoutSetterInput[] | BoulderUncheckedCreateWithoutSetterInput[]
    connectOrCreate?: BoulderCreateOrConnectWithoutSetterInput | BoulderCreateOrConnectWithoutSetterInput[]
    createMany?: BoulderCreateManySetterInputEnvelope
    connect?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
  }

  export type BoulderUncheckedCreateNestedManyWithoutSetterInput = {
    create?: XOR<BoulderCreateWithoutSetterInput, BoulderUncheckedCreateWithoutSetterInput> | BoulderCreateWithoutSetterInput[] | BoulderUncheckedCreateWithoutSetterInput[]
    connectOrCreate?: BoulderCreateOrConnectWithoutSetterInput | BoulderCreateOrConnectWithoutSetterInput[]
    createMany?: BoulderCreateManySetterInputEnvelope
    connect?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
  }

  export type BoulderUpdateManyWithoutSetterNestedInput = {
    create?: XOR<BoulderCreateWithoutSetterInput, BoulderUncheckedCreateWithoutSetterInput> | BoulderCreateWithoutSetterInput[] | BoulderUncheckedCreateWithoutSetterInput[]
    connectOrCreate?: BoulderCreateOrConnectWithoutSetterInput | BoulderCreateOrConnectWithoutSetterInput[]
    upsert?: BoulderUpsertWithWhereUniqueWithoutSetterInput | BoulderUpsertWithWhereUniqueWithoutSetterInput[]
    createMany?: BoulderCreateManySetterInputEnvelope
    set?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
    disconnect?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
    delete?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
    connect?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
    update?: BoulderUpdateWithWhereUniqueWithoutSetterInput | BoulderUpdateWithWhereUniqueWithoutSetterInput[]
    updateMany?: BoulderUpdateManyWithWhereWithoutSetterInput | BoulderUpdateManyWithWhereWithoutSetterInput[]
    deleteMany?: BoulderScalarWhereInput | BoulderScalarWhereInput[]
  }

  export type BoulderUncheckedUpdateManyWithoutSetterNestedInput = {
    create?: XOR<BoulderCreateWithoutSetterInput, BoulderUncheckedCreateWithoutSetterInput> | BoulderCreateWithoutSetterInput[] | BoulderUncheckedCreateWithoutSetterInput[]
    connectOrCreate?: BoulderCreateOrConnectWithoutSetterInput | BoulderCreateOrConnectWithoutSetterInput[]
    upsert?: BoulderUpsertWithWhereUniqueWithoutSetterInput | BoulderUpsertWithWhereUniqueWithoutSetterInput[]
    createMany?: BoulderCreateManySetterInputEnvelope
    set?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
    disconnect?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
    delete?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
    connect?: BoulderWhereUniqueInput | BoulderWhereUniqueInput[]
    update?: BoulderUpdateWithWhereUniqueWithoutSetterInput | BoulderUpdateWithWhereUniqueWithoutSetterInput[]
    updateMany?: BoulderUpdateManyWithWhereWithoutSetterInput | BoulderUpdateManyWithWhereWithoutSetterInput[]
    deleteMany?: BoulderScalarWhereInput | BoulderScalarWhereInput[]
  }

  export type BoulderCreatepositionInput = {
    set: number[]
  }

  export type BoulderCreateholdColorsInput = {
    set: string[]
  }

  export type BoulderCreatetagsInput = {
    set: string[]
  }

  export type SetterCreateNestedOneWithoutBouldersInput = {
    create?: XOR<SetterCreateWithoutBouldersInput, SetterUncheckedCreateWithoutBouldersInput>
    connectOrCreate?: SetterCreateOrConnectWithoutBouldersInput
    connect?: SetterWhereUniqueInput
  }

  export type MyBoulderCreateNestedManyWithoutBoulderInput = {
    create?: XOR<MyBoulderCreateWithoutBoulderInput, MyBoulderUncheckedCreateWithoutBoulderInput> | MyBoulderCreateWithoutBoulderInput[] | MyBoulderUncheckedCreateWithoutBoulderInput[]
    connectOrCreate?: MyBoulderCreateOrConnectWithoutBoulderInput | MyBoulderCreateOrConnectWithoutBoulderInput[]
    createMany?: MyBoulderCreateManyBoulderInputEnvelope
    connect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
  }

  export type MyBoulderUncheckedCreateNestedManyWithoutBoulderInput = {
    create?: XOR<MyBoulderCreateWithoutBoulderInput, MyBoulderUncheckedCreateWithoutBoulderInput> | MyBoulderCreateWithoutBoulderInput[] | MyBoulderUncheckedCreateWithoutBoulderInput[]
    connectOrCreate?: MyBoulderCreateOrConnectWithoutBoulderInput | MyBoulderCreateOrConnectWithoutBoulderInput[]
    createMany?: MyBoulderCreateManyBoulderInputEnvelope
    connect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoulderUpdatepositionInput = {
    set?: number[]
    push?: number | number[]
  }

  export type BoulderUpdateholdColorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoulderUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SetterUpdateOneRequiredWithoutBouldersNestedInput = {
    create?: XOR<SetterCreateWithoutBouldersInput, SetterUncheckedCreateWithoutBouldersInput>
    connectOrCreate?: SetterCreateOrConnectWithoutBouldersInput
    upsert?: SetterUpsertWithoutBouldersInput
    connect?: SetterWhereUniqueInput
    update?: XOR<XOR<SetterUpdateToOneWithWhereWithoutBouldersInput, SetterUpdateWithoutBouldersInput>, SetterUncheckedUpdateWithoutBouldersInput>
  }

  export type MyBoulderUpdateManyWithoutBoulderNestedInput = {
    create?: XOR<MyBoulderCreateWithoutBoulderInput, MyBoulderUncheckedCreateWithoutBoulderInput> | MyBoulderCreateWithoutBoulderInput[] | MyBoulderUncheckedCreateWithoutBoulderInput[]
    connectOrCreate?: MyBoulderCreateOrConnectWithoutBoulderInput | MyBoulderCreateOrConnectWithoutBoulderInput[]
    upsert?: MyBoulderUpsertWithWhereUniqueWithoutBoulderInput | MyBoulderUpsertWithWhereUniqueWithoutBoulderInput[]
    createMany?: MyBoulderCreateManyBoulderInputEnvelope
    set?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    disconnect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    delete?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    connect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    update?: MyBoulderUpdateWithWhereUniqueWithoutBoulderInput | MyBoulderUpdateWithWhereUniqueWithoutBoulderInput[]
    updateMany?: MyBoulderUpdateManyWithWhereWithoutBoulderInput | MyBoulderUpdateManyWithWhereWithoutBoulderInput[]
    deleteMany?: MyBoulderScalarWhereInput | MyBoulderScalarWhereInput[]
  }

  export type MyBoulderUncheckedUpdateManyWithoutBoulderNestedInput = {
    create?: XOR<MyBoulderCreateWithoutBoulderInput, MyBoulderUncheckedCreateWithoutBoulderInput> | MyBoulderCreateWithoutBoulderInput[] | MyBoulderUncheckedCreateWithoutBoulderInput[]
    connectOrCreate?: MyBoulderCreateOrConnectWithoutBoulderInput | MyBoulderCreateOrConnectWithoutBoulderInput[]
    upsert?: MyBoulderUpsertWithWhereUniqueWithoutBoulderInput | MyBoulderUpsertWithWhereUniqueWithoutBoulderInput[]
    createMany?: MyBoulderCreateManyBoulderInputEnvelope
    set?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    disconnect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    delete?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    connect?: MyBoulderWhereUniqueInput | MyBoulderWhereUniqueInput[]
    update?: MyBoulderUpdateWithWhereUniqueWithoutBoulderInput | MyBoulderUpdateWithWhereUniqueWithoutBoulderInput[]
    updateMany?: MyBoulderUpdateManyWithWhereWithoutBoulderInput | MyBoulderUpdateManyWithWhereWithoutBoulderInput[]
    deleteMany?: MyBoulderScalarWhereInput | MyBoulderScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MyBoulderCreateWithoutUserInput = {
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
    boulder: BoulderCreateNestedOneWithoutClimbersInput
    attempts?: AttemptCreateNestedManyWithoutBoulderInput
  }

  export type MyBoulderUncheckedCreateWithoutUserInput = {
    id?: number
    boulderId: string
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
    attempts?: AttemptUncheckedCreateNestedManyWithoutBoulderInput
  }

  export type MyBoulderCreateOrConnectWithoutUserInput = {
    where: MyBoulderWhereUniqueInput
    create: XOR<MyBoulderCreateWithoutUserInput, MyBoulderUncheckedCreateWithoutUserInput>
  }

  export type MyBoulderCreateManyUserInputEnvelope = {
    data: MyBoulderCreateManyUserInput | MyBoulderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MyBoulderUpsertWithWhereUniqueWithoutUserInput = {
    where: MyBoulderWhereUniqueInput
    update: XOR<MyBoulderUpdateWithoutUserInput, MyBoulderUncheckedUpdateWithoutUserInput>
    create: XOR<MyBoulderCreateWithoutUserInput, MyBoulderUncheckedCreateWithoutUserInput>
  }

  export type MyBoulderUpdateWithWhereUniqueWithoutUserInput = {
    where: MyBoulderWhereUniqueInput
    data: XOR<MyBoulderUpdateWithoutUserInput, MyBoulderUncheckedUpdateWithoutUserInput>
  }

  export type MyBoulderUpdateManyWithWhereWithoutUserInput = {
    where: MyBoulderScalarWhereInput
    data: XOR<MyBoulderUpdateManyMutationInput, MyBoulderUncheckedUpdateManyWithoutUserInput>
  }

  export type MyBoulderScalarWhereInput = {
    AND?: MyBoulderScalarWhereInput | MyBoulderScalarWhereInput[]
    OR?: MyBoulderScalarWhereInput[]
    NOT?: MyBoulderScalarWhereInput | MyBoulderScalarWhereInput[]
    id?: IntFilter<"MyBoulder"> | number
    userId?: IntFilter<"MyBoulder"> | number
    boulderId?: StringFilter<"MyBoulder"> | string
    repeats?: IntFilter<"MyBoulder"> | number
    done?: BoolFilter<"MyBoulder"> | boolean
    difficulty?: IntFilter<"MyBoulder"> | number
    rating?: IntFilter<"MyBoulder"> | number
  }

  export type UserCreateWithoutMyBouldersInput = {
    name: string
    email: string
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMyBouldersInput = {
    id?: number
    name: string
    email: string
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMyBouldersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMyBouldersInput, UserUncheckedCreateWithoutMyBouldersInput>
  }

  export type BoulderCreateWithoutClimbersInput = {
    id: string
    name?: string | null
    position?: BoulderCreatepositionInput | number[]
    location: string
    room: string
    difficulty: number
    holdColors?: BoulderCreateholdColorsInput | string[]
    tags?: BoulderCreatetagsInput | string[]
    createdAt?: Date | string
    setter: SetterCreateNestedOneWithoutBouldersInput
  }

  export type BoulderUncheckedCreateWithoutClimbersInput = {
    id: string
    name?: string | null
    setterId: number
    position?: BoulderCreatepositionInput | number[]
    location: string
    room: string
    difficulty: number
    holdColors?: BoulderCreateholdColorsInput | string[]
    tags?: BoulderCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type BoulderCreateOrConnectWithoutClimbersInput = {
    where: BoulderWhereUniqueInput
    create: XOR<BoulderCreateWithoutClimbersInput, BoulderUncheckedCreateWithoutClimbersInput>
  }

  export type AttemptCreateWithoutBoulderInput = {
    success: boolean
    createdAt?: Date | string
  }

  export type AttemptUncheckedCreateWithoutBoulderInput = {
    id?: number
    success: boolean
    createdAt?: Date | string
  }

  export type AttemptCreateOrConnectWithoutBoulderInput = {
    where: AttemptWhereUniqueInput
    create: XOR<AttemptCreateWithoutBoulderInput, AttemptUncheckedCreateWithoutBoulderInput>
  }

  export type AttemptCreateManyBoulderInputEnvelope = {
    data: AttemptCreateManyBoulderInput | AttemptCreateManyBoulderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMyBouldersInput = {
    update: XOR<UserUpdateWithoutMyBouldersInput, UserUncheckedUpdateWithoutMyBouldersInput>
    create: XOR<UserCreateWithoutMyBouldersInput, UserUncheckedCreateWithoutMyBouldersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMyBouldersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMyBouldersInput, UserUncheckedUpdateWithoutMyBouldersInput>
  }

  export type UserUpdateWithoutMyBouldersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMyBouldersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoulderUpsertWithoutClimbersInput = {
    update: XOR<BoulderUpdateWithoutClimbersInput, BoulderUncheckedUpdateWithoutClimbersInput>
    create: XOR<BoulderCreateWithoutClimbersInput, BoulderUncheckedCreateWithoutClimbersInput>
    where?: BoulderWhereInput
  }

  export type BoulderUpdateToOneWithWhereWithoutClimbersInput = {
    where?: BoulderWhereInput
    data: XOR<BoulderUpdateWithoutClimbersInput, BoulderUncheckedUpdateWithoutClimbersInput>
  }

  export type BoulderUpdateWithoutClimbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: BoulderUpdatepositionInput | number[]
    location?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    holdColors?: BoulderUpdateholdColorsInput | string[]
    tags?: BoulderUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setter?: SetterUpdateOneRequiredWithoutBouldersNestedInput
  }

  export type BoulderUncheckedUpdateWithoutClimbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    setterId?: IntFieldUpdateOperationsInput | number
    position?: BoulderUpdatepositionInput | number[]
    location?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    holdColors?: BoulderUpdateholdColorsInput | string[]
    tags?: BoulderUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUpsertWithWhereUniqueWithoutBoulderInput = {
    where: AttemptWhereUniqueInput
    update: XOR<AttemptUpdateWithoutBoulderInput, AttemptUncheckedUpdateWithoutBoulderInput>
    create: XOR<AttemptCreateWithoutBoulderInput, AttemptUncheckedCreateWithoutBoulderInput>
  }

  export type AttemptUpdateWithWhereUniqueWithoutBoulderInput = {
    where: AttemptWhereUniqueInput
    data: XOR<AttemptUpdateWithoutBoulderInput, AttemptUncheckedUpdateWithoutBoulderInput>
  }

  export type AttemptUpdateManyWithWhereWithoutBoulderInput = {
    where: AttemptScalarWhereInput
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyWithoutBoulderInput>
  }

  export type AttemptScalarWhereInput = {
    AND?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    OR?: AttemptScalarWhereInput[]
    NOT?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    id?: IntFilter<"Attempt"> | number
    boulderId?: IntFilter<"Attempt"> | number
    success?: BoolFilter<"Attempt"> | boolean
    createdAt?: DateTimeFilter<"Attempt"> | Date | string
  }

  export type MyBoulderCreateWithoutAttemptsInput = {
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
    user: UserCreateNestedOneWithoutMyBouldersInput
    boulder: BoulderCreateNestedOneWithoutClimbersInput
  }

  export type MyBoulderUncheckedCreateWithoutAttemptsInput = {
    id?: number
    userId: number
    boulderId: string
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
  }

  export type MyBoulderCreateOrConnectWithoutAttemptsInput = {
    where: MyBoulderWhereUniqueInput
    create: XOR<MyBoulderCreateWithoutAttemptsInput, MyBoulderUncheckedCreateWithoutAttemptsInput>
  }

  export type MyBoulderUpsertWithoutAttemptsInput = {
    update: XOR<MyBoulderUpdateWithoutAttemptsInput, MyBoulderUncheckedUpdateWithoutAttemptsInput>
    create: XOR<MyBoulderCreateWithoutAttemptsInput, MyBoulderUncheckedCreateWithoutAttemptsInput>
    where?: MyBoulderWhereInput
  }

  export type MyBoulderUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: MyBoulderWhereInput
    data: XOR<MyBoulderUpdateWithoutAttemptsInput, MyBoulderUncheckedUpdateWithoutAttemptsInput>
  }

  export type MyBoulderUpdateWithoutAttemptsInput = {
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMyBouldersNestedInput
    boulder?: BoulderUpdateOneRequiredWithoutClimbersNestedInput
  }

  export type MyBoulderUncheckedUpdateWithoutAttemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    boulderId?: StringFieldUpdateOperationsInput | string
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type BoulderCreateWithoutSetterInput = {
    id: string
    name?: string | null
    position?: BoulderCreatepositionInput | number[]
    location: string
    room: string
    difficulty: number
    holdColors?: BoulderCreateholdColorsInput | string[]
    tags?: BoulderCreatetagsInput | string[]
    createdAt?: Date | string
    climbers?: MyBoulderCreateNestedManyWithoutBoulderInput
  }

  export type BoulderUncheckedCreateWithoutSetterInput = {
    id: string
    name?: string | null
    position?: BoulderCreatepositionInput | number[]
    location: string
    room: string
    difficulty: number
    holdColors?: BoulderCreateholdColorsInput | string[]
    tags?: BoulderCreatetagsInput | string[]
    createdAt?: Date | string
    climbers?: MyBoulderUncheckedCreateNestedManyWithoutBoulderInput
  }

  export type BoulderCreateOrConnectWithoutSetterInput = {
    where: BoulderWhereUniqueInput
    create: XOR<BoulderCreateWithoutSetterInput, BoulderUncheckedCreateWithoutSetterInput>
  }

  export type BoulderCreateManySetterInputEnvelope = {
    data: BoulderCreateManySetterInput | BoulderCreateManySetterInput[]
    skipDuplicates?: boolean
  }

  export type BoulderUpsertWithWhereUniqueWithoutSetterInput = {
    where: BoulderWhereUniqueInput
    update: XOR<BoulderUpdateWithoutSetterInput, BoulderUncheckedUpdateWithoutSetterInput>
    create: XOR<BoulderCreateWithoutSetterInput, BoulderUncheckedCreateWithoutSetterInput>
  }

  export type BoulderUpdateWithWhereUniqueWithoutSetterInput = {
    where: BoulderWhereUniqueInput
    data: XOR<BoulderUpdateWithoutSetterInput, BoulderUncheckedUpdateWithoutSetterInput>
  }

  export type BoulderUpdateManyWithWhereWithoutSetterInput = {
    where: BoulderScalarWhereInput
    data: XOR<BoulderUpdateManyMutationInput, BoulderUncheckedUpdateManyWithoutSetterInput>
  }

  export type BoulderScalarWhereInput = {
    AND?: BoulderScalarWhereInput | BoulderScalarWhereInput[]
    OR?: BoulderScalarWhereInput[]
    NOT?: BoulderScalarWhereInput | BoulderScalarWhereInput[]
    id?: StringFilter<"Boulder"> | string
    name?: StringNullableFilter<"Boulder"> | string | null
    setterId?: IntFilter<"Boulder"> | number
    position?: IntNullableListFilter<"Boulder">
    location?: StringFilter<"Boulder"> | string
    room?: StringFilter<"Boulder"> | string
    difficulty?: IntFilter<"Boulder"> | number
    holdColors?: StringNullableListFilter<"Boulder">
    tags?: StringNullableListFilter<"Boulder">
    createdAt?: DateTimeFilter<"Boulder"> | Date | string
  }

  export type SetterCreateWithoutBouldersInput = {
    email: string
    name: string
    createdAt?: Date | string
  }

  export type SetterUncheckedCreateWithoutBouldersInput = {
    id?: number
    email: string
    name: string
    createdAt?: Date | string
  }

  export type SetterCreateOrConnectWithoutBouldersInput = {
    where: SetterWhereUniqueInput
    create: XOR<SetterCreateWithoutBouldersInput, SetterUncheckedCreateWithoutBouldersInput>
  }

  export type MyBoulderCreateWithoutBoulderInput = {
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
    user: UserCreateNestedOneWithoutMyBouldersInput
    attempts?: AttemptCreateNestedManyWithoutBoulderInput
  }

  export type MyBoulderUncheckedCreateWithoutBoulderInput = {
    id?: number
    userId: number
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
    attempts?: AttemptUncheckedCreateNestedManyWithoutBoulderInput
  }

  export type MyBoulderCreateOrConnectWithoutBoulderInput = {
    where: MyBoulderWhereUniqueInput
    create: XOR<MyBoulderCreateWithoutBoulderInput, MyBoulderUncheckedCreateWithoutBoulderInput>
  }

  export type MyBoulderCreateManyBoulderInputEnvelope = {
    data: MyBoulderCreateManyBoulderInput | MyBoulderCreateManyBoulderInput[]
    skipDuplicates?: boolean
  }

  export type SetterUpsertWithoutBouldersInput = {
    update: XOR<SetterUpdateWithoutBouldersInput, SetterUncheckedUpdateWithoutBouldersInput>
    create: XOR<SetterCreateWithoutBouldersInput, SetterUncheckedCreateWithoutBouldersInput>
    where?: SetterWhereInput
  }

  export type SetterUpdateToOneWithWhereWithoutBouldersInput = {
    where?: SetterWhereInput
    data: XOR<SetterUpdateWithoutBouldersInput, SetterUncheckedUpdateWithoutBouldersInput>
  }

  export type SetterUpdateWithoutBouldersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetterUncheckedUpdateWithoutBouldersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyBoulderUpsertWithWhereUniqueWithoutBoulderInput = {
    where: MyBoulderWhereUniqueInput
    update: XOR<MyBoulderUpdateWithoutBoulderInput, MyBoulderUncheckedUpdateWithoutBoulderInput>
    create: XOR<MyBoulderCreateWithoutBoulderInput, MyBoulderUncheckedCreateWithoutBoulderInput>
  }

  export type MyBoulderUpdateWithWhereUniqueWithoutBoulderInput = {
    where: MyBoulderWhereUniqueInput
    data: XOR<MyBoulderUpdateWithoutBoulderInput, MyBoulderUncheckedUpdateWithoutBoulderInput>
  }

  export type MyBoulderUpdateManyWithWhereWithoutBoulderInput = {
    where: MyBoulderScalarWhereInput
    data: XOR<MyBoulderUpdateManyMutationInput, MyBoulderUncheckedUpdateManyWithoutBoulderInput>
  }

  export type MyBoulderCreateManyUserInput = {
    id?: number
    boulderId: string
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
  }

  export type MyBoulderUpdateWithoutUserInput = {
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    boulder?: BoulderUpdateOneRequiredWithoutClimbersNestedInput
    attempts?: AttemptUpdateManyWithoutBoulderNestedInput
  }

  export type MyBoulderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    boulderId?: StringFieldUpdateOperationsInput | string
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    attempts?: AttemptUncheckedUpdateManyWithoutBoulderNestedInput
  }

  export type MyBoulderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    boulderId?: StringFieldUpdateOperationsInput | string
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type AttemptCreateManyBoulderInput = {
    id?: number
    success: boolean
    createdAt?: Date | string
  }

  export type AttemptUpdateWithoutBoulderInput = {
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateWithoutBoulderInput = {
    id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateManyWithoutBoulderInput = {
    id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoulderCreateManySetterInput = {
    id: string
    name?: string | null
    position?: BoulderCreatepositionInput | number[]
    location: string
    room: string
    difficulty: number
    holdColors?: BoulderCreateholdColorsInput | string[]
    tags?: BoulderCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type BoulderUpdateWithoutSetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: BoulderUpdatepositionInput | number[]
    location?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    holdColors?: BoulderUpdateholdColorsInput | string[]
    tags?: BoulderUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climbers?: MyBoulderUpdateManyWithoutBoulderNestedInput
  }

  export type BoulderUncheckedUpdateWithoutSetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: BoulderUpdatepositionInput | number[]
    location?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    holdColors?: BoulderUpdateholdColorsInput | string[]
    tags?: BoulderUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climbers?: MyBoulderUncheckedUpdateManyWithoutBoulderNestedInput
  }

  export type BoulderUncheckedUpdateManyWithoutSetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: BoulderUpdatepositionInput | number[]
    location?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    holdColors?: BoulderUpdateholdColorsInput | string[]
    tags?: BoulderUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyBoulderCreateManyBoulderInput = {
    id?: number
    userId: number
    repeats: number
    done?: boolean
    difficulty: number
    rating: number
  }

  export type MyBoulderUpdateWithoutBoulderInput = {
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMyBouldersNestedInput
    attempts?: AttemptUpdateManyWithoutBoulderNestedInput
  }

  export type MyBoulderUncheckedUpdateWithoutBoulderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    attempts?: AttemptUncheckedUpdateManyWithoutBoulderNestedInput
  }

  export type MyBoulderUncheckedUpdateManyWithoutBoulderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    repeats?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}