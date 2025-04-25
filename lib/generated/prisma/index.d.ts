
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
 * Model Entry
 * 
 */
export type Entry = $Result.DefaultSelection<Prisma.$EntryPayload>
/**
 * Model Profileadmin
 * 
 */
export type Profileadmin = $Result.DefaultSelection<Prisma.$ProfileadminPayload>
/**
 * Model custemer
 * 
 */
export type custemer = $Result.DefaultSelection<Prisma.$custemerPayload>
/**
 * Model chatMessage
 * 
 */
export type chatMessage = $Result.DefaultSelection<Prisma.$chatMessagePayload>
/**
 * Model blogs
 * 
 */
export type blogs = $Result.DefaultSelection<Prisma.$blogsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entries
 * const entries = await prisma.entry.findMany()
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
   * // Fetch zero or more Entries
   * const entries = await prisma.entry.findMany()
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
   * `prisma.entry`: Exposes CRUD operations for the **Entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entries
    * const entries = await prisma.entry.findMany()
    * ```
    */
  get entry(): Prisma.EntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileadmin`: Exposes CRUD operations for the **Profileadmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profileadmins
    * const profileadmins = await prisma.profileadmin.findMany()
    * ```
    */
  get profileadmin(): Prisma.ProfileadminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.custemer`: Exposes CRUD operations for the **custemer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Custemers
    * const custemers = await prisma.custemer.findMany()
    * ```
    */
  get custemer(): Prisma.custemerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **chatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.chatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogs`: Exposes CRUD operations for the **blogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blogs.findMany()
    * ```
    */
  get blogs(): Prisma.blogsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Entry: 'Entry',
    Profileadmin: 'Profileadmin',
    custemer: 'custemer',
    chatMessage: 'chatMessage',
    blogs: 'blogs'
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
      modelProps: "entry" | "profileadmin" | "custemer" | "chatMessage" | "blogs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Entry: {
        payload: Prisma.$EntryPayload<ExtArgs>
        fields: Prisma.EntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findFirst: {
            args: Prisma.EntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findMany: {
            args: Prisma.EntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          create: {
            args: Prisma.EntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          createMany: {
            args: Prisma.EntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          delete: {
            args: Prisma.EntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          update: {
            args: Prisma.EntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          deleteMany: {
            args: Prisma.EntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          upsert: {
            args: Prisma.EntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          aggregate: {
            args: Prisma.EntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntry>
          }
          groupBy: {
            args: Prisma.EntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntryCountArgs<ExtArgs>
            result: $Utils.Optional<EntryCountAggregateOutputType> | number
          }
        }
      }
      Profileadmin: {
        payload: Prisma.$ProfileadminPayload<ExtArgs>
        fields: Prisma.ProfileadminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileadminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileadminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload>
          }
          findFirst: {
            args: Prisma.ProfileadminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileadminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload>
          }
          findMany: {
            args: Prisma.ProfileadminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload>[]
          }
          create: {
            args: Prisma.ProfileadminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload>
          }
          createMany: {
            args: Prisma.ProfileadminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileadminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload>[]
          }
          delete: {
            args: Prisma.ProfileadminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload>
          }
          update: {
            args: Prisma.ProfileadminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload>
          }
          deleteMany: {
            args: Prisma.ProfileadminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileadminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileadminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload>[]
          }
          upsert: {
            args: Prisma.ProfileadminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileadminPayload>
          }
          aggregate: {
            args: Prisma.ProfileadminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileadmin>
          }
          groupBy: {
            args: Prisma.ProfileadminGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileadminGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileadminCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileadminCountAggregateOutputType> | number
          }
        }
      }
      custemer: {
        payload: Prisma.$custemerPayload<ExtArgs>
        fields: Prisma.custemerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.custemerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.custemerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload>
          }
          findFirst: {
            args: Prisma.custemerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.custemerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload>
          }
          findMany: {
            args: Prisma.custemerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload>[]
          }
          create: {
            args: Prisma.custemerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload>
          }
          createMany: {
            args: Prisma.custemerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.custemerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload>[]
          }
          delete: {
            args: Prisma.custemerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload>
          }
          update: {
            args: Prisma.custemerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload>
          }
          deleteMany: {
            args: Prisma.custemerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.custemerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.custemerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload>[]
          }
          upsert: {
            args: Prisma.custemerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custemerPayload>
          }
          aggregate: {
            args: Prisma.CustemerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustemer>
          }
          groupBy: {
            args: Prisma.custemerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustemerGroupByOutputType>[]
          }
          count: {
            args: Prisma.custemerCountArgs<ExtArgs>
            result: $Utils.Optional<CustemerCountAggregateOutputType> | number
          }
        }
      }
      chatMessage: {
        payload: Prisma.$chatMessagePayload<ExtArgs>
        fields: Prisma.chatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          findFirst: {
            args: Prisma.chatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          findMany: {
            args: Prisma.chatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>[]
          }
          create: {
            args: Prisma.chatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          createMany: {
            args: Prisma.chatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>[]
          }
          delete: {
            args: Prisma.chatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          update: {
            args: Prisma.chatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          deleteMany: {
            args: Prisma.chatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>[]
          }
          upsert: {
            args: Prisma.chatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.chatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      blogs: {
        payload: Prisma.$blogsPayload<ExtArgs>
        fields: Prisma.blogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          findFirst: {
            args: Prisma.blogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          findMany: {
            args: Prisma.blogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>[]
          }
          create: {
            args: Prisma.blogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          createMany: {
            args: Prisma.blogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.blogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>[]
          }
          delete: {
            args: Prisma.blogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          update: {
            args: Prisma.blogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          deleteMany: {
            args: Prisma.blogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.blogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>[]
          }
          upsert: {
            args: Prisma.blogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          aggregate: {
            args: Prisma.BlogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogs>
          }
          groupBy: {
            args: Prisma.blogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.blogsCountArgs<ExtArgs>
            result: $Utils.Optional<BlogsCountAggregateOutputType> | number
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
    entry?: EntryOmit
    profileadmin?: ProfileadminOmit
    custemer?: custemerOmit
    chatMessage?: chatMessageOmit
    blogs?: blogsOmit
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
   * Count Type CustemerCountOutputType
   */

  export type CustemerCountOutputType = {
    chatMessage: number
  }

  export type CustemerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | CustemerCountOutputTypeCountChatMessageArgs
  }

  // Custom InputTypes
  /**
   * CustemerCountOutputType without action
   */
  export type CustemerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustemerCountOutputType
     */
    select?: CustemerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustemerCountOutputType without action
   */
  export type CustemerCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Entry
   */

  export type AggregateEntry = {
    _count: EntryCountAggregateOutputType | null
    _avg: EntryAvgAggregateOutputType | null
    _sum: EntrySumAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  export type EntryAvgAggregateOutputType = {
    id: number | null
    roomPrice: number | null
    roomFloor: number | null
  }

  export type EntrySumAggregateOutputType = {
    id: number | null
    roomPrice: number | null
    roomFloor: number | null
  }

  export type EntryMinAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    roomType: string | null
    roomFor: string | null
    roomDetail: string | null
    roomPrice: number | null
    roomImage1: string | null
    roomImage2: string | null
    roomImage3: string | null
    roomFloor: number | null
    createdAt: Date | null
    tack: boolean | null
  }

  export type EntryMaxAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    roomType: string | null
    roomFor: string | null
    roomDetail: string | null
    roomPrice: number | null
    roomImage1: string | null
    roomImage2: string | null
    roomImage3: string | null
    roomFloor: number | null
    createdAt: Date | null
    tack: boolean | null
  }

  export type EntryCountAggregateOutputType = {
    id: number
    roomNumber: number
    roomType: number
    roomFor: number
    roomDetail: number
    roomPrice: number
    roomImage1: number
    roomImage2: number
    roomImage3: number
    roomFloor: number
    createdAt: number
    tack: number
    _all: number
  }


  export type EntryAvgAggregateInputType = {
    id?: true
    roomPrice?: true
    roomFloor?: true
  }

  export type EntrySumAggregateInputType = {
    id?: true
    roomPrice?: true
    roomFloor?: true
  }

  export type EntryMinAggregateInputType = {
    id?: true
    roomNumber?: true
    roomType?: true
    roomFor?: true
    roomDetail?: true
    roomPrice?: true
    roomImage1?: true
    roomImage2?: true
    roomImage3?: true
    roomFloor?: true
    createdAt?: true
    tack?: true
  }

  export type EntryMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    roomType?: true
    roomFor?: true
    roomDetail?: true
    roomPrice?: true
    roomImage1?: true
    roomImage2?: true
    roomImage3?: true
    roomFloor?: true
    createdAt?: true
    tack?: true
  }

  export type EntryCountAggregateInputType = {
    id?: true
    roomNumber?: true
    roomType?: true
    roomFor?: true
    roomDetail?: true
    roomPrice?: true
    roomImage1?: true
    roomImage2?: true
    roomImage3?: true
    roomFloor?: true
    createdAt?: true
    tack?: true
    _all?: true
  }

  export type EntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entry to aggregate.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entries
    **/
    _count?: true | EntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryMaxAggregateInputType
  }

  export type GetEntryAggregateType<T extends EntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntry[P]>
      : GetScalarType<T[P], AggregateEntry[P]>
  }




  export type EntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithAggregationInput | EntryOrderByWithAggregationInput[]
    by: EntryScalarFieldEnum[] | EntryScalarFieldEnum
    having?: EntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryCountAggregateInputType | true
    _avg?: EntryAvgAggregateInputType
    _sum?: EntrySumAggregateInputType
    _min?: EntryMinAggregateInputType
    _max?: EntryMaxAggregateInputType
  }

  export type EntryGroupByOutputType = {
    id: number
    roomNumber: string
    roomType: string
    roomFor: string
    roomDetail: string
    roomPrice: number
    roomImage1: string
    roomImage2: string
    roomImage3: string
    roomFloor: number
    createdAt: Date
    tack: boolean
    _count: EntryCountAggregateOutputType | null
    _avg: EntryAvgAggregateOutputType | null
    _sum: EntrySumAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  type GetEntryGroupByPayload<T extends EntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryGroupByOutputType[P]>
            : GetScalarType<T[P], EntryGroupByOutputType[P]>
        }
      >
    >


  export type EntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    roomType?: boolean
    roomFor?: boolean
    roomDetail?: boolean
    roomPrice?: boolean
    roomImage1?: boolean
    roomImage2?: boolean
    roomImage3?: boolean
    roomFloor?: boolean
    createdAt?: boolean
    tack?: boolean
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    roomType?: boolean
    roomFor?: boolean
    roomDetail?: boolean
    roomPrice?: boolean
    roomImage1?: boolean
    roomImage2?: boolean
    roomImage3?: boolean
    roomFloor?: boolean
    createdAt?: boolean
    tack?: boolean
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    roomType?: boolean
    roomFor?: boolean
    roomDetail?: boolean
    roomPrice?: boolean
    roomImage1?: boolean
    roomImage2?: boolean
    roomImage3?: boolean
    roomFloor?: boolean
    createdAt?: boolean
    tack?: boolean
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectScalar = {
    id?: boolean
    roomNumber?: boolean
    roomType?: boolean
    roomFor?: boolean
    roomDetail?: boolean
    roomPrice?: boolean
    roomImage1?: boolean
    roomImage2?: boolean
    roomImage3?: boolean
    roomFloor?: boolean
    createdAt?: boolean
    tack?: boolean
  }

  export type EntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "roomType" | "roomFor" | "roomDetail" | "roomPrice" | "roomImage1" | "roomImage2" | "roomImage3" | "roomFloor" | "createdAt" | "tack", ExtArgs["result"]["entry"]>

  export type $EntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: string
      roomType: string
      roomFor: string
      roomDetail: string
      roomPrice: number
      roomImage1: string
      roomImage2: string
      roomImage3: string
      roomFloor: number
      createdAt: Date
      tack: boolean
    }, ExtArgs["result"]["entry"]>
    composites: {}
  }

  type EntryGetPayload<S extends boolean | null | undefined | EntryDefaultArgs> = $Result.GetResult<Prisma.$EntryPayload, S>

  type EntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntryCountAggregateInputType | true
    }

  export interface EntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entry'], meta: { name: 'Entry' } }
    /**
     * Find zero or one Entry that matches the filter.
     * @param {EntryFindUniqueArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntryFindUniqueArgs>(args: SelectSubset<T, EntryFindUniqueArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntryFindUniqueOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntryFindUniqueOrThrowArgs>(args: SelectSubset<T, EntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntryFindFirstArgs>(args?: SelectSubset<T, EntryFindFirstArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntryFindFirstOrThrowArgs>(args?: SelectSubset<T, EntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entries
     * const entries = await prisma.entry.findMany()
     * 
     * // Get first 10 Entries
     * const entries = await prisma.entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryWithIdOnly = await prisma.entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntryFindManyArgs>(args?: SelectSubset<T, EntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entry.
     * @param {EntryCreateArgs} args - Arguments to create a Entry.
     * @example
     * // Create one Entry
     * const Entry = await prisma.entry.create({
     *   data: {
     *     // ... data to create a Entry
     *   }
     * })
     * 
     */
    create<T extends EntryCreateArgs>(args: SelectSubset<T, EntryCreateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entries.
     * @param {EntryCreateManyArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntryCreateManyArgs>(args?: SelectSubset<T, EntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entries and returns the data saved in the database.
     * @param {EntryCreateManyAndReturnArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntryCreateManyAndReturnArgs>(args?: SelectSubset<T, EntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entry.
     * @param {EntryDeleteArgs} args - Arguments to delete one Entry.
     * @example
     * // Delete one Entry
     * const Entry = await prisma.entry.delete({
     *   where: {
     *     // ... filter to delete one Entry
     *   }
     * })
     * 
     */
    delete<T extends EntryDeleteArgs>(args: SelectSubset<T, EntryDeleteArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entry.
     * @param {EntryUpdateArgs} args - Arguments to update one Entry.
     * @example
     * // Update one Entry
     * const entry = await prisma.entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntryUpdateArgs>(args: SelectSubset<T, EntryUpdateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entries.
     * @param {EntryDeleteManyArgs} args - Arguments to filter Entries to delete.
     * @example
     * // Delete a few Entries
     * const { count } = await prisma.entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntryDeleteManyArgs>(args?: SelectSubset<T, EntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntryUpdateManyArgs>(args: SelectSubset<T, EntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries and returns the data updated in the database.
     * @param {EntryUpdateManyAndReturnArgs} args - Arguments to update many Entries.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.updateManyAndReturn({
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
    updateManyAndReturn<T extends EntryUpdateManyAndReturnArgs>(args: SelectSubset<T, EntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entry.
     * @param {EntryUpsertArgs} args - Arguments to update or create a Entry.
     * @example
     * // Update or create a Entry
     * const entry = await prisma.entry.upsert({
     *   create: {
     *     // ... data to create a Entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entry we want to update
     *   }
     * })
     */
    upsert<T extends EntryUpsertArgs>(args: SelectSubset<T, EntryUpsertArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryCountArgs} args - Arguments to filter Entries to count.
     * @example
     * // Count the number of Entries
     * const count = await prisma.entry.count({
     *   where: {
     *     // ... the filter for the Entries we want to count
     *   }
     * })
    **/
    count<T extends EntryCountArgs>(
      args?: Subset<T, EntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntryAggregateArgs>(args: Subset<T, EntryAggregateArgs>): Prisma.PrismaPromise<GetEntryAggregateType<T>>

    /**
     * Group by Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryGroupByArgs} args - Group by arguments.
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
      T extends EntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryGroupByArgs['orderBy'] }
        : { orderBy?: EntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entry model
   */
  readonly fields: EntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Entry model
   */
  interface EntryFieldRefs {
    readonly id: FieldRef<"Entry", 'Int'>
    readonly roomNumber: FieldRef<"Entry", 'String'>
    readonly roomType: FieldRef<"Entry", 'String'>
    readonly roomFor: FieldRef<"Entry", 'String'>
    readonly roomDetail: FieldRef<"Entry", 'String'>
    readonly roomPrice: FieldRef<"Entry", 'Float'>
    readonly roomImage1: FieldRef<"Entry", 'String'>
    readonly roomImage2: FieldRef<"Entry", 'String'>
    readonly roomImage3: FieldRef<"Entry", 'String'>
    readonly roomFloor: FieldRef<"Entry", 'Int'>
    readonly createdAt: FieldRef<"Entry", 'DateTime'>
    readonly tack: FieldRef<"Entry", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Entry findUnique
   */
  export type EntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findUniqueOrThrow
   */
  export type EntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findFirst
   */
  export type EntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findFirstOrThrow
   */
  export type EntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findMany
   */
  export type EntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter, which Entries to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry create
   */
  export type EntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data needed to create a Entry.
     */
    data: XOR<EntryCreateInput, EntryUncheckedCreateInput>
  }

  /**
   * Entry createMany
   */
  export type EntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entry createManyAndReturn
   */
  export type EntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entry update
   */
  export type EntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data needed to update a Entry.
     */
    data: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
    /**
     * Choose, which Entry to update.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry updateMany
   */
  export type EntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
  }

  /**
   * Entry updateManyAndReturn
   */
  export type EntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
  }

  /**
   * Entry upsert
   */
  export type EntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The filter to search for the Entry to update in case it exists.
     */
    where: EntryWhereUniqueInput
    /**
     * In case the Entry found by the `where` argument doesn't exist, create a new Entry with this data.
     */
    create: XOR<EntryCreateInput, EntryUncheckedCreateInput>
    /**
     * In case the Entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
  }

  /**
   * Entry delete
   */
  export type EntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Filter which Entry to delete.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry deleteMany
   */
  export type EntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entries to delete
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to delete.
     */
    limit?: number
  }

  /**
   * Entry without action
   */
  export type EntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
  }


  /**
   * Model Profileadmin
   */

  export type AggregateProfileadmin = {
    _count: ProfileadminCountAggregateOutputType | null
    _avg: ProfileadminAvgAggregateOutputType | null
    _sum: ProfileadminSumAggregateOutputType | null
    _min: ProfileadminMinAggregateOutputType | null
    _max: ProfileadminMaxAggregateOutputType | null
  }

  export type ProfileadminAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfileadminSumAggregateOutputType = {
    id: number | null
  }

  export type ProfileadminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    image: string | null
    auth: boolean | null
  }

  export type ProfileadminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    image: string | null
    auth: boolean | null
  }

  export type ProfileadminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    image: number
    auth: number
    _all: number
  }


  export type ProfileadminAvgAggregateInputType = {
    id?: true
  }

  export type ProfileadminSumAggregateInputType = {
    id?: true
  }

  export type ProfileadminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    image?: true
    auth?: true
  }

  export type ProfileadminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    image?: true
    auth?: true
  }

  export type ProfileadminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    image?: true
    auth?: true
    _all?: true
  }

  export type ProfileadminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profileadmin to aggregate.
     */
    where?: ProfileadminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profileadmins to fetch.
     */
    orderBy?: ProfileadminOrderByWithRelationInput | ProfileadminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileadminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profileadmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profileadmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profileadmins
    **/
    _count?: true | ProfileadminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileadminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileadminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileadminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileadminMaxAggregateInputType
  }

  export type GetProfileadminAggregateType<T extends ProfileadminAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileadmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileadmin[P]>
      : GetScalarType<T[P], AggregateProfileadmin[P]>
  }




  export type ProfileadminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileadminWhereInput
    orderBy?: ProfileadminOrderByWithAggregationInput | ProfileadminOrderByWithAggregationInput[]
    by: ProfileadminScalarFieldEnum[] | ProfileadminScalarFieldEnum
    having?: ProfileadminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileadminCountAggregateInputType | true
    _avg?: ProfileadminAvgAggregateInputType
    _sum?: ProfileadminSumAggregateInputType
    _min?: ProfileadminMinAggregateInputType
    _max?: ProfileadminMaxAggregateInputType
  }

  export type ProfileadminGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    password: string
    image: string
    auth: boolean
    _count: ProfileadminCountAggregateOutputType | null
    _avg: ProfileadminAvgAggregateOutputType | null
    _sum: ProfileadminSumAggregateOutputType | null
    _min: ProfileadminMinAggregateOutputType | null
    _max: ProfileadminMaxAggregateOutputType | null
  }

  type GetProfileadminGroupByPayload<T extends ProfileadminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileadminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileadminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileadminGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileadminGroupByOutputType[P]>
        }
      >
    >


  export type ProfileadminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    image?: boolean
    auth?: boolean
  }, ExtArgs["result"]["profileadmin"]>

  export type ProfileadminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    image?: boolean
    auth?: boolean
  }, ExtArgs["result"]["profileadmin"]>

  export type ProfileadminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    image?: boolean
    auth?: boolean
  }, ExtArgs["result"]["profileadmin"]>

  export type ProfileadminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    image?: boolean
    auth?: boolean
  }

  export type ProfileadminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "image" | "auth", ExtArgs["result"]["profileadmin"]>

  export type $ProfileadminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profileadmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      password: string
      image: string
      auth: boolean
    }, ExtArgs["result"]["profileadmin"]>
    composites: {}
  }

  type ProfileadminGetPayload<S extends boolean | null | undefined | ProfileadminDefaultArgs> = $Result.GetResult<Prisma.$ProfileadminPayload, S>

  type ProfileadminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileadminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileadminCountAggregateInputType | true
    }

  export interface ProfileadminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profileadmin'], meta: { name: 'Profileadmin' } }
    /**
     * Find zero or one Profileadmin that matches the filter.
     * @param {ProfileadminFindUniqueArgs} args - Arguments to find a Profileadmin
     * @example
     * // Get one Profileadmin
     * const profileadmin = await prisma.profileadmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileadminFindUniqueArgs>(args: SelectSubset<T, ProfileadminFindUniqueArgs<ExtArgs>>): Prisma__ProfileadminClient<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profileadmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileadminFindUniqueOrThrowArgs} args - Arguments to find a Profileadmin
     * @example
     * // Get one Profileadmin
     * const profileadmin = await prisma.profileadmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileadminFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileadminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileadminClient<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profileadmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileadminFindFirstArgs} args - Arguments to find a Profileadmin
     * @example
     * // Get one Profileadmin
     * const profileadmin = await prisma.profileadmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileadminFindFirstArgs>(args?: SelectSubset<T, ProfileadminFindFirstArgs<ExtArgs>>): Prisma__ProfileadminClient<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profileadmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileadminFindFirstOrThrowArgs} args - Arguments to find a Profileadmin
     * @example
     * // Get one Profileadmin
     * const profileadmin = await prisma.profileadmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileadminFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileadminFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileadminClient<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profileadmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileadminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profileadmins
     * const profileadmins = await prisma.profileadmin.findMany()
     * 
     * // Get first 10 Profileadmins
     * const profileadmins = await prisma.profileadmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileadminWithIdOnly = await prisma.profileadmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileadminFindManyArgs>(args?: SelectSubset<T, ProfileadminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profileadmin.
     * @param {ProfileadminCreateArgs} args - Arguments to create a Profileadmin.
     * @example
     * // Create one Profileadmin
     * const Profileadmin = await prisma.profileadmin.create({
     *   data: {
     *     // ... data to create a Profileadmin
     *   }
     * })
     * 
     */
    create<T extends ProfileadminCreateArgs>(args: SelectSubset<T, ProfileadminCreateArgs<ExtArgs>>): Prisma__ProfileadminClient<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profileadmins.
     * @param {ProfileadminCreateManyArgs} args - Arguments to create many Profileadmins.
     * @example
     * // Create many Profileadmins
     * const profileadmin = await prisma.profileadmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileadminCreateManyArgs>(args?: SelectSubset<T, ProfileadminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profileadmins and returns the data saved in the database.
     * @param {ProfileadminCreateManyAndReturnArgs} args - Arguments to create many Profileadmins.
     * @example
     * // Create many Profileadmins
     * const profileadmin = await prisma.profileadmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profileadmins and only return the `id`
     * const profileadminWithIdOnly = await prisma.profileadmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileadminCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileadminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profileadmin.
     * @param {ProfileadminDeleteArgs} args - Arguments to delete one Profileadmin.
     * @example
     * // Delete one Profileadmin
     * const Profileadmin = await prisma.profileadmin.delete({
     *   where: {
     *     // ... filter to delete one Profileadmin
     *   }
     * })
     * 
     */
    delete<T extends ProfileadminDeleteArgs>(args: SelectSubset<T, ProfileadminDeleteArgs<ExtArgs>>): Prisma__ProfileadminClient<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profileadmin.
     * @param {ProfileadminUpdateArgs} args - Arguments to update one Profileadmin.
     * @example
     * // Update one Profileadmin
     * const profileadmin = await prisma.profileadmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileadminUpdateArgs>(args: SelectSubset<T, ProfileadminUpdateArgs<ExtArgs>>): Prisma__ProfileadminClient<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profileadmins.
     * @param {ProfileadminDeleteManyArgs} args - Arguments to filter Profileadmins to delete.
     * @example
     * // Delete a few Profileadmins
     * const { count } = await prisma.profileadmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileadminDeleteManyArgs>(args?: SelectSubset<T, ProfileadminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profileadmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileadminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profileadmins
     * const profileadmin = await prisma.profileadmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileadminUpdateManyArgs>(args: SelectSubset<T, ProfileadminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profileadmins and returns the data updated in the database.
     * @param {ProfileadminUpdateManyAndReturnArgs} args - Arguments to update many Profileadmins.
     * @example
     * // Update many Profileadmins
     * const profileadmin = await prisma.profileadmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profileadmins and only return the `id`
     * const profileadminWithIdOnly = await prisma.profileadmin.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileadminUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileadminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profileadmin.
     * @param {ProfileadminUpsertArgs} args - Arguments to update or create a Profileadmin.
     * @example
     * // Update or create a Profileadmin
     * const profileadmin = await prisma.profileadmin.upsert({
     *   create: {
     *     // ... data to create a Profileadmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profileadmin we want to update
     *   }
     * })
     */
    upsert<T extends ProfileadminUpsertArgs>(args: SelectSubset<T, ProfileadminUpsertArgs<ExtArgs>>): Prisma__ProfileadminClient<$Result.GetResult<Prisma.$ProfileadminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profileadmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileadminCountArgs} args - Arguments to filter Profileadmins to count.
     * @example
     * // Count the number of Profileadmins
     * const count = await prisma.profileadmin.count({
     *   where: {
     *     // ... the filter for the Profileadmins we want to count
     *   }
     * })
    **/
    count<T extends ProfileadminCountArgs>(
      args?: Subset<T, ProfileadminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileadminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profileadmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileadminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileadminAggregateArgs>(args: Subset<T, ProfileadminAggregateArgs>): Prisma.PrismaPromise<GetProfileadminAggregateType<T>>

    /**
     * Group by Profileadmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileadminGroupByArgs} args - Group by arguments.
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
      T extends ProfileadminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileadminGroupByArgs['orderBy'] }
        : { orderBy?: ProfileadminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileadminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileadminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profileadmin model
   */
  readonly fields: ProfileadminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profileadmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileadminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Profileadmin model
   */
  interface ProfileadminFieldRefs {
    readonly id: FieldRef<"Profileadmin", 'Int'>
    readonly name: FieldRef<"Profileadmin", 'String'>
    readonly email: FieldRef<"Profileadmin", 'String'>
    readonly phone: FieldRef<"Profileadmin", 'String'>
    readonly password: FieldRef<"Profileadmin", 'String'>
    readonly image: FieldRef<"Profileadmin", 'String'>
    readonly auth: FieldRef<"Profileadmin", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Profileadmin findUnique
   */
  export type ProfileadminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * Filter, which Profileadmin to fetch.
     */
    where: ProfileadminWhereUniqueInput
  }

  /**
   * Profileadmin findUniqueOrThrow
   */
  export type ProfileadminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * Filter, which Profileadmin to fetch.
     */
    where: ProfileadminWhereUniqueInput
  }

  /**
   * Profileadmin findFirst
   */
  export type ProfileadminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * Filter, which Profileadmin to fetch.
     */
    where?: ProfileadminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profileadmins to fetch.
     */
    orderBy?: ProfileadminOrderByWithRelationInput | ProfileadminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profileadmins.
     */
    cursor?: ProfileadminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profileadmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profileadmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profileadmins.
     */
    distinct?: ProfileadminScalarFieldEnum | ProfileadminScalarFieldEnum[]
  }

  /**
   * Profileadmin findFirstOrThrow
   */
  export type ProfileadminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * Filter, which Profileadmin to fetch.
     */
    where?: ProfileadminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profileadmins to fetch.
     */
    orderBy?: ProfileadminOrderByWithRelationInput | ProfileadminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profileadmins.
     */
    cursor?: ProfileadminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profileadmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profileadmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profileadmins.
     */
    distinct?: ProfileadminScalarFieldEnum | ProfileadminScalarFieldEnum[]
  }

  /**
   * Profileadmin findMany
   */
  export type ProfileadminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * Filter, which Profileadmins to fetch.
     */
    where?: ProfileadminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profileadmins to fetch.
     */
    orderBy?: ProfileadminOrderByWithRelationInput | ProfileadminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profileadmins.
     */
    cursor?: ProfileadminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profileadmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profileadmins.
     */
    skip?: number
    distinct?: ProfileadminScalarFieldEnum | ProfileadminScalarFieldEnum[]
  }

  /**
   * Profileadmin create
   */
  export type ProfileadminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * The data needed to create a Profileadmin.
     */
    data: XOR<ProfileadminCreateInput, ProfileadminUncheckedCreateInput>
  }

  /**
   * Profileadmin createMany
   */
  export type ProfileadminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profileadmins.
     */
    data: ProfileadminCreateManyInput | ProfileadminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profileadmin createManyAndReturn
   */
  export type ProfileadminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * The data used to create many Profileadmins.
     */
    data: ProfileadminCreateManyInput | ProfileadminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profileadmin update
   */
  export type ProfileadminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * The data needed to update a Profileadmin.
     */
    data: XOR<ProfileadminUpdateInput, ProfileadminUncheckedUpdateInput>
    /**
     * Choose, which Profileadmin to update.
     */
    where: ProfileadminWhereUniqueInput
  }

  /**
   * Profileadmin updateMany
   */
  export type ProfileadminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profileadmins.
     */
    data: XOR<ProfileadminUpdateManyMutationInput, ProfileadminUncheckedUpdateManyInput>
    /**
     * Filter which Profileadmins to update
     */
    where?: ProfileadminWhereInput
    /**
     * Limit how many Profileadmins to update.
     */
    limit?: number
  }

  /**
   * Profileadmin updateManyAndReturn
   */
  export type ProfileadminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * The data used to update Profileadmins.
     */
    data: XOR<ProfileadminUpdateManyMutationInput, ProfileadminUncheckedUpdateManyInput>
    /**
     * Filter which Profileadmins to update
     */
    where?: ProfileadminWhereInput
    /**
     * Limit how many Profileadmins to update.
     */
    limit?: number
  }

  /**
   * Profileadmin upsert
   */
  export type ProfileadminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * The filter to search for the Profileadmin to update in case it exists.
     */
    where: ProfileadminWhereUniqueInput
    /**
     * In case the Profileadmin found by the `where` argument doesn't exist, create a new Profileadmin with this data.
     */
    create: XOR<ProfileadminCreateInput, ProfileadminUncheckedCreateInput>
    /**
     * In case the Profileadmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileadminUpdateInput, ProfileadminUncheckedUpdateInput>
  }

  /**
   * Profileadmin delete
   */
  export type ProfileadminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
    /**
     * Filter which Profileadmin to delete.
     */
    where: ProfileadminWhereUniqueInput
  }

  /**
   * Profileadmin deleteMany
   */
  export type ProfileadminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profileadmins to delete
     */
    where?: ProfileadminWhereInput
    /**
     * Limit how many Profileadmins to delete.
     */
    limit?: number
  }

  /**
   * Profileadmin without action
   */
  export type ProfileadminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profileadmin
     */
    select?: ProfileadminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profileadmin
     */
    omit?: ProfileadminOmit<ExtArgs> | null
  }


  /**
   * Model custemer
   */

  export type AggregateCustemer = {
    _count: CustemerCountAggregateOutputType | null
    _min: CustemerMinAggregateOutputType | null
    _max: CustemerMaxAggregateOutputType | null
  }

  export type CustemerMinAggregateOutputType = {
    id: string | null
    fName: string | null
    email: string | null
    address: string | null
    coutery: string | null
    numbers: string | null
    numFamily: string | null
    rNumber: string | null
    checkIn: string | null
    checkOut: string | null
    access: boolean | null
  }

  export type CustemerMaxAggregateOutputType = {
    id: string | null
    fName: string | null
    email: string | null
    address: string | null
    coutery: string | null
    numbers: string | null
    numFamily: string | null
    rNumber: string | null
    checkIn: string | null
    checkOut: string | null
    access: boolean | null
  }

  export type CustemerCountAggregateOutputType = {
    id: number
    fName: number
    email: number
    address: number
    coutery: number
    numbers: number
    numFamily: number
    rNumber: number
    checkIn: number
    checkOut: number
    access: number
    _all: number
  }


  export type CustemerMinAggregateInputType = {
    id?: true
    fName?: true
    email?: true
    address?: true
    coutery?: true
    numbers?: true
    numFamily?: true
    rNumber?: true
    checkIn?: true
    checkOut?: true
    access?: true
  }

  export type CustemerMaxAggregateInputType = {
    id?: true
    fName?: true
    email?: true
    address?: true
    coutery?: true
    numbers?: true
    numFamily?: true
    rNumber?: true
    checkIn?: true
    checkOut?: true
    access?: true
  }

  export type CustemerCountAggregateInputType = {
    id?: true
    fName?: true
    email?: true
    address?: true
    coutery?: true
    numbers?: true
    numFamily?: true
    rNumber?: true
    checkIn?: true
    checkOut?: true
    access?: true
    _all?: true
  }

  export type CustemerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which custemer to aggregate.
     */
    where?: custemerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custemers to fetch.
     */
    orderBy?: custemerOrderByWithRelationInput | custemerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: custemerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custemers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custemers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned custemers
    **/
    _count?: true | CustemerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustemerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustemerMaxAggregateInputType
  }

  export type GetCustemerAggregateType<T extends CustemerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustemer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustemer[P]>
      : GetScalarType<T[P], AggregateCustemer[P]>
  }




  export type custemerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: custemerWhereInput
    orderBy?: custemerOrderByWithAggregationInput | custemerOrderByWithAggregationInput[]
    by: CustemerScalarFieldEnum[] | CustemerScalarFieldEnum
    having?: custemerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustemerCountAggregateInputType | true
    _min?: CustemerMinAggregateInputType
    _max?: CustemerMaxAggregateInputType
  }

  export type CustemerGroupByOutputType = {
    id: string
    fName: string
    email: string
    address: string
    coutery: string
    numbers: string
    numFamily: string
    rNumber: string
    checkIn: string
    checkOut: string
    access: boolean
    _count: CustemerCountAggregateOutputType | null
    _min: CustemerMinAggregateOutputType | null
    _max: CustemerMaxAggregateOutputType | null
  }

  type GetCustemerGroupByPayload<T extends custemerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustemerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustemerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustemerGroupByOutputType[P]>
            : GetScalarType<T[P], CustemerGroupByOutputType[P]>
        }
      >
    >


  export type custemerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fName?: boolean
    email?: boolean
    address?: boolean
    coutery?: boolean
    numbers?: boolean
    numFamily?: boolean
    rNumber?: boolean
    checkIn?: boolean
    checkOut?: boolean
    access?: boolean
    chatMessage?: boolean | custemer$chatMessageArgs<ExtArgs>
    _count?: boolean | CustemerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["custemer"]>

  export type custemerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fName?: boolean
    email?: boolean
    address?: boolean
    coutery?: boolean
    numbers?: boolean
    numFamily?: boolean
    rNumber?: boolean
    checkIn?: boolean
    checkOut?: boolean
    access?: boolean
  }, ExtArgs["result"]["custemer"]>

  export type custemerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fName?: boolean
    email?: boolean
    address?: boolean
    coutery?: boolean
    numbers?: boolean
    numFamily?: boolean
    rNumber?: boolean
    checkIn?: boolean
    checkOut?: boolean
    access?: boolean
  }, ExtArgs["result"]["custemer"]>

  export type custemerSelectScalar = {
    id?: boolean
    fName?: boolean
    email?: boolean
    address?: boolean
    coutery?: boolean
    numbers?: boolean
    numFamily?: boolean
    rNumber?: boolean
    checkIn?: boolean
    checkOut?: boolean
    access?: boolean
  }

  export type custemerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fName" | "email" | "address" | "coutery" | "numbers" | "numFamily" | "rNumber" | "checkIn" | "checkOut" | "access", ExtArgs["result"]["custemer"]>
  export type custemerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | custemer$chatMessageArgs<ExtArgs>
    _count?: boolean | CustemerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type custemerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type custemerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $custemerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "custemer"
    objects: {
      chatMessage: Prisma.$chatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fName: string
      email: string
      address: string
      coutery: string
      numbers: string
      numFamily: string
      rNumber: string
      checkIn: string
      checkOut: string
      access: boolean
    }, ExtArgs["result"]["custemer"]>
    composites: {}
  }

  type custemerGetPayload<S extends boolean | null | undefined | custemerDefaultArgs> = $Result.GetResult<Prisma.$custemerPayload, S>

  type custemerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<custemerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustemerCountAggregateInputType | true
    }

  export interface custemerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['custemer'], meta: { name: 'custemer' } }
    /**
     * Find zero or one Custemer that matches the filter.
     * @param {custemerFindUniqueArgs} args - Arguments to find a Custemer
     * @example
     * // Get one Custemer
     * const custemer = await prisma.custemer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends custemerFindUniqueArgs>(args: SelectSubset<T, custemerFindUniqueArgs<ExtArgs>>): Prisma__custemerClient<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Custemer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {custemerFindUniqueOrThrowArgs} args - Arguments to find a Custemer
     * @example
     * // Get one Custemer
     * const custemer = await prisma.custemer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends custemerFindUniqueOrThrowArgs>(args: SelectSubset<T, custemerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__custemerClient<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Custemer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custemerFindFirstArgs} args - Arguments to find a Custemer
     * @example
     * // Get one Custemer
     * const custemer = await prisma.custemer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends custemerFindFirstArgs>(args?: SelectSubset<T, custemerFindFirstArgs<ExtArgs>>): Prisma__custemerClient<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Custemer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custemerFindFirstOrThrowArgs} args - Arguments to find a Custemer
     * @example
     * // Get one Custemer
     * const custemer = await prisma.custemer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends custemerFindFirstOrThrowArgs>(args?: SelectSubset<T, custemerFindFirstOrThrowArgs<ExtArgs>>): Prisma__custemerClient<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Custemers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custemerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Custemers
     * const custemers = await prisma.custemer.findMany()
     * 
     * // Get first 10 Custemers
     * const custemers = await prisma.custemer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const custemerWithIdOnly = await prisma.custemer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends custemerFindManyArgs>(args?: SelectSubset<T, custemerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Custemer.
     * @param {custemerCreateArgs} args - Arguments to create a Custemer.
     * @example
     * // Create one Custemer
     * const Custemer = await prisma.custemer.create({
     *   data: {
     *     // ... data to create a Custemer
     *   }
     * })
     * 
     */
    create<T extends custemerCreateArgs>(args: SelectSubset<T, custemerCreateArgs<ExtArgs>>): Prisma__custemerClient<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Custemers.
     * @param {custemerCreateManyArgs} args - Arguments to create many Custemers.
     * @example
     * // Create many Custemers
     * const custemer = await prisma.custemer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends custemerCreateManyArgs>(args?: SelectSubset<T, custemerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Custemers and returns the data saved in the database.
     * @param {custemerCreateManyAndReturnArgs} args - Arguments to create many Custemers.
     * @example
     * // Create many Custemers
     * const custemer = await prisma.custemer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Custemers and only return the `id`
     * const custemerWithIdOnly = await prisma.custemer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends custemerCreateManyAndReturnArgs>(args?: SelectSubset<T, custemerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Custemer.
     * @param {custemerDeleteArgs} args - Arguments to delete one Custemer.
     * @example
     * // Delete one Custemer
     * const Custemer = await prisma.custemer.delete({
     *   where: {
     *     // ... filter to delete one Custemer
     *   }
     * })
     * 
     */
    delete<T extends custemerDeleteArgs>(args: SelectSubset<T, custemerDeleteArgs<ExtArgs>>): Prisma__custemerClient<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Custemer.
     * @param {custemerUpdateArgs} args - Arguments to update one Custemer.
     * @example
     * // Update one Custemer
     * const custemer = await prisma.custemer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends custemerUpdateArgs>(args: SelectSubset<T, custemerUpdateArgs<ExtArgs>>): Prisma__custemerClient<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Custemers.
     * @param {custemerDeleteManyArgs} args - Arguments to filter Custemers to delete.
     * @example
     * // Delete a few Custemers
     * const { count } = await prisma.custemer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends custemerDeleteManyArgs>(args?: SelectSubset<T, custemerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Custemers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custemerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Custemers
     * const custemer = await prisma.custemer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends custemerUpdateManyArgs>(args: SelectSubset<T, custemerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Custemers and returns the data updated in the database.
     * @param {custemerUpdateManyAndReturnArgs} args - Arguments to update many Custemers.
     * @example
     * // Update many Custemers
     * const custemer = await prisma.custemer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Custemers and only return the `id`
     * const custemerWithIdOnly = await prisma.custemer.updateManyAndReturn({
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
    updateManyAndReturn<T extends custemerUpdateManyAndReturnArgs>(args: SelectSubset<T, custemerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Custemer.
     * @param {custemerUpsertArgs} args - Arguments to update or create a Custemer.
     * @example
     * // Update or create a Custemer
     * const custemer = await prisma.custemer.upsert({
     *   create: {
     *     // ... data to create a Custemer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Custemer we want to update
     *   }
     * })
     */
    upsert<T extends custemerUpsertArgs>(args: SelectSubset<T, custemerUpsertArgs<ExtArgs>>): Prisma__custemerClient<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Custemers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custemerCountArgs} args - Arguments to filter Custemers to count.
     * @example
     * // Count the number of Custemers
     * const count = await prisma.custemer.count({
     *   where: {
     *     // ... the filter for the Custemers we want to count
     *   }
     * })
    **/
    count<T extends custemerCountArgs>(
      args?: Subset<T, custemerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustemerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Custemer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustemerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustemerAggregateArgs>(args: Subset<T, CustemerAggregateArgs>): Prisma.PrismaPromise<GetCustemerAggregateType<T>>

    /**
     * Group by Custemer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custemerGroupByArgs} args - Group by arguments.
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
      T extends custemerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: custemerGroupByArgs['orderBy'] }
        : { orderBy?: custemerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, custemerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustemerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the custemer model
   */
  readonly fields: custemerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for custemer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__custemerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatMessage<T extends custemer$chatMessageArgs<ExtArgs> = {}>(args?: Subset<T, custemer$chatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the custemer model
   */
  interface custemerFieldRefs {
    readonly id: FieldRef<"custemer", 'String'>
    readonly fName: FieldRef<"custemer", 'String'>
    readonly email: FieldRef<"custemer", 'String'>
    readonly address: FieldRef<"custemer", 'String'>
    readonly coutery: FieldRef<"custemer", 'String'>
    readonly numbers: FieldRef<"custemer", 'String'>
    readonly numFamily: FieldRef<"custemer", 'String'>
    readonly rNumber: FieldRef<"custemer", 'String'>
    readonly checkIn: FieldRef<"custemer", 'String'>
    readonly checkOut: FieldRef<"custemer", 'String'>
    readonly access: FieldRef<"custemer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * custemer findUnique
   */
  export type custemerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    /**
     * Filter, which custemer to fetch.
     */
    where: custemerWhereUniqueInput
  }

  /**
   * custemer findUniqueOrThrow
   */
  export type custemerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    /**
     * Filter, which custemer to fetch.
     */
    where: custemerWhereUniqueInput
  }

  /**
   * custemer findFirst
   */
  export type custemerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    /**
     * Filter, which custemer to fetch.
     */
    where?: custemerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custemers to fetch.
     */
    orderBy?: custemerOrderByWithRelationInput | custemerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for custemers.
     */
    cursor?: custemerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custemers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custemers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of custemers.
     */
    distinct?: CustemerScalarFieldEnum | CustemerScalarFieldEnum[]
  }

  /**
   * custemer findFirstOrThrow
   */
  export type custemerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    /**
     * Filter, which custemer to fetch.
     */
    where?: custemerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custemers to fetch.
     */
    orderBy?: custemerOrderByWithRelationInput | custemerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for custemers.
     */
    cursor?: custemerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custemers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custemers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of custemers.
     */
    distinct?: CustemerScalarFieldEnum | CustemerScalarFieldEnum[]
  }

  /**
   * custemer findMany
   */
  export type custemerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    /**
     * Filter, which custemers to fetch.
     */
    where?: custemerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custemers to fetch.
     */
    orderBy?: custemerOrderByWithRelationInput | custemerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing custemers.
     */
    cursor?: custemerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custemers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custemers.
     */
    skip?: number
    distinct?: CustemerScalarFieldEnum | CustemerScalarFieldEnum[]
  }

  /**
   * custemer create
   */
  export type custemerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    /**
     * The data needed to create a custemer.
     */
    data: XOR<custemerCreateInput, custemerUncheckedCreateInput>
  }

  /**
   * custemer createMany
   */
  export type custemerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many custemers.
     */
    data: custemerCreateManyInput | custemerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * custemer createManyAndReturn
   */
  export type custemerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * The data used to create many custemers.
     */
    data: custemerCreateManyInput | custemerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * custemer update
   */
  export type custemerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    /**
     * The data needed to update a custemer.
     */
    data: XOR<custemerUpdateInput, custemerUncheckedUpdateInput>
    /**
     * Choose, which custemer to update.
     */
    where: custemerWhereUniqueInput
  }

  /**
   * custemer updateMany
   */
  export type custemerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update custemers.
     */
    data: XOR<custemerUpdateManyMutationInput, custemerUncheckedUpdateManyInput>
    /**
     * Filter which custemers to update
     */
    where?: custemerWhereInput
    /**
     * Limit how many custemers to update.
     */
    limit?: number
  }

  /**
   * custemer updateManyAndReturn
   */
  export type custemerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * The data used to update custemers.
     */
    data: XOR<custemerUpdateManyMutationInput, custemerUncheckedUpdateManyInput>
    /**
     * Filter which custemers to update
     */
    where?: custemerWhereInput
    /**
     * Limit how many custemers to update.
     */
    limit?: number
  }

  /**
   * custemer upsert
   */
  export type custemerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    /**
     * The filter to search for the custemer to update in case it exists.
     */
    where: custemerWhereUniqueInput
    /**
     * In case the custemer found by the `where` argument doesn't exist, create a new custemer with this data.
     */
    create: XOR<custemerCreateInput, custemerUncheckedCreateInput>
    /**
     * In case the custemer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<custemerUpdateInput, custemerUncheckedUpdateInput>
  }

  /**
   * custemer delete
   */
  export type custemerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    /**
     * Filter which custemer to delete.
     */
    where: custemerWhereUniqueInput
  }

  /**
   * custemer deleteMany
   */
  export type custemerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which custemers to delete
     */
    where?: custemerWhereInput
    /**
     * Limit how many custemers to delete.
     */
    limit?: number
  }

  /**
   * custemer.chatMessage
   */
  export type custemer$chatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    where?: chatMessageWhereInput
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    cursor?: chatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * custemer without action
   */
  export type custemerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
  }


  /**
   * Model chatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    employId: string | null
    custemerId: string | null
    from: string | null
    times: string | null
    dates: string | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    employId: string | null
    custemerId: string | null
    from: string | null
    times: string | null
    dates: string | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    content: number
    employId: number
    custemerId: number
    from: number
    times: number
    dates: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    content?: true
    employId?: true
    custemerId?: true
    from?: true
    times?: true
    dates?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    content?: true
    employId?: true
    custemerId?: true
    from?: true
    times?: true
    dates?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    content?: true
    employId?: true
    custemerId?: true
    from?: true
    times?: true
    dates?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatMessage to aggregate.
     */
    where?: chatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type chatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatMessageWhereInput
    orderBy?: chatMessageOrderByWithAggregationInput | chatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: chatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    content: string
    employId: string
    custemerId: string | null
    from: string
    times: string
    dates: string
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends chatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type chatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    employId?: boolean
    custemerId?: boolean
    from?: boolean
    times?: boolean
    dates?: boolean
    custemer?: boolean | chatMessage$custemerArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type chatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    employId?: boolean
    custemerId?: boolean
    from?: boolean
    times?: boolean
    dates?: boolean
    custemer?: boolean | chatMessage$custemerArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type chatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    employId?: boolean
    custemerId?: boolean
    from?: boolean
    times?: boolean
    dates?: boolean
    custemer?: boolean | chatMessage$custemerArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type chatMessageSelectScalar = {
    id?: boolean
    content?: boolean
    employId?: boolean
    custemerId?: boolean
    from?: boolean
    times?: boolean
    dates?: boolean
  }

  export type chatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "employId" | "custemerId" | "from" | "times" | "dates", ExtArgs["result"]["chatMessage"]>
  export type chatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    custemer?: boolean | chatMessage$custemerArgs<ExtArgs>
  }
  export type chatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    custemer?: boolean | chatMessage$custemerArgs<ExtArgs>
  }
  export type chatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    custemer?: boolean | chatMessage$custemerArgs<ExtArgs>
  }

  export type $chatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatMessage"
    objects: {
      custemer: Prisma.$custemerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      employId: string
      custemerId: string | null
      from: string
      times: string
      dates: string
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type chatMessageGetPayload<S extends boolean | null | undefined | chatMessageDefaultArgs> = $Result.GetResult<Prisma.$chatMessagePayload, S>

  type chatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface chatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatMessage'], meta: { name: 'chatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {chatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatMessageFindUniqueArgs>(args: SelectSubset<T, chatMessageFindUniqueArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, chatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatMessageFindFirstArgs>(args?: SelectSubset<T, chatMessageFindFirstArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, chatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatMessageFindManyArgs>(args?: SelectSubset<T, chatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {chatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends chatMessageCreateArgs>(args: SelectSubset<T, chatMessageCreateArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {chatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatMessageCreateManyArgs>(args?: SelectSubset<T, chatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {chatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, chatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {chatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends chatMessageDeleteArgs>(args: SelectSubset<T, chatMessageDeleteArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {chatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatMessageUpdateArgs>(args: SelectSubset<T, chatMessageUpdateArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {chatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatMessageDeleteManyArgs>(args?: SelectSubset<T, chatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatMessageUpdateManyArgs>(args: SelectSubset<T, chatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {chatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends chatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, chatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {chatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends chatMessageUpsertArgs>(args: SelectSubset<T, chatMessageUpsertArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends chatMessageCountArgs>(
      args?: Subset<T, chatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageGroupByArgs} args - Group by arguments.
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
      T extends chatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatMessageGroupByArgs['orderBy'] }
        : { orderBy?: chatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatMessage model
   */
  readonly fields: chatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    custemer<T extends chatMessage$custemerArgs<ExtArgs> = {}>(args?: Subset<T, chatMessage$custemerArgs<ExtArgs>>): Prisma__custemerClient<$Result.GetResult<Prisma.$custemerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the chatMessage model
   */
  interface chatMessageFieldRefs {
    readonly id: FieldRef<"chatMessage", 'String'>
    readonly content: FieldRef<"chatMessage", 'String'>
    readonly employId: FieldRef<"chatMessage", 'String'>
    readonly custemerId: FieldRef<"chatMessage", 'String'>
    readonly from: FieldRef<"chatMessage", 'String'>
    readonly times: FieldRef<"chatMessage", 'String'>
    readonly dates: FieldRef<"chatMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chatMessage findUnique
   */
  export type chatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessage to fetch.
     */
    where: chatMessageWhereUniqueInput
  }

  /**
   * chatMessage findUniqueOrThrow
   */
  export type chatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessage to fetch.
     */
    where: chatMessageWhereUniqueInput
  }

  /**
   * chatMessage findFirst
   */
  export type chatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessage to fetch.
     */
    where?: chatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatMessages.
     */
    cursor?: chatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * chatMessage findFirstOrThrow
   */
  export type chatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessage to fetch.
     */
    where?: chatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatMessages.
     */
    cursor?: chatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * chatMessage findMany
   */
  export type chatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessages to fetch.
     */
    where?: chatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatMessages.
     */
    cursor?: chatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * chatMessage create
   */
  export type chatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a chatMessage.
     */
    data: XOR<chatMessageCreateInput, chatMessageUncheckedCreateInput>
  }

  /**
   * chatMessage createMany
   */
  export type chatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatMessages.
     */
    data: chatMessageCreateManyInput | chatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatMessage createManyAndReturn
   */
  export type chatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many chatMessages.
     */
    data: chatMessageCreateManyInput | chatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatMessage update
   */
  export type chatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a chatMessage.
     */
    data: XOR<chatMessageUpdateInput, chatMessageUncheckedUpdateInput>
    /**
     * Choose, which chatMessage to update.
     */
    where: chatMessageWhereUniqueInput
  }

  /**
   * chatMessage updateMany
   */
  export type chatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatMessages.
     */
    data: XOR<chatMessageUpdateManyMutationInput, chatMessageUncheckedUpdateManyInput>
    /**
     * Filter which chatMessages to update
     */
    where?: chatMessageWhereInput
    /**
     * Limit how many chatMessages to update.
     */
    limit?: number
  }

  /**
   * chatMessage updateManyAndReturn
   */
  export type chatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * The data used to update chatMessages.
     */
    data: XOR<chatMessageUpdateManyMutationInput, chatMessageUncheckedUpdateManyInput>
    /**
     * Filter which chatMessages to update
     */
    where?: chatMessageWhereInput
    /**
     * Limit how many chatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatMessage upsert
   */
  export type chatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the chatMessage to update in case it exists.
     */
    where: chatMessageWhereUniqueInput
    /**
     * In case the chatMessage found by the `where` argument doesn't exist, create a new chatMessage with this data.
     */
    create: XOR<chatMessageCreateInput, chatMessageUncheckedCreateInput>
    /**
     * In case the chatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatMessageUpdateInput, chatMessageUncheckedUpdateInput>
  }

  /**
   * chatMessage delete
   */
  export type chatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter which chatMessage to delete.
     */
    where: chatMessageWhereUniqueInput
  }

  /**
   * chatMessage deleteMany
   */
  export type chatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatMessages to delete
     */
    where?: chatMessageWhereInput
    /**
     * Limit how many chatMessages to delete.
     */
    limit?: number
  }

  /**
   * chatMessage.custemer
   */
  export type chatMessage$custemerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custemer
     */
    select?: custemerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custemer
     */
    omit?: custemerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: custemerInclude<ExtArgs> | null
    where?: custemerWhereInput
  }

  /**
   * chatMessage without action
   */
  export type chatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
  }


  /**
   * Model blogs
   */

  export type AggregateBlogs = {
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  export type BlogsAvgAggregateOutputType = {
    id: number | null
  }

  export type BlogsSumAggregateOutputType = {
    id: number | null
  }

  export type BlogsMinAggregateOutputType = {
    id: number | null
    image: string | null
    titel: string | null
    detail: string | null
    date: string | null
  }

  export type BlogsMaxAggregateOutputType = {
    id: number | null
    image: string | null
    titel: string | null
    detail: string | null
    date: string | null
  }

  export type BlogsCountAggregateOutputType = {
    id: number
    image: number
    titel: number
    detail: number
    date: number
    _all: number
  }


  export type BlogsAvgAggregateInputType = {
    id?: true
  }

  export type BlogsSumAggregateInputType = {
    id?: true
  }

  export type BlogsMinAggregateInputType = {
    id?: true
    image?: true
    titel?: true
    detail?: true
    date?: true
  }

  export type BlogsMaxAggregateInputType = {
    id?: true
    image?: true
    titel?: true
    detail?: true
    date?: true
  }

  export type BlogsCountAggregateInputType = {
    id?: true
    image?: true
    titel?: true
    detail?: true
    date?: true
    _all?: true
  }

  export type BlogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogs to aggregate.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blogs
    **/
    _count?: true | BlogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogsMaxAggregateInputType
  }

  export type GetBlogsAggregateType<T extends BlogsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogs[P]>
      : GetScalarType<T[P], AggregateBlogs[P]>
  }




  export type blogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogsWhereInput
    orderBy?: blogsOrderByWithAggregationInput | blogsOrderByWithAggregationInput[]
    by: BlogsScalarFieldEnum[] | BlogsScalarFieldEnum
    having?: blogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogsCountAggregateInputType | true
    _avg?: BlogsAvgAggregateInputType
    _sum?: BlogsSumAggregateInputType
    _min?: BlogsMinAggregateInputType
    _max?: BlogsMaxAggregateInputType
  }

  export type BlogsGroupByOutputType = {
    id: number
    image: string
    titel: string
    detail: string
    date: string
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  type GetBlogsGroupByPayload<T extends blogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogsGroupByOutputType[P]>
            : GetScalarType<T[P], BlogsGroupByOutputType[P]>
        }
      >
    >


  export type blogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    titel?: boolean
    detail?: boolean
    date?: boolean
  }, ExtArgs["result"]["blogs"]>

  export type blogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    titel?: boolean
    detail?: boolean
    date?: boolean
  }, ExtArgs["result"]["blogs"]>

  export type blogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    titel?: boolean
    detail?: boolean
    date?: boolean
  }, ExtArgs["result"]["blogs"]>

  export type blogsSelectScalar = {
    id?: boolean
    image?: boolean
    titel?: boolean
    detail?: boolean
    date?: boolean
  }

  export type blogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "titel" | "detail" | "date", ExtArgs["result"]["blogs"]>

  export type $blogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      titel: string
      detail: string
      date: string
    }, ExtArgs["result"]["blogs"]>
    composites: {}
  }

  type blogsGetPayload<S extends boolean | null | undefined | blogsDefaultArgs> = $Result.GetResult<Prisma.$blogsPayload, S>

  type blogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogsCountAggregateInputType | true
    }

  export interface blogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blogs'], meta: { name: 'blogs' } }
    /**
     * Find zero or one Blogs that matches the filter.
     * @param {blogsFindUniqueArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blogsFindUniqueArgs>(args: SelectSubset<T, blogsFindUniqueArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blogsFindUniqueOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blogsFindUniqueOrThrowArgs>(args: SelectSubset<T, blogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blogsFindFirstArgs>(args?: SelectSubset<T, blogsFindFirstArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blogsFindFirstOrThrowArgs>(args?: SelectSubset<T, blogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blogs.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogsWithIdOnly = await prisma.blogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blogsFindManyArgs>(args?: SelectSubset<T, blogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blogs.
     * @param {blogsCreateArgs} args - Arguments to create a Blogs.
     * @example
     * // Create one Blogs
     * const Blogs = await prisma.blogs.create({
     *   data: {
     *     // ... data to create a Blogs
     *   }
     * })
     * 
     */
    create<T extends blogsCreateArgs>(args: SelectSubset<T, blogsCreateArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {blogsCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blogsCreateManyArgs>(args?: SelectSubset<T, blogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {blogsCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogsWithIdOnly = await prisma.blogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends blogsCreateManyAndReturnArgs>(args?: SelectSubset<T, blogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blogs.
     * @param {blogsDeleteArgs} args - Arguments to delete one Blogs.
     * @example
     * // Delete one Blogs
     * const Blogs = await prisma.blogs.delete({
     *   where: {
     *     // ... filter to delete one Blogs
     *   }
     * })
     * 
     */
    delete<T extends blogsDeleteArgs>(args: SelectSubset<T, blogsDeleteArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blogs.
     * @param {blogsUpdateArgs} args - Arguments to update one Blogs.
     * @example
     * // Update one Blogs
     * const blogs = await prisma.blogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blogsUpdateArgs>(args: SelectSubset<T, blogsUpdateArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {blogsDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blogsDeleteManyArgs>(args?: SelectSubset<T, blogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blogsUpdateManyArgs>(args: SelectSubset<T, blogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {blogsUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogsWithIdOnly = await prisma.blogs.updateManyAndReturn({
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
    updateManyAndReturn<T extends blogsUpdateManyAndReturnArgs>(args: SelectSubset<T, blogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blogs.
     * @param {blogsUpsertArgs} args - Arguments to update or create a Blogs.
     * @example
     * // Update or create a Blogs
     * const blogs = await prisma.blogs.upsert({
     *   create: {
     *     // ... data to create a Blogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogs we want to update
     *   }
     * })
     */
    upsert<T extends blogsUpsertArgs>(args: SelectSubset<T, blogsUpsertArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blogs.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends blogsCountArgs>(
      args?: Subset<T, blogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogsAggregateArgs>(args: Subset<T, BlogsAggregateArgs>): Prisma.PrismaPromise<GetBlogsAggregateType<T>>

    /**
     * Group by Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsGroupByArgs} args - Group by arguments.
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
      T extends blogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blogsGroupByArgs['orderBy'] }
        : { orderBy?: blogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, blogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blogs model
   */
  readonly fields: blogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the blogs model
   */
  interface blogsFieldRefs {
    readonly id: FieldRef<"blogs", 'Int'>
    readonly image: FieldRef<"blogs", 'String'>
    readonly titel: FieldRef<"blogs", 'String'>
    readonly detail: FieldRef<"blogs", 'String'>
    readonly date: FieldRef<"blogs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * blogs findUnique
   */
  export type blogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs findUniqueOrThrow
   */
  export type blogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs findFirst
   */
  export type blogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs findFirstOrThrow
   */
  export type blogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs findMany
   */
  export type blogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs create
   */
  export type blogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * The data needed to create a blogs.
     */
    data: XOR<blogsCreateInput, blogsUncheckedCreateInput>
  }

  /**
   * blogs createMany
   */
  export type blogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blogs.
     */
    data: blogsCreateManyInput | blogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blogs createManyAndReturn
   */
  export type blogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * The data used to create many blogs.
     */
    data: blogsCreateManyInput | blogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blogs update
   */
  export type blogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * The data needed to update a blogs.
     */
    data: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>
    /**
     * Choose, which blogs to update.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs updateMany
   */
  export type blogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blogs.
     */
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyInput>
    /**
     * Filter which blogs to update
     */
    where?: blogsWhereInput
    /**
     * Limit how many blogs to update.
     */
    limit?: number
  }

  /**
   * blogs updateManyAndReturn
   */
  export type blogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * The data used to update blogs.
     */
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyInput>
    /**
     * Filter which blogs to update
     */
    where?: blogsWhereInput
    /**
     * Limit how many blogs to update.
     */
    limit?: number
  }

  /**
   * blogs upsert
   */
  export type blogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * The filter to search for the blogs to update in case it exists.
     */
    where: blogsWhereUniqueInput
    /**
     * In case the blogs found by the `where` argument doesn't exist, create a new blogs with this data.
     */
    create: XOR<blogsCreateInput, blogsUncheckedCreateInput>
    /**
     * In case the blogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>
  }

  /**
   * blogs delete
   */
  export type blogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Filter which blogs to delete.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs deleteMany
   */
  export type blogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogs to delete
     */
    where?: blogsWhereInput
    /**
     * Limit how many blogs to delete.
     */
    limit?: number
  }

  /**
   * blogs without action
   */
  export type blogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
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


  export const EntryScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    roomType: 'roomType',
    roomFor: 'roomFor',
    roomDetail: 'roomDetail',
    roomPrice: 'roomPrice',
    roomImage1: 'roomImage1',
    roomImage2: 'roomImage2',
    roomImage3: 'roomImage3',
    roomFloor: 'roomFloor',
    createdAt: 'createdAt',
    tack: 'tack'
  };

  export type EntryScalarFieldEnum = (typeof EntryScalarFieldEnum)[keyof typeof EntryScalarFieldEnum]


  export const ProfileadminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    image: 'image',
    auth: 'auth'
  };

  export type ProfileadminScalarFieldEnum = (typeof ProfileadminScalarFieldEnum)[keyof typeof ProfileadminScalarFieldEnum]


  export const CustemerScalarFieldEnum: {
    id: 'id',
    fName: 'fName',
    email: 'email',
    address: 'address',
    coutery: 'coutery',
    numbers: 'numbers',
    numFamily: 'numFamily',
    rNumber: 'rNumber',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    access: 'access'
  };

  export type CustemerScalarFieldEnum = (typeof CustemerScalarFieldEnum)[keyof typeof CustemerScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    employId: 'employId',
    custemerId: 'custemerId',
    from: 'from',
    times: 'times',
    dates: 'dates'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const BlogsScalarFieldEnum: {
    id: 'id',
    image: 'image',
    titel: 'titel',
    detail: 'detail',
    date: 'date'
  };

  export type BlogsScalarFieldEnum = (typeof BlogsScalarFieldEnum)[keyof typeof BlogsScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type EntryWhereInput = {
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    id?: IntFilter<"Entry"> | number
    roomNumber?: StringFilter<"Entry"> | string
    roomType?: StringFilter<"Entry"> | string
    roomFor?: StringFilter<"Entry"> | string
    roomDetail?: StringFilter<"Entry"> | string
    roomPrice?: FloatFilter<"Entry"> | number
    roomImage1?: StringFilter<"Entry"> | string
    roomImage2?: StringFilter<"Entry"> | string
    roomImage3?: StringFilter<"Entry"> | string
    roomFloor?: IntFilter<"Entry"> | number
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    tack?: BoolFilter<"Entry"> | boolean
  }

  export type EntryOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    roomDetail?: SortOrder
    roomPrice?: SortOrder
    roomImage1?: SortOrder
    roomImage2?: SortOrder
    roomImage3?: SortOrder
    roomFloor?: SortOrder
    createdAt?: SortOrder
    tack?: SortOrder
  }

  export type EntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    roomNumber?: StringFilter<"Entry"> | string
    roomType?: StringFilter<"Entry"> | string
    roomFor?: StringFilter<"Entry"> | string
    roomDetail?: StringFilter<"Entry"> | string
    roomPrice?: FloatFilter<"Entry"> | number
    roomImage1?: StringFilter<"Entry"> | string
    roomImage2?: StringFilter<"Entry"> | string
    roomImage3?: StringFilter<"Entry"> | string
    roomFloor?: IntFilter<"Entry"> | number
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    tack?: BoolFilter<"Entry"> | boolean
  }, "id">

  export type EntryOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    roomDetail?: SortOrder
    roomPrice?: SortOrder
    roomImage1?: SortOrder
    roomImage2?: SortOrder
    roomImage3?: SortOrder
    roomFloor?: SortOrder
    createdAt?: SortOrder
    tack?: SortOrder
    _count?: EntryCountOrderByAggregateInput
    _avg?: EntryAvgOrderByAggregateInput
    _max?: EntryMaxOrderByAggregateInput
    _min?: EntryMinOrderByAggregateInput
    _sum?: EntrySumOrderByAggregateInput
  }

  export type EntryScalarWhereWithAggregatesInput = {
    AND?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    OR?: EntryScalarWhereWithAggregatesInput[]
    NOT?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entry"> | number
    roomNumber?: StringWithAggregatesFilter<"Entry"> | string
    roomType?: StringWithAggregatesFilter<"Entry"> | string
    roomFor?: StringWithAggregatesFilter<"Entry"> | string
    roomDetail?: StringWithAggregatesFilter<"Entry"> | string
    roomPrice?: FloatWithAggregatesFilter<"Entry"> | number
    roomImage1?: StringWithAggregatesFilter<"Entry"> | string
    roomImage2?: StringWithAggregatesFilter<"Entry"> | string
    roomImage3?: StringWithAggregatesFilter<"Entry"> | string
    roomFloor?: IntWithAggregatesFilter<"Entry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
    tack?: BoolWithAggregatesFilter<"Entry"> | boolean
  }

  export type ProfileadminWhereInput = {
    AND?: ProfileadminWhereInput | ProfileadminWhereInput[]
    OR?: ProfileadminWhereInput[]
    NOT?: ProfileadminWhereInput | ProfileadminWhereInput[]
    id?: IntFilter<"Profileadmin"> | number
    name?: StringFilter<"Profileadmin"> | string
    email?: StringFilter<"Profileadmin"> | string
    phone?: StringFilter<"Profileadmin"> | string
    password?: StringFilter<"Profileadmin"> | string
    image?: StringFilter<"Profileadmin"> | string
    auth?: BoolFilter<"Profileadmin"> | boolean
  }

  export type ProfileadminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    image?: SortOrder
    auth?: SortOrder
  }

  export type ProfileadminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ProfileadminWhereInput | ProfileadminWhereInput[]
    OR?: ProfileadminWhereInput[]
    NOT?: ProfileadminWhereInput | ProfileadminWhereInput[]
    name?: StringFilter<"Profileadmin"> | string
    phone?: StringFilter<"Profileadmin"> | string
    password?: StringFilter<"Profileadmin"> | string
    image?: StringFilter<"Profileadmin"> | string
    auth?: BoolFilter<"Profileadmin"> | boolean
  }, "id" | "email">

  export type ProfileadminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    image?: SortOrder
    auth?: SortOrder
    _count?: ProfileadminCountOrderByAggregateInput
    _avg?: ProfileadminAvgOrderByAggregateInput
    _max?: ProfileadminMaxOrderByAggregateInput
    _min?: ProfileadminMinOrderByAggregateInput
    _sum?: ProfileadminSumOrderByAggregateInput
  }

  export type ProfileadminScalarWhereWithAggregatesInput = {
    AND?: ProfileadminScalarWhereWithAggregatesInput | ProfileadminScalarWhereWithAggregatesInput[]
    OR?: ProfileadminScalarWhereWithAggregatesInput[]
    NOT?: ProfileadminScalarWhereWithAggregatesInput | ProfileadminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profileadmin"> | number
    name?: StringWithAggregatesFilter<"Profileadmin"> | string
    email?: StringWithAggregatesFilter<"Profileadmin"> | string
    phone?: StringWithAggregatesFilter<"Profileadmin"> | string
    password?: StringWithAggregatesFilter<"Profileadmin"> | string
    image?: StringWithAggregatesFilter<"Profileadmin"> | string
    auth?: BoolWithAggregatesFilter<"Profileadmin"> | boolean
  }

  export type custemerWhereInput = {
    AND?: custemerWhereInput | custemerWhereInput[]
    OR?: custemerWhereInput[]
    NOT?: custemerWhereInput | custemerWhereInput[]
    id?: StringFilter<"custemer"> | string
    fName?: StringFilter<"custemer"> | string
    email?: StringFilter<"custemer"> | string
    address?: StringFilter<"custemer"> | string
    coutery?: StringFilter<"custemer"> | string
    numbers?: StringFilter<"custemer"> | string
    numFamily?: StringFilter<"custemer"> | string
    rNumber?: StringFilter<"custemer"> | string
    checkIn?: StringFilter<"custemer"> | string
    checkOut?: StringFilter<"custemer"> | string
    access?: BoolFilter<"custemer"> | boolean
    chatMessage?: ChatMessageListRelationFilter
  }

  export type custemerOrderByWithRelationInput = {
    id?: SortOrder
    fName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coutery?: SortOrder
    numbers?: SortOrder
    numFamily?: SortOrder
    rNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    access?: SortOrder
    chatMessage?: chatMessageOrderByRelationAggregateInput
  }

  export type custemerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: custemerWhereInput | custemerWhereInput[]
    OR?: custemerWhereInput[]
    NOT?: custemerWhereInput | custemerWhereInput[]
    fName?: StringFilter<"custemer"> | string
    email?: StringFilter<"custemer"> | string
    address?: StringFilter<"custemer"> | string
    coutery?: StringFilter<"custemer"> | string
    numbers?: StringFilter<"custemer"> | string
    numFamily?: StringFilter<"custemer"> | string
    rNumber?: StringFilter<"custemer"> | string
    checkIn?: StringFilter<"custemer"> | string
    checkOut?: StringFilter<"custemer"> | string
    access?: BoolFilter<"custemer"> | boolean
    chatMessage?: ChatMessageListRelationFilter
  }, "id">

  export type custemerOrderByWithAggregationInput = {
    id?: SortOrder
    fName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coutery?: SortOrder
    numbers?: SortOrder
    numFamily?: SortOrder
    rNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    access?: SortOrder
    _count?: custemerCountOrderByAggregateInput
    _max?: custemerMaxOrderByAggregateInput
    _min?: custemerMinOrderByAggregateInput
  }

  export type custemerScalarWhereWithAggregatesInput = {
    AND?: custemerScalarWhereWithAggregatesInput | custemerScalarWhereWithAggregatesInput[]
    OR?: custemerScalarWhereWithAggregatesInput[]
    NOT?: custemerScalarWhereWithAggregatesInput | custemerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"custemer"> | string
    fName?: StringWithAggregatesFilter<"custemer"> | string
    email?: StringWithAggregatesFilter<"custemer"> | string
    address?: StringWithAggregatesFilter<"custemer"> | string
    coutery?: StringWithAggregatesFilter<"custemer"> | string
    numbers?: StringWithAggregatesFilter<"custemer"> | string
    numFamily?: StringWithAggregatesFilter<"custemer"> | string
    rNumber?: StringWithAggregatesFilter<"custemer"> | string
    checkIn?: StringWithAggregatesFilter<"custemer"> | string
    checkOut?: StringWithAggregatesFilter<"custemer"> | string
    access?: BoolWithAggregatesFilter<"custemer"> | boolean
  }

  export type chatMessageWhereInput = {
    AND?: chatMessageWhereInput | chatMessageWhereInput[]
    OR?: chatMessageWhereInput[]
    NOT?: chatMessageWhereInput | chatMessageWhereInput[]
    id?: StringFilter<"chatMessage"> | string
    content?: StringFilter<"chatMessage"> | string
    employId?: StringFilter<"chatMessage"> | string
    custemerId?: StringNullableFilter<"chatMessage"> | string | null
    from?: StringFilter<"chatMessage"> | string
    times?: StringFilter<"chatMessage"> | string
    dates?: StringFilter<"chatMessage"> | string
    custemer?: XOR<CustemerNullableScalarRelationFilter, custemerWhereInput> | null
  }

  export type chatMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    employId?: SortOrder
    custemerId?: SortOrderInput | SortOrder
    from?: SortOrder
    times?: SortOrder
    dates?: SortOrder
    custemer?: custemerOrderByWithRelationInput
  }

  export type chatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: chatMessageWhereInput | chatMessageWhereInput[]
    OR?: chatMessageWhereInput[]
    NOT?: chatMessageWhereInput | chatMessageWhereInput[]
    content?: StringFilter<"chatMessage"> | string
    employId?: StringFilter<"chatMessage"> | string
    custemerId?: StringNullableFilter<"chatMessage"> | string | null
    from?: StringFilter<"chatMessage"> | string
    times?: StringFilter<"chatMessage"> | string
    dates?: StringFilter<"chatMessage"> | string
    custemer?: XOR<CustemerNullableScalarRelationFilter, custemerWhereInput> | null
  }, "id">

  export type chatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    employId?: SortOrder
    custemerId?: SortOrderInput | SortOrder
    from?: SortOrder
    times?: SortOrder
    dates?: SortOrder
    _count?: chatMessageCountOrderByAggregateInput
    _max?: chatMessageMaxOrderByAggregateInput
    _min?: chatMessageMinOrderByAggregateInput
  }

  export type chatMessageScalarWhereWithAggregatesInput = {
    AND?: chatMessageScalarWhereWithAggregatesInput | chatMessageScalarWhereWithAggregatesInput[]
    OR?: chatMessageScalarWhereWithAggregatesInput[]
    NOT?: chatMessageScalarWhereWithAggregatesInput | chatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"chatMessage"> | string
    content?: StringWithAggregatesFilter<"chatMessage"> | string
    employId?: StringWithAggregatesFilter<"chatMessage"> | string
    custemerId?: StringNullableWithAggregatesFilter<"chatMessage"> | string | null
    from?: StringWithAggregatesFilter<"chatMessage"> | string
    times?: StringWithAggregatesFilter<"chatMessage"> | string
    dates?: StringWithAggregatesFilter<"chatMessage"> | string
  }

  export type blogsWhereInput = {
    AND?: blogsWhereInput | blogsWhereInput[]
    OR?: blogsWhereInput[]
    NOT?: blogsWhereInput | blogsWhereInput[]
    id?: IntFilter<"blogs"> | number
    image?: StringFilter<"blogs"> | string
    titel?: StringFilter<"blogs"> | string
    detail?: StringFilter<"blogs"> | string
    date?: StringFilter<"blogs"> | string
  }

  export type blogsOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    titel?: SortOrder
    detail?: SortOrder
    date?: SortOrder
  }

  export type blogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: blogsWhereInput | blogsWhereInput[]
    OR?: blogsWhereInput[]
    NOT?: blogsWhereInput | blogsWhereInput[]
    image?: StringFilter<"blogs"> | string
    titel?: StringFilter<"blogs"> | string
    detail?: StringFilter<"blogs"> | string
    date?: StringFilter<"blogs"> | string
  }, "id">

  export type blogsOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    titel?: SortOrder
    detail?: SortOrder
    date?: SortOrder
    _count?: blogsCountOrderByAggregateInput
    _avg?: blogsAvgOrderByAggregateInput
    _max?: blogsMaxOrderByAggregateInput
    _min?: blogsMinOrderByAggregateInput
    _sum?: blogsSumOrderByAggregateInput
  }

  export type blogsScalarWhereWithAggregatesInput = {
    AND?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[]
    OR?: blogsScalarWhereWithAggregatesInput[]
    NOT?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"blogs"> | number
    image?: StringWithAggregatesFilter<"blogs"> | string
    titel?: StringWithAggregatesFilter<"blogs"> | string
    detail?: StringWithAggregatesFilter<"blogs"> | string
    date?: StringWithAggregatesFilter<"blogs"> | string
  }

  export type EntryCreateInput = {
    id?: number
    roomNumber: string
    roomType: string
    roomFor: string
    roomDetail: string
    roomPrice: number
    roomImage1: string
    roomImage2: string
    roomImage3: string
    roomFloor: number
    createdAt?: Date | string
    tack?: boolean
  }

  export type EntryUncheckedCreateInput = {
    id?: number
    roomNumber: string
    roomType: string
    roomFor: string
    roomDetail: string
    roomPrice: number
    roomImage1: string
    roomImage2: string
    roomImage3: string
    roomFloor: number
    createdAt?: Date | string
    tack?: boolean
  }

  export type EntryUpdateInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    roomFor?: StringFieldUpdateOperationsInput | string
    roomDetail?: StringFieldUpdateOperationsInput | string
    roomPrice?: FloatFieldUpdateOperationsInput | number
    roomImage1?: StringFieldUpdateOperationsInput | string
    roomImage2?: StringFieldUpdateOperationsInput | string
    roomImage3?: StringFieldUpdateOperationsInput | string
    roomFloor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tack?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    roomFor?: StringFieldUpdateOperationsInput | string
    roomDetail?: StringFieldUpdateOperationsInput | string
    roomPrice?: FloatFieldUpdateOperationsInput | number
    roomImage1?: StringFieldUpdateOperationsInput | string
    roomImage2?: StringFieldUpdateOperationsInput | string
    roomImage3?: StringFieldUpdateOperationsInput | string
    roomFloor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tack?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EntryCreateManyInput = {
    id?: number
    roomNumber: string
    roomType: string
    roomFor: string
    roomDetail: string
    roomPrice: number
    roomImage1: string
    roomImage2: string
    roomImage3: string
    roomFloor: number
    createdAt?: Date | string
    tack?: boolean
  }

  export type EntryUpdateManyMutationInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    roomFor?: StringFieldUpdateOperationsInput | string
    roomDetail?: StringFieldUpdateOperationsInput | string
    roomPrice?: FloatFieldUpdateOperationsInput | number
    roomImage1?: StringFieldUpdateOperationsInput | string
    roomImage2?: StringFieldUpdateOperationsInput | string
    roomImage3?: StringFieldUpdateOperationsInput | string
    roomFloor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tack?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    roomFor?: StringFieldUpdateOperationsInput | string
    roomDetail?: StringFieldUpdateOperationsInput | string
    roomPrice?: FloatFieldUpdateOperationsInput | number
    roomImage1?: StringFieldUpdateOperationsInput | string
    roomImage2?: StringFieldUpdateOperationsInput | string
    roomImage3?: StringFieldUpdateOperationsInput | string
    roomFloor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tack?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfileadminCreateInput = {
    name: string
    email: string
    phone: string
    password: string
    image: string
    auth?: boolean
  }

  export type ProfileadminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    image: string
    auth?: boolean
  }

  export type ProfileadminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfileadminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfileadminCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    image: string
    auth?: boolean
  }

  export type ProfileadminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfileadminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type custemerCreateInput = {
    id?: string
    fName: string
    email: string
    address: string
    coutery: string
    numbers: string
    numFamily: string
    rNumber: string
    checkIn: string
    checkOut: string
    access?: boolean
    chatMessage?: chatMessageCreateNestedManyWithoutCustemerInput
  }

  export type custemerUncheckedCreateInput = {
    id?: string
    fName: string
    email: string
    address: string
    coutery: string
    numbers: string
    numFamily: string
    rNumber: string
    checkIn: string
    checkOut: string
    access?: boolean
    chatMessage?: chatMessageUncheckedCreateNestedManyWithoutCustemerInput
  }

  export type custemerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coutery?: StringFieldUpdateOperationsInput | string
    numbers?: StringFieldUpdateOperationsInput | string
    numFamily?: StringFieldUpdateOperationsInput | string
    rNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    access?: BoolFieldUpdateOperationsInput | boolean
    chatMessage?: chatMessageUpdateManyWithoutCustemerNestedInput
  }

  export type custemerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coutery?: StringFieldUpdateOperationsInput | string
    numbers?: StringFieldUpdateOperationsInput | string
    numFamily?: StringFieldUpdateOperationsInput | string
    rNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    access?: BoolFieldUpdateOperationsInput | boolean
    chatMessage?: chatMessageUncheckedUpdateManyWithoutCustemerNestedInput
  }

  export type custemerCreateManyInput = {
    id?: string
    fName: string
    email: string
    address: string
    coutery: string
    numbers: string
    numFamily: string
    rNumber: string
    checkIn: string
    checkOut: string
    access?: boolean
  }

  export type custemerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coutery?: StringFieldUpdateOperationsInput | string
    numbers?: StringFieldUpdateOperationsInput | string
    numFamily?: StringFieldUpdateOperationsInput | string
    rNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    access?: BoolFieldUpdateOperationsInput | boolean
  }

  export type custemerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coutery?: StringFieldUpdateOperationsInput | string
    numbers?: StringFieldUpdateOperationsInput | string
    numFamily?: StringFieldUpdateOperationsInput | string
    rNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    access?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chatMessageCreateInput = {
    id?: string
    content: string
    employId: string
    from: string
    times: string
    dates: string
    custemer?: custemerCreateNestedOneWithoutChatMessageInput
  }

  export type chatMessageUncheckedCreateInput = {
    id?: string
    content: string
    employId: string
    custemerId?: string | null
    from: string
    times: string
    dates: string
  }

  export type chatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    employId?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    times?: StringFieldUpdateOperationsInput | string
    dates?: StringFieldUpdateOperationsInput | string
    custemer?: custemerUpdateOneWithoutChatMessageNestedInput
  }

  export type chatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    employId?: StringFieldUpdateOperationsInput | string
    custemerId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    times?: StringFieldUpdateOperationsInput | string
    dates?: StringFieldUpdateOperationsInput | string
  }

  export type chatMessageCreateManyInput = {
    id?: string
    content: string
    employId: string
    custemerId?: string | null
    from: string
    times: string
    dates: string
  }

  export type chatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    employId?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    times?: StringFieldUpdateOperationsInput | string
    dates?: StringFieldUpdateOperationsInput | string
  }

  export type chatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    employId?: StringFieldUpdateOperationsInput | string
    custemerId?: NullableStringFieldUpdateOperationsInput | string | null
    from?: StringFieldUpdateOperationsInput | string
    times?: StringFieldUpdateOperationsInput | string
    dates?: StringFieldUpdateOperationsInput | string
  }

  export type blogsCreateInput = {
    image: string
    titel: string
    detail: string
    date: string
  }

  export type blogsUncheckedCreateInput = {
    id?: number
    image: string
    titel: string
    detail: string
    date: string
  }

  export type blogsUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    titel?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type blogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    titel?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type blogsCreateManyInput = {
    id?: number
    image: string
    titel: string
    detail: string
    date: string
  }

  export type blogsUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    titel?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type blogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    titel?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EntryCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    roomDetail?: SortOrder
    roomPrice?: SortOrder
    roomImage1?: SortOrder
    roomImage2?: SortOrder
    roomImage3?: SortOrder
    roomFloor?: SortOrder
    createdAt?: SortOrder
    tack?: SortOrder
  }

  export type EntryAvgOrderByAggregateInput = {
    id?: SortOrder
    roomPrice?: SortOrder
    roomFloor?: SortOrder
  }

  export type EntryMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    roomDetail?: SortOrder
    roomPrice?: SortOrder
    roomImage1?: SortOrder
    roomImage2?: SortOrder
    roomImage3?: SortOrder
    roomFloor?: SortOrder
    createdAt?: SortOrder
    tack?: SortOrder
  }

  export type EntryMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    roomDetail?: SortOrder
    roomPrice?: SortOrder
    roomImage1?: SortOrder
    roomImage2?: SortOrder
    roomImage3?: SortOrder
    roomFloor?: SortOrder
    createdAt?: SortOrder
    tack?: SortOrder
  }

  export type EntrySumOrderByAggregateInput = {
    id?: SortOrder
    roomPrice?: SortOrder
    roomFloor?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfileadminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    image?: SortOrder
    auth?: SortOrder
  }

  export type ProfileadminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfileadminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    image?: SortOrder
    auth?: SortOrder
  }

  export type ProfileadminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    image?: SortOrder
    auth?: SortOrder
  }

  export type ProfileadminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMessageListRelationFilter = {
    every?: chatMessageWhereInput
    some?: chatMessageWhereInput
    none?: chatMessageWhereInput
  }

  export type chatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type custemerCountOrderByAggregateInput = {
    id?: SortOrder
    fName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coutery?: SortOrder
    numbers?: SortOrder
    numFamily?: SortOrder
    rNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    access?: SortOrder
  }

  export type custemerMaxOrderByAggregateInput = {
    id?: SortOrder
    fName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coutery?: SortOrder
    numbers?: SortOrder
    numFamily?: SortOrder
    rNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    access?: SortOrder
  }

  export type custemerMinOrderByAggregateInput = {
    id?: SortOrder
    fName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    coutery?: SortOrder
    numbers?: SortOrder
    numFamily?: SortOrder
    rNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    access?: SortOrder
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

  export type CustemerNullableScalarRelationFilter = {
    is?: custemerWhereInput | null
    isNot?: custemerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type chatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    employId?: SortOrder
    custemerId?: SortOrder
    from?: SortOrder
    times?: SortOrder
    dates?: SortOrder
  }

  export type chatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    employId?: SortOrder
    custemerId?: SortOrder
    from?: SortOrder
    times?: SortOrder
    dates?: SortOrder
  }

  export type chatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    employId?: SortOrder
    custemerId?: SortOrder
    from?: SortOrder
    times?: SortOrder
    dates?: SortOrder
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

  export type blogsCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    titel?: SortOrder
    detail?: SortOrder
    date?: SortOrder
  }

  export type blogsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type blogsMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    titel?: SortOrder
    detail?: SortOrder
    date?: SortOrder
  }

  export type blogsMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    titel?: SortOrder
    detail?: SortOrder
    date?: SortOrder
  }

  export type blogsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type chatMessageCreateNestedManyWithoutCustemerInput = {
    create?: XOR<chatMessageCreateWithoutCustemerInput, chatMessageUncheckedCreateWithoutCustemerInput> | chatMessageCreateWithoutCustemerInput[] | chatMessageUncheckedCreateWithoutCustemerInput[]
    connectOrCreate?: chatMessageCreateOrConnectWithoutCustemerInput | chatMessageCreateOrConnectWithoutCustemerInput[]
    createMany?: chatMessageCreateManyCustemerInputEnvelope
    connect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
  }

  export type chatMessageUncheckedCreateNestedManyWithoutCustemerInput = {
    create?: XOR<chatMessageCreateWithoutCustemerInput, chatMessageUncheckedCreateWithoutCustemerInput> | chatMessageCreateWithoutCustemerInput[] | chatMessageUncheckedCreateWithoutCustemerInput[]
    connectOrCreate?: chatMessageCreateOrConnectWithoutCustemerInput | chatMessageCreateOrConnectWithoutCustemerInput[]
    createMany?: chatMessageCreateManyCustemerInputEnvelope
    connect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
  }

  export type chatMessageUpdateManyWithoutCustemerNestedInput = {
    create?: XOR<chatMessageCreateWithoutCustemerInput, chatMessageUncheckedCreateWithoutCustemerInput> | chatMessageCreateWithoutCustemerInput[] | chatMessageUncheckedCreateWithoutCustemerInput[]
    connectOrCreate?: chatMessageCreateOrConnectWithoutCustemerInput | chatMessageCreateOrConnectWithoutCustemerInput[]
    upsert?: chatMessageUpsertWithWhereUniqueWithoutCustemerInput | chatMessageUpsertWithWhereUniqueWithoutCustemerInput[]
    createMany?: chatMessageCreateManyCustemerInputEnvelope
    set?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    disconnect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    delete?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    connect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    update?: chatMessageUpdateWithWhereUniqueWithoutCustemerInput | chatMessageUpdateWithWhereUniqueWithoutCustemerInput[]
    updateMany?: chatMessageUpdateManyWithWhereWithoutCustemerInput | chatMessageUpdateManyWithWhereWithoutCustemerInput[]
    deleteMany?: chatMessageScalarWhereInput | chatMessageScalarWhereInput[]
  }

  export type chatMessageUncheckedUpdateManyWithoutCustemerNestedInput = {
    create?: XOR<chatMessageCreateWithoutCustemerInput, chatMessageUncheckedCreateWithoutCustemerInput> | chatMessageCreateWithoutCustemerInput[] | chatMessageUncheckedCreateWithoutCustemerInput[]
    connectOrCreate?: chatMessageCreateOrConnectWithoutCustemerInput | chatMessageCreateOrConnectWithoutCustemerInput[]
    upsert?: chatMessageUpsertWithWhereUniqueWithoutCustemerInput | chatMessageUpsertWithWhereUniqueWithoutCustemerInput[]
    createMany?: chatMessageCreateManyCustemerInputEnvelope
    set?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    disconnect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    delete?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    connect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    update?: chatMessageUpdateWithWhereUniqueWithoutCustemerInput | chatMessageUpdateWithWhereUniqueWithoutCustemerInput[]
    updateMany?: chatMessageUpdateManyWithWhereWithoutCustemerInput | chatMessageUpdateManyWithWhereWithoutCustemerInput[]
    deleteMany?: chatMessageScalarWhereInput | chatMessageScalarWhereInput[]
  }

  export type custemerCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<custemerCreateWithoutChatMessageInput, custemerUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: custemerCreateOrConnectWithoutChatMessageInput
    connect?: custemerWhereUniqueInput
  }

  export type custemerUpdateOneWithoutChatMessageNestedInput = {
    create?: XOR<custemerCreateWithoutChatMessageInput, custemerUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: custemerCreateOrConnectWithoutChatMessageInput
    upsert?: custemerUpsertWithoutChatMessageInput
    disconnect?: custemerWhereInput | boolean
    delete?: custemerWhereInput | boolean
    connect?: custemerWhereUniqueInput
    update?: XOR<XOR<custemerUpdateToOneWithWhereWithoutChatMessageInput, custemerUpdateWithoutChatMessageInput>, custemerUncheckedUpdateWithoutChatMessageInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type chatMessageCreateWithoutCustemerInput = {
    id?: string
    content: string
    employId: string
    from: string
    times: string
    dates: string
  }

  export type chatMessageUncheckedCreateWithoutCustemerInput = {
    id?: string
    content: string
    employId: string
    from: string
    times: string
    dates: string
  }

  export type chatMessageCreateOrConnectWithoutCustemerInput = {
    where: chatMessageWhereUniqueInput
    create: XOR<chatMessageCreateWithoutCustemerInput, chatMessageUncheckedCreateWithoutCustemerInput>
  }

  export type chatMessageCreateManyCustemerInputEnvelope = {
    data: chatMessageCreateManyCustemerInput | chatMessageCreateManyCustemerInput[]
    skipDuplicates?: boolean
  }

  export type chatMessageUpsertWithWhereUniqueWithoutCustemerInput = {
    where: chatMessageWhereUniqueInput
    update: XOR<chatMessageUpdateWithoutCustemerInput, chatMessageUncheckedUpdateWithoutCustemerInput>
    create: XOR<chatMessageCreateWithoutCustemerInput, chatMessageUncheckedCreateWithoutCustemerInput>
  }

  export type chatMessageUpdateWithWhereUniqueWithoutCustemerInput = {
    where: chatMessageWhereUniqueInput
    data: XOR<chatMessageUpdateWithoutCustemerInput, chatMessageUncheckedUpdateWithoutCustemerInput>
  }

  export type chatMessageUpdateManyWithWhereWithoutCustemerInput = {
    where: chatMessageScalarWhereInput
    data: XOR<chatMessageUpdateManyMutationInput, chatMessageUncheckedUpdateManyWithoutCustemerInput>
  }

  export type chatMessageScalarWhereInput = {
    AND?: chatMessageScalarWhereInput | chatMessageScalarWhereInput[]
    OR?: chatMessageScalarWhereInput[]
    NOT?: chatMessageScalarWhereInput | chatMessageScalarWhereInput[]
    id?: StringFilter<"chatMessage"> | string
    content?: StringFilter<"chatMessage"> | string
    employId?: StringFilter<"chatMessage"> | string
    custemerId?: StringNullableFilter<"chatMessage"> | string | null
    from?: StringFilter<"chatMessage"> | string
    times?: StringFilter<"chatMessage"> | string
    dates?: StringFilter<"chatMessage"> | string
  }

  export type custemerCreateWithoutChatMessageInput = {
    id?: string
    fName: string
    email: string
    address: string
    coutery: string
    numbers: string
    numFamily: string
    rNumber: string
    checkIn: string
    checkOut: string
    access?: boolean
  }

  export type custemerUncheckedCreateWithoutChatMessageInput = {
    id?: string
    fName: string
    email: string
    address: string
    coutery: string
    numbers: string
    numFamily: string
    rNumber: string
    checkIn: string
    checkOut: string
    access?: boolean
  }

  export type custemerCreateOrConnectWithoutChatMessageInput = {
    where: custemerWhereUniqueInput
    create: XOR<custemerCreateWithoutChatMessageInput, custemerUncheckedCreateWithoutChatMessageInput>
  }

  export type custemerUpsertWithoutChatMessageInput = {
    update: XOR<custemerUpdateWithoutChatMessageInput, custemerUncheckedUpdateWithoutChatMessageInput>
    create: XOR<custemerCreateWithoutChatMessageInput, custemerUncheckedCreateWithoutChatMessageInput>
    where?: custemerWhereInput
  }

  export type custemerUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: custemerWhereInput
    data: XOR<custemerUpdateWithoutChatMessageInput, custemerUncheckedUpdateWithoutChatMessageInput>
  }

  export type custemerUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coutery?: StringFieldUpdateOperationsInput | string
    numbers?: StringFieldUpdateOperationsInput | string
    numFamily?: StringFieldUpdateOperationsInput | string
    rNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    access?: BoolFieldUpdateOperationsInput | boolean
  }

  export type custemerUncheckedUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    coutery?: StringFieldUpdateOperationsInput | string
    numbers?: StringFieldUpdateOperationsInput | string
    numFamily?: StringFieldUpdateOperationsInput | string
    rNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: StringFieldUpdateOperationsInput | string
    checkOut?: StringFieldUpdateOperationsInput | string
    access?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chatMessageCreateManyCustemerInput = {
    id?: string
    content: string
    employId: string
    from: string
    times: string
    dates: string
  }

  export type chatMessageUpdateWithoutCustemerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    employId?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    times?: StringFieldUpdateOperationsInput | string
    dates?: StringFieldUpdateOperationsInput | string
  }

  export type chatMessageUncheckedUpdateWithoutCustemerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    employId?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    times?: StringFieldUpdateOperationsInput | string
    dates?: StringFieldUpdateOperationsInput | string
  }

  export type chatMessageUncheckedUpdateManyWithoutCustemerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    employId?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    times?: StringFieldUpdateOperationsInput | string
    dates?: StringFieldUpdateOperationsInput | string
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